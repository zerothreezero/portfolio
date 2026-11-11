export const ADMIN='thin4rtist@gmail.com';
export class Failure extends Error {
  constructor(status,message){super(message);this.status=status;}
}
export function ensure(ok,status,message){if(!ok)throw new Failure(status,message);}
const enc=new TextEncoder();
const b64=bytes=>btoa(String.fromCharCode(...new Uint8Array(bytes))).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');
const unbase=s=>Uint8Array.from(atob(s.replaceAll('-','+').replaceAll('_','/')),c=>c.charCodeAt(0));
const decode=s=>JSON.parse(new TextDecoder().decode(unbase(s)));
let keys=[],refreshAt=0;
async function googleKey(kid){
  if(Date.now()>=refreshAt){
    const response=await fetch('https://www.googleapis.com/oauth2/v3/certs');
    ensure(response.ok,503,'Google keys unavailable');
    keys=(await response.json()).keys;
    refreshAt=Date.now()+1000*Math.min(3600,Number(response.headers.get('cache-control')?.match(/max-age=(\d+)/)?.[1]||300));
  }
  const jwk=keys.find(k=>k.kid===kid&&k.kty==='RSA'&&k.alg==='RS256');
  ensure(jwk,401,'Unknown Google key');
  return crypto.subtle.importKey('jwk',jwk,{name:'RSASSA-PKCS1-v1_5',hash:'SHA-256'},false,['verify']);
}
export async function verifyGoogle(token,env){
  const invalid='Invalid Google credential';
  try{
    const [h,p,s,...extra]=String(token).split('.');
    const header=decode(h),claims=decode(p);
    ensure(!extra.length&&header.alg==='RS256'&&typeof header.kid==='string',401,invalid);
    const key=await googleKey(header.kid);
    ensure(await crypto.subtle.verify('RSASSA-PKCS1-v1_5',key,unbase(s),enc.encode(h+'.'+p)),401,invalid);
    ensure(env.GOOGLE_CLIENT_ID&&claims.aud===env.GOOGLE_CLIENT_ID&&['accounts.google.com','https://accounts.google.com'].includes(claims.iss)
      &&Number.isSafeInteger(claims.exp)&&claims.exp>Date.now()/1000&&claims.email_verified===true&&typeof claims.sub==='string'&&claims.sub.length>0,401,invalid);
    return claims;
  }catch(e){if(e instanceof Failure)throw e;throw new Failure(401,invalid);}
}
function hmac(env){
  ensure(env.SESSION_SECRET?.length>=32,503,'Session signing unavailable');
  return crypto.subtle.importKey('raw',enc.encode(env.SESSION_SECRET),{name:'HMAC',hash:'SHA-256'},false,['sign','verify']);
}
async function registry(env,action,id,expires){
  const object=env.SESSIONS.get(env.SESSIONS.idFromName('admin'));
  const response=await object.fetch('https://session.internal/'+action,{method:'POST',body:JSON.stringify({id,expires})});
  return response.ok;
}
export class SessionRegistry {
  constructor(){this.sessions=new Map();}
  async fetch(request){
    const {id,expires}=await request.json();
    for(const [key,expiry] of this.sessions)if(expiry<=Date.now())this.sessions.delete(key);
    const action=new URL(request.url).pathname;
    if(action==='/open')this.sessions.set(id,expires);
    if(action==='/close')this.sessions.delete(id);
    // Keep the volatile registry awake only while a session is live.
    // A restart invalidates its sessions. Nothing is written to storage.
    clearTimeout(this.sleepTimer);
    if(this.sessions.size)this.sleepTimer=setTimeout(()=>this.sessions.clear(),
      Math.max(1,Math.max(...this.sessions.values())-Date.now()));
    this.sleepTimer?.unref?.();
    return new Response(null,{status:action==='/check'&&!this.sessions.has(id)?401:204});
  }
}
export async function login(credential,env){
  const c=await verifyGoogle(credential,env);
  if(c.email!==ADMIN||(env.ADMIN_SUB&&env.ADMIN_SUB!==c.sub))return {admin:false};
  const expires=Math.min(Date.now()+15*60000,c.exp*1000);
  const claims={id:crypto.randomUUID(),email:ADMIN,sub:c.sub,expires};
  const payload=b64(enc.encode(JSON.stringify(claims)));
  const signature=b64(await crypto.subtle.sign('HMAC',await hmac(env),enc.encode(payload)));
  ensure(await registry(env,'open',claims.id,expires),503,'Session unavailable');
  return {admin:true,subject:c.sub,session:payload+'.'+signature,expires};
}
export async function authorize(request,env,logout=false){
  try{
    const parts=request.headers.get('authorization')?.match(/^Bearer ([\w-]+)\.([\w-]+)$/);
    ensure(parts&&await crypto.subtle.verify('HMAC',await hmac(env),unbase(parts[2]),enc.encode(parts[1])),401,'Sign in again');
    const c=decode(parts[1]);
    ensure(c.expires>Date.now()&&c.email===ADMIN&&(!env.ADMIN_SUB||env.ADMIN_SUB===c.sub)&&await registry(env,'check',c.id),401,'Session expired');
    if(logout)await registry(env,'close',c.id);
  }catch(e){if(e instanceof Failure)throw e;throw new Failure(401,'Sign in again');}
}
