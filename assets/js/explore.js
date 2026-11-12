'use strict';
const galleryWords={
  en:'Explore|Surprise me|Timeline|All dates|Collections|All collections|Compare|Side by side|Slider|Open original|days|Focus mode|Copy link|Copied|Menu|About|Sign in with Google|Sign out|Clear cache|Gallery tools|Choose two artworks|Published|Featured|All works',
  uk:'Огляд|Випадкова робота|Хронологія|Усі дати|Колекції|Усі колекції|Порівняти|Поруч|Повзунок|Відкрити оригінал|дн.|Режим фокусу|Копіювати посилання|Скопійовано|Меню|Про портфоліо|Увійти через Google|Вийти|Очистити кеш|Інструменти галереї|Оберіть дві роботи|Опубліковано|Вибрані|Усі роботи',
  fr:'Explorer|Au hasard|Chronologie|Toutes les dates|Collections|Toutes les collections|Comparer|Côte à côte|Curseur|Ouvrir l’original|jours|Mode focus|Copier le lien|Copié|Menu|À propos|Connexion Google|Déconnexion|Vider le cache|Outils de galerie|Choisir deux œuvres|Publié|À la une|Toutes les œuvres',
  es:'Explorar|Al azar|Cronología|Todas las fechas|Colecciones|Todas las colecciones|Comparar|Lado a lado|Deslizador|Abrir original|días|Modo enfoque|Copiar enlace|Copiado|Menú|Acerca de|Acceder con Google|Salir|Vaciar caché|Herramientas|Elegir dos obras|Publicado|Destacadas|Todas las obras',
  ja:'探す|ランダム|タイムライン|すべての日付|コレクション|すべて|比較|並べて表示|スライダー|原寸表示|日|集中モード|リンクをコピー|コピー済み|メニュー|サイト情報|Googleでログイン|ログアウト|キャッシュを消去|ギャラリーツール|作品を二つ選択|公開済み|注目作品|すべての作品',
  'zh-CN':'探索|随机作品|时间轴|所有日期|合集|所有合集|比较|并排|滑块|打开原图|天|专注模式|复制链接|已复制|菜单|关于|使用 Google 登录|退出|清除缓存|画廊工具|选择两幅作品|已发布|精选|所有作品'
};
const wordKeys='explore random timeline dates collections allCollections compare side slider original days focus copy copied menu about login logout clearCache tools choose published featured allWorks'.split(' ');
function word(key){return (galleryWords[document.documentElement.lang]||galleryWords.en).split('|')[wordKeys.indexOf(key)]||key;}
function toolButton(text,action){
  const b=document.createElement('button');b.type='button';b.className='tool-button';b.textContent=text;b.addEventListener('click',action);return b;
}
function fieldLabel(text,field){
  const label=document.createElement('label');label.className='tool-field';label.append(text,field);return label;
}
function toolDialog(title){
  const dialog=document.createElement('dialog');dialog.className='tool-dialog';
  const heading=document.createElement('h2');heading.textContent=title;
  dialog.setAttribute('aria-label',title);
  const close=toolButton('×',()=>{
    if(dialog.requestClose)dialog.requestClose();
    else if(dialog.dispatchEvent(new Event('cancel',{cancelable:true})))dialog.close();
  });
  close.setAttribute('aria-label',document.querySelector('#close').getAttribute('aria-label'));
  const header=document.createElement('header');header.append(heading,close);dialog.append(header);
  document.body.append(dialog);dialog.addEventListener('close',()=>dialog.remove(),{once:true});
  return dialog;
}
function installExplore(c){
  const {$,el}=c;
  const panel=el('section','explore-panel');panel.id='explore-panel';panel.hidden=true;
  $('.archive-toolbar').after(panel);
  const toggle=toolButton('',()=>{panel.hidden=!panel.hidden;refresh();});
  toggle.setAttribute('aria-controls',panel.id);$('#sort').before(toggle);
  let period='',collection='',featured=false,lastRandom='',pending=location.hash;
  function matches(a){
    return (!period||a.date?.startsWith(period))
      &&(!collection||a.collectionIds?.includes(collection))&&(!featured||a.featured);
  }
  function reset(){period=collection='';featured=false;refresh();}
  function changed(){c.renderGallery();refresh();}
  function picker(title,options,value,fn){
    const s=el('select');for(const [v,label] of options)s.add(new Option(label,v));
    s.value=value;s.onchange=()=>fn(s.value);return fieldLabel(title,s);
  }
  function timeline(times){
    const strip=el('div','time-strip');strip.setAttribute('role','group');strip.setAttribute('aria-label',word('timeline'));
    const year=period.slice(0,4);
    const keys=year?Array.from({length:12},(_,i)=>year+'-'+String(i+1).padStart(2,'0')):[...times.keys()].filter(k=>k.length===4).sort();
    const max=Math.max(1,...keys.map(k=>times.get(k)||0));
    const monthFormat=new Intl.DateTimeFormat(document.documentElement.lang,{month:'short',timeZone:'UTC'});
    for(const key of keys){
      const count=times.get(key)||0;
      const label=year?monthFormat.format(new Date(key+'-01T00:00:00Z')):key;
      const b=toolButton('',()=>{period=key;changed();});
      b.setAttribute('aria-label',key+' · '+count);b.setAttribute('aria-pressed',String(key===period));b.disabled=!count;
      const bar=el('span','time-bar');bar.style.setProperty('--height',(3+20*count/max)+'px');
      b.append(el('small','',String(count)),bar,el('span','',label));strip.append(b);
    }
    return strip;
  }
  function surprise(){
    const pool=c.visible.filter(a=>c.visible.length===1||a.id!==lastRandom);
    if(!pool.length)return;
    const item=pool[Math.floor(Math.random()*pool.length)];lastRandom=item.id;c.openViewer(item.id);
  }
  function compare(){
    const items=c.state.items;if(items.length<2)return;
    const dlg=toolDialog(word('compare')),selectors=el('div','tool-group'),stage=el('div','compare-stage'),caption=el('p'),actions=el('div','tool-group');
    const range=el('input');range.type='range';range.value=50;range.setAttribute('aria-label',word('slider'));
    let left=items[0],right=items[1],slider=false;
    const options=items.map((a,i)=>[a.id,a.title+' · '+(a.date||i+1)]);
    const mode=toolButton(word('slider'),()=>{slider=!slider;draw();});
    function draw(){
      const pair=[left,right];stage.replaceChildren();actions.replaceChildren();range.hidden=!slider;mode.textContent=word(slider?'side':'slider');
      stage.classList.toggle('slider',slider);range.oninput=()=>stage.style.setProperty('--split',range.value+'%');range.oninput();
      pair.forEach(a=>{
        const img=el('img');img.src=a.images[a.coverIndex];img.alt=a.alts[a.coverIndex]||a.title;
        stage.append(img);
        const link=el('a','tool-button',word('original')+' · '+a.title);link.href=img.src;link.target='_blank';link.rel='noopener noreferrer';actions.append(link);
      });
      caption.textContent=pair.map(a=>a.date||'—').join(' / ')+(left.date&&right.date?' · '+Math.abs(Date.parse(left.date)-Date.parse(right.date))/86400000+' '+word('days'):'');
    }
    selectors.append(picker('A',options,left.id,id=>{left=items.find(x=>x.id===id);draw();}),picker('B',options,right.id,id=>{right=items.find(x=>x.id===id);draw();}),mode);
    dlg.append(selectors,stage,range,caption,actions);draw();dlg.showModal();
  }
  const sideTools=el('div','tool-group viewer-tools'),extras=el('div','viewer-extras');
  $('.viewer-side').insertBefore(sideTools,$('.viewer-bottom'));sideTools.before(extras);
  let touch=null;
  $('.viewer-art').addEventListener('touchstart',e=>{touch=e.touches.length===1?[e.touches[0].clientX,e.touches[0].clientY]:null;},{passive:true});
  $('.viewer-art').addEventListener('touchend',e=>{if(!touch)return;const p=e.changedTouches[0],dx=p.clientX-touch[0];if(Math.abs(dx)>55&&Math.abs(dx)>1.6*Math.abs(p.clientY-touch[1]))c.step(dx>0?-1:1);touch=null;},{passive:true});
  function viewer(item,index){
    sideTools.replaceChildren();extras.replaceChildren();
    const share=toolButton(word('copy'),async()=>{
      const url=new URL(location.href);url.hash=new URLSearchParams({art:item.id,image:item.imageKeys[index]});
      try{await navigator.clipboard.writeText(url.href);share.textContent=word('copied');}catch{prompt(word('copy'),url.href);}
    });
    sideTools.append(toolButton(word('focus'),()=>{c.viewer.classList.add('focus-mode');$('#close').focus();}),share);
    for(const text of [...(item.blocks||[]),item.notes].filter(Boolean))extras.append(el('p','',text));
    for(const l of item.links||[]){
      if(!/^https?:\/\//i.test(l.url))continue;
      const a=el('a','tool-button',l.label||l.url);a.href=l.url;a.target='_blank';a.rel='noopener noreferrer';extras.append(a);
    }
  }
  function deepLink(){
    if(!pending)return;
    const q=new URLSearchParams(pending.slice(1)),id=q.get('art');
    const item=c.state.items.find(a=>a.id===id||a.aliases?.includes(id));
    if(item){pending='';c.setTab('gallery',false);if(!c.visible.includes(item))c.resetFilters();
      c.openViewer(item.id,Math.max(0,item.imageKeys.indexOf(q.get('image'))));}
  }
  window.addEventListener('hashchange',()=>{pending=location.hash;deepLink();});
  function refresh(){
    toggle.textContent=word('explore')+(period||collection||featured?' •':'');
    toggle.setAttribute('aria-expanded',String(!panel.hidden));panel.setAttribute('aria-label',word('tools'));
    if(!panel.hidden){
      const times=new Map();
      for(const a of c.state.items){
        if(a.date)for(const key of [a.date.slice(0,4),a.date.slice(0,7)])times.set(key,(times.get(key)||0)+1);
      }
      const timeOptions=[['',word('dates')],...[...times].sort(([a],[b])=>b.slice(0,4).localeCompare(a.slice(0,4))||a.localeCompare(b)).map(([k,n])=>[k,k+' · '+n])];
      panel.replaceChildren(picker(word('timeline'),timeOptions,period,v=>{period=v;changed();}));
      if(c.content.collections.length)panel.append(picker(word('collections'),[['',word('allCollections')],...c.content.collections.map(x=>[x.id,x.name])],collection,v=>{collection=v;changed();}));
      if(c.state.items.some(a=>a.featured))panel.append(picker(word('featured'),[['',word('allWorks')],['1',word('featured')]],featured?'1':'',v=>{featured=!!v;changed();}));
      const random=toolButton(word('random'),surprise),duo=toolButton(word('compare'),compare);random.disabled=!c.visible.length;duo.disabled=c.state.items.length<2;
      panel.append(random,duo);
      if(times.size){
        const strip=timeline(times);panel.append(strip);
        const active=strip.querySelector('[aria-pressed=true]');
        if(active)strip.scrollTo({left:Math.max(0,active.offsetLeft-strip.clientWidth/2),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
      }
    }
    deepLink();
  }
  return {matches,reset,refresh,viewer,async clear(){await PortfolioArchive.clear();changed();}};
}
