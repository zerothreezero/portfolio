'use strict';
const PortfolioArchive=(()=>{
  const empty=()=>({version:1,revision:'initial',artworks:{},manualArtworks:[],collections:[],settings:{}});
  const cacheName='030-metadata-v2-'+location.pathname.replace(/index\.html$/,'');
  void globalThis.caches?.delete(cacheName.replace('v2-','v1-')).catch(()=>{});
  const localImages=new Map();
  const imagePath=/^assets\/uploads\/[a-f0-9]{64}\.webp$/;
  async function cached(key,value){
    try{
      const cache=await caches.open(cacheName);
      const url=new URL('./data/'+key,location.href);
      if(value!==undefined)await cache.put(url,Response.json(value));
      else return await (await cache.match(url))?.json();
    }catch{/* Storage can be unavailable in private browsing. */}
  }
  async function readContent(url='./data/portfolio-content.json'){
    const response=await fetch(url,{cache:'no-store',signal:AbortSignal.timeout(6000)});
    if(!response.ok)throw Error('Content HTTP '+response.status);
    const data=await response.json();
    if(data?.version!==1||typeof data.revision!=='string'||!data.artworks||typeof data.artworks!=='object'||Array.isArray(data.artworks)||!Array.isArray(data.manualArtworks)||!Array.isArray(data.collections))throw Error('Unsupported archive');
    return data;
  }
  function manualBase(art){
    const media=Array.isArray(art?.media)?art.media.filter(m=>imagePath.test(m?.path)):[];
    const images=media.map(m=>localImages.get(m.path)||m.path);
    if(!images.length)return null;
    return {id:art.id,title:'Untitled',date:'',dateRank:0,postedAt:'',description:'',tags:[],software:[],work:null,
      imageKeys:media.map(m=>m.path),images,thumbnails:images,alts:images.map(()=>''),ratios:media.map(m=>m.width/m.height),ratio:media[0].width/media[0].height};
  }
  function merge(base,override={}){
    const item={...base,...override};delete item.palette;
    const order=[...new Set([...(override.order||[]),...base.imageKeys])].map(key=>base.imageKeys.indexOf(key)).filter(i=>i>=0);
    for(const key of ['images','thumbnails','alts','imageKeys'])item[key]=order.map(i=>base[key][i]);
    if(Object.hasOwn(override,'alt'))item.alts=item.images.map(()=>override.alt);
    const cover=Math.max(0,item.imageKeys.indexOf(override.cover));
    item.thumb=item.thumbnails[cover];item.ratio=base.ratios?.[order[cover]]||base.ratio||1;
    if(imagePath.test(override.coverMedia?.path)){
      item.thumb=localImages.get(override.coverMedia.path)||override.coverMedia.path;
      item.ratio=override.coverMedia.width/override.coverMedia.height;
    }
    item.coverIndex=cover;item.dateRank=Date.parse(item.date||base.postedAt)||0;
    if(Object.hasOwn(override,'drawingMinutes')||Object.hasOwn(override,'strokes')){
      item.work={hours:null,minutes:null,strokes:null,...base.work};
      if(override.drawingMinutes!==undefined){item.work.hours=Math.floor(override.drawingMinutes/60);item.work.minutes=override.drawingMinutes%60;}
      if(override.strokes!==undefined)item.work.strokes=override.strokes;
    }
    item.searchText=[item.title,item.description,item.date,...item.alts,...item.tags.map(t=>'#'+t),...item.software].join(' ').toLowerCase();
    return item;
  }
  return {empty,readContent,cached,clear:()=>caches.delete(cacheName),merge,manualBase,localImages};
})();
