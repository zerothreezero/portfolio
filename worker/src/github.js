import {ensure,Failure} from './auth.js';
import {applyChange,validateUploads} from './validation.js';
const repo='https://api.github.com/repos/zerothreezero/portfolio';
const file='data/portfolio-content.json';
async function api(env,path,method='GET',body){
  ensure(env.GITHUB_TOKEN,503,'Repository credentials unavailable');
  const response=await fetch(repo+path,{method,headers:{Authorization:'Bearer '+env.GITHUB_TOKEN,Accept:'application/vnd.github+json','User-Agent':'030-portfolio','Content-Type':'application/json','X-GitHub-Api-Version':'2022-11-28'},body:body&&JSON.stringify(body)});
  if(!response.ok){
    if((response.status===409||response.status===422)&&path==='/git/refs/heads/main')throw new Failure(409,'Branch changed. Reload before saving.');
    throw new Failure(502,'GitHub returned HTTP '+response.status);
  }
  return response.json();
}
export async function readContent(env,ref='main'){
  const doc=await api(env,'/contents/'+file+'?ref='+ref);
  const content=JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(doc.content),c=>c.charCodeAt(0))));
  ensure(content.version===1,409,'Unsupported content version');
  return {content,sha:doc.sha};
}
export async function commit(env,input){
  const head=(await api(env,'/git/ref/heads/main')).object.sha;
  const base=await readContent(env,head);
  ensure(base.sha===input.sha,409,'Content changed. Reload before saving.');
  const uploads=await validateUploads(input.uploads??[]);
  const content=applyChange(base.content,input.change,uploads);
  const parent=await api(env,'/git/commits/'+head);
  const tree=[];
  for(const upload of uploads){
    const blob=await api(env,'/git/blobs','POST',{content:upload.base64,encoding:'base64'});
    tree.push({path:upload.path,mode:'100644',type:'blob',sha:blob.sha});
  }
  const json=JSON.stringify(content,null,2)+'\n';
  tree.push({path:file,mode:'100644',type:'blob',content:json});
  const nextTree=await api(env,'/git/trees','POST',{base_tree:parent.tree.sha,tree});
  const next=await api(env,'/git/commits','POST',{message:'Update portfolio content',tree:nextTree.sha,parents:[head]});
  await api(env,'/git/refs/heads/main','PATCH',{sha:next.sha,force:false});
  const bytes=new TextEncoder().encode(json);
  const prefix=new TextEncoder().encode('blob '+bytes.length+'\0');
  const payload=new Uint8Array(prefix.length+bytes.length);payload.set(prefix);payload.set(bytes,prefix.length);
  const sha=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-1',payload)),v=>v.toString(16).padStart(2,'0')).join('');
  return {content,sha,commit:next.sha};
}
