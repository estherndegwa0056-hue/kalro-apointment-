const WA="254117447640";
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];const livestock=[{name:"Friesian Cattle",cat:"dairy",unit:"Premium dairy cow",price:165000,img:"assets/site-images/product-friesian-cattle.jpg",desc:"High-yield dairy cattle selected for productive farming."},{name:"Jersey Dairy Cow",cat:"dairy",unit:"Premium dairy cow",price:135000,img:"assets/site-images/product-jersey-dairy-cow.jpg",desc:"High-quality genetics and efficient milk production."},{name:"Ayrshire Pedigree Bull",cat:"beef",unit:"Pedigree bull",price:200000,img:"assets/site-images/product-ayrshire-pedigree-bull.jpg",desc:"Proven genetics for productive dairy breeding."},{name:"Friesian Lactating Cow",cat:"dairy",unit:"Lactating cow",price:145000,img:"assets/site-images/product-friesian-lactating-cow.jpg",desc:"Freshly selected lactating cow for dairy production."},{name:"Sahiwal Cross Heifer",cat:"beef",unit:"Young heifer",price:85000,img:"assets/site-images/product-sahiwal-cross-heifer.jpg",desc:"Hardy livestock selected for semi-arid and mixed farming."},{name:"Fleckvieh Dairy Cow",cat:"dairy",unit:"Dual-purpose cow",price:140000,img:"assets/site-images/product-fleckvieh-dairy-cow.jpg",desc:"Dual-purpose animal with good milk production and strong fertility."},{name:"Full Blood Boer Goat",cat:"goat",unit:"Pedigree goat",price:55000,img:"assets/site-images/product-full-blood-boer-goat.jpg",desc:"Strong pedigree goat selected for meat and breeding."},{name:"Dorper Sheep",cat:"sheep",unit:"Breeding sheep",price:45000,img:"assets/site-images/product-dorper-sheep.jpg",desc:"Hardy, adaptable sheep selected for meat production."},{name:"Holstein Friesian Calves",cat:"dairy",unit:"2–4 months calf",price:12000,img:"assets/site-images/product-friesian-cattle.jpg",desc:"Quality dairy calves from high-yielding dams, available from young calves to in-calf heifers."},{name:"Ayrshire Dairy Cow",cat:"dairy",unit:"2nd lactation cow",price:140000,img:"assets/site-images/product-ayrshire-pedigree-bull.jpg",desc:"Productive Ayrshire dairy cow with vaccination and production records available."},{name:"Girolando Breed",cat:"dairy",unit:"Girolando cow",price:0,img:"assets/site-images/product-friesian-cattle.jpg",desc:"Heat-tolerant Gir × Holstein cross suited to Kenyan farming conditions."},{name:"Saanen Dairy Goat",cat:"goat",unit:"Dairy goat",price:13500,img:"assets/site-images/saanen-dairy-goat.jpg",desc:"Healthy Saanen dairy goats available at different stages for production and breeding."},{name:"Hampshire Down Sheep",cat:"sheep",unit:"Hampshire Down lamb",price:6000,img:"assets/site-images/hampshire-down-sheep.jpg",desc:"Fast-growing, adaptable sheep with strong meat-production potential."}];const feeds=[{name:"Lucerne Hay",unit:"25 kg per bale",price:400,img:"assets/site-images/feed-lucerne-hay.jpg",group:"hay",desc:"Fresh, nutritious lucerne hay suitable for dairy cattle and other livestock."},{name:"Boma Rhodes Hay",unit:"18 kg per bale",price:200,img:"assets/site-images/feed-boma-rhodes-hay.jpg",group:"hay",desc:"Quality Rhodes grass hay for livestock feeding, available in bulk."},{name:"Barley",unit:"15 kg per bale",price:130,img:"assets/site-images/feed-barley.jpg",group:"hay",desc:"Barley fodder supplied in convenient bales for livestock feeding."},{name:"Lucerne Seeds",unit:"Per kilogram",price:1250,img:"assets/site-images/feed-lucerne-seeds.jpg",group:"seed",desc:"Quality lucerne seeds for establishing productive fodder fields."},{name:"Boma Rhodes Seeds",unit:"Per kilogram",price:450,img:"assets/site-images/feed-boma-rhodes-seeds.jpg",group:"seed",desc:"Rhodes grass seeds for establishing quality pasture and fodder."},{name:"Full-Corn Silage",unit:"Per kg",price:15,img:"assets/site-images/feed-full-corn-silage.jpg",group:"silage",desc:"Full-corn chopped fodder available in bulk for livestock feeding."},{name:"Non Full-Corn Silage",unit:"Per kg",price:10,img:"assets/site-images/feed-non-full-corn-silage.jpg",group:"silage",desc:"Chopped fodder available for bulk livestock feeding."},{name:"Molasses",unit:"20-litre bucket",price:900,img:"assets/site-images/feed-molasses.jpg",group:"supp",desc:"Molasses available for livestock feeding and feed supplementation."},{name:"Dry Maize — 90kg Bag",unit:"90 kg bag",price:3500,img:"assets/site-images/dry-maize.jpg",group:"supp",desc:"Dry maize supplied in 90kg bags for animal feed or milling."}];const chicks=[{name:"1–3 Days Old",unit:"Per chick",price:60,img:"assets/site-images/chick-1-3-days-old.jpg",desc:"Young chicks available for farmers starting a new flock."},{name:"1 Week Old",unit:"Per chick",price:100,img:"assets/site-images/chick-1-week-old.jpg",desc:"One-week-old chicks ready for continued brooding and care."},{name:"2 Weeks Old",unit:"Per chick",price:160,img:"assets/site-images/chick-2-weeks-old.jpg",desc:"Two-week-old chicks suitable for farmers seeking older birds."},{name:"1 Month Old",unit:"Per chick",price:250,img:"assets/site-images/chick-1-month-old.jpg",desc:"One-month-old birds for farmers who prefer more developed chicks."},{name:"3 Months Old",unit:"Per bird",price:400,img:"assets/site-images/chick-3-months-old.jpg",desc:"Three-month-old birds available for your poultry project."},{name:"4 Months Old",unit:"Per bird",price:500,img:"assets/site-images/chick-4-months-old.jpg",desc:"Four-month-old birds available for farmers expanding their flock."},{name:"5 Months Old",unit:"Per bird",price:700,img:"assets/site-images/chick-5-months-old.jpg",desc:"Five-month-old birds available for your poultry farming needs."}];const money=n=>"KSh "+n.toLocaleString();function card(p){return `<article class="product-card" data-cat="${p.cat||''}" itemscope itemtype="https://schema.org/Product"><img class="zoomable-image" loading="lazy" decoding="async" src="${p.img}" alt="${p.name} at KALRO Dairy Institute" itemprop="image"><meta itemprop="name" content="${p.name}"><meta itemprop="description" content="${p.desc}"><div class="card-body"><span class="tag">${(p.cat||p.group||'PRODUCT').toUpperCase()}</span><h3 itemprop="name">${p.name}</h3><p itemprop="description">${p.desc}</p><span class="price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">${p.price>0?`From <span itemprop="price">${money(p.price).split(" ").slice(1).join(" ")}</span><meta itemprop="priceCurrency" content="KES">`:`Price on inquiry`}<link itemprop="availability" href="https://schema.org/InStock"></span><br><button class="btn order-btn" data-name="${p.name}" data-unit="${p.unit}" data-price="${p.price}">View Order</button></div></article>`}function renderLivestock(filter="all"){const q=(document.querySelector("#product-search")?.value||"").trim().toLowerCase();const list=livestock.filter(p=>(filter==="all"||p.cat===filter)&&(!q||`${p.name} ${p.desc} ${p.cat}`.toLowerCase().includes(q)));document.querySelector("#livestock-grid").innerHTML=list.map(card).join("");const st=document.querySelector("#catalog-status");if(st)st.textContent=`Showing ${list.length} of ${livestock.length} livestock options${q?` matching “${q}”`:""}.`;bindOrders();bindImageViewer()}function feedCard(p){return `<article class="feed-card" itemscope itemtype="https://schema.org/Product"><img class="zoomable-image" loading="lazy" decoding="async" src="${p.img}" alt="${p.name} for livestock at KALRO Dairy Institute" itemprop="image"><meta itemprop="name" content="${p.name}"><meta itemprop="description" content="${p.desc}"><div class="card-body"><span class="tag">${(p.group||"CHICKS").toUpperCase()}</span><h3 itemprop="name">${p.name}</h3><p itemprop="description">${p.desc}</p><span class="price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">${p.price>0?`<span itemprop="price">${money(p.price).split(" ").slice(1).join(" ")}</span><meta itemprop="priceCurrency" content="KES">`:`Price on inquiry`}<link itemprop="availability" href="https://schema.org/InStock"></span><br><button class="btn order-btn" data-name="${p.name}" data-unit="${p.unit}" data-price="${p.price}">View Order</button></div></article>`}function renderFeeds(){for(const g of ['hay','seed','silage','supp']){document.querySelector('#'+({hay:'feed-grid',seed:'seed-grid',silage:'silage-grid',supp:'supp-grid'}[g])).innerHTML=feeds.filter(p=>p.group===g).map(feedCard).join('')}bindOrders()}function renderChicks(){document.querySelector('#chick-grid').innerHTML=chicks.map(feedCard).join('');bindOrders()}const modal=document.querySelector('#order-modal'),title=document.querySelector('#modal-title'),unit=document.querySelector('#modal-unit'),qty=document.querySelector('#quantity'),total=document.querySelector('#modal-total'),wa=document.querySelector('#modal-whatsapp');let selected={price:0};let lastFocused=null;function openOrder(p){lastFocused=document.activeElement;selected=p;title.textContent=p.name;unit.textContent=p.unit;qty.value=1;updateTotal();modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>qty.focus(),0)}function updateTotal(){const n=Math.max(1,parseInt(qty.value||1,10));qty.value=n;const t=selected.price*n;total.textContent=money(t);wa.href=`https://wa.me/${WA}?text=${encodeURIComponent(`Hello KALRO Dairy Institute, I would like to order ${n} x ${selected.name} (${selected.unit}). Total: ${money(t)}.`)}`}function closeOrder(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';if(lastFocused)lastFocused.focus()}function bindOrders(){document.querySelectorAll('.order-btn').forEach(b=>b.onclick=()=>openOrder({name:b.dataset.name,unit:b.dataset.unit,price:Number(b.dataset.price)}))}document.querySelector('#modal-close').onclick=closeOrder;modal.onclick=e=>{if(e.target===modal)closeOrder()};qty.oninput=updateTotal;document.addEventListener('keydown',e=>{if(e.key==='Escape')closeOrder()});document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderLivestock(b.dataset.filter)});document.querySelector('#breed-form').onsubmit=e=>{e.preventDefault();const r=document.querySelector('#breed-result');r.textContent='Recommended starting point: Friesian or Ayrshire for strong dairy performance. Our team can tailor the choice to your farm.';r.style.display='block'};document.querySelector('#contact-form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);const msg=`Hello KALRO Dairy Institute. Name: ${f.get('name')}. Phone: ${f.get('phone')}. Interest: ${f.get('interest')}. Message: ${f.get('message')}`;window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,'_blank')};renderLivestock();renderFeeds();renderChicks();bindImageViewer();

(function addProductStructuredData(){
  const products=[...livestock,...feeds,...chicks].map((p,i)=>{const item={"@type":"Product","@id":`#product-${i+1}`,"name":p.name,"description":p.desc,"image":new URL(p.img,document.baseURI).href};if(p.price>0)item.offers={"@type":"Offer","priceCurrency":"KES","price":String(p.price),"availability":"https://schema.org/InStock"};return item;});
  const script=document.createElement("script");script.type="application/ld+json";script.textContent=JSON.stringify({"@context":"https://schema.org","@graph":products});document.head.appendChild(script);
})();


// Full-screen image viewer: robust event delegation for all current and dynamically rendered images.
let imageViewer=null;
let imageViewerImg=null;
let imageViewerCaption=null;
let imageViewerClose=null;
let lastImageFocus=null;

function ensureImageViewer(){
  if(imageViewer) return;
  imageViewer=document.createElement('div');
  imageViewer.id='image-lightbox-runtime';
  imageViewer.setAttribute('role','dialog');
  imageViewer.setAttribute('aria-modal','true');
  imageViewer.setAttribute('aria-hidden','true');
  imageViewer.innerHTML=`
    <button type="button" id="image-lightbox-runtime-close" aria-label="Close full-screen image">×</button>
    <figure>
      <img id="image-lightbox-runtime-img" src="" alt="">
      <figcaption id="image-lightbox-runtime-caption"></figcaption>
    </figure>`;
  document.body.appendChild(imageViewer);
  imageViewerImg=imageViewer.querySelector('#image-lightbox-runtime-img');
  imageViewerCaption=imageViewer.querySelector('#image-lightbox-runtime-caption');
  imageViewerClose=imageViewer.querySelector('#image-lightbox-runtime-close');
  imageViewerClose.addEventListener('click',closeImageViewer);
  imageViewer.addEventListener('click',e=>{if(e.target===imageViewer) closeImageViewer()});
  imageViewerImg.addEventListener('click',e=>e.stopPropagation());
}

function openImageViewer(img){
  if(!img || img.id==='image-lightbox-runtime-img') return;
  ensureImageViewer();
  lastImageFocus=document.activeElement;
  const source=img.currentSrc || img.getAttribute('src') || img.src;
  if(!source) return;
  imageViewerImg.src=source;
  imageViewerImg.alt=img.alt || '';
  imageViewerCaption.textContent=img.alt || '';
  imageViewer.setAttribute('aria-hidden','false');
  imageViewer.classList.add('open');
  document.body.classList.add('lightbox-open');
  imageViewerClose.focus();
}

function closeImageViewer(){
  if(!imageViewer) return;
  imageViewer.classList.remove('open');
  imageViewer.setAttribute('aria-hidden','true');
  document.body.classList.remove('lightbox-open');
  imageViewerImg.src='';
  if(lastImageFocus && typeof lastImageFocus.focus==='function') lastImageFocus.focus();
}

function bindImageViewer(){
  document.querySelectorAll('img.zoomable-image').forEach(img=>{
    if(img.id==='image-lightbox-runtime-img') return;
    img.dataset.lightboxPrepared='1';
    img.tabIndex=0;
    img.setAttribute('role','button');
    img.setAttribute('aria-label',`Open ${img.alt || 'image'} full screen`);
  });
}

document.addEventListener('click',e=>{
  const img=e.target.closest?.('img.zoomable-image');
  if(img && img.id!=='image-lightbox-runtime-img') openImageViewer(img);
});

document.addEventListener('keydown',e=>{
  if((e.key==='Enter'||e.key===' ') && document.activeElement?.matches?.('img.zoomable-image') && document.activeElement.id!=='image-lightbox-runtime-img'){
    e.preventDefault();
    openImageViewer(document.activeElement);
  }
  if(e.key==='Escape' && imageViewer?.classList.contains('open')) closeImageViewer();
});


// Mobile navigation
const mobileToggle=$(".mobile-menu-toggle"), mobileNav=$("#mobile-nav");
if(mobileToggle&&mobileNav){mobileToggle.addEventListener("click",()=>{const open=mobileToggle.getAttribute("aria-expanded")==="true";mobileToggle.setAttribute("aria-expanded",String(!open));mobileToggle.setAttribute("aria-label",open?"Open navigation":"Close navigation");mobileNav.hidden=open;});mobileNav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mobileNav.hidden=true;mobileToggle.setAttribute("aria-expanded","false");mobileToggle.setAttribute("aria-label","Open navigation")}));}
// Live product search
$("#product-search")?.addEventListener("input",()=>{const active=$(".filters button.active")?.dataset.filter||"all";renderLivestock(active)});
// Immersive review carousel: 4-second rotation with staged text reveals.
(function reviews(){
  const slides=$$(".review-slide"),dots=$("#review-dots"),prev=$(".review-prev"),next=$(".review-next"),stage=$(".review-stage");
  if(!slides.length||!dots||!stage)return;
  let i=0,timer=null,paused=false;
  slides.forEach((_,n)=>{const b=document.createElement("button");b.type="button";b.className="review-dot";b.setAttribute("aria-label",`Show review ${n+1}`);b.addEventListener("click",()=>{show(n);restart()});dots.appendChild(b)});
  const dotEls=$$(".review-dot");
  function show(n){
    i=(n+slides.length)%slides.length;
    slides.forEach((x,k)=>{x.classList.remove("is-active","review-reset");if(k===i){void x.offsetWidth;x.classList.add("review-reset");requestAnimationFrame(()=>x.classList.add("is-active"));}});
    dotEls.forEach((x,k)=>x.classList.toggle("active",k===i));
    const progress=$(".review-progress span");
    if(progress&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){progress.style.animation="none";void progress.offsetWidth;progress.style.animation="reviewProgress 4s linear forwards";}
  }
  function stop(){if(timer){clearInterval(timer);timer=null}}
  function start(){if(paused||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;stop();timer=setInterval(()=>show(i+1),4000)}
  function restart(){stop();start()}
  prev?.addEventListener("click",()=>{show(i-1);restart()});
  next?.addEventListener("click",()=>{show(i+1);restart()});
  stage.addEventListener("mouseenter",()=>{paused=true;stop()});
  stage.addEventListener("mouseleave",()=>{paused=false;start()});
  stage.addEventListener("focusin",()=>{paused=true;stop()});
  stage.addEventListener("focusout",e=>{if(!stage.contains(e.relatedTarget)){paused=false;start()}});
  stage.addEventListener("touchstart",()=>{paused=true;stop()},{passive:true});
  show(0);start();
})();
// Reveal sections as they enter the viewport.
(function reveal(){const items=$$("section,.service-grid article,.expertise-grid article,.feed-card,.product-card,.extra-product-card");items.forEach((el,k)=>{if(k>2)el.classList.add("reveal")});if("IntersectionObserver" in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target)}}),{threshold:.08});$$('.reveal').forEach(e=>io.observe(e));}else{$$('.reveal').forEach(e=>e.classList.add('is-visible'));}})();
// Keyboard-friendly review controls.
document.addEventListener("keydown",e=>{if((e.key==="ArrowLeft"||e.key==="ArrowRight")&&document.activeElement?.closest?.(".review-stage")){e.key==="ArrowLeft"?$(".review-prev")?.click():$(".review-next")?.click()}});
// Scroll progress and active navigation feedback
(function pageMotion(){const bar=$("#scroll-progress");const update=()=>{if(bar){const max=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${max>0?scrollY/max:0})`}};addEventListener("scroll",update,{passive:true});update();const links=$$(".site-header nav a,.mobile-nav a"), sections=$$("main section[id]");if("IntersectionObserver" in window&&links.length){const map=new Map(links.map(a=>[a.getAttribute("href")?.slice(1),a]));const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.removeAttribute("aria-current"));map.get(e.target.id)?.setAttribute("aria-current","page")}}),{rootMargin:"-25% 0px -65% 0px",threshold:0});sections.forEach(s=>io.observe(s));}})();
bindImageViewer();

// Premium hero entrance: deliberately independent from scroll/reveal observers.
(function heroEntrance(){
  const hero = document.querySelector(".hero");
  if(!hero) return;
  const items = hero.querySelectorAll(".hero-reveal");
  items.forEach(el => el.style.animationPlayState = "running");
})();


// Appointment request: the transaction code is passed to staff for manual review; no payment is processed here.
(()=>{
  const form=document.querySelector('#appointment-form');
  if(!form)return;
  const dateInput=document.querySelector('#appointment-date');
  const now=new Date();
  const localToday=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  dateInput.min=localToday;
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const clean=value=>String(value||'').trim();
    const message=[
      'Hello KALRO Dairy Institute, I would like to request a farm appointment.',
      '',
      `Full name: ${clean(data.get('fullname'))}`,
      `Phone: ${clean(data.get('phone'))}`,
      `Email: ${clean(data.get('email'))||'Not provided'}`,
      `Appointment purpose: ${clean(data.get('purpose'))}`,
      `Preferred date: ${clean(data.get('date'))}`,
      `Preferred time: ${clean(data.get('time'))}`,
      `Number of visitors: ${clean(data.get('visitors'))}`,
      `Payment transaction code: ${clean(data.get('transaction'))}`,
      `Additional details: ${clean(data.get('details'))||'None'}`,
      '',
      'I have read the required Farm Visit & Appointment Guidebook and understand the booking terms. Please verify my payment transaction code and confirm whether the requested appointment time is available.',
      '',
      'I understand this is an appointment request, not a confirmed booking.'
    ].join('\n');
    const link=`https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
    const opened=window.open(link,'_blank','noopener,noreferrer');
    const status=document.querySelector('#appointment-status');
    if(opened){status.textContent='WhatsApp opened with your booking details. Send the message there, then wait for staff to verify payment and confirm your appointment.';}
    else {status.textContent='Your browser blocked the WhatsApp window. Please allow pop-ups and submit again, or contact the farm directly at +254 117 447 640.';}
  });
})();
