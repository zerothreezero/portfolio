import {ensure} from './auth.js';
const check=(ok,message)=>ensure(ok,400,message);
const record=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
const str=(x,n)=>typeof x==='string'&&x.length<=n;
const list=(x,n,fn)=>Array.isArray(x)&&x.length<=n&&x.every(fn);
const uuid=x=>typeof x==='string'&&/^[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}$/.test(x);
const pathOK=x=>typeof x==='string'&&/^assets\/uploads\/[a-f0-9]{64}\.webp$/.test(x);
const number=(x,max)=>Number.isSafeInteger(x)&&x>=0&&x<=max;
const image=m=>record(m)&&Object.keys(m).every(k=>['path','width','height'].includes(k))&&pathOK(m.path)&&number(m.width,4096)&&m.width>0&&number(m.height,4096)&&m.height>0;
const strings=(x,n,len)=>list(x,n,v=>str(v,len)&&v.length>0)&&new Set(x).size===x.length;
const fields={
  title:x=>str(x,300), description:x=>str(x,8000), alt:x=>str(x,2000), notes:x=>str(x,4000),
  date:x=>typeof x==='string'&&(x===''||(/^\d{4}-\d{2}-\d{2}$/.test(x)&&Number.isFinite(Date.parse(x))&&new Date(x).toISOString().startsWith(x))),
  tags:x=>strings(x,40,64), software:x=>strings(x,20,80), blocks:x=>list(x,16,v=>str(v,2000)),
  links:x=>list(x,16,l=>record(l)&&str(l.label,160)&&str(l.url,2048)&&/^https?:\/\/[^\s]+$/i.test(l.url)&&URL.canParse(l.url)),
  palette:x=>list(x,5,c=>typeof c==='string'&&/^#[a-f0-9]{6}$/i.test(c)), collectionIds:x=>list(x,32,uuid),
  featured:x=>typeof x==='boolean', hidden:x=>typeof x==='boolean', nsfw:x=>typeof x==='boolean',
  drawingMinutes:x=>number(x,1000000), strokes:x=>number(x,1000000000), featuredOrder:x=>number(x,999999),
  cover:x=>str(x,1024), coverMedia:image, order:x=>strings(x,16,1024)
};
export function applyChange(source,op,uploads){
  ensure(source?.version===1,409,'Unsupported document version');
  check(record(op),'Invalid change');
  const content=structuredClone(source);
  const allowedFiles=new Set(content.manualArtworks.flatMap(a=>a.media.map(x=>x.path)));
  for(const art of [...Object.values(content.artworks),...content.manualArtworks])if(art.coverMedia)allowedFiles.add(art.coverMedia.path);
  uploads.forEach(u=>allowedFiles.add(u.path));
  if(op.kind==='collections'){
    check(!uploads.length,'Collections cannot contain uploads');
    check(list(op.value,128,c=>record(c)&&uuid(c.id)&&str(c.name,100)&&c.name.trim()&&Object.keys(c).every(k=>k==='id'||k==='name')),'Invalid collection');
    const ids=new Set(op.value.map(c=>c.id));
    check(ids.size===op.value.length,'Duplicate collection');
    content.collections=op.value;
    for(const art of [...Object.values(content.artworks),...content.manualArtworks]){
      if(art.collectionIds)art.collectionIds=art.collectionIds.filter(id=>ids.has(id));
    }
  }else{
    check(record(op.value),'Invalid artwork');
    const manual=op.kind==='manual';
    check(manual?uuid(op.id):op.kind==='override'&&/^at:\/\/did:[a-z0-9]+:[a-zA-Z0-9._:%-]+\/app\.bsky\.feed\.post\/[a-zA-Z0-9._:~-]{1,512}$/.test(op.id),'Invalid artwork ID');
    for(const [key,value] of Object.entries(op.value)){
      if(manual&&key==='media')continue;
      check(Object.hasOwn(fields,key)&&fields[key](value),'Invalid field: '+key);
    }
    check((op.value.collectionIds||[]).every(id=>content.collections.some(c=>c.id===id)),'Unknown collection');
    if(op.value.coverMedia)check(allowedFiles.has(op.value.coverMedia.path),'Unknown cover image');
    if(manual){
      check(list(op.value.media,12,m=>image(m)&&allowedFiles.has(m.path))
        &&op.value.media.length>0&&new Set(op.value.media.map(m=>m.path)).size===op.value.media.length,'Invalid images');
      const art={...op.value,id:op.id},i=content.manualArtworks.findIndex(x=>x.id===op.id);
      const sequence=art.media.map(m=>m.path).join(',');
      check(!content.manualArtworks.some(x=>x.id!==op.id&&x.media.map(m=>m.path).join(',')===sequence),'These images are already in a manual artwork');
      if(i<0)content.manualArtworks.push(art);else content.manualArtworks[i]=art;
    }else if(Object.keys(op.value).length)content.artworks[op.id]=op.value;
    else delete content.artworks[op.id];
  }
  const mediaRows=[...(op.value?.media||[]),op.value?.coverMedia].filter(Boolean);
  const used=new Set(mediaRows.map(m=>m.path));
  check(uploads.every(u=>used.has(u.path)),'Unreferenced upload');
  for(const file of uploads){
    check(mediaRows.filter(m=>m.path===file.path).every(m=>m.width===file.width&&m.height===file.height),'Image dimensions do not match');
  }
  content.revision=crypto.randomUUID();
  check(new TextEncoder().encode(JSON.stringify(content,null,2)).length<900000,'Archive metadata limit reached');
  return content;
}
export async function validateUploads(files){
  check(Array.isArray(files)&&files.length<=13,'Too many files');
  const result=[];
  for(const file of files){
    check(record(file)&&str(file.base64,1400000)&&pathOK(file.path),'Invalid upload');
    let bytes;
    try{
      if(Uint8Array.fromBase64)bytes=Uint8Array.fromBase64(file.base64);
      else{
        const binary=atob(file.base64);bytes=new Uint8Array(binary.length);
        for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
      }
    }catch{check(false,'Invalid image data');}
    const word=(i)=>String.fromCharCode(...bytes.slice(i,i+4));
    check(bytes.length>=20&&bytes.length<=1048576&&word(0)==='RIFF'&&word(8)==='WEBP'&&['VP8 ','VP8L','VP8X'].includes(word(12))&&new DataView(bytes.buffer).getUint32(4,true)===bytes.length-8,'Expected an optimized WebP image');
    const view=new DataView(bytes.buffer);
    let width=0,height=0;
    for(let pos=12;pos<bytes.length;){
      check(pos+8<=bytes.length,'Invalid WebP chunk');
      const size=view.getUint32(pos+4,true),start=pos+8,tag=word(pos);
      check(size<=bytes.length-start,'Truncated WebP chunk');
      if(tag==='VP8 '){
        check(size>=10&&bytes[start+3]===157&&bytes[start+4]===1&&bytes[start+5]===42,'Invalid WebP frame');
        width=view.getUint16(start+6,true)&16383;height=view.getUint16(start+8,true)&16383;
      }else if(tag==='VP8L'){
        check(size>=5&&bytes[start]===47,'Invalid lossless WebP');
        const bits=view.getUint32(start+1,true);width=(bits&16383)+1;height=((bits>>>14)&16383)+1;
      }
      pos=start+size+(size%2);
    }
    check(width>0&&height>0&&Math.max(width,height)<=2048,'Invalid image dimensions');
    const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),v=>v.toString(16).padStart(2,'0')).join('');
    check(file.path==='assets/uploads/'+hash+'.webp','Image hash mismatch');
    result.push({path:file.path,base64:file.base64,width,height});
  }
  return result;
}
