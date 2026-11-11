import {authorize,login,ensure,Failure} from './auth.js';
import {readContent,commit} from './github.js';
import {thumbnail} from './thumbnail.js';
export {SessionRegistry} from './auth.js';

async function json(request,limit){
  ensure(request.headers.get('content-type')?.split(';')[0]==='application/json',415,'Expected JSON');
  ensure(request.body&&Number(request.headers.get('content-length')||0)<=limit,413,'Request too large');
  const reader=request.body.getReader(),chunks=[];
  let size=0;
  for(;;){
    const {done,value}=await reader.read();if(done)break;
    size+=value.length;
    if(size>limit){await reader.cancel();throw new Failure(413,'Request too large');}
    chunks.push(value);
  }
  try{return JSON.parse(await new Blob(chunks).text());}catch{throw new Failure(400,'Invalid JSON');}
}
export default {
  async fetch(request,env){
    const origin=request.headers.get('Origin');
    const headers={'Cache-Control':'no-store','Vary':'Origin','X-Content-Type-Options':'nosniff'};
    try{
      const endpoint=new URL(request.url);
      ensure(endpoint.protocol==='https:'||['localhost','127.0.0.1','[::1]'].includes(endpoint.hostname),403,'HTTPS required');
      ensure(origin&&String(env.ALLOWED_ORIGINS||'').split(',').map(x=>x.trim()).includes(origin),403,'Origin not allowed');
      headers['Access-Control-Allow-Origin']=origin;
      headers['Access-Control-Allow-Headers']='authorization, content-type';
      headers['Access-Control-Allow-Methods']='GET, POST, OPTIONS';
      if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
      const path=endpoint.pathname;
      const bucket=path==='/thumbnail'?'color:':'admin:';
      ensure((await env.LIMITER.limit({key:bucket+(request.headers.get('CF-Connecting-IP')||'local')})).success,429,'Too many requests');
      if(request.method==='GET'&&path==='/thumbnail')return await thumbnail(endpoint.searchParams.get('cid'),headers);
      let result;
      if(request.method==='POST'&&path==='/login')result=await login((await json(request,18000)).credential,env);
      else{
        await authorize(request,env,path==='/logout'&&request.method==='POST');
        if(path==='/logout'&&request.method==='POST')result={ok:true};
        else if(path==='/content'&&request.method==='GET')result=await readContent(env);
        else if(path==='/save'&&request.method==='POST')result=await commit(env,await json(request,6*1024*1024));
        else throw new Failure(404,'Unknown operation');
      }
      return Response.json(result,{headers});
    }catch(e){return Response.json({error:e instanceof Failure?e.message:'Service unavailable'},{status:e instanceof Failure?e.status:503,headers});}
  }
};
