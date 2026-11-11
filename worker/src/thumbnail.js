import {ensure} from './auth.js';

// This reader accepts only a base32 CID and fixes both the DID and the upstream endpoint.
const prefix='https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:peerdka6xgmy6dglaswqrw6b/';
export async function thumbnail(cid,headers){
  ensure(typeof cid==='string'&&/^baf[a-z2-7]{32,120}$/.test(cid),400,'Invalid image ID');
  const response=await fetch(prefix+cid,{redirect:'error',signal:AbortSignal.timeout(6000)});
  ensure(response.ok,404,'Thumbnail unavailable');
  const type=response.headers.get('Content-Type')?.split(';')[0];
  ensure(['image/jpeg','image/webp','image/png'].includes(type),415,'Unsupported thumbnail');
  const reader=response.body?.getReader(),chunks=[];let size=0;
  ensure(reader,502,'Empty thumbnail');
  for(;;){
    const {done,value}=await reader.read();if(done)break;
    size+=value.length;
    if(size>1048576){await reader.cancel();ensure(false,413,'Thumbnail too large');}
    chunks.push(value);
  }
  return new Response(new Blob(chunks),{headers:{...headers,'Cache-Control':'public, max-age=86400','Content-Type':type}});
}
