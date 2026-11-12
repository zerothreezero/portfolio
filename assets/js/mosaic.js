'use strict';
// Contiguous columns preserve DOM and keyboard order. Every column fills the
// same block height. Ratios and gutters determine all geometry before loading.
function mosaicLayout(items,width,size,gap=16){
  // A 20% increase in both dimensions corresponds to 1.44 times the area.
  const target=(({normal:52000,compact:28000,small:14000})[size]||28000)*1.44;
  const area=width<600?target*.43:target;
  const maxColumns=Math.max(1,Math.min(12,Math.floor(width/(Math.sqrt(area)*.8))));
  const choices=[];
  function partitions(count,prefix=[]){
    if(!count){choices.push(prefix);return;}
    if(prefix.length===maxColumns)return;
    for(let n=1;n<=Math.min(3,count);n++)partitions(count-n,[...prefix,n]);
  }
  for(let count=1;count<=6;count++)partitions(count);
  // Wider screens need more than six works per block to reach compact sizes.
  // Extend the search with rows and independently positioned two-image stacks
  // without enumerating every possible partition of a large block.
  for(let columns=4;columns<=maxColumns;columns++){
    const row=Array(columns).fill(1);
    if(columns>6)choices.push(row);
    for(let first=0;first<columns;first++){
      const stacked=row.slice();stacked[first]=2;
      if(columns+1>6)choices.push(stacked);
      for(let second=first+1;second<columns;second++){
        if(columns+2<=6)continue;
        const pair=stacked.slice();pair[second]=2;choices.push(pair);
      }
    }
  }
  function candidate(start,partition){
    let cursor=start;
    const columns=partition.map(count=>{
      const indices=Array.from({length:count},()=>cursor++);
      return {indices,reciprocal:indices.reduce((sum,i)=>sum+1/items[i].ratio,0)};
    });
    const height=(width-gap*(columns.length-1)+columns.reduce((sum,col)=>sum+gap*(col.indices.length-1)/col.reciprocal,0))
      /columns.reduce((sum,col)=>sum+1/col.reciprocal,0);
    const areas=[];
    for(const col of columns){
      col.width=(height-gap*(col.indices.length-1))/col.reciprocal;
      if(col.width<=0)return null;
      for(const i of col.indices)areas.push(col.width*col.width/items[i].ratio);
    }
    const mean=areas.reduce((a,b)=>a+b,0)/areas.length;
    const balance=areas.reduce((sum,a)=>sum+Math.log(a/mean)**2,0)/areas.length;
    const scale=areas.reduce((sum,a)=>sum+Math.log(a/area)**2,0)/areas.length;
    const score=scale+balance*3+Math.max(0,height/700-1)**2*4;
    return {columns,height,count:areas.length,score};
  }
  // Dynamic programming lets a short final group borrow from its predecessor.
  const best=Array(items.length+1).fill(Infinity),next=Array(items.length);
  best[items.length]=0;
  for(let start=items.length-1;start>=0;start--){
    for(const partition of choices){
      const count=partition.reduce((a,b)=>a+b,0);
      if(start+count>items.length)continue;
      const option=candidate(start,partition);
      if(!option)continue;
      const cost=option.score*count+best[start+count];
      if(cost<best[start]){best[start]=cost;next[start]=option;}
    }
  }
  const groups=[];
  for(let index=0;index<items.length;){
    const group=next[index];groups.push(group);index+=group.count;
  }
  return groups;
}
if(typeof module!=='undefined')module.exports={mosaicLayout};
