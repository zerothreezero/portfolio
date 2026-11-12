// Dev-only integration tests. Substitute Google, GitHub, Pages and Bluesky at the network boundary.
const {test}=require('node:test');
const assert=require('node:assert/strict');
const {chromium,firefox}=require('playwright');
const {createHash}=require('node:crypto');
const initial=require('../data/portfolio-content.json');
const blobSha=text=>createHash('sha1').update('blob '+Buffer.byteLength(text)+'\0'+text).digest('hex');
function post(id,title,images){
  const media=images.map(n=>({fullsize:'https://cdn.bsky.app/full/'+n,thumb:'https://cdn.bsky.app/thumb/'+n,alt:'Frame '+n,aspectRatio:{width:1,height:1}}));
  return {post:{uri:'at://did:plc:artist/app.bsky.feed.post/'+id,author:{handle:'zerothreezero.bsky.social'},record:{text:title+'\n#ink'},embed:{images:media}}};
}
for(const name of ['Chromium','Firefox'])test(name+' gallery, signed editor, uploads and publication',async t=>{
  const {siteServer}=await import('../scripts/serve.mjs');
  const {default:worker,SessionRegistry}=await import('../worker/src/index.js');
  const server=siteServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));
  t.after(()=>server.close());
  const origin='http://127.0.0.1:'+server.address().port;
  const browser=await (name==='Firefox'?firefox.launch():chromium.launch({channel:process.env.CHROMIUM_CHANNEL||undefined}));
  t.after(()=>browser.close());
  const page=await browser.newPage({viewport:{width:name==='Firefox'?390:1280,height:800},reducedMotion:'reduce'});
  page.setDefaultTimeout(6000);
  const png=Buffer.from(await page.evaluate(()=>{
    const canvas=document.createElement('canvas');canvas.width=canvas.height=24;
    const ctx=canvas.getContext('2d');ctx.fillStyle='#4a9ace';ctx.fillRect(0,0,24,24);
    return canvas.toDataURL('image/png').split(',')[1];
  }),'base64');
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const feed=[post('a','261102 - Copper',[1,2]),post('b','251102 - Silver',[3])];
  let stored=structuredClone(initial),deployed=structuredClone(initial),currentSha='base',tree,release,denied=false,fail=false;
  const blobs=new Map(),files=new Map();
  // Both browser tests share Google's test certificate, as they share a Worker module.
  const rsa=await testKey;
  const jwk={...await crypto.subtle.exportKey('jwk',rsa.publicKey),kid:'browser-key'};
  const registry=new SessionRegistry(),env={ALLOWED_ORIGINS:origin,GOOGLE_CLIENT_ID:'test-client',GITHUB_TOKEN:'fixture',SESSION_SECRET:'x'.repeat(48),
    SESSIONS:{idFromName:()=>1,get:()=>({fetch:(u,o)=>registry.fetch(new Request(u,o))})},LIMITER:{limit:async()=>({success:true})}};
  t.mock.method(globalThis,'fetch',async(url,options)=>{
    if(String(url).includes('googleapis'))return Response.json({keys:[jwk]});
    if(fail)return new Response(null,{status:503});
    const path=new URL(url).pathname.split('/portfolio/')[1];const body=options.body&&JSON.parse(options.body);
    if(path==='git/ref/heads/main')return Response.json({object:{sha:'head'}});
    if(path.startsWith('contents/'))return Response.json({content:Buffer.from(JSON.stringify(stored)).toString('base64'),sha:currentSha});
    if(path==='git/commits/head')return Response.json({tree:{sha:'tree'}});
    if(path==='git/blobs'){const sha=crypto.randomUUID();blobs.set(sha,body.content);return Response.json({sha});}
    if(path==='git/trees'){tree=body.tree;return Response.json({sha:'newtree'});}
    if(path==='git/commits')return Response.json({sha:'nextcommit'});
    if(path==='git/refs/heads/main'){
      assert.equal(body.force,false);const json=tree.find(x=>x.path==='data/portfolio-content.json').content;
      for(const entry of tree)if(entry.path.startsWith('assets/uploads/'))files.set(entry.path,blobs.get(entry.sha));
      currentSha=blobSha(json);stored=JSON.parse(json);return Response.json({});
    }
    throw Error(path);
  });
  async function credential(){
    const header=Buffer.from(JSON.stringify({alg:'RS256',kid:jwk.kid})).toString('base64url');
    const claims=Buffer.from(JSON.stringify({iss:'accounts.google.com',aud:'test-client',sub:'subject',email:denied?'visitor@example.org':'thin4rtist@gmail.com',email_verified:true,exp:Math.floor(Date.now()/1000)+300})).toString('base64url');
    const body=header+'.'+claims,sig=await crypto.subtle.sign('RSASSA-PKCS1-v1_5',rsa.privateKey,new TextEncoder().encode(body));
    return body+'.'+Buffer.from(sig).toString('base64url');
  }
  await page.route('**/assets/js/admin-config.js',r=>r.fulfill({contentType:'text/javascript',body:"window.portfolioConfig={workerOrigin:'http://localhost:8787',googleClientId:'test-client'};"}));
  await page.route('https://accounts.google.com/gsi/client',async r=>r.fulfill({contentType:'text/javascript',body:
    "window.google={accounts:{id:{initialize:o=>window.gisCallback=o.callback,disableAutoSelect(){},renderButton:node=>{const b=document.createElement('button');b.textContent='Google fixture';b.onclick=()=>window.gisCallback({credential:"+JSON.stringify(await credential())+"});node.append(b);}}}};"}));
  await page.route('http://localhost:8787/**',async r=>{
    const req=r.request(),headers=await req.allHeaders();headers.origin=origin;
    const response=await worker.fetch(new Request(req.url(),{method:req.method(),headers,body:req.postData()||undefined}),env);
    await r.fulfill({status:response.status,headers:Object.fromEntries(response.headers),body:await response.text()});
  });
  await page.route('**/data/portfolio-content.json*',r=>r.fulfill({json:deployed,headers:{'Access-Control-Allow-Origin':'*'}}));
  await page.route('https://public.api.bsky.app/**',async r=>{if(release)await release.promise;await r.fulfill({json:{feed}});});
  await page.route('https://cdn.bsky.app/**',r=>r.fulfill({contentType:'image/png',body:png,headers:{'Access-Control-Allow-Origin':'*'}}));
  await page.route('**/assets/uploads/*.webp',r=>{const file=files.get(new URL(r.request().url()).pathname.slice(1));return file?r.fulfill({contentType:'image/webp',body:Buffer.from(file,'base64')}):r.fulfill({status:404});});
  await page.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{value:{writeText:async v=>{window.copied=v;}}}));
  const button=(text,scope=page)=>scope.getByRole('button',{name:text,exact:true});
  const dialog=()=>page.locator('dialog.tool-dialog[open]').last();
  const clickMenu=async text=>{await page.locator('#preferences summary').click();await button(text,page.locator('#account-menu')).click();};
  const dismiss=()=>dialog().getByRole('button',{name:'Close',exact:true}).click();
  const waitCount=n=>page.waitForFunction(n=>document.querySelector('#count').textContent===String(n),n);
  await page.goto(origin);await waitCount(2);
  assert.equal(await page.locator('.swatch,input[type=color]').count(),0);
  const layout=await page.locator('.work').evaluateAll(cards=>cards.map(a=>({width:a.offsetWidth,height:a.offsetHeight})));
  assert(layout.every(a=>a.width>0&&a.height>0));
  assert.equal(await page.locator('.card-edit').count(),0);
  denied=true;await button('Admin').click();await button('Google fixture').click();
  await page.locator('#preferences summary').click();await page.getByText('Viewing only',{exact:true}).waitFor();
  assert.equal(await button('Edit mode').count(),0);await button('Sign out').click();
  // A fresh page loads GIS again with the allowed fixture identity.
  denied=false;await page.reload();await waitCount(2);await button('Admin').click();await button('Google fixture').click();
  await page.waitForFunction(()=>!document.querySelector('dialog.tool-dialog[open]'));
  await clickMenu('Manage collections');await button('New collection').click();await dialog().locator('input').fill('Prints');await button('Save changes').click();
  await dialog().getByRole('heading',{name:'Publish status'}).waitFor();await dismiss();
  await clickMenu('Edit mode');await page.locator('.card-edit').first().click();
  // An independent writer advances the repository while the form is open.
  await dialog().getByLabel('Title',{exact:true}).fill('Stale draft');currentSha='independent-update';
  await button('Save changes').click();await dialog().getByText(/Content changed/).waitFor();
  assert.equal(Object.keys(stored.artworks).length,0);
  page.once('dialog',d=>d.accept());await button('Reload from GitHub').click();
  await page.waitForFunction(()=>!document.querySelector('dialog[open]')?.textContent.includes('Content changed'));
  await dialog().getByLabel('Title',{exact:true}).fill('Edited copper');
  await button('Undo').click();assert.match(await dialog().getByLabel('Title',{exact:true}).inputValue(),/Copper/);
  await button('Redo').click();assert.equal(await dialog().getByLabel('Title',{exact:true}).inputValue(),'Edited copper');
  await dialog().getByLabel('Description',{exact:true}).fill('Gallery caption');
  await dialog().getByLabel('Tags',{exact:true}).fill('metal, landscape');
  await dialog().locator('summary').filter({hasText:'Details'}).click();
  await dialog().getByLabel('Links (label | URL, one per line)',{exact:true}).fill('Artist | https://example.org/artist');
  await dialog().locator('summary').filter({hasText:'Display'}).click();
  await dialog().getByLabel('Prints',{exact:true}).check();
  await button('Preview').click();await page.getByRole('heading',{name:'Edited copper'}).waitFor();await dismiss();
  fail=true;await button('Save changes').click();await dialog().getByText('GitHub returned HTTP 503').waitFor();fail=false;
  await button('Save changes').click();await dialog().getByRole('heading',{name:'Publish status'}).waitFor();
  assert.equal(Object.values(stored.artworks)[0].description,'Gallery caption');
  await button('Check publication').click();await dialog().getByText(/Deploying/).waitFor();
  deployed=structuredClone(stored);await button('Check publication').click();await dialog().getByText(/Published/).waitFor();await dismiss();
  await clickMenu('Manage artworks');await button('Add artwork').click();
  await dialog().getByLabel('Title',{exact:true}).fill('Manual print');
  await dialog().locator('summary').filter({hasText:'Images'}).click();
  await dialog().getByLabel('Choose images',{exact:true}).setInputFiles({name:'print.png',mimeType:'image/png',buffer:png});
  await dialog().locator('.media-row img').waitFor();await button('Save changes').click();
  await dialog().getByRole('heading',{name:'Publish status'}).waitFor();await dismiss();await waitCount(3);
  assert.equal(stored.manualArtworks.length,1);assert.equal(tree.length,2);assert.equal(tree[0].path,stored.manualArtworks[0].media[0].path);deployed=structuredClone(stored);
  await button('Sign out').click();await page.waitForFunction(()=>!document.querySelector('.card-edit'));
  await button('Explore').click();await page.locator('#explore-panel select').first().selectOption('2026-11');await waitCount(1);
  await button('Surprise me').click();await page.locator('#viewer[open]').waitFor();
  assert.equal(await page.locator('#viewer-title').innerText(),'Edited copper');assert.equal(await page.locator('.viewer-extras a').getAttribute('href'),'https://example.org/artist');
  await page.keyboard.press('ArrowRight');await button('Copy link').click();const link=await page.evaluate(()=>window.copied);
  await button('Focus mode').click();assert(await page.locator('#viewer').evaluate(d=>d.classList.contains('focus-mode')));
  await page.keyboard.press('Escape');await page.locator('#explore-panel select').first().selectOption('');await waitCount(3);
  await button('Compare').click();await button('Slider').click();await dialog().locator('input[type=range]').fill('30');assert.equal(await dialog().locator('.compare-stage.slider img').count(),2);await dismiss();
  await page.locator('#explore-panel').getByLabel('Collections').selectOption(stored.collections[0].id);await waitCount(1);
  release=Promise.withResolvers();await page.goto('about:blank');await page.goto(link,{waitUntil:'domcontentloaded'});await page.locator('#viewer[open]').waitFor();
  assert.match(await page.locator('#viewer-step').textContent(),/2 \/ 2/);release.resolve();release=null;
  await page.keyboard.press('Escape');await page.waitForFunction(()=>!document.querySelector('#load-status').classList.contains('loading'));
  const requests=[];page.on('request',r=>requests.push(r.url()));
  const pendingFrame=Promise.withResolvers();
  await page.route('https://cdn.bsky.app/full/2',async r=>{await pendingFrame.promise;await r.abort();});
  await page.evaluate(()=>history.replaceState(null,'',location.pathname));await page.reload();await waitCount(3);
  await page.locator('.art-button').filter({has:page.locator('img[src$="/thumb/1"]')}).first().click();
  await page.waitForFunction(()=>document.querySelector('.viewer-slide.is-active')?.dataset.fullSrc?.endsWith('/full/1'));
  const before=await page.locator('.viewer-slide.is-active').getAttribute('src');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(100);
  assert.equal(await page.locator('.viewer-slide.is-active').getAttribute('src'),before);
  await page.keyboard.press('ArrowLeft');await page.keyboard.press('ArrowRight');
  pendingFrame.resolve();await page.locator('#viewer-error').waitFor();
  assert.equal(await page.locator('.viewer-slide.is-active').getAttribute('src'),before);
  await page.keyboard.press('Escape');
  assert(!requests.some(url=>url.includes('palettes.json')||url.includes('/thumbnail?')));
  await page.locator('#tab-stats').click();assert(await page.locator('.stat-card').count()>0);
  feed.splice(0,feed.length,...Array.from({length:150},(_,i)=>{
    const entry=post('grid'+String(i).padStart(3,'0'),'261019_'+(i+1),[100+i]);
    const pick=i<4?i:((Math.imul(i,1664525)+1013904223)>>>16)%4;
    entry.post.embed.images[0].aspectRatio={width:[16,2,1,3][pick],height:[9,3,1,1][pick]};
    return entry;
  }));
  await page.evaluate(()=>history.replaceState(null,'',location.pathname));await page.reload();await waitCount(151);
  await page.waitForFunction(()=>!document.querySelector('#load-status').classList.contains('loading'));
  const snapshot=()=>page.locator('.mosaic-group').first().evaluate(row=>Array.from(row.children,a=>[a.dataset.id,a.offsetLeft,a.offsetTop,a.offsetWidth,a.offsetHeight]));
  const stable=await snapshot();
  await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
  await page.waitForFunction(()=>document.querySelectorAll('.work').length>32);
  assert.deepEqual(await snapshot(),stable);
  const ratios=await page.locator('.art-button').evaluateAll(nodes=>nodes.slice(0,4).map(n=>n.clientWidth/n.clientHeight));
  assert(Math.abs(ratios[0]-16/9)<.03&&Math.abs(ratios[1]-2/3)<.03&&Math.abs(ratios[3]-3)<.03);
  await page.setViewportSize({width:600,height:800});await page.waitForTimeout(100);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  for(const [width,height] of [[1920,1080],[1440,900],[1024,768],[768,1024],[390,844]]){
    await page.setViewportSize({width,height});
    const density=[];
    for(const size of ['normal','compact','small']){
      await page.locator('#preferences summary').click();
      await page.locator('#gallery-size').selectOption(size);
      await page.keyboard.press('Escape');
      const geometry=await page.locator('.mosaic-group').evaluateAll(groups=>groups.map(group=>{
        const box=group.getBoundingClientRect(),columns=Array.from(group.children);
        const rects=Array.from(group.querySelectorAll('.work'),card=>card.getBoundingClientRect());
        const gutters=16*(columns.length-1)*box.height+columns.reduce((sum,col)=>sum+16*(col.children.length-1)*col.getBoundingClientRect().width,0);
        return {error:Math.abs(box.width*box.height-gutters-rects.reduce((sum,r)=>sum+r.width*r.height,0)),area:box.width*box.height,
          contained:rects.every(r=>r.left>=box.left-.1&&r.right<=box.right+.1&&r.bottom<=box.bottom+.1)};
      }));
      assert(geometry.length&&geometry.every(g=>g.contained&&g.error/g.area<.002),JSON.stringify({width,size,geometry}));
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
      density.push(await page.locator('.work').evaluateAll(cards=>cards.reduce((sum,card)=>{
        const r=card.getBoundingClientRect();return sum+r.width*r.height;
      },0)/cards.length));
    }
    assert(density[1]<density[0]*.9&&density[2]<density[1]*.9,JSON.stringify({width,density}));
  }
  assert.deepEqual(errors,[]);
});
const testKey=crypto.subtle.generateKey({name:'RSASSA-PKCS1-v1_5',modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:'SHA-256'},true,['sign','verify']);
