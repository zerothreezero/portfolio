// Local public-site preview. Secrets and Worker source are outside its routes.
import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath,pathToFileURL} from 'node:url';

const root=new URL('../',import.meta.url);
const mime={html:'text/html',js:'text/javascript',css:'text/css',json:'application/json',webp:'image/webp'};
export function siteServer(){
  return createServer(async(req,res)=>{
    const url=new URL(req.url,'http://localhost');
    const path=url.pathname==='/'?'index.html':url.pathname.slice(1);
    if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405).end();return;}
    if(!/^(index\.html|assets\/(js\/[\w-]+\.js|css\/[\w-]+\.css|uploads\/[a-f0-9]{64}\.webp)|data\/portfolio-content\.json)$/.test(path)){res.writeHead(404).end();return;}
    try{
      const bytes=await readFile(fileURLToPath(new URL(path,root)));
      res.writeHead(200,{'Content-Type':mime[path.split('.').pop()],'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
      res.end(req.method==='HEAD'?undefined:bytes);
    }catch{res.writeHead(404).end();}
  });
}
if(process.argv[1]&&pathToFileURL(process.argv[1]).href===import.meta.url){
  const server=siteServer();
  server.listen(Number(process.env.PORT||8000),'127.0.0.1',()=>console.log('http://localhost:'+server.address().port+'/'));
}
