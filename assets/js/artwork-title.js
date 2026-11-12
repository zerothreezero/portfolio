'use strict';
function parseArtworkTitle(value){
  const text=String(value||'').trim().replace(/\.(png|jpe?g|webp)$/i,'');
  const match=/^(\d{6})(?:\s*\((\d+)\)|[_-](\d+)(?=$|\s|\s*-)|\s+(\d+)(?=$|\s*-))?(?=$|[\s:–—|-])\s*[-:–—|]?\s*(.*)$/.exec(text);
  if(!match)return null;
  const code=match[1],year=2000+Number(code.slice(0,2)),month=Number(code.slice(2,4)),day=Number(code.slice(4));
  const date=new Date(Date.UTC(year,month-1,day));
  if(date.getUTCFullYear()!==year||date.getUTCMonth()!==month-1||date.getUTCDate()!==day)return null;
  const suffix=match[2]||match[3]||match[4]||'',name=match[5];
  if(suffix&&(!Number.isSafeInteger(Number(suffix))||Number(suffix)<1))return null;
  return {code,date:date.toISOString().slice(0,10),title:code+(name?' - '+name:'')+(suffix?' ('+Number(suffix)+')':''),ordinal:suffix?Number(suffix):null};
}
if(typeof module!=='undefined')module.exports={parseArtworkTitle};
