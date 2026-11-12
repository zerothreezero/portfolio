const {test}=require('node:test');
const assert=require('node:assert/strict');
const {parseArtworkTitle:parse}=require('../assets/js/artwork-title.js');
test('calendar dates and ordinal artwork titles',()=>{
  for(const suffix of ['_2','-2','(2)',' 2']){
    assert.equal(parse('261019'+suffix).title,'261019 (2)');
    assert.equal(parse('261019'+suffix).date,'2026-10-19');
  }
  for(const [input,title] of [
    ['261019','261019'],['261019_3','261019 (3)'],['261019(12)','261019 (12)'],
    ['261019 - Moonlight','261019 - Moonlight'],['261019_2 - Moonlight','261019 - Moonlight (2)'],
    ['261019(3) Moonlight','261019 - Moonlight (3)'],['261019_2.png','261019 (2)'],
  ])assert.equal(parse(input).title,title);
  for(const input of ['260230','261332','hello 261019_2','9212s','1h 25m','261019_0','261019_2h'])assert.equal(parse(input),null);
  assert.equal(parse('240229').date,'2024-02-29');
});
