
(() => {
  'use strict';

  const TRANSLATIONS = {"en":{"filterDates":"Filter by date","backToTop":"Back to top","headerAria":"Portfolio header","home":"Home","sections":"Portfolio sections","language":"Interface language","gallery":"Gallery","statistics":"Statistics","introduction":"Introduction","hero1":"Ideas turned","hero2":"into","hero3":"images.","intro":"A place for digital drawings, illustrations and visual experiments. Nothing unnecessary — just art.","galleryAria":"Artwork gallery","selected":"Selected works","gallerySub":"Artworks, from newest to oldest","sortAria":"Sort artworks","newest":"Newest first","oldest":"Oldest first","filterTags":"Filter by tags","searchTags":"Search tags","tagPlaceholder":"Find a tag…","tagFilters":"Tag filters","firstPage":"First page","previous":"Previous","next":"Next","statsAria":"Artwork statistics","statHero1":"Art in","statHero2":"numbers.","statsIntro":"An overview of creation dates and hashtags from your artworks.","productivity":"Monthly productivity","statsYear":"Statistics year","topTags":"Most used tags","uniqueTagCount":"Number of unique artworks with each tag","byYear":"Artworks by year","datedOnly":"Only works with known creation dates","aboutStats":"About these statistics","statsFootnote":"Years and months use the artwork creation code (YYMMDD), not the publication date. Time and strokes are counted only when recorded, e.g. 1h 25m 9212s (s = strokes).","rights":"All works belong to their creator.","tagline":"Made for the art, not the algorithm.","viewerAria":"Artwork viewer","prevImage":"Previous image","nextImage":"Next image","close":"Close","viewerKeys":"← → — another artwork or image","viewerClose":"Esc — close","allWorks":"All works","noTags":"No tags found","active":"Active","open":"Open","images":"images","unnamed":"Untitled","created":"Created","work":"Work","hours":"h","minutes":"min","strokes":"strokes","page":"Page","loadArt":"Loading artworks…","loadPosts":"Retrieving posts…","loadProgress":"Found {count} entries · scanning archive…","updated":"Updated: {date}","loadError":"Could not load the gallery","partial":"Loaded {count} artworks · incomplete archive","loaded":"{count} unique artworks","emptyLoading":"Loading gallery…","emptyError":"Unable to load artworks","emptyFiltered":"No artworks with this tag","emptyNoPosts":"The gallery is empty","emptyLoadInfo":"Retrieving posts.","emptyErrorInfo":"Check your connection and try again.","emptyFilteredInfo":"Choose another tag or clear the filter.","emptyNoPostsInfo":"Posts with artwork will appear here automatically.","retry":"Try again","total":"Total artworks","afterDuplicates":"After removing duplicates","bestMonth":"Most productive month","artCount":"{count} artworks","noDated":"No dated artworks yet","mostTag":"Most used tag","noTagsYet":"No tags yet","withDate":"With creation dates","withoutDate":"{count} without a creation date","drawingTime":"Drawing time","recordedTime":"Across {count} artworks with time data","totalStrokes":"Strokes drawn","recordedStrokes":"Across {count} artworks with stroke counts","topSoftware":"Most used software","noSoftware":"No software tags","creativeYears":"Active years","datedYears":"Years with dated artworks","unknownYears":"No known dates","allYears":"All years","top12Months":"12 most active months across all years","eachMonth":"Every month of {year}","notEnough":"Not enough data for this section yet.","statsExplain":"This gallery contains {total} unique artworks. {dated} have a valid YYMMDD creation date; {undated} do not. There are {tags} thematic tags (excluding #art, #digitalart and software tags). A work can have multiple tags, so tag totals can exceed artwork totals.","visualArchive":"Visual archive","eyebrowGallery":"Digital illustration / Visual archive","eyebrowStats":"Art archive / Data overview","viewerMarker":"Artwork / 0 3 0","gallerySubOldest":"Artworks, from oldest to newest","themeLabel":"Color theme","themeEmber":"Ember","themeLight":"Light","themeGolden":"Golden Hour","yearFilter":"Year","fromDate":"From","toDate":"To","clearDates":"Clear dates","lastPage":"Last page","artworkSize":"Artwork size","sizeNormal":"Original","sizeCompact":"Compact","sizeSmall":"Smaller"},"ja":{"filterDates":"日付で絞り込む","backToTop":"ページ上部へ","headerAria":"ポートフォリオのヘッダー","home":"ホーム","sections":"ページ","language":"表示言語","gallery":"ギャラリー","statistics":"統計","introduction":"はじめに","hero1":"アイデアを","hero2":"ひとつの","hero3":"絵に。","intro":"デジタル作品、イラスト、視覚的な実験を集めた場所。余計なものはなく、アートだけ。","galleryAria":"作品ギャラリー","selected":"作品一覧","gallerySub":"新しい作品から順に表示","sortAria":"作品の並べ替え","newest":"新しい順","oldest":"古い順","filterTags":"タグで絞り込む","searchTags":"タグを検索","tagPlaceholder":"タグを検索…","tagFilters":"タグフィルター","firstPage":"最初のページ","previous":"前へ","next":"次へ","statsAria":"作品の統計","statHero1":"数字で見る","statHero2":"アート。","statsIntro":"作品の制作日とハッシュタグから集計したデータ。","productivity":"月別の制作数","statsYear":"集計年","topTags":"よく使うタグ","uniqueTagCount":"タグを含む作品数","byYear":"年別作品数","datedOnly":"制作日がある作品のみ","aboutStats":"統計について","statsFootnote":"年月は投稿日ではなく、作品名の制作日コード（YYMMDD）を使用します。時間とストローク数は記録されている作品のみを集計します（例：1h 25m 9212s）。","rights":"すべての作品の権利は作者に帰属します。","tagline":"アルゴリズムより、アートのために。","viewerAria":"作品ビューアー","prevImage":"前の画像","nextImage":"次の画像","close":"閉じる","viewerKeys":"← → — 別の作品・画像","viewerClose":"Esc — 閉じる","allWorks":"すべての作品","noTags":"タグが見つかりません","active":"選択中","open":"開く","images":"枚の画像","unnamed":"無題","created":"制作日","work":"制作データ","hours":"時間","minutes":"分","strokes":"ストローク","page":"ページ","loadArt":"作品を読み込み中…","loadPosts":"投稿を取得中…","loadProgress":"{count} 件を取得 · アーカイブを確認中…","updated":"更新：{date}","loadError":"ギャラリーを読み込めませんでした","partial":"{count} 作品を取得 · 一部のみ","loaded":"作品数：{count}","emptyLoading":"読み込み中…","emptyError":"作品を読み込めません","emptyFiltered":"このタグの作品はありません","emptyNoPosts":"作品はまだありません","emptyLoadInfo":"投稿を取得しています。","emptyErrorInfo":"接続を確認して再試行してください。","emptyFilteredInfo":"別のタグを選ぶか、解除してください。","emptyNoPostsInfo":"作品のある投稿が自動表示されます。","retry":"再試行","total":"作品総数","afterDuplicates":"重複を除外","bestMonth":"最も制作した月","artCount":"{count} 作品","noDated":"日付のある作品はありません","mostTag":"最多タグ","noTagsYet":"タグなし","withDate":"制作日あり","withoutDate":"制作日なし：{count}","drawingTime":"制作時間","recordedTime":"時間が記録された {count} 作品","totalStrokes":"総ストローク数","recordedStrokes":"記録がある {count} 作品","topSoftware":"よく使うソフト","noSoftware":"ソフトのタグなし","creativeYears":"制作活動年数","datedYears":"日付がある作品の年数","unknownYears":"日付なし","allYears":"すべての年","top12Months":"全期間の制作数上位12か月","eachMonth":"{year}年の各月","notEnough":"表示できるデータがまだありません。","statsExplain":"重複を除いた作品数は {total} 件。制作日コード（YYMMDD）がある作品は {dated} 件、不明は {undated} 件。テーマタグは {tags} 種類です（#art、#digitalart とソフトのタグを除く）。複数タグがあるため、タグの合計は作品数を上回ることがあります。","visualArchive":"ビジュアルアーカイブ","eyebrowGallery":"デジタルイラスト / 作品アーカイブ","eyebrowStats":"作品アーカイブ / データ","viewerMarker":"作品 / 0 3 0","gallerySubOldest":"古い作品から順に表示","themeLabel":"カラーテーマ","themeEmber":"エンバー","themeLight":"ライト","themeGolden":"ゴールデンアワー","yearFilter":"年","fromDate":"開始日","toDate":"終了日","clearDates":"日付をクリア","lastPage":"最後のページ","artworkSize":"作品サイズ","sizeNormal":"標準","sizeCompact":"コンパクト","sizeSmall":"小さめ"},"es":{"filterDates":"Filtrar por fecha","backToTop":"Volver arriba","headerAria":"Cabecera del portafolio","home":"Inicio","sections":"Secciones del portafolio","language":"Idioma de la interfaz","gallery":"Galería","statistics":"Estadísticas","introduction":"Introducción","hero1":"Ideas hechas","hero2":"","hero3":"imágenes.","intro":"Un espacio para dibujos digitales, ilustraciones y experimentos visuales. Sin extras: solo arte.","galleryAria":"Galería de obras","selected":"Obras seleccionadas","gallerySub":"Obras de la más reciente a la más antigua","sortAria":"Ordenar obras","newest":"Más recientes","oldest":"Más antiguas","filterTags":"Filtrar por etiquetas","searchTags":"Buscar etiquetas","tagPlaceholder":"Buscar etiqueta…","tagFilters":"Filtros de etiquetas","firstPage":"Primera página","previous":"Anterior","next":"Siguiente","statsAria":"Estadísticas de obras","statHero1":"Arte en","statHero2":"cifras.","statsIntro":"Resumen de fechas de creación y etiquetas de las obras.","productivity":"Productividad mensual","statsYear":"Año de estadísticas","topTags":"Etiquetas más usadas","uniqueTagCount":"Número de obras distintas con cada etiqueta","byYear":"Obras por año","datedOnly":"Solo obras con fecha de creación conocida","aboutStats":"Sobre estas estadísticas","statsFootnote":"Los meses y años provienen del código de creación (YYMMDD), no de la fecha de publicación. El tiempo y los trazos se cuentan solo cuando constan, p. ej., 1h 25m 9212s (s = trazos).","rights":"Todas las obras pertenecen a su autor.","tagline":"Hecho para el arte, no para el algoritmo.","viewerAria":"Visor de obras","prevImage":"Imagen anterior","nextImage":"Imagen siguiente","close":"Cerrar","viewerKeys":"← → — otra obra o imagen","viewerClose":"Esc — cerrar","allWorks":"Todas las obras","noTags":"No se encontraron etiquetas","active":"Activo","open":"Abrir","images":"imágenes","unnamed":"Sin título","created":"Creado","work":"Trabajo","hours":"h","minutes":"min","strokes":"trazos","page":"Página","loadArt":"Cargando obras…","loadPosts":"Recuperando publicaciones…","loadProgress":"{count} entradas · revisando el archivo…","updated":"Actualizado: {date}","loadError":"No se pudo cargar la galería","partial":"{count} obras · archivo incompleto","loaded":"{count} obras únicas","emptyLoading":"Cargando galería…","emptyError":"No se pudieron cargar las obras","emptyFiltered":"No hay obras con esta etiqueta","emptyNoPosts":"La galería está vacía","emptyLoadInfo":"Recuperando publicaciones.","emptyErrorInfo":"Comprueba la conexión e inténtalo de nuevo.","emptyFilteredInfo":"Elige otra etiqueta o elimina el filtro.","emptyNoPostsInfo":"Aquí aparecerán las publicaciones con obras.","retry":"Reintentar","total":"Total de obras","afterDuplicates":"Sin duplicados","bestMonth":"Mes más productivo","artCount":"{count} obras","noDated":"Sin obras fechadas aún","mostTag":"Etiqueta más usada","noTagsYet":"Sin etiquetas","withDate":"Con fecha de creación","withoutDate":"{count} sin fecha","drawingTime":"Tiempo de dibujo","recordedTime":"De {count} obras con tiempo registrado","totalStrokes":"Trazos realizados","recordedStrokes":"De {count} obras con trazos registrados","topSoftware":"Programa más usado","noSoftware":"Sin etiquetas de programas","creativeYears":"Años de actividad","datedYears":"Años con obras fechadas","unknownYears":"Sin fechas conocidas","allYears":"Todos los años","top12Months":"Los 12 meses de mayor actividad","eachMonth":"Cada mes de {year}","notEnough":"Aún no hay datos suficientes.","statsExplain":"La galería contiene {total} obras únicas. {dated} tienen una fecha YYMMDD válida y {undated} no. Hay {tags} etiquetas temáticas (sin #art, #digitalart ni programas). Una obra puede tener varias etiquetas, por lo que sus recuentos pueden superar el total de obras.","visualArchive":"Archivo visual","eyebrowGallery":"Ilustración digital / Archivo visual","eyebrowStats":"Archivo de arte / Datos","viewerMarker":"Obra / 0 3 0","gallerySubOldest":"Obras de la más antigua a la más reciente","themeLabel":"Tema de color","themeEmber":"Brasa","themeLight":"Claro","themeGolden":"Hora dorada","yearFilter":"Año","fromDate":"Desde","toDate":"Hasta","clearDates":"Borrar fechas","lastPage":"Última página","artworkSize":"Tamaño de obras","sizeNormal":"Normal","sizeCompact":"Compacto","sizeSmall":"Más pequeño"},"fr":{"filterDates":"Filtrer par date","backToTop":"Retour en haut","headerAria":"En-tête du portfolio","home":"Accueil","sections":"Sections du portfolio","language":"Langue de l’interface","gallery":"Galerie","statistics":"Statistiques","introduction":"Introduction","hero1":"Des idées","hero2":"devenues","hero3":"images.","intro":"Un espace pour les dessins numériques, les illustrations et les expérimentations visuelles. Rien de superflu, juste l’art.","galleryAria":"Galerie d’œuvres","selected":"Œuvres sélectionnées","gallerySub":"De la plus récente à la plus ancienne","sortAria":"Trier les œuvres","newest":"Plus récentes","oldest":"Plus anciennes","filterTags":"Filtrer par tags","searchTags":"Rechercher des tags","tagPlaceholder":"Rechercher un tag…","tagFilters":"Filtres de tags","firstPage":"Première page","previous":"Précédent","next":"Suivant","statsAria":"Statistiques des œuvres","statHero1":"L’art en","statHero2":"chiffres.","statsIntro":"Aperçu des dates de création et des hashtags des œuvres.","productivity":"Production mensuelle","statsYear":"Année des statistiques","topTags":"Tags les plus fréquents","uniqueTagCount":"Nombre d’œuvres distinctes par tag","byYear":"Œuvres par année","datedOnly":"Uniquement les œuvres datées","aboutStats":"À propos des statistiques","statsFootnote":"Les mois et les années viennent du code de création (YYMMDD), pas de la date de publication. Le temps et les traits ne sont comptés que lorsqu’ils sont indiqués, par ex. 1h 25m 9212s (s = traits).","rights":"Toutes les œuvres appartiennent à leur créateur.","tagline":"Pour l’art, pas pour l’algorithme.","viewerAria":"Visionneuse d’œuvres","prevImage":"Image précédente","nextImage":"Image suivante","close":"Fermer","viewerKeys":"← → — autre œuvre ou image","viewerClose":"Esc — fermer","allWorks":"Toutes les œuvres","noTags":"Aucun tag trouvé","active":"Actif","open":"Ouvrir","images":"images","unnamed":"Sans titre","created":"Créée le","work":"Travail","hours":"h","minutes":"min","strokes":"traits","page":"Page","loadArt":"Chargement des œuvres…","loadPosts":"Récupération des publications…","loadProgress":"{count} entrées · analyse de l’archive…","updated":"Actualisé : {date}","loadError":"Impossible de charger la galerie","partial":"{count} œuvres · archive incomplète","loaded":"{count} œuvres uniques","emptyLoading":"Chargement de la galerie…","emptyError":"Impossible de charger les œuvres","emptyFiltered":"Aucune œuvre avec ce tag","emptyNoPosts":"La galerie est vide","emptyLoadInfo":"Récupération des publications.","emptyErrorInfo":"Vérifiez votre connexion et réessayez.","emptyFilteredInfo":"Choisissez un autre tag ou effacez le filtre.","emptyNoPostsInfo":"Les publications contenant des œuvres apparaîtront ici.","retry":"Réessayer","total":"Total des œuvres","afterDuplicates":"Après dédoublonnage","bestMonth":"Mois le plus productif","artCount":"{count} œuvres","noDated":"Pas encore d’œuvres datées","mostTag":"Tag le plus fréquent","noTagsYet":"Pas encore de tags","withDate":"Avec date de création","withoutDate":"{count} sans date","drawingTime":"Temps de dessin","recordedTime":"Sur {count} œuvres avec durée","totalStrokes":"Traits dessinés","recordedStrokes":"Sur {count} œuvres avec nombre de traits","topSoftware":"Logiciel le plus utilisé","noSoftware":"Aucun tag de logiciel","creativeYears":"Années d’activité","datedYears":"Années avec œuvres datées","unknownYears":"Aucune date connue","allYears":"Toutes les années","top12Months":"12 mois les plus actifs","eachMonth":"Chaque mois de {year}","notEnough":"Pas encore assez de données.","statsExplain":"La galerie contient {total} œuvres uniques. {dated} ont un code de création YYMMDD valide, {undated} n’en ont pas. Il y a {tags} tags thématiques (hors #art, #digitalart et tags de logiciels). Une œuvre pouvant porter plusieurs tags, leur total peut dépasser le nombre d’œuvres.","visualArchive":"Archives visuelles","eyebrowGallery":"Illustration numérique / Archives visuelles","eyebrowStats":"Archives d’art / Données","viewerMarker":"Œuvre / 0 3 0","gallerySubOldest":"De la plus ancienne à la plus récente","themeLabel":"Thème de couleur","themeEmber":"Braise","themeLight":"Clair","themeGolden":"Heure dorée","yearFilter":"Année","fromDate":"Du","toDate":"Au","clearDates":"Effacer les dates","lastPage":"Dernière page","artworkSize":"Taille des œuvres","sizeNormal":"Normal","sizeCompact":"Compact","sizeSmall":"Plus petit"},"zh-CN":{"filterDates":"按日期筛选","backToTop":"返回顶部","headerAria":"作品集页眉","home":"首页","sections":"作品集栏目","language":"界面语言","gallery":"画廊","statistics":"统计","introduction":"简介","hero1":"让想法","hero2":"化为","hero3":"画面。","intro":"这里收集数字绘画、插画和视觉实验。没有多余的东西，只有艺术。","galleryAria":"作品画廊","selected":"作品精选","gallerySub":"按创作日期从新到旧排序","sortAria":"作品排序","newest":"最新优先","oldest":"最早优先","filterTags":"按标签筛选","searchTags":"搜索标签","tagPlaceholder":"搜索标签…","tagFilters":"标签筛选","firstPage":"第一页","previous":"上一页","next":"下一页","statsAria":"作品统计","statHero1":"用数字","statHero2":"看艺术。","statsIntro":"根据作品创作日期和话题标签生成的统计。","productivity":"每月创作量","statsYear":"统计年份","topTags":"最常用标签","uniqueTagCount":"使用该标签的独立作品数","byYear":"每年作品数","datedOnly":"仅统计有创作日期的作品","aboutStats":"关于统计","statsFootnote":"月份和年份取自作品中的创作日期代码（YYMMDD），而非发布时间。时长与笔画数仅在作品中注明时统计，例如 1h 25m 9212s（s 表示笔画）。","rights":"所有作品版权归创作者所有。","tagline":"为艺术而作，而非算法。","viewerAria":"作品查看器","prevImage":"上一张图片","nextImage":"下一张图片","close":"关闭","viewerKeys":"← → — 切换作品或图片","viewerClose":"Esc — 关闭","allWorks":"所有作品","noTags":"未找到标签","active":"当前筛选","open":"打开","images":"张图片","unnamed":"无标题","created":"创作日期","work":"作品数据","hours":"小时","minutes":"分钟","strokes":"笔画","page":"第","loadArt":"正在加载作品…","loadPosts":"正在获取帖子…","loadProgress":"已获取 {count} 条记录 · 正在扫描…","updated":"更新于：{date}","loadError":"无法加载画廊","partial":"已加载 {count} 件作品 · 档案不完整","loaded":"共 {count} 件独立作品","emptyLoading":"正在加载画廊…","emptyError":"无法加载作品","emptyFiltered":"没有包含此标签的作品","emptyNoPosts":"画廊暂无作品","emptyLoadInfo":"正在获取帖子。","emptyErrorInfo":"请检查网络连接并重试。","emptyFilteredInfo":"请选择其他标签或清除筛选。","emptyNoPostsInfo":"包含作品的帖子会自动显示在这里。","retry":"重试","total":"作品总数","afterDuplicates":"去重后","bestMonth":"创作最多的月份","artCount":"{count} 件作品","noDated":"暂无带日期的作品","mostTag":"最常用标签","noTagsYet":"暂无标签","withDate":"有创作日期","withoutDate":"{count} 件无日期","drawingTime":"创作时长","recordedTime":"来自 {count} 件有时长记录的作品","totalStrokes":"总笔画数","recordedStrokes":"来自 {count} 件有笔画记录的作品","topSoftware":"最常用软件","noSoftware":"无软件标签","creativeYears":"创作年份数","datedYears":"有作品记录的年份","unknownYears":"暂无已知日期","allYears":"所有年份","top12Months":"历年来创作最多的12个月","eachMonth":"{year} 年每个月","notEnough":"目前没有足够的数据。","statsExplain":"画廊共有 {total} 件独立作品，其中 {dated} 件包含有效的 YYMMDD 创作日期，{undated} 件没有。共有 {tags} 个主题标签（不包括 #art、#digitalart 和软件标签）。一件作品可能有多个标签，因此标签统计总和可能超过作品数量。","visualArchive":"视觉档案","eyebrowGallery":"数字插画 / 视觉档案","eyebrowStats":"作品档案 / 数据概览","viewerMarker":"作品 / 0 3 0","gallerySubOldest":"按创作日期从旧到新排序","themeLabel":"颜色主题","themeEmber":"余烬","themeLight":"浅色","themeGolden":"黄金时刻","yearFilter":"年份","fromDate":"开始日期","toDate":"结束日期","clearDates":"清除日期","lastPage":"最后一页","artworkSize":"作品大小","sizeNormal":"标准","sizeCompact":"紧凑","sizeSmall":"更小"},"uk":{"filterDates":"Фільтр за датою","backToTop":"Нагору","headerAria":"Шапка портфоліо","home":"На початок","sections":"Розділи портфоліо","language":"Мова інтерфейсу","gallery":"Галерея","statistics":"Статистика","introduction":"Вступ","hero1":"Ідеї, що стали","hero2":"","hero3":"малюнками.","intro":"Простір для цифрових малюнків, ілюстрацій та візуальних експериментів. Нічого зайвого — лише мистецтво.","galleryAria":"Галерея робіт","selected":"Обрані роботи","gallerySub":"Від найновіших до найдавніших","sortAria":"Сортування робіт","newest":"Спочатку найновіші","oldest":"Спочатку найдавніші","filterTags":"Фільтр за тегами","searchTags":"Пошук тегів","tagPlaceholder":"Знайти тег…","tagFilters":"Фільтри тегів","firstPage":"Перша сторінка","previous":"Попередня","next":"Наступна","statsAria":"Статистика робіт","statHero1":"Мистецтво в","statHero2":"цифрах.","statsIntro":"Статистика дат створення малюнків і хештегів.","productivity":"Продуктивність за місяцями","statsYear":"Рік статистики","topTags":"Найчастіші теги","uniqueTagCount":"Кількість унікальних робіт із тегом","byYear":"Роботи за роками","datedOnly":"Лише за визначеними датами створення","aboutStats":"Про цю статистику","statsFootnote":"Роки й місяці визначаються датою створення YYMMDD, а не датою публікації. Час і штрихи враховуються лише там, де їх зазначено, наприклад 1h 25m 9212s (s — штрихи).","rights":"Усі роботи належать автору.","tagline":"Для мистецтва, а не алгоритму.","viewerAria":"Перегляд роботи","prevImage":"Попереднє зображення","nextImage":"Наступне зображення","close":"Закрити","viewerKeys":"← → — інша робота або зображення","viewerClose":"Esc — закрити","allWorks":"Усі роботи","noTags":"Тегів не знайдено","active":"Активний","open":"Відкрити","images":"зображень","unnamed":"Без назви","created":"Створено","work":"Робота","hours":"год","minutes":"хв","strokes":"штрихів","page":"Сторінка","loadArt":"Завантаження робіт…","loadPosts":"Отримуємо публікації…","loadProgress":"Отримано {count} записів · перевіряємо архів…","updated":"Оновлено: {date}","loadError":"Не вдалося завантажити галерею","partial":"Завантажено {count} робіт · неповний архів","loaded":"{count} унікальних робіт","emptyLoading":"Завантаження галереї…","emptyError":"Не вдалося завантажити роботи","emptyFiltered":"Робіт із цим тегом поки немає","emptyNoPosts":"Галерея поки порожня","emptyLoadInfo":"Отримуємо публікації.","emptyErrorInfo":"Перевір з’єднання та спробуй ще раз.","emptyFilteredInfo":"Обери інший тег або скинь фільтр.","emptyNoPostsInfo":"Публікації з малюнками з’являться тут автоматично.","retry":"Спробувати ще раз","total":"Усього робіт","afterDuplicates":"Після видалення повторів","bestMonth":"Найпродуктивніший місяць","artCount":"{count} робіт","noDated":"Ще немає датованих робіт","mostTag":"Найчастіший тег","noTagsYet":"Тегів поки немає","withDate":"Із визначеною датою","withoutDate":"{count} без дати створення","drawingTime":"Час малювання","recordedTime":"Із {count} робіт із записом часу","totalStrokes":"Зроблено штрихів","recordedStrokes":"Із {count} робіт із кількістю штрихів","topSoftware":"Найчастіша програма","noSoftware":"Немає тегів програм","creativeYears":"Років творчості","datedYears":"Роки з датованими роботами","unknownYears":"Без визначених дат","allYears":"Усі роки","top12Months":"12 найактивніших місяців за всі роки","eachMonth":"Кожен місяць {year} року","notEnough":"Поки недостатньо даних.","statsExplain":"У галереї {total} унікальних робіт. Із них {dated} мають коректний код дати YYMMDD, {undated} — без нього. Є {tags} тематичних тегів (без #art, #digitalart та тегів програм). Одна робота може мати кілька тегів, тому сума тегів може перевищувати кількість малюнків.","visualArchive":"Візуальний архів","eyebrowGallery":"Цифрова ілюстрація / Візуальний архів","eyebrowStats":"Архів малюнків / Статистика","viewerMarker":"Робота / 0 3 0","gallerySubOldest":"Від найдавніших до найновіших","themeLabel":"Кольорова тема","themeEmber":"Жар","themeLight":"Світла","themeGolden":"Золота година","yearFilter":"Рік","fromDate":"Від","toDate":"До","clearDates":"Очистити дати","lastPage":"Остання сторінка","artworkSize":"Розмір робіт","sizeNormal":"Звичайний","sizeCompact":"Компактний","sizeSmall":"Менший"}};
  const localeMap={en:'en-US',ja:'ja-JP',es:'es-ES',fr:'fr-FR','zh-CN':'zh-CN',uk:'uk-UA'};
  const langs=Object.keys(TRANSLATIONS);
  let language='en';
  try{const saved=localStorage.getItem('030-portfolio-lang');if(langs.includes(saved))language=saved;}catch(_){}
  // V15: a viewport-based, scroll-driven day-to-night sky. Using a stable
  // distance (rather than document height) prevents newly streamed artwork
  // batches from unexpectedly reversing the transition.
  let skyFrame=0;
  function scheduleSkyUpdate(){
    if(skyFrame)return;
    skyFrame=requestAnimationFrame(()=>{
      skyFrame=0;
      const distance=Math.max(2000,window.innerHeight*3.35);
      const progress=Math.min(1,Math.max(0,window.scrollY/distance));
      const ease=progress*progress*(3-2*progress);
      const stars=Math.min(1,Math.max(0,(progress-.42)/.53));
      const starEase=stars*stars*(3-2*stars);
      const scene=document.querySelector('.sunset-environment');
      if(!scene)return;
      scene.style.setProperty('--sunset-progress',ease.toFixed(4));
      scene.style.setProperty('--stars-opacity',starEase.toFixed(4));
    });
  }
  function buildNightStars(){
    const field=document.getElementById('night-stars');
    if(!field||field.children.length)return;
    // Seeded positions prevent stars from teleporting between page loads.
    let seed=301126;
    const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
    const fragment=document.createDocumentFragment();
    for(let i=0;i<108;i++){
      const star=document.createElement('i');star.className='night-star';
      const size=i%11===0?2.35:1.0+rand()*1.08;
      star.style.cssText=`--x:${(rand()*100).toFixed(2)}%;--y:${(rand()*100).toFixed(2)}%;--size:${size.toFixed(2)}px;--alpha:${(.43+rand()*.54).toFixed(2)};--duration:${(4+rand()*7).toFixed(2)}s;--delay:${(-rand()*12).toFixed(2)}s;--dx:${(-5+rand()*10).toFixed(2)}px;--dy:${(-6+rand()*9).toFixed(2)}px`;
      fragment.appendChild(star);
    }
    field.appendChild(fragment);
  }
  const themes=['ember','light','golden'];
  let theme='ember';
  try{const stored=localStorage.getItem('030-portfolio-theme');if(themes.includes(stored))theme=stored;}catch(_){}
  function setTheme(value){
    if(!themes.includes(value))return;
    theme=value;document.body.dataset.theme=value;
    document.documentElement.style.colorScheme=value==='light'?'light':'dark';
    document.querySelector('meta[name="theme-color"]').content=({ember:'#100d0a',light:'#faf7f2',golden:'#341a0a'})[value];
    $('#theme').value=value;
    try{localStorage.setItem('030-portfolio-theme',value);}catch(_){}
    scheduleSkyUpdate();
  }
  const t=(key,vars={})=>String(TRANSLATIONS[language]?.[key]??TRANSLATIONS.en[key]??key).replace(/\{(\w+)\}/g,(_,n)=>vars[n]??'');
  const formatNumber=n=>new Intl.NumberFormat(localeMap[language]).format(n);
  function localizeStatic(){
    document.documentElement.lang=language;
    for(const node of document.querySelectorAll('[data-i18n]'))node.textContent=t(node.dataset.i18n);
    for(const node of document.querySelectorAll('[data-i18n-aria]'))node.setAttribute('aria-label',t(node.dataset.i18nAria));
    for(const node of document.querySelectorAll('[data-i18n-placeholder]'))node.placeholder=t(node.dataset.i18nPlaceholder);
    $('#language').value=language;
    $('#theme').value=theme;
    $('#gallery-size').value=gallerySize;
  }
  function setLanguage(value){
    if(!langs.includes(value))return;
    language=value;try{localStorage.setItem('030-portfolio-lang',language);}catch(_){}
    localizeStatic();renderTags();renderGallery();renderStats();if(state.activeId)showViewerImage();updateStatus();
  }
  let fetchedAt=null, loadedCount=0, loadingStatus='';
  function updateStatus(){
    const status=$('#load-status');
    if(state.loading){status.textContent=loadingStatus||t('loadArt');status.className='status-line loading';}
    else if(state.error){status.textContent=state.items.length?t('partial',{count:state.items.length}):t('loadError');status.className='status-line warn';}
    else {status.textContent=t('loaded',{count:state.items.length});status.className='status-line';}
    $('#updated').textContent=fetchedAt?t('updated',{date:new Intl.DateTimeFormat(localeMap[language],{dateStyle:'short',timeStyle:'short'}).format(fetchedAt)}):'';
  }

  const HANDLE = 'zerothreezero.bsky.social';
  const API = 'https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed';
  const MAX_PAGES = 10;
  const STREAM_BATCH = 32;
  const GALLERY_SIZES=['normal','compact','small'];
  let gallerySize='small';
  try{const saved=localStorage.getItem('030-portfolio-size-v15');if(GALLERY_SIZES.includes(saved))gallerySize=saved;}catch(_){}
  document.body.dataset.gallerySize=gallerySize;

  const HIDDEN_POST_IDS = new Set([]);
  const state = {items:[],tag:'',year:'all',dateFrom:'',dateTo:'',sort:'recent',view:'gallery',statsYear:'all',loading:true,error:false,activeId:null,pictureIndex:0};
  const $ = s=>document.querySelector(s);
  $('#gallery-size').value=gallerySize;
  const gallery = $('#gallery'), viewer = $('#viewer');
  const el = (tag, cls, text) => {const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;};
  const unique = a=>[...new Set(a.filter(Boolean))];
  // Radial spoiler reveal is driven in pixels, including in Firefox where
  // animating unregistered CSS properties may otherwise jump between frames.
  const revealStates=new WeakMap();
  const activeReveals=new Set();
  let revealFrame=0,lastRevealFrame=0;
  function setRevealSize(button,state){
    const radius=state.max*state.progress;
    button.style.setProperty('--reveal-x',`${state.x.toFixed(1)}px`);
    button.style.setProperty('--reveal-y',`${state.y.toFixed(1)}px`);
    button.style.setProperty('--reveal-r',`${radius.toFixed(1)}px`);
    const overlay=button.querySelector('.art-reveal');
    if(overlay)overlay.style.clipPath=`circle(${radius.toFixed(1)}px at ${state.x.toFixed(1)}px ${state.y.toFixed(1)}px)`;
  }
  function startReveal(button,event,show){
    let current=revealStates.get(button);
    const rect=button.getBoundingClientRect();
    if(!current){current={progress:0,target:0,x:rect.width/2,y:rect.height/2,max:0};revealStates.set(button,current);}
    if(show&&event&&Number.isFinite(event.clientX)&&Number.isFinite(event.clientY)){
      // Coordinates must account for scaled/translated artwork; a proportional
      // conversion places the center on the actual pixel underneath the cursor.
      current.x=Math.max(0,Math.min(rect.width,((event.clientX-rect.left)/Math.max(1,rect.width))*button.offsetWidth));
      current.y=Math.max(0,Math.min(rect.height,((event.clientY-rect.top)/Math.max(1,rect.height))*button.offsetHeight));
    }
    const w=button.offsetWidth,h=button.offsetHeight;
    current.max=Math.max(Math.hypot(current.x,current.y),Math.hypot(w-current.x,current.y),Math.hypot(current.x,h-current.y),Math.hypot(w-current.x,h-current.y))+18;
    current.target=show?1:0;
    if(matchMedia('(prefers-reduced-motion: reduce)').matches){current.progress=current.target;setRevealSize(button,current);activeReveals.delete(button);return;}
    activeReveals.add(button);
    if(!revealFrame){lastRevealFrame=performance.now();revealFrame=requestAnimationFrame(animateReveals);}
  }
  function animateReveals(time){
    revealFrame=0;const dt=Math.min(110,Math.max(1,time-lastRevealFrame));lastRevealFrame=time;
    const eased=1-Math.exp(-dt/185);
    for(const button of activeReveals){
      if(!button.isConnected){activeReveals.delete(button);continue;}
      const state=revealStates.get(button);if(!state){activeReveals.delete(button);continue;}
      state.progress+=(state.target-state.progress)*eased;
      if(Math.abs(state.target-state.progress)<.002){state.progress=state.target;activeReveals.delete(button);}
      setRevealSize(button,state);
    }
    if(activeReveals.size)revealFrame=requestAnimationFrame(animateReveals);
  }
  // Render only visible spoiler particles, with a single animation loop for all cards.
  // This is an original approximation of Telegram's shimmering media spoiler,
  // not its proprietary implementation. CSS alone preserves a soft veil as a fallback.
  const spoilerCanvases=new Map();
  const spoilerVisible=new Set();
  const spoilerMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let spoilerFrame=0,lastSpoilerTime=0;
  const spoilerObserver=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>{
    for(const entry of entries){
      if(entry.isIntersecting)spoilerVisible.add(entry.target);
      else spoilerVisible.delete(entry.target);
    }
    if(spoilerVisible.size&&!spoilerFrame&&!spoilerMotion.matches)spoilerFrame=requestAnimationFrame(drawSpoilers);
  },{rootMargin:'100px 0px 100px 0px'}):null;
  function attachSpoilerParticles(canvas,button){
    const sparks=Array.from({length:/Firefox\//.test(navigator.userAgent)?105:140},()=>({
      x:Math.random(),y:Math.random(),size:.45+Math.random()*1.4,
      speed:.12+Math.random()*.32,phase:Math.random()*Math.PI*2,
      glow:.2+Math.random()*.8,drift:(Math.random()-.5)*.015
    }));
    spoilerCanvases.set(canvas,{button,sparks,ctx:canvas.getContext('2d',{alpha:true})});
    if(spoilerObserver)spoilerObserver.observe(canvas);
    else spoilerVisible.add(canvas);
    if(!spoilerFrame&&!spoilerMotion.matches)spoilerFrame=requestAnimationFrame(drawSpoilers);
  }
  function stopSpoilers(){
    if(spoilerFrame)cancelAnimationFrame(spoilerFrame);
    spoilerFrame=0;
  }
  function drawSpoilers(time){
    spoilerFrame=0;
    if(spoilerMotion.matches||document.hidden||!spoilerVisible.size)return;
    // 30 frames per second is sufficient for the soft shimmer, and saves power.
    if(time-lastSpoilerTime<33){spoilerFrame=requestAnimationFrame(drawSpoilers);return;}
    lastSpoilerTime=time;
    for(const canvas of spoilerVisible){
      const data=spoilerCanvases.get(canvas);
      if(!data||!data.ctx||!canvas.isConnected){spoilerVisible.delete(canvas);continue;}
      const {button,sparks,ctx}=data;
      if(revealStates.get(button)?.progress>=.998)continue;
      const w=Math.round(canvas.clientWidth),h=Math.round(canvas.clientHeight);
      if(!w||!h)continue;
      // Native layout dimensions; we limit raster size for lower-end devices.
      if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}
      ctx.clearRect(0,0,w,h);
      for(const p of sparks){
        const twinkle=.46+.54*Math.sin(time*.0015*p.speed*10+p.phase);
        const alpha=(.08+.52*p.glow)*Math.pow(Math.max(0,twinkle),2);
        const x=(p.x+Math.sin(time*.00021+p.phase)*.025+p.drift+1)%1*w;
        const y=(p.y-time*.0000045*p.speed%1+1)%1*h;
        ctx.fillStyle=`rgba(248,249,255,${alpha.toFixed(3)})`;
        ctx.fillRect(x,y,p.size,p.size);
      }
    }
    if(spoilerVisible.size)spoilerFrame=requestAnimationFrame(drawSpoilers);
  }
  function clearSpoilerCanvases(){
    stopSpoilers();
    if(spoilerObserver)for(const canvas of spoilerCanvases.keys())spoilerObserver.unobserve(canvas);
    spoilerVisible.clear();spoilerCanvases.clear();
    if(revealFrame)cancelAnimationFrame(revealFrame);revealFrame=0;activeReveals.clear();
  }
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden)stopSpoilers();
    else if(spoilerVisible.size&&!spoilerFrame&&!spoilerMotion.matches)spoilerFrame=requestAnimationFrame(drawSpoilers);
  });
  spoilerMotion.addEventListener?.('change',()=>{
    if(spoilerMotion.matches)stopSpoilers();
    else if(spoilerVisible.size&&!spoilerFrame)spoilerFrame=requestAnimationFrame(drawSpoilers);
  });
  const mediaURL = x=>typeof x==='string' && /^https:\/\//i.test(x)?x:'';
  const normalizeID = x=>String(x||'').trim().toLowerCase();
  const monthName = (m,long=false)=>new Intl.DateTimeFormat(localeMap[language],{month:long?'long':'short',timeZone:'UTC'}).format(new Date(Date.UTC(2026,m-1,1)));
    function validDateCode(code){
    if(!/^\d{6}$/.test(code||''))return '';
    const year=2000+Number(code.slice(0,2)), month=Number(code.slice(2,4)), day=Number(code.slice(4,6));
    const date=new Date(Date.UTC(year,month-1,day));
    if(month<1||month>12||day<1||date.getUTCFullYear()!==year||date.getUTCMonth()!==month-1||date.getUTCDate()!==day)return '';
    return date.toISOString().slice(0,10);
  }
  function findCode(text){
    for(const match of String(text||'').matchAll(/(^|[^\d])(\d{6})(?!\d)/g)) {
      if(validDateCode(match[2]))return match[2];
    }
    return '';
  }
  function formatDate(iso){
    if(!iso)return '';
    const [y,m,d]=iso.split('-').map(Number);
    return new Intl.DateTimeFormat(localeMap[language],{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(y,m-1,d)));
  }
    function extractTags(record){
    const caption=String(record?.text||'');
    const found=[...caption.matchAll(/(^|[^\p{L}\p{N}_])#([\p{L}\p{N}_][\p{L}\p{N}_-]*)/gu)].map(m=>m[2]);
    for(const facet of record?.facets||[])for(const feature of facet?.features||[])
      if(feature?.$type==='app.bsky.richtext.facet#tag' && typeof feature.tag==='string')found.push(feature.tag);
    if(Array.isArray(record?.tags))found.push(...record.tags);
    return unique(found.map(t=>normalizeID(String(t).replace(/^#/,''))).filter(t=>t && t!=='art' && t!=='digitalart' && t.length<=48));
  }
  function cleanCaption(t){
    return String(t||'').replace(/https?:\/\/\S+/g,'').replace(/(^|[^\p{L}\p{N}_])#[\p{L}\p{N}_][\p{L}\p{N}_-]*/gu,'$1')
      .replace(/[ \t]+\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim();
  }
  // Artist's convention: "s" denotes strokes, not seconds.
  const SOFTWARE_ALIASES = {
    procreate:'Procreate',procreatedreams:'Procreate Dreams',
    clipstudio:'Clip Studio Paint',clipstudiopaint:'Clip Studio Paint',csp:'Clip Studio Paint',
    krita:'Krita',photoshop:'Adobe Photoshop',adobephotoshop:'Adobe Photoshop',
    ibispaint:'ibisPaint',ibispaintx:'ibisPaint',medibang:'MediBang Paint',medibangpaint:'MediBang Paint',
    sai:'PaintTool SAI',painttoolsai:'PaintTool SAI',firealpaca:'FireAlpaca',
    sketchbook:'Sketchbook',autodesksketchbook:'Sketchbook',fresco:'Adobe Fresco',adobefresco:'Adobe Fresco',
    artstudiopro:'Artstudio Pro',affinityphoto:'Affinity Photo',affinitydesigner:'Affinity Designer',
    gimp:'GIMP',blender:'Blender',aseprite:'Aseprite',infinitepainter:'Infinite Painter',
    rebelle:'Rebelle',paintstorm:'Paintstorm Studio',paintstormstudio:'Paintstorm Studio',
    heavypaint:'HeavyPaint',toonsquid:'ToonSquid',nomadsculpt:'Nomad Sculpt'
  };
  // Normalized spellings support #clip_studio_paint and #clip-studio-paint too.
  function softwareName(tag){return SOFTWARE_ALIASES[String(tag||'').toLowerCase().replace(/[\s_\-]+/g,'')]||'';}
  function getSoftware(tags){return unique(tags.map(softwareName));}
  function parseWorkLine(line){
    const compact=String(line||'').trim().replace(/[·|]/g,' ');
    // Examples: 1h 25m 9212s, 2h 35m, 942s, 1h25m9,212s.
    const match=/^(?:(\d+)\s*h\s*)?(?:(\d+)\s*m\s*)?(?:(\d[\d, ]*)\s*s\s*)?$/i.exec(compact);
    if(!match||!(match[1]||match[2]||match[3]))return null;
    const hours=match[1]!==undefined?Number(match[1]):null;
    const minutes=match[2]!==undefined?Number(match[2]):null;
    const strokes=match[3]!==undefined?Number(match[3].replace(/[, ]/g,'')):null;
    if([hours,minutes,strokes].some(n=>n!==null&&(!Number.isSafeInteger(n)||n<0)))return null;
    return {hours,minutes,strokes};
  }
  function formatWork(work){
    if(!work)return '';
    const units=[];
    if(work.hours!==null)units.push(formatNumber(work.hours)+' '+t('hours'));
    if(work.minutes!==null)units.push(formatNumber(work.minutes)+' '+t('minutes'));
    if(work.strokes!==null)units.push(formatNumber(work.strokes)+' '+t('strokes'));
    return units.join(' · ');
  }
    function parseArtworkText(raw,images){
    const lines=String(raw||'').replace(/\r\n?/g,'\n').split('\n');
    let code='';
    // Prefer date on its own line or before a dash in the title; otherwise any valid code.
    for(const line of lines){
      const trimmed=line.trim();
      if(/^\d{6}$/.test(trimmed)||/^\d{6}\s*[-–—:|]/.test(trimmed)){
        const candidate=findCode(trimmed);if(candidate){code=candidate;break;}
      }
    }
    if(!code){for(const line of lines){const candidate=findCode(line);if(candidate){code=candidate;break;}}}
    if(!code){for(const image of images){const candidate=findCode(image.alt);if(candidate){code=candidate;break;}}}
    const metricLines=new Set();let work=null;
    for(let i=0;i<lines.length;i++){
      const parsed=parseWorkLine(lines[i]);
      if(parsed){metricLines.add(i);work=parsed;}
    }
    let titleIndex=-1;
    for(let i=0;i<lines.length;i++){
      const trimmed=lines[i].trim();
      if(!trimmed||metricLines.has(i)||/^\d{6}$/.test(trimmed)||trimmed.startsWith('#'))continue;
      if(cleanCaption(trimmed)){titleIndex=i;break;}
    }
    let base=titleIndex>=0?cleanCaption(lines[titleIndex]):'';
    if(code)base=base.replace(new RegExp('(^|[^0-9])'+code+'(?![0-9])'), '$1')
      .replace(/^[\s\-_.,:|•–—]+|[\s\-_.,:|•–—]+$/g,'').trim();
    const title=code?(base?code+' - '+base:code):(base||'Untitled');
    const description=cleanCaption(lines.filter((line,i)=>{
      if(i===titleIndex||metricLines.has(i))return false;
      if(/^\d{6}$/.test(line.trim())&&validDateCode(line.trim()))return false;
      return true;
    }).join('\n'));
    return {code,title,date:validDateCode(code),description,work};
  }
  function mediaKey(image, recordImage){
    const cid=recordImage?.image?.ref?.$link || recordImage?.image?.ref?.link || '';
    if(cid)return String(cid);
    const match=(image.fullsize||image.thumb||'').match(/\/(baf[a-z0-9]+)(?:@|\/|\?|$)/i);
    return match ? match[1] : image.fullsize||image.thumb;
  }
  function normalizePost(entry){
    const post=entry?.post;
    if(!post||entry.reason||post.record?.reply||post.author?.handle?.toLowerCase()!==HANDLE)return null;
    const id=post.uri?.split('/').pop();if(!id||HIDDEN_POST_IDS.has(id))return null;
    const embedded=post.embed?.images||post.embed?.media?.images||[];
    const original=post.record?.embed?.images||post.record?.embed?.media?.images||[];
    const imageRows=[];const seenMedia=new Set();
    embedded.forEach((image,i)=>{
      const full=mediaURL(image.fullsize||image.thumb), thumb=mediaURL(image.thumb||image.fullsize);
      if(!full)return;
      const key=mediaKey({fullsize:full,thumb},original[i]);
      if(seenMedia.has(key))return;
      seenMedia.add(key);
      const ar=image.aspectRatio||original[i]?.aspectRatio||{};
      const w=Number(ar.width), h=Number(ar.height);
      const ratio=w>0&&h>0&&Number.isFinite(w/h)&&w/h>=0.12&&w/h<=8?w/h:0.8;
      imageRows.push({url:full,thumb,key,alt:String(image.alt||''),ratio,hasRatio:!!(w>0&&h>0)});
    });
    if(!imageRows.length)return null;
    const raw=String(post.record?.text||'');
    const identity=parseArtworkText(raw,imageRows);
    const tags=extractTags(post.record);
    return {id,code:identity.code,title:identity.title,date:identity.date,
      dateRank:Date.parse(identity.date||post.record?.createdAt||post.indexedAt||'')||0,
      description:identity.description,work:identity.work,software:getSoftware(tags),
      tags,images:imageRows.map(x=>x.url),thumb:imageRows[0].thumb,
      imageKeys:imageRows.map(x=>x.key),ratio:imageRows[0].ratio,hasRatio:imageRows[0].hasRatio,postedAt:String(post.record?.createdAt||post.indexedAt||'')};
  }
  function preferItem(a,b){
    const score=x=>x.images.length*100+x.tags.length*4+Math.min(x.description.length,120)/60+(x.work?7:0)+(x.title.includes(" - ")?5:0);
    if(score(a)!==score(b))return score(a)>score(b)?a:b;
    return a.postedAt>=b.postedAt?a:b;
  }
  function deduplicate(posts){
    const map=new Map();
    for(const item of posts){
      // First: globally unique six-digit artwork name. For unnamed posts: image CID.
      const key=item.code?'code:'+item.code:'image:'+item.imageKeys[0];
      const existing=map.get(key);
      if(!existing)map.set(key,item);
      else {
        const chosen=preferItem(existing,item);
        const tags=unique([...existing.tags,...item.tags]);
        const other=chosen===existing?item:existing;
        const betterTitle=chosen.title===chosen.code && other.title!==other.code ? other.title : chosen.title;
        map.set(key,{...chosen,title:betterTitle,description:chosen.description||other.description,
          tags,software:getSoftware(tags),work:chosen.work||other.work});
      }
    }
    // A repost with a missing code can still duplicate a dated artwork.
    const seenImages=new Set();
    const dated=[...map.values()].filter(x=>x.code);
    for(const art of dated)if(art.imageKeys[0])seenImages.add(art.imageKeys[0]);
    return [...map.values()].filter(art=>art.code||!seenImages.has(art.imageKeys[0]));
  }
  function getDisplayed(){
    return state.items.filter(x=>{
      if(state.tag&&!x.tags.includes(state.tag))return false;
      if(state.year!=='all'&&(!x.date||!x.date.startsWith(state.year+'-')))return false;
      if(state.dateFrom&&(!x.date||x.date<state.dateFrom))return false;
      if(state.dateTo&&(!x.date||x.date>state.dateTo))return false;
      return true;
    }).sort((a,b)=>{
      // Creation dates order dated work; undated works sort by publication internally.
      if(Boolean(a.date)!==Boolean(b.date))return a.date?-1:1;
      return (state.sort==='recent'?b.dateRank-a.dateRank:a.dateRank-b.dateRank)||a.id.localeCompare(b.id);
    });
  }
  function setTab(tab,scroll=true){
    state.view=tab;
    const isGallery=tab==='gallery';
    $('#gallery-intro').hidden=!isGallery;$('#gallery-rule').hidden=!isGallery;$('#work').hidden=!isGallery;
    $('#statistics').hidden=isGallery;
    $('#tab-gallery').setAttribute('aria-pressed',String(isGallery));
    $('#tab-stats').setAttribute('aria-pressed',String(!isGallery));
    if(!isGallery)renderStats();updateBackToTop();
    if(scroll)window.scrollTo({top:0,behavior:'instant'});
  }
  function setTag(tag){
    state.tag=tag;
    closeViewer();renderTags();renderGallery();
    $('#work').scrollIntoView({block:'start',behavior:'smooth'});
  }
  function renderTags(){
    const counts=new Map();
    for(const item of state.items)for(const tag of item.tags)counts.set(tag,(counts.get(tag)||0)+1);
    if(state.tag&&!counts.has(state.tag))state.tag='';
    const filter=$('#tag-list');filter.replaceChildren();
    const phrase=normalizeID($('#tag-search').value);
    function chip(tag,label,count){
      const b=el('button','tag-chip');b.type='button';b.dataset.tag=tag;
      b.setAttribute('aria-pressed',String(tag===state.tag));b.append(document.createTextNode(label));
      if(count!=null)b.append(el('span','chip-count',String(count)));
      b.addEventListener('click',()=>{setTag(tag);toggleTagPanel(false);});return b;
    }
    if(!phrase||normalizeID(t('allWorks')).includes(phrase))filter.append(chip('',t('allWorks'),state.items.length));
    for(const [tag,count] of [...counts].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],localeMap[language])))
      if(!phrase||tag.includes(phrase))filter.append(chip(tag,'#'+tag,count));
    if(!filter.children.length)filter.append(el('div','stat-help',t('noTags')));
    const clear=$('#clear-tag');clear.hidden=!state.tag;
    clear.textContent=state.tag?t('active')+': #'+state.tag+'  ×':'';
  }
    function toggleTagPanel(open){
    const panel=$('#tag-panel');panel.classList.toggle('is-open',open);
    panel.setAttribute('aria-hidden',String(!open));panel.inert=!open;
    $('#toggle-tags').setAttribute('aria-expanded',String(open));
    if(open)$('#tag-search').focus();
  }
  function updateDateFilters(){
    const years=[...new Set(state.items.map(x=>x.date?.slice(0,4)).filter(Boolean))].sort((a,b)=>b.localeCompare(a));
    const select=$('#year-filter');
    select.replaceChildren();
    const all=el('option','',t('allYears'));all.value='all';select.append(all);
    for(const year of years){const option=el('option','',year);option.value=year;select.append(option);}
    if(state.year!=='all'&&!years.includes(state.year))state.year='all';
    select.value=state.year;
    $('#date-from').value=state.dateFrom;
    $('#date-to').value=state.dateTo;
    $('#clear-dates').hidden=state.year==='all'&&!state.dateFrom&&!state.dateTo;
    $('#dates-active').hidden=state.year==='all'&&!state.dateFrom&&!state.dateTo;
  }
  function toggleDatePanel(open){
    const panel=$('#date-filters');panel.classList.toggle('is-open',open);
    panel.setAttribute('aria-hidden',String(!open));panel.inert=!open;
    $('#toggle-dates').setAttribute('aria-expanded',String(open));
    if(open)$('#year-filter').focus();
  }
  function changeDateFilter(){
    state.year=$('#year-filter').value;
    state.dateFrom=$('#date-from').value;
    state.dateTo=$('#date-to').value;
    closeViewer();updateDateFilters();renderGallery();
  }
  function galleryColumns(){
    const width=window.innerWidth;
    const base=width<=600?1:width<=850?2:width<=1250?3:4;
    const extra=gallerySize==='normal'?0:gallerySize==='compact'?1:2;
    return width<=600?Math.min(2,base+extra):width<=850?Math.min(3,base+extra):Math.min(6,base+extra);
  }
  let renderedColumns=0;
  let galleryStreamItems=[],galleryStreamIndex=0,galleryHeights=[],galleryCols=[];
  const streamSentinel=$('#gallery-sentinel');
  let streamQueued=false;
  const streamObserver=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>{
    if(entries.some(entry=>entry.isIntersecting))queueGalleryBatch();
  },{rootMargin:'1100px 0px 1100px 0px'}):null;
  if(streamObserver)streamObserver.observe(streamSentinel);
  function queueGalleryBatch(){
    if(streamQueued||galleryStreamIndex>=galleryStreamItems.length||state.view!=='gallery')return;
    streamQueued=true;
    requestAnimationFrame(()=>{streamQueued=false;appendGalleryBatch();});
  }
  function appendGalleryBatch(){
    if(state.view!=='gallery'||galleryStreamIndex>=galleryStreamItems.length)return;
    const end=Math.min(galleryStreamIndex+STREAM_BATCH,galleryStreamItems.length);
    for(let i=galleryStreamIndex;i<end;i++){
      const item=galleryStreamItems[i],card=el('article','work'),button=el('button','art-button'),img=el('img','art-main'),backdrop=el('img','art-backdrop');
      button.type='button';button.setAttribute('aria-label',t('open')+': '+item.title);
      const ratio=Number.isFinite(item.ratio)&&item.ratio>0?item.ratio:0.8;
      button.style.setProperty('--ratio',String(ratio));
      img.loading=i<8?'eager':'lazy';img.decoding='async';img.alt=item.title;img.src=item.thumb;
      // Both layers use the same cached artwork; the blurred one fills rotated edge pixels.
      backdrop.loading='lazy';backdrop.decoding='async';backdrop.alt='';backdrop.setAttribute('aria-hidden','true');backdrop.src=item.thumb;
      // Bluesky returns aspectRatio metadata, so space is reserved before any image loads.
      img.onerror=()=>{
        img.onerror=null;
        if(img.dataset.fallback!=='1'&&item.images[0]!==img.src){img.dataset.fallback='1';img.src=item.images[0];backdrop.src=item.images[0];return;}
        img.hidden=true;backdrop.hidden=true;button.append(el('span','image-unavailable',t('emptyError')));
      };
      // Fixed aspect ratio prevents any rearrangement while scrolling and loading images.
      button.append(backdrop,img);
      const isNsfw=item.tags.some(tag=>tag.includes('nsfw'));
      if(isNsfw){
        button.classList.add('is-nsfw');
        button.setAttribute('aria-label','NSFW · '+button.getAttribute('aria-label'));
        // Telegram-inspired spoiler: CSS blur under a lightweight shimmering particle canvas.
        const reveal=el('img','art-reveal');
        reveal.src=item.thumb;reveal.alt='';reveal.setAttribute('aria-hidden','true');
        reveal.decoding='async';reveal.loading='lazy';
        button.append(reveal);
        const veil=el('span','spoiler-veil');
        const particles=el('canvas','spoiler-particles');
        particles.setAttribute('aria-hidden','true');veil.append(particles);button.append(veil);
        attachSpoilerParticles(particles,button);
        button.addEventListener('pointerenter',e=>{
          if(e.pointerType==='mouse'||e.pointerType==='pen')startReveal(button,e,true);
        });
        button.addEventListener('pointerleave',e=>{
          if(e.pointerType==='mouse'||e.pointerType==='pen')startReveal(button,e,false);
        });
        button.addEventListener('focus',()=>{
          if(!window.matchMedia('(hover:none)').matches)startReveal(button,null,true);
        });
        button.addEventListener('blur',()=>{
          if(!window.matchMedia('(hover:none)').matches)startReveal(button,null,false);
        });
        button.append(el('span','nsfw-indicator','NSFW'));
      }
      if(item.software.length){
        const stack=el('div','software-stack');
        for(const software of item.software)stack.append(el('span','software-badge',software));
        button.append(stack);
      }
      const overlay=el('div','art-overlay'),glass=el('div','overlay-glass');
      glass.append(el('div','overlay-title',item.title==='Untitled'?t('unnamed'):item.title));
      if(item.date)glass.append(el('div','overlay-date',t('created')+': '+formatDate(item.date)));
      if(item.description)glass.append(el('div','overlay-description',item.description));
      if(item.work)glass.append(el('div','overlay-metrics',formatWork(item.work)));
      // Tags belong only in the full-size viewer, never on gallery hover cards.
      overlay.append(glass);button.append(overlay);
      // Only multi-image posts get a small, permanently visible circular count.
      if(item.images.length>=2){
        const imageCount=el('span','image-count-badge',String(item.images.length));
        imageCount.setAttribute('aria-label',`${item.images.length} ${t('images')}`);
        imageCount.setAttribute('title',`${item.images.length} ${t('images')}`);
        button.append(imageCount);
      }
      button.addEventListener('pointerenter',event=>{
        if(event.pointerType==='mouse'||event.pointerType==='pen')prefetchViewerImage(item.images[0]);
      });
      button.addEventListener('focus',()=>prefetchViewerImage(item.images[0]));
      button.addEventListener('click',(event)=>{
        // On touch screens the first tap reveals a blurred NSFW thumbnail;
        // a second tap opens the explicit full-image viewer.
        if(isNsfw&&window.matchMedia('(hover:none)').matches&&!button.classList.contains('nsfw-revealed')){
          button.classList.add('nsfw-revealed');startReveal(button,event,true);return;
        }
        openViewer(item.id);
      });card.append(button);
      const target=galleryHeights.indexOf(Math.min(...galleryHeights));galleryCols[target].append(card);
      galleryHeights[target]+=1/ratio+0.105;
    }
    galleryStreamIndex=end;
    streamSentinel.hidden=galleryStreamIndex>=galleryStreamItems.length;
    // Newly appended content never replaces already-visible works.
    // The next group is loaded just before the user reaches the gallery end.
    if(motionEnabled.matches&&pointer){cacheMotionTiles();setMotionTargets();startMotionFrame();}
    if(!streamObserver||(!streamSentinel.hidden&&streamSentinel.getBoundingClientRect().top<innerHeight+1100))queueGalleryBatch();
  }
  function renderGallery(){
    updateDateFilters();
    const items=getDisplayed();
    $('#count').textContent=`/ ${items.length}`;
    $('#gallery-sub').textContent=t(state.sort==='recent'?'gallerySub':'gallerySubOldest');
    resetMotion(true);
    clearSpoilerCanvases();
    gallery.replaceChildren();
    const n=galleryColumns();renderedColumns=n;
    gallery.style.setProperty('--columns',String(n));
    galleryStreamItems=items;
    galleryStreamIndex=0;
    galleryHeights=Array(n).fill(0);
    galleryCols=Array.from({length:n},()=>el('div','gallery-column'));
    gallery.append(...galleryCols);
    const empty=$('#empty');empty.hidden=!!items.length;
    if(!items.length){empty.replaceChildren();empty.append(el('h3','',state.loading?t('emptyLoading'):state.error?t('emptyError'):state.tag?t('emptyFiltered'):t('emptyNoPosts')),
      el('div','',state.loading?t('emptyLoadInfo'):state.error?t('emptyErrorInfo'):state.tag?t('emptyFilteredInfo'):t('emptyNoPostsInfo')));
      if(state.error){const retry=el('button','',t('retry'));retry.type='button';retry.addEventListener('click',loadPortfolio);empty.append(retry);}}
    streamSentinel.hidden=!items.length;
    if(items.length)appendGalleryBatch();
    updateBackToTop();
  }
    function currentItem(){return getDisplayed().find(x=>x.id===state.activeId);}
  /* Keep a bounded cache of full-resolution downloads decoded ahead of navigation.
     Missing/slow images never blank the already visible slide. */
  const viewerPreloads=new Map();
  const MAX_VIEWER_CACHE=9;
  function prefetchViewerImage(src,priority='low'){
    if(!src)return Promise.resolve(false);
    if(viewerPreloads.has(src)){
      const cached=viewerPreloads.get(src);
      if(priority==='high')cached.image.fetchPriority='high';
      viewerPreloads.delete(src);viewerPreloads.set(src,cached);
      return cached.promise;
    }
    const image=new Image();image.decoding='async';image.fetchPriority=priority;
    const promise=new Promise(resolve=>{
      image.onload=async()=>{try{if(image.decode)await image.decode();}catch(_){}resolve(true);};
      image.onerror=()=>resolve(false);
      image.src=src;
    });
    viewerPreloads.set(src,{image,promise});
    while(viewerPreloads.size>MAX_VIEWER_CACHE){
      const key=viewerPreloads.keys().next().value;
      viewerPreloads.delete(key);
    }
    return promise;
  }
  function prefetchViewerNeighbors(item){
    if(!item||!viewer.classList.contains('open'))return;
    const pictures=item.images;
    const around=[pictures[state.pictureIndex+1],pictures[state.pictureIndex-1]];
    const visible=getDisplayed();const index=visible.findIndex(x=>x.id===item.id);
    if(index>=0&&visible.length>1){
      around.push(visible[(index+1)%visible.length].images[0]);
      around.push(visible[(index-1+visible.length)%visible.length].images[0]);
    }
    for(const src of new Set(around.filter(Boolean)))prefetchViewerImage(src);
  }
  let viewerRequest=0,activeSlide=0,loaderTimeout=0;
  const viewerSlides=[$('#viewer-img'),$('#viewer-img-next')];
  function showViewerImage(){
    const item=currentItem();if(!item){closeViewer();return;}
    state.pictureIndex=Math.max(0,Math.min(item.images.length-1,state.pictureIndex));
    const full=item.images[state.pictureIndex],request=++viewerRequest;
    clearTimeout(loaderTimeout);$('#viewer-loading').classList.remove('is-loading');
    // Show an already-fetched thumbnail immediately on first opening.
    if(!viewerSlides[activeSlide].getAttribute('src')&&item.thumb){
      const preview=viewerSlides[activeSlide];preview.src=item.thumb;preview.alt=item.title;
      preview.classList.add('is-active');
    }
    if(viewerSlides[activeSlide].dataset.fullSrc!==full){
      loaderTimeout=setTimeout(()=>{if(request===viewerRequest)$('#viewer-loading').classList.add('is-loading');},150);
      const nextIndex=1-activeSlide,next=viewerSlides[nextIndex];
      prefetchViewerImage(full,'high').then(async ok=>{
        if(request!==viewerRequest||!viewer.classList.contains('open'))return;
        if(!ok){$('#viewer-loading').classList.remove('is-loading');return;}
        next.fetchPriority='high';next.src=full;next.alt=item.title;
        try{if(next.decode)await next.decode();}catch(_){}
        if(request!==viewerRequest||!viewer.classList.contains('open'))return;
        next.dataset.fullSrc=full;next.classList.add('is-active');
        viewerSlides[activeSlide].classList.remove('is-active');
        activeSlide=nextIndex;
        clearTimeout(loaderTimeout);$('#viewer-loading').classList.remove('is-loading');
      });
    }
    $('#viewer-title').textContent=item.title==='Untitled'?t('unnamed'):item.title;
    $('#viewer-description').textContent=item.description;$('#viewer-description').hidden=!item.description;
    $('#viewer-date').textContent=item.date?t('created')+': '+formatDate(item.date):'';$('#viewer-date').hidden=!item.date;
    const details=$('#viewer-details');details.replaceChildren();
    for(const software of item.software)details.append(el('span','software-badge',software));
    if(item.work)details.append(el('span','work-info',t('work')+': '+formatWork(item.work)));
    details.hidden=!details.children.length;
    const tags=$('#viewer-tags');tags.replaceChildren();
    for(const tag of item.tags.slice(0,8)){
      const b=el('button','viewer-tag','#'+tag);b.type='button';b.addEventListener('click',()=>{setTab('gallery',false);setTag(tag);});tags.append(b);
    }
    tags.hidden=!item.tags.length;
    // Re-trigger a subtle metadata entrance only when the artwork changes.
    const side=$('.viewer-side');
    if(side.dataset.displayedArtwork!==item.id){
      side.dataset.displayedArtwork=item.id;
      side.classList.remove('viewer-info-update');
      void side.offsetWidth;
      side.classList.add('viewer-info-update');
    }

    const visible=getDisplayed(),i=visible.findIndex(x=>x.id===item.id);
    $('#viewer-step').textContent=`${i+1} / ${visible.length}`+(item.images.length>1?`     ·     ${state.pictureIndex+1} / ${item.images.length}`:'');
    prefetchViewerNeighbors(item);
  }
  function openViewer(id){
    state.activeId=id;state.pictureIndex=0;
    ++viewerRequest;clearTimeout(loaderTimeout);
    viewerSlides.forEach(img=>{img.removeAttribute('src');delete img.dataset.fullSrc;img.classList.remove('is-active');});
    activeSlide=0;
    viewer.classList.add('open');viewer.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');showViewerImage();$('#close').focus();
  }
  function closeViewer(){
    ++viewerRequest;clearTimeout(loaderTimeout);$('#viewer-loading').classList.remove('is-loading');
    viewer.classList.remove('open');viewer.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');state.activeId=null;
  }
  function step(dir){
    const item=currentItem();if(!item)return;
    const index=state.pictureIndex+dir;
    if(index>=0&&index<item.images.length)state.pictureIndex=index;
    else {const displayed=getDisplayed();const i=displayed.findIndex(x=>x.id===item.id);if(!displayed.length)return;
      state.activeId=displayed[(i+dir+displayed.length)%displayed.length].id;state.pictureIndex=0;}
    showViewerImage();
  }
  function goTop(){window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
  function updateBackToTop(){$('#floating-first').hidden=state.view!=='gallery'||window.scrollY<850;}
  function renderStats(){
    const dated=state.items.filter(x=>x.date);
    const monthTotals=new Map(),yearTotals=new Map(),tagTotals=new Map(),softwareTotals=new Map();
    let totalMinutes=0,totalStrokes=0,worksWithTime=0,worksWithStrokes=0;
    for(const item of state.items){
      for(const tag of item.tags)if(!softwareName(tag))tagTotals.set(tag,(tagTotals.get(tag)||0)+1);
      for(const program of item.software)softwareTotals.set(program,(softwareTotals.get(program)||0)+1);
      if(item.work){
        if(item.work.hours!==null||item.work.minutes!==null){totalMinutes+=(item.work.hours||0)*60+(item.work.minutes||0);worksWithTime++;}
        if(item.work.strokes!==null){totalStrokes+=item.work.strokes;worksWithStrokes++;}
      }
      if(item.date){const month=item.date.slice(0,7),year=item.date.slice(0,4);
        monthTotals.set(month,(monthTotals.get(month)||0)+1);yearTotals.set(year,(yearTotals.get(year)||0)+1);}
    }
    const topMonth=[...monthTotals].sort((a,b)=>b[1]-a[1]||b[0].localeCompare(a[0]))[0];
    const topTag=[...tagTotals].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],localeMap[language]))[0];
    const topSoftware=[...softwareTotals].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],localeMap[language]))[0];
    const monthText=topMonth?`${monthName(Number(topMonth[0].slice(5)),true)} ${topMonth[0].slice(0,4)}`:'—';
    const cards=[
      [t('total'),formatNumber(state.items.length),t('afterDuplicates')],
      [t('bestMonth'),monthText,topMonth?t('artCount',{count:formatNumber(topMonth[1])}):t('noDated')],
      [t('mostTag'),topTag?'#'+topTag[0]:'—',topTag?t('artCount',{count:formatNumber(topTag[1])}):t('noTagsYet')],
      [t('withDate'),formatNumber(dated.length),t('withoutDate',{count:formatNumber(state.items.length-dated.length)})],
      [t('drawingTime'),worksWithTime?`${formatNumber(Math.floor(totalMinutes/60))} ${t('hours')} ${formatNumber(totalMinutes%60)} ${t('minutes')}`:'—',t('recordedTime',{count:formatNumber(worksWithTime)})],
      [t('totalStrokes'),worksWithStrokes?formatNumber(totalStrokes):'—',t('recordedStrokes',{count:formatNumber(worksWithStrokes)})],
      [t('topSoftware'),topSoftware?topSoftware[0]:'—',topSoftware?t('artCount',{count:formatNumber(topSoftware[1])}):t('noSoftware')],
      [t('creativeYears'),formatNumber(yearTotals.size),yearTotals.size?t('datedYears'):t('unknownYears')]
    ];
    const area=$('#stat-cards');area.replaceChildren();
    for(const [label,value,note] of cards){const c=el('div','stat-card');c.append(el('div','stat-label',label),el('div','stat-value',String(value)),el('div','stat-note',note));area.append(c);}
    const years=[...yearTotals.keys()].sort((a,b)=>b.localeCompare(a));
    const ysel=$('#stats-year');ysel.replaceChildren();
    const opt=(value,label)=>{const o=el('option','',label);o.value=value;return o;};
    ysel.append(opt('all',t('allYears')));for(const year of years)ysel.append(opt(year,year));
    if(state.statsYear!=='all'&&!years.includes(state.statsYear))state.statsYear='all';
    ysel.value=state.statsYear;ysel.hidden=!years.length;
    const monthSeries=state.statsYear==='all'
      ? [...monthTotals].sort((a,b)=>b[1]-a[1]||b[0].localeCompare(a[0])).slice(0,12).map(([month,n])=>[monthName(Number(month.slice(5))),month.slice(0,4),n])
      : Array.from({length:12},(_,i)=>[monthName(i+1),state.statsYear,monthTotals.get(state.statsYear+'-'+String(i+1).padStart(2,'0'))||0]);
    $('#months-hint').textContent=state.statsYear==='all'?t('top12Months'):t('eachMonth',{year:state.statsYear});
    makeBars($('#months-bars'),monthSeries.map(([m,y,n])=>[m+' '+y,n]));
    makeBars($('#tags-bars'),[...tagTotals].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],localeMap[language])).slice(0,10).map(([tag,n])=>['#'+tag,n]));
    makeBars($('#years-bars'),[...yearTotals].sort((a,b)=>b[0].localeCompare(a[0])));
    $('#stats-explainer').textContent=t('statsExplain',{total:formatNumber(state.items.length),dated:formatNumber(dated.length),undated:formatNumber(state.items.length-dated.length),tags:formatNumber(tagTotals.size)});
  }
    function makeBars(target,data){
    target.replaceChildren();if(!data.length){target.append(el('div','stats-empty',t('notEnough')));return;}
    const max=Math.max(1,...data.map(x=>x[1]));
    for(const [label,count] of data){const row=el('div','bar-row'),line=el('div','bar-line'),track=el('div','bar-track'),fill=el('div','bar-fill');
      line.append(el('span','',label),el('span','bar-count',String(count)));fill.style.width=(count/max*100)+'%';track.append(fill);row.append(line,track);target.append(row);}
  }
  $('#tab-gallery').addEventListener('click',()=>setTab('gallery'));
  $('#tab-stats').addEventListener('click',()=>setTab('stats'));
  $('#home-link').addEventListener('click',e=>{e.preventDefault();setTab('gallery');});
  $('#sort').addEventListener('change',e=>{state.sort=e.target.value;closeViewer();renderGallery();});
  $('#gallery-size').addEventListener('change',e=>{
    if(!GALLERY_SIZES.includes(e.target.value))return;
    gallerySize=e.target.value;document.body.dataset.gallerySize=gallerySize;
    try{localStorage.setItem('030-portfolio-size-v15',gallerySize);}catch(_){}
    // A conscious density change relays out the gallery only once.
    renderGallery();
  });
  $('#toggle-tags').addEventListener('click',()=>toggleTagPanel(!$('#tag-panel').classList.contains('is-open')));
  $('#tag-search').addEventListener('input',renderTags);
  $('#clear-tag').addEventListener('click',()=>setTag(''));
  $('#floating-first').addEventListener('click',goTop);
  $('#toggle-dates').addEventListener('click',()=>toggleDatePanel(!$('#date-filters').classList.contains('is-open')));
  $('#year-filter').addEventListener('change',changeDateFilter);
  $('#date-from').addEventListener('change',changeDateFilter);
  $('#date-to').addEventListener('change',changeDateFilter);
  $('#clear-dates').addEventListener('click',()=>{state.year='all';state.dateFrom='';state.dateTo='';updateDateFilters();changeDateFilter();});
  $('#theme').addEventListener('change',e=>setTheme(e.target.value));
  $('#language').addEventListener('change',e=>setLanguage(e.target.value));
  $('#stats-year').addEventListener('change',e=>{state.statsYear=e.target.value;renderStats();});
  $('#close').addEventListener('click',closeViewer);$('#prev').addEventListener('click',()=>step(-1));$('#next').addEventListener('click',()=>step(1));
  viewer.addEventListener('click',e=>{if(e.target===viewer)closeViewer();});
  document.addEventListener('keydown',e=>{if(!viewer.classList.contains('open'))return;if(e.key==='Escape')closeViewer();if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1);});
  $('#year').textContent=new Date().getFullYear();
  async function loadPortfolio(){
    state.loading=true;state.error=false;state.items=[];state.tag='';
    loadingStatus='';fetchedAt=null;renderGallery();renderTags();renderStats();updateStatus();
    let cursor='',pages=0;const seenIds=new Set(),seenCursors=new Set(),raw=[];
    try {
      do {
        const params=new URLSearchParams({actor:HANDLE,filter:'posts_with_media',limit:'100',includePins:'false'});
        if(cursor)params.set('cursor',cursor);
        const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),18000);
        let response;
        try{response=await fetch(API+'?'+params.toString(),{headers:{Accept:'application/json'},signal:controller.signal});}
        finally{clearTimeout(timeout);}
        if(!response.ok)throw new Error('API '+response.status);
        const data=await response.json();if(!Array.isArray(data.feed))throw new Error('Unexpected API response');
        for(const entry of data.feed){const item=normalizePost(entry);if(item&&!seenIds.has(item.id)){seenIds.add(item.id);raw.push(item);}}
        pages++;cursor=typeof data.cursor==='string'?data.cursor:'';
        if(cursor&&seenCursors.has(cursor))break;
        if(cursor)seenCursors.add(cursor);
        loadedCount=raw.length;loadingStatus=t('loadProgress',{count:formatNumber(loadedCount)});updateStatus();
      }while(cursor&&pages<MAX_PAGES);
      fetchedAt=new Date();
    }catch(error){console.warn('Incomplete artwork archive:',error);state.error=true;}
    finally{state.items=deduplicate(raw);state.loading=false;loadingStatus='';updateStatus();renderTags();renderGallery();renderStats();}
  }
  // V11: spring-damped multi-tile proximity field. No hard 37px neighbour snap.
  // Read the *stationary* .work layout, not moving art-button rectangles.
  const motionEnabled=window.matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)');
  const ZOOM_RADIUS=405, PUSH_RADIUS=600, FLIGHT_RADIUS=480, FLIGHT_FACTOR=.325;
  let pointer=null,motionFrame=0,motionLast=0,motionTiles=[],activeWork=null;
  const smoothstep=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);};
  const fields=['x','y','scale','rx','ry'];
  function cacheMotionTiles(){
    const previous=new Map(motionTiles.map(tile=>[tile.work,tile]));
    const next=[];
    for(const work of gallery.querySelectorAll('.work')){
      const rect=work.getBoundingClientRect();
      if(rect.bottom<-850||rect.top>innerHeight+850)continue;
      let tile=previous.get(work);
      if(!tile){
        const button=work.querySelector('.art-button');
        tile={work,button,curr:{x:0,y:0,scale:1,rx:0,ry:0},vel:{x:0,y:0,scale:0,rx:0,ry:0},target:{x:0,y:0,scale:1,rx:0,ry:0}};
      }
      tile.rect=rect;tile.cx=rect.left+rect.width/2;tile.cy=rect.top+rect.height/2;
      next.push(tile);
    }
    motionTiles=next;
  }
  function edgeDistance(x,y,r){return Math.hypot(Math.max(0,r.left-x,x-r.right),Math.max(0,r.top-y,y-r.bottom));}
  function setMotionTargets(){
    if(!motionTiles.length)cacheMotionTiles();
    const valid=pointer&&motionEnabled.matches&&state.view==='gallery'&&!viewer.classList.contains('open');
    let closest=null;
    if(valid)for(const tile of motionTiles){
      tile.dist=edgeDistance(pointer.x,pointer.y,tile.rect);
      if(!closest||tile.dist<closest.dist)closest=tile;
    }
    const focus=closest&&closest.dist<ZOOM_RADIUS?closest:null;
    if(activeWork!==focus?.work){
      activeWork?.classList.remove('is-focal');activeWork=focus?.work||null;
      activeWork?.classList.add('is-focal');
    }
    // Each nearby tile emits a smooth, distance-weighted repulsion field.
    // Summing these gentle fields avoids hard switches when nearest tile changes.
    for(const tile of motionTiles){
      const target=tile.target;target.x=0;target.y=0;target.scale=1;target.rx=0;target.ry=0;
      if(!valid)continue;
      const near=1-smoothstep(tile.dist/ZOOM_RADIUS);
      const focalScale=tile===focus?0.0525:0.0105;
      target.scale+=focalScale*Math.pow(near,1.3);
      const dx=pointer.x-tile.cx,dy=pointer.y-tile.cy;
      const flight=Math.pow(1-smoothstep(tile.dist/FLIGHT_RADIUS),1.2)*FLIGHT_FACTOR;
      const nx=Math.max(-1,Math.min(1,dx/Math.max(1,tile.rect.width/2)));
      const ny=Math.max(-1,Math.min(1,dy/Math.max(1,tile.rect.height/2)));
      target.x+=nx*7*flight;target.y+=(-5+ny*5.8)*flight;
      target.rx=-ny*2.2*flight;target.ry=nx*2.2*flight;
      target.scale*=1+0.023*flight;
      let repelX=0,repelY=0;
      for(const source of motionTiles){
        if(source===tile)continue;
        const sourceStrength=1-smoothstep(source.dist/ZOOM_RADIUS);
        if(sourceStrength<.002)continue;
        const vx=tile.cx-source.cx,vy=tile.cy-source.cy;
        const dist=Math.hypot(vx,vy)||1;
        const influence=1-smoothstep(dist/PUSH_RADIUS);
        const pressure=19*Math.pow(sourceStrength,1.6)*influence*influence;
        repelX+=vx/dist*pressure;repelY+=vy/dist*pressure;
      }
      const mag=Math.hypot(repelX,repelY);
      if(mag>19){repelX*=19/mag;repelY*=19/mag;}
      target.x+=repelX;target.y+=repelY;
    }
  }
  function updateMotion(time){
    motionFrame=0;
    const dt=Math.min(.04,Math.max(.001,(time-motionLast)/1000));motionLast=time;
    // Damped spring: smooth acceleration, deceleration and slight physical settling.
    const stiffness=112,damping=20.5;
    let moving=false;
    for(const tile of motionTiles){
      if(!tile.button.isConnected)continue;
      for(const f of fields){
        const error=tile.target[f]-tile.curr[f];
        tile.vel[f]+=(stiffness*error-damping*tile.vel[f])*dt;
        tile.curr[f]+=tile.vel[f]*dt;
        if(Math.abs(error)>.00035||Math.abs(tile.vel[f])>.002)moving=true;
        else {tile.curr[f]=tile.target[f];tile.vel[f]=0;}
      }
      const c=tile.curr,b=tile.button;
      b.style.setProperty('--push-x',`${c.x.toFixed(3)}px`);
      b.style.setProperty('--push-y',`${c.y.toFixed(3)}px`);
      b.style.setProperty('--flight-x','0px');b.style.setProperty('--flight-y','0px');
      b.style.setProperty('--flight-rx',`${c.rx.toFixed(3)}deg`);
      b.style.setProperty('--flight-ry',`${c.ry.toFixed(3)}deg`);
      b.style.setProperty('--combined-scale',c.scale.toFixed(5));
    }
    if(moving)motionFrame=requestAnimationFrame(updateMotion);
  }
  function startMotionFrame(){if(motionFrame)return;motionLast=performance.now();motionFrame=requestAnimationFrame(updateMotion);}
  function resetMotion(immediate=false){
    pointer=null;
    if(!motionTiles.length)return;
    for(const tile of motionTiles){Object.assign(tile.target,{x:0,y:0,scale:1,rx:0,ry:0});}
    activeWork?.classList.remove('is-focal');activeWork=null;
    if(immediate){
      if(motionFrame)cancelAnimationFrame(motionFrame);motionFrame=0;
      for(const tile of motionTiles){
        tile.button.style.removeProperty('--push-x');tile.button.style.removeProperty('--push-y');
        tile.button.style.removeProperty('--flight-x');tile.button.style.removeProperty('--flight-y');
        tile.button.style.removeProperty('--flight-rx');tile.button.style.removeProperty('--flight-ry');
        tile.button.style.removeProperty('--combined-scale');
      }
      motionTiles=[];
    } else startMotionFrame();
  }
  document.addEventListener('pointermove',e=>{
    if(!motionEnabled.matches||(e.pointerType!=='mouse'&&e.pointerType!=='pen'))return;
    pointer={x:e.clientX,y:e.clientY};
    setMotionTargets();startMotionFrame();
  },{passive:true});
  document.addEventListener('pointerleave',()=>resetMotion());
  let scrollMotionFrame=0;
  window.addEventListener('scroll',()=>{
    updateBackToTop();scheduleSkyUpdate();
    if(!scrollMotionFrame)scrollMotionFrame=requestAnimationFrame(()=>{
      scrollMotionFrame=0;
      if(motionEnabled.matches&&state.view==='gallery'){
        cacheMotionTiles();setMotionTargets();startMotionFrame();
      }
      if(!streamObserver&&!streamSentinel.hidden&&streamSentinel.getBoundingClientRect().top<innerHeight+1100)queueGalleryBatch();
    });
  },{passive:true});
  window.addEventListener('resize',()=>{
    scheduleSkyUpdate();resetMotion(true);
    if(galleryColumns()!==renderedColumns&&state.items.length)renderGallery();
  },{passive:true});
  motionEnabled.addEventListener?.('change',()=>resetMotion(true));
  for(const panel of [$('#date-filters'),$('#tag-panel')]){
    panel.hidden=false;
    panel.classList.add('animated-filter-panel');
    panel.setAttribute('aria-hidden','true');
    panel.inert=true;
  }
  buildNightStars();
  setTheme(theme);
  scheduleSkyUpdate();
  localizeStatic();
  loadPortfolio();
})();

