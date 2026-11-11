'use strict';
function installEditor(c){
  const {$,el}=c,menu=$('#account-menu'),config=window.portfolioConfig;
  const labels={
    'Edit mode':'Режим редагування','Manage artworks':'Керування роботами','Manage collections':'Керування колекціями','Publish status':'Стан публікації',
    'Add artwork':'Додати роботу','Edit':'Редагувати','Save changes':'Зберегти зміни','Discard changes':'Відкинути зміни','Preview':'Попередній перегляд',
    'Unsaved changes':'Є незбережені зміни','Saving':'Збереження','Committed to GitHub':'Збережено в GitHub','Deploying':'Очікування публікації',
    'Reload from GitHub':'Оновити з GitHub','Sign in again':'Увійдіть повторно','Public portfolio of digital illustrations by 0 3 0.':'Портфоліо цифрових ілюстрацій 0 3 0.',
    'Google login has not been configured.':'Вхід через Google ще не налаштовано.','Viewing only':'Лише перегляд','Basics':'Основні дані','Details':'Додаткові дані','Display':'Відображення',
    'Title':'Назва','Description':'Опис','Creation date':'Дата створення','Alternative text':'Альтернативний текст','Tags':'Теги','Software':'Програми',
    'Drawing time (minutes)':'Час малювання (хв)','Strokes':'Кількість штрихів','Text blocks (one per line)':'Текстові блоки (по одному на рядок)',
    'Links (label | URL, one per line)':'Посилання (підпис | URL, по одному на рядок)','Notes':'Нотатки','Palette (#RRGGBB)':'Палітра (#RRGGBB)',
    'Featured':'Вибрана робота','Hidden':'Прихована робота','Featured order':'Порядок вибраних','Images':'Зображення','Cover':'Обкладинка',
    'Collections':'Колекції','Reset to source':'Повернути початкове значення','Undo':'Скасувати','Redo':'Повторити','Choose images':'Вибрати зображення',
    'Load current version and discard this draft?':'Завантажити актуальну версію й відкинути цю чернетку?','Discard this draft?':'Відкинути цю чернетку?',
    'No changes':'Без змін','Check publication':'Перевірити публікацію','New collection':'Нова колекція','Remove':'Вилучити','Error':'Помилка',
    'Archive updated':'Архів оновлено','Source post unavailable':'Вихідний допис недоступний','No pending publication':'Публікацій у черзі немає'
  };
  const moreLabels={
    fr:'Mode édition|Gérer les œuvres|Gérer les collections|Publication|Ajouter une œuvre|Modifier|Enregistrer|Abandonner|Aperçu|Modifications non enregistrées|Enregistrement|Enregistré sur GitHub|Déploiement|Recharger depuis GitHub|Reconnectez-vous|Portfolio public des illustrations numériques de 0 3 0.|La connexion Google reste à configurer.|Lecture seule|Informations|Détails|Affichage|Titre|Description|Date de création|Texte alternatif|Tags|Logiciels|Durée (minutes)|Traits|Blocs de texte (un par ligne)|Liens (libellé ＆ URL séparés par une barre verticale)|Notes|Palette (#RRGGBB)|À la une|Masquée|Ordre de sélection|Images|Couverture|Collections|Restaurer la source|Annuler|Rétablir|Choisir les images|Recharger et abandonner ce brouillon ?|Abandonner ce brouillon ?|Aucune modification|Vérifier la publication|Nouvelle collection|Retirer|Erreur|Archive mise à jour|Publication source indisponible|Aucune publication en attente',
    es:'Modo edición|Gestionar obras|Gestionar colecciones|Estado de publicación|Añadir obra|Editar|Guardar cambios|Descartar cambios|Vista previa|Cambios sin guardar|Guardando|Guardado en GitHub|Publicando|Recargar desde GitHub|Vuelve a iniciar sesión|Portafolio público de ilustraciones digitales de 0 3 0.|El acceso de Google aún no está configurado.|Solo lectura|Información básica|Detalles|Visualización|Título|Descripción|Fecha de creación|Texto alternativo|Etiquetas|Programas|Tiempo (minutos)|Trazos|Bloques de texto (uno por línea)|Enlaces (etiqueta y URL separados por barra vertical)|Notas|Paleta (#RRGGBB)|Destacada|Oculta|Orden de destacadas|Imágenes|Portada|Colecciones|Restaurar original|Deshacer|Rehacer|Elegir imágenes|¿Recargar y descartar el borrador?|¿Descartar este borrador?|Sin cambios|Verificar publicación|Nueva colección|Quitar|Error|Archivo actualizado|Publicación de origen no disponible|Sin publicación pendiente',
    ja:'編集モード|作品管理|コレクション管理|公開状況|作品を追加|編集|変更を保存|変更を破棄|プレビュー|未保存の変更|保存中|GitHub に保存済み|公開処理中|GitHub から再読込|再ログインしてください|0 3 0 のデジタルイラスト作品集。|Google ログインは未設定です。|閲覧のみ|基本情報|詳細|表示|タイトル|説明|制作日|代替テキスト|タグ|ソフトウェア|制作時間（分）|ストローク数|テキスト（1 行 1 項目）|リンク（ラベルと URL を縦線で区切る）|メモ|パレット (#RRGGBB)|注目作品|非表示|注目作品の順序|画像|表紙|コレクション|元に戻す|取り消す|やり直す|画像を選択|最新版を読み込み下書きを破棄しますか？|下書きを破棄しますか？|変更なし|公開を確認|新規コレクション|削除|エラー|更新しました|元の投稿がありません|公開待ちはありません',
    'zh-CN':'编辑模式|管理作品|管理合集|发布状态|添加作品|编辑|保存更改|放弃更改|预览|有未保存的更改|正在保存|已提交至 GitHub|正在部署|从 GitHub 重新加载|请重新登录|0 3 0 的数码插画作品集。|尚未配置 Google 登录。|只读|基本信息|详情|显示|标题|描述|创作日期|替代文本|标签|软件|绘画时间（分钟）|笔画数|文本段落（每行一段）|链接（每行一项，标签和网址用竖线分隔）|备注|调色板 (#RRGGBB)|精选|隐藏|精选顺序|图片|封面|合集|还原来源值|撤销|重做|选择图片|重新加载最新版并放弃草稿？|放弃此草稿？|无更改|检查发布状态|新合集|移除|错误|已更新|来源帖子不可用|没有待发布的更改'
  };
  const keys=Object.keys(labels);
  const L=s=>document.documentElement.lang==='uk'?(labels[s]||s):moreLabels[document.documentElement.lang]?.split('|')[keys.indexOf(s)]||s;
  let token='',guest=false,editing=false,sha='',expiresTimer,pollTimer,revision='',commitId='',publishState='',generation=0,activeDialog;
  let busy=false,statusError='',pollEpoch=0;
  const statusText=()=>publishState==='Published'?word('published'):L(publishState||'No pending publication');
  const menuAction=(label,action)=>toolButton(label,()=>{$('#preferences').open=false;action();});
  const notify=(title,message)=>{const d=toolDialog(title);d.append(el('p','',message));d.showModal();};
  function refresh(){
    $('#preferences summary').setAttribute('aria-label',word('menu'));
    menu.replaceChildren();
    if(token){
      const edit=menuAction(L('Edit mode'),()=>{editing=!editing;c.renderGallery();refresh();});
      edit.setAttribute('aria-pressed',String(editing));
      menu.append(edit,menuAction(L('Manage artworks'),manage),menuAction(L('Manage collections'),collections),menuAction(L('Publish status'),statusDialog));
    }else if(!guest)menu.append(menuAction(word('login'),signIn));
    if(guest)menu.append(el('span','',L('Viewing only')));
    if(token||guest)menu.append(menuAction(word('logout'),signOut));
    menu.append(menuAction(word('about'),()=>notify('0 3 0',L('Public portfolio of digital illustrations by 0 3 0.'))),
      menuAction(word('clearCache'),async()=>{try{await c.clearCache();}catch(e){notify(L('Error'),e.message);}}));
  }
  async function api(path,body){
    const r=await fetch(new URL('/'+path,config.workerOrigin),{method:body?'POST':'GET',headers:{...(body?{'Content-Type':'application/json'}:{}),...(token?{Authorization:'Bearer '+token}:{})},
      credentials:'omit',cache:'no-store',body:body&&JSON.stringify(body),signal:AbortSignal.timeout(45000)});
    const value=await r.json();
    if(!r.ok){const err=Error(value.error||'HTTP '+r.status);err.status=r.status;throw err;}
    return value;
  }
  async function loadCurrent(){
    const g=generation;const result=await api('content');
    if(g!==generation||!token)throw Error(L('Sign in again'));
    sha=result.sha;revision=result.content.revision;c.setContent(result.content);
  }
  async function signIn(){
    if(!config.googleClientId||!config.workerOrigin){notify(word('login'),L('Google login has not been configured.'));return;}
    const d=toolDialog(word('login')),slot=el('div'),msg=el('p');d.append(slot,msg);d.showModal();
    try{
      if(!window.google?.accounts?.id){
        await new Promise((resolve,reject)=>{const script=el('script');script.src='https://accounts.google.com/gsi/client';script.onload=resolve;script.onerror=()=>reject(Error('Google Identity Services unavailable'));document.head.append(script);});
      }
      if(!d.open)return;
      google.accounts.id.initialize({client_id:config.googleClientId,callback:async({credential})=>{
        if(!d.open)return;
        try{
          const result=await api('login',{credential});
          if(!d.open)return;
          guest=!result.admin;
          if(result.admin){
            token=result.session;generation++;
            expiresTimer=setTimeout(()=>clearSession(),Math.max(1,result.expires-Date.now()));
            await loadCurrent();
          }
          refresh();d.close();
        }catch(e){if(token)await clearSession();msg.textContent=e.message;}
      }});
      google.accounts.id.renderButton(slot,{theme:'outline',type:'standard',size:'medium'});
    }catch(e){msg.textContent=e.message;}
  }
  async function clearSession(){
    generation++;token='';guest=editing=busy=false;sha=revision=commitId=publishState=statusError='';
    clearTimeout(expiresTimer);clearTimeout(pollTimer);activeDialog?.close();window.google?.accounts?.id.disableAutoSelect();
    for(const url of PortfolioArchive.localImages.values())URL.revokeObjectURL(url);
    PortfolioArchive.localImages.clear();refresh();
    const generationAtLogout=generation;
    const publicContent=await PortfolioArchive.readContent().catch(()=>PortfolioArchive.cached('overlay'));
    if(generation===generationAtLogout)c.setContent(publicContent||PortfolioArchive.empty());
  }
  async function signOut(){
    try{if(token)await api('logout',{});}catch(e){notify(L('Error'),e.message);}
    await clearSession();
  }
  let statusNode=null;
  function statusUpdate(){if(statusNode?.isConnected)statusNode.textContent=[statusText(),commitId,statusError].filter(Boolean).join(' · ');}
  async function checkPublished(attempt=0){
    clearTimeout(pollTimer);const target=revision,epoch=pollEpoch;if(!target||!token||busy)return;
    try{
      const data=await PortfolioArchive.readContent('https://zerothreezero.github.io/portfolio/data/portfolio-content.json?revision='+encodeURIComponent(target));
      if(target!==revision||epoch!==pollEpoch)return;
      if(data.revision===target){publishState='Published';statusError='';statusUpdate();return;}
      publishState='Deploying';statusError='';
    }catch(e){if(target!==revision||epoch!==pollEpoch)return;publishState='Error';statusError=e.message;}
    statusUpdate();
    if(attempt<30)pollTimer=setTimeout(()=>checkPublished(attempt+1),10000);
  }
  function statusDialog(){
    const d=toolDialog(L('Publish status'));statusNode=el('p');d.append(statusNode,toolButton(L('Check publication'),()=>checkPublished()));statusUpdate();d.showModal();
    if(!publishState&&revision)void checkPublished();
  }
  async function save(change,uploads=[],baseSha=sha){
    if(!token||busy)throw Error(L('Sign in again'));
    pollEpoch++;clearTimeout(pollTimer);
    const g=generation;busy=true;publishState='Saving';statusError='';statusUpdate();
    try{
      const result=await api('save',{sha:baseSha,change,uploads});
      if(g!==generation)throw Error(L('Sign in again'));
      sha=result.sha;revision=result.content.revision;commitId=result.commit;publishState='Committed to GitHub';c.setContent(result.content);
      statusUpdate();clearTimeout(pollTimer);pollTimer=setTimeout(()=>checkPublished(),1200);
    }catch(e){if(g===generation){publishState='Error';statusError=e.message;statusUpdate();}throw e;}
    finally{if(g===generation)busy=false;}
  }
  function decorate(card,item){if(editing&&token){const b=toolButton(L('Edit'),()=>editor(item.id));b.classList.add('card-edit');card.append(b);}}
  function manage(){
    const d=toolDialog(L('Manage artworks')),search=el('input'),list=el('div','manage-list');search.type='search';search.placeholder=c.t('searchWorks');
    function draw(){
      list.replaceChildren();const known=new Set(c.items.map(a=>a.id));
      const rows=[...c.items,...Object.entries(c.content.artworks).filter(([id])=>!known.has(id)).map(([id,a])=>({id,title:a.title||id}))];
      for(const a of rows.filter(a=>(a.title+' '+a.id).toLowerCase().includes(search.value.toLowerCase()))){
        list.append(toolButton((a.hidden?'◌ ':'')+(a.title||a.id),()=>{d.close();editor(a.id);}));
      }
    }
    search.oninput=draw;d.append(toolButton(L('Add artwork'),()=>{d.close();editor(crypto.randomUUID(),true);}),search,list);draw();activeDialog=d;d.showModal();
  }
  function lifecycle(d,dirty){
    activeDialog=d;
    d.addEventListener('cancel',e=>{if(busy||(dirty()&&!confirm(L('Discard this draft?'))))e.preventDefault();});
    const unload=e=>{if(d.open&&dirty()){e.preventDefault();e.returnValue='';}};
    window.addEventListener('beforeunload',unload);d.addEventListener('close',()=>window.removeEventListener('beforeunload',unload),{once:true});
  }
  function collections(){
    const d=toolDialog(L('Manage collections')),list=el('div'),msg=el('p'),baseSha=sha;
    const rows=structuredClone(c.content.collections),initial=JSON.stringify(rows);
    const dirty=()=>initial!==JSON.stringify(rows);
    const update=()=>msg.textContent=dirty()?L('Unsaved changes'):'';
    function draw(){
      list.replaceChildren();
      rows.forEach(row=>{
        const line=el('div','tool-group'),input=el('input');input.maxLength=100;input.value=row.name;input.setAttribute('aria-label',L('Collections'));
        input.oninput=()=>{row.name=input.value;update();};
        line.append(input,toolButton('×',()=>{rows.splice(rows.indexOf(row),1);draw();}));list.append(line);
      });update();
    }
    const submit=toolButton(L('Save changes'),async()=>{
      submit.disabled=true;list.inert=true;add.disabled=true;msg.textContent=L('Saving');
      try{await save({kind:'collections',value:rows},[],baseSha);d.close();statusDialog();}
      catch(e){msg.textContent=e.message;if(e.status===409)d.append(toolButton(L('Reload from GitHub'),async()=>{try{await loadCurrent();d.close();collections();}catch(err){msg.textContent=err.message;}}));}
      finally{submit.disabled=false;list.inert=false;add.disabled=false;}
    });
    const add=toolButton(L('New collection'),()=>{rows.push({id:crypto.randomUUID(),name:''});draw();});
    d.append(list,add,submit,msg);draw();lifecycle(d,dirty);d.showModal();
  }
  function editor(id,isNew=false){
    const saved=c.content.manualArtworks.find(a=>a.id===id),manual=!!saved||isNew;
    const base=manual?null:c.base(id);
    const initial=structuredClone(manual?(saved||{media:[]}):(c.content.artworks[id]||{}));delete initial.id;
    let draft=structuredClone(initial),undo=[],redo=[],uploading=false,conflict=false;
    const baseSha=sha,pendingFiles=new Map();
    const d=toolDialog(L(isNew?'Add artwork':'Edit')),form=el('div','editor-fields'),msg=el('p'),actions=el('div','tool-group');
    msg.setAttribute('role','status');
    const dirty=()=>JSON.stringify(draft)!==JSON.stringify(initial);
    function remember(){undo.push(structuredClone(draft));if(undo.length>40)undo.shift();redo=[];}
    function change(key,value){remember();if(value===undefined)delete draft[key];else draft[key]=value;indicate();}
    const submit=toolButton(L('Save changes'),async()=>{
      submit.disabled=true;msg.textContent=L('Saving');form.inert=true;actions.inert=true;
      try{
        const selected=new Set([...(draft.media||[]).map(m=>m.path),draft.coverMedia?.path]);
        const uploads=[...pendingFiles.values()].filter(x=>selected.has(x.path)).map(x=>({path:x.path,base64:x.base64}));
        await save({kind:manual?'manual':'override',id,value:draft},uploads,baseSha);
        for(const {path} of uploads)pendingFiles.delete(path);
        d.close();statusDialog();
      }catch(e){
        msg.textContent=e.message;
        if(e.status===409){conflict=true;actions.append(toolButton(L('Reload from GitHub'),async()=>{if(confirm(L('Load current version and discard this draft?')))try{await loadCurrent();d.close();editor(id,isNew);}catch(err){msg.textContent=err.message;}}));}
      }finally{form.inert=actions.inert=false;submit.disabled=conflict||!dirty();}
    });
    const back=toolButton(L('Undo'),()=>{redo.push(draft);draft=undo.pop();draw();});
    const forward=toolButton(L('Redo'),()=>{undo.push(draft);draft=redo.pop();draw();});
    function indicate(){back.disabled=!undo.length;forward.disabled=!redo.length;submit.disabled=!dirty()||uploading||conflict;
      msg.textContent=L(dirty()?'Unsaved changes':'No changes');}
    const sections=new Set(['Basics']);
    function section(title){
      const box=el('details');box.open=sections.has(title);const summary=el('summary','',L(title));box.append(summary);
      box.ontoggle=()=>{if(box.open)sections.add(title);else sections.delete(title);};form.append(box);return box;
    }
    const src={...base,alt:base?.alts?.[0],drawingMinutes:base?.work&&(base.work.hours||0)*60+(base.work.minutes||0),strokes:base?.work?.strokes,nsfw:base?.tags.some(t=>t.includes('nsfw'))};
    function input(box,key,title,type='text'){
      const field=el(['lines','links','area'].includes(type)?'textarea':'input');
      if(field.tagName==='INPUT')field.type=({integer:'number',flag:'checkbox',date:'date'})[type]||'text';
      const original=Object.hasOwn(draft,key)?draft[key]:src[key];
      if(type==='flag')field.checked=!!original;
      else if(type==='links')field.value=(original||[]).map(l=>l.label+' | '+l.url).join('\n');
      else if(Array.isArray(original))field.value=original.join(type==='lines'?'\n':', ');
      else field.value=original??'';
      if(type==='integer'){field.min=0;field.step=1;}
      const line=el('div','editor-row'),reset=toolButton('↶',()=>{change(key,undefined);draw();});reset.title=L('Reset to source');reset.setAttribute('aria-label',L('Reset to source')+' · '+L(title));reset.disabled=!Object.hasOwn(draft,key);
      field.oninput=()=>{
        let v=field.value;
        if(type==='flag')v=field.checked;
        if(type==='integer')v=field.value===''?undefined:field.valueAsNumber;
        if(type==='list'||type==='lines')v=v.split(type==='list'?',':'\n').map(x=>x.trim()).filter(Boolean);
        if(type==='links')v=v.split('\n').filter(x=>x.trim()).map(s=>{const [label,...url]=s.split('|');return {label:label.trim(),url:url.join('|').trim()};});
        change(key,v);reset.disabled=!Object.hasOwn(draft,key);
      };
      line.append(fieldLabel(L(title),field),reset);box.append(line);
    }
    function effective(){const original=manual?PortfolioArchive.manualBase({...draft,id}):base;return original&&PortfolioArchive.merge(original,draft);}
    function mediaControls(box){
      const item=effective();
      if(item)item.imageKeys.forEach((key,i)=>{
        const row=el('div','media-row'),img=el('img');img.src=item.thumbnails[i];img.alt=item.alts[i]||'';
        const cover=toolButton(L('Cover'),()=>{remember();delete draft.coverMedia;draft.cover=key;draw();});cover.setAttribute('aria-pressed',String(!draft.coverMedia&&i===item.coverIndex));
        row.append(img,cover);
        for(const dir of [-1,1]){
          const b=toolButton(dir<0?'↑':'↓',()=>{const order=[...item.imageKeys];[order[i],order[i+dir]]=[order[i+dir],order[i]];change('order',order);draw();});
          b.disabled=i+dir<0||i+dir>=item.images.length;row.append(b);
        }
        if(manual)row.append(toolButton('×',()=>{change('media',draft.media.filter(m=>m.path!==key));draw();}));
        box.append(row);
      });
      if(draft.coverMedia){const preview=el('img','editor-preview');preview.src=PortfolioArchive.localImages.get(draft.coverMedia.path)||draft.coverMedia.path;preview.alt=L('Cover');box.append(preview);}
      if(draft.cover||draft.coverMedia)box.append(toolButton(L('Reset to source')+' · '+L('Cover'),()=>{remember();delete draft.cover;delete draft.coverMedia;draw();}));
      if(draft.order)box.append(toolButton(L('Reset to source')+' · ↑↓',()=>{change('order',undefined);draw();}));
      function uploadField(asCover){
        const file=el('input');file.type='file';file.accept='image/png,image/jpeg,image/webp';file.multiple=!asCover;
        file.onchange=async()=>{
          uploading=true;indicate();file.disabled=true;
          try{
            for(const f of file.files){
              if(!asCover&&draft.media.length>=12)throw Error('Maximum 12 images');
              const upload=await optimizeImage(f);
              if(!d.open){URL.revokeObjectURL(upload.url);return;}
              if(!asCover&&draft.media.some(m=>m.path===upload.path)){URL.revokeObjectURL(upload.url);continue;}
              if([...pendingFiles.values()].reduce((sum,x)=>sum+x.base64.length,upload.base64.length)>5900000){URL.revokeObjectURL(upload.url);throw Error('Upload limit: 4 MiB per save');}
              if(!PortfolioArchive.localImages.has(upload.path)){
                pendingFiles.set(upload.path,upload);PortfolioArchive.localImages.set(upload.path,upload.url);
              }else URL.revokeObjectURL(upload.url);
              const media={path:upload.path,width:upload.width,height:upload.height};
              if(asCover)change('coverMedia',media);else change('media',[...draft.media,media]);
            }
            uploading=false;draw();
          }catch(e){uploading=false;draw();msg.textContent=e.message;}
        };
        box.append(fieldLabel(L(asCover?'Cover':'Choose images'),file));
      }
      if(manual)uploadField(false);
      uploadField(true);
    }
    function draw(){
      form.replaceChildren();const basics=section('Basics'),details=section('Details'),display=section('Display'),media=section('Images');
      for(const args of [['title','Title'],['description','Description','area'],['date','Creation date','date'],['alt','Alternative text','area'],['tags','Tags','list'],['software','Software','list'],['drawingMinutes','Drawing time (minutes)','integer'],['strokes','Strokes','integer']])input(basics,...args);
      for(const args of [['blocks','Text blocks (one per line)','lines'],['links','Links (label | URL, one per line)','links'],['notes','Notes','area'],['palette','Palette (#RRGGBB)','list']])input(details,...args);
      for(const args of [['featured','Featured','flag'],['featuredOrder','Featured order','integer'],['hidden','Hidden','flag'],['nsfw','NSFW','flag']])input(display,...args);
      for(const col of c.content.collections){
        const cb=el('input');cb.type='checkbox';cb.checked=draft.collectionIds?.includes(col.id)||false;
        cb.onchange=()=>{
          const ids=cb.checked?[...(draft.collectionIds||[]),col.id]:(draft.collectionIds||[]).filter(id=>id!==col.id);
          change('collectionIds',ids.length?ids:undefined);
        };
        display.append(fieldLabel(col.name,cb));
      }
      mediaControls(media);indicate();
    }
    const preview=toolButton(L('Preview'),()=>{
      const a=effective();if(!a){msg.textContent=L(manual?'Choose images':'Source post unavailable');return;}
      const p=toolDialog(L('Preview')),img=el('img','editor-preview');img.src=a.thumb;img.alt=a.alts[a.coverIndex]||a.title;
      p.append(img,el('h3','',a.title),el('p','',a.description),el('p','',[a.date,...a.tags,...a.software].filter(Boolean).join(' · ')));
      for(const text of [...(a.blocks||[]),a.notes,...(a.links||[]).map(l=>l.label+' · '+l.url)].filter(Boolean))p.append(el('p','',text));
      p.showModal();
    });
    actions.append(submit,preview,back,forward,toolButton(L('Discard changes'),()=>{if(!dirty()||confirm(L('Discard this draft?')))d.close();}));
    d.append(form,actions,msg);draw();lifecycle(d,dirty);d.addEventListener('close',()=>{for(const f of pendingFiles.values()){PortfolioArchive.localImages.delete(f.path);URL.revokeObjectURL(f.url);}});
    d.showModal();
  }
  async function optimizeImage(file){
    if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>16*1024*1024)throw Error('Expected PNG, JPEG or WebP up to 16 MiB');
    const bitmap=await createImageBitmap(file);
    const scale=Math.min(1,2048/Math.max(bitmap.width,bitmap.height)),canvas=el('canvas');
    canvas.width=Math.max(1,Math.round(bitmap.width*scale));canvas.height=Math.max(1,Math.round(bitmap.height*scale));
    canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close();
    let blob;
    for(const quality of [.85,.7,.5]){blob=await new Promise(r=>canvas.toBlob(r,'image/webp',quality));if(blob&&blob.size<=1048576)break;}
    if(!blob||blob.type!=='image/webp'||blob.size>1048576)throw Error('Image exceeds 1 MiB after optimization');
    const bytes=new Uint8Array(await blob.arrayBuffer()),hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),n=>n.toString(16).padStart(2,'0')).join('');
    const base64=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result.split(',')[1]);r.onerror=reject;r.readAsDataURL(blob);});
    return {path:'assets/uploads/'+hash+'.webp',base64,width:canvas.width,height:canvas.height,url:URL.createObjectURL(blob)};
  }
  return {refresh,decorate,get signedIn(){return !!token;}};
}
