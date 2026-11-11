import test from 'node:test';
import assert from 'node:assert/strict';
import worker,{SessionRegistry} from '../src/index.js';
import {applyChange,validateUploads} from '../src/validation.js';
import {thumbnail} from '../src/thumbnail.js';
import {readFile} from 'node:fs/promises';
const origin='https://zerothreezero.github.io';
const initial=JSON.parse(await readFile(new URL('../../data/portfolio-content.json',import.meta.url)));
test('image and metadata boundaries',async()=>{
  await assert.rejects(validateUploads([{path:'assets/uploads/photo.jpg',base64:'photo'}]),/Invalid upload/);
  await assert.rejects(validateUploads([{path:'assets/uploads/'+'a'.repeat(64)+'.webp',base64:'aGVsbG8='}]),/WebP/);
  await assert.rejects(thumbnail('not-a-cid',{}),/Invalid image ID/);
  const op={id:'at://did:plc:artist/app.bsky.feed.post/one',kind:'override'};
  for(const value of [{date:'2026-02-30'},{palette:[['#eeeeee']]},{hidden:1},{links:[{label:'Invalid',url:'invalid'}]}]){
    assert.throws(()=>applyChange(initial,{...op,value},[]),/Invalid field/);
  }
  const original=applyChange(initial,{...op,value:{hidden:true,featured:true}},[]);
  const reverted=applyChange(original,{...op,value:{}},[]);
  assert.ok(original.artworks[op.id].hidden);
  assert.equal(reverted.artworks[op.id],undefined);
});
test('signed Google identity, session, atomic commit, stale writes and sign-out',async t=>{
  const rsa=await crypto.subtle.generateKey({name:'RSASSA-PKCS1-v1_5',modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:'SHA-256'},true,['sign','verify']);
  const publicKey={...await crypto.subtle.exportKey('jwk',rsa.publicKey),kid:'test-key'};
  const registry=new SessionRegistry(),writes=[];
  let githubFailure=false;
  t.mock.method(globalThis,'fetch',async(url,options)=>{
    if(String(url).includes('googleapis'))return Response.json({keys:[publicKey]});
    if(githubFailure)return new Response(null,{status:503});
    const path=new URL(url).pathname.split('/portfolio/')[1];
    if(options.method!=='GET')writes.push([path,JSON.parse(options.body)]);
    if(path==='git/ref/heads/main')return Response.json({object:{sha:'base'}});
    if(path.startsWith('contents/'))return Response.json({sha:'start',content:Buffer.from(JSON.stringify(initial)).toString('base64')});
    if(path==='git/commits/base')return Response.json({tree:{sha:'oldtree'}});
    return Response.json({sha:'new'});
  });
  const env={ALLOWED_ORIGINS:origin,GOOGLE_CLIENT_ID:'client',GITHUB_TOKEN:'test',SESSION_SECRET:'x'.repeat(40),ADMIN_SUB:'account',LIMITER:{limit:async()=>({success:true})},SESSIONS:{idFromName:()=>1,get:()=>({fetch:(url,opts)=>registry.fetch(new Request(url,opts))})}};
  async function call(path,body,token,from=origin){
    return worker.fetch(new Request('https://example.org/'+path,{method:body?'POST':'GET',headers:{Origin:from,'Content-Type':'application/json',Authorization:'Bearer '+(token||'')},body:body&&JSON.stringify(body)}),env);
  }
  async function sign(extra){
    const header=Buffer.from(JSON.stringify({alg:'RS256',kid:'test-key'})).toString('base64url');
    const payload=Buffer.from(JSON.stringify({iss:'accounts.google.com',aud:'client',sub:'account',email_verified:true,email:'thin4rtist@gmail.com',exp:Math.floor(Date.now()/1000)+120,...extra})).toString('base64url');
    const text=header+'.'+payload;
    const sig=await crypto.subtle.sign('RSASSA-PKCS1-v1_5',rsa.privateKey,new TextEncoder().encode(text));
    return text+'.'+Buffer.from(sig).toString('base64url');
  }
  assert.equal((await call('save',{})).status,401);
  assert.equal((await call('content',null,null,'https://elsewhere.example')).status,403);
  for(const extra of [{aud:'other'},{exp:1},{email_verified:false},{iss:'wrong'}])assert.equal((await call('login',{credential:await sign(extra)})).status,401);
  const token=await sign({});
  assert.equal((await call('login',{credential:token.slice(0,-5)+'AAAAA'})).status,401);
  for(const extra of [{sub:'other'},{email:'guest@gmail.com'}])assert.deepEqual(await (await call('login',{credential:await sign(extra)})).json(),{admin:false});
  const {session}=await (await call('login',{credential:token})).json();assert.ok(session);
  const op={sha:'start',change:{kind:'override',id:'at://did:plc:artist/app.bsky.feed.post/one',value:{title:'Edited',description:'Caption',tags:['ink'],links:[{label:'Source',url:'https://example.org/'}]}}};
  assert.equal((await call('save',{...op,sha:'old'},session)).status,409);
  assert.equal(writes.length,0);
  githubFailure=true;assert.equal((await call('save',op,session)).status,502);githubFailure=false;
  const res=await call('save',op,session);assert.equal(res.status,200);assert.equal((await res.json()).content.artworks[op.change.id].title,'Edited');
  assert.deepEqual(writes.map(x=>x[0]),['git/trees','git/commits','git/refs/heads/main']);assert.equal(writes[2][1].force,false);
  assert.equal((await call('logout',{},session)).status,200);assert.equal((await call('content',null,session)).status,401);
});
