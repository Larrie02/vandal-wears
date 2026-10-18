const $=id=>document.getElementById(id);

/* Product illustrations: garment on a hanger in front of an arch and sun */
function art(t,c){
 const back=`<path d="M8 150V64Q8 6 60 6T112 64V150Z" fill="${c}" opacity=".2"/><circle cx="92" cy="30" r="9" fill="${c}" opacity=".45"/><rect x="0" y="132" width="120" height="18" fill="${c}" opacity=".18"/>`;
 const hang=`<path d="M60 24v-5a5 5 0 1 0-5-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M60 24 28 40h64Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>`;
 let g="";
 if(t=="d")g=`<path d="M42 38 60 54 78 38 90 46 83 72 98 140Q60 150 22 140L37 72 30 46Z" fill="${c}"/>
  <path d="M60 54 78 38 90 46 83 72 98 140Q80 145 66 146Z" fill="#000" opacity=".1"/>
  <path d="M42 38 76 76" stroke="#000" stroke-opacity=".22" stroke-width="1.6" fill="none"/>
  <path d="M37 72Q60 80 83 72" stroke="#000" stroke-opacity=".18" stroke-width="1.4" fill="none"/>
  <path d="M76 76 84 92M76 76 70 94" stroke="#000" stroke-opacity=".3" stroke-width="2.2" stroke-linecap="round" fill="none"/><circle cx="76" cy="76" r="3.4" fill="#000" opacity=".3"/>
  <path d="M46 94 38 140M60 88V146M74 96 82 140" stroke="#000" stroke-opacity=".1" stroke-width="1.4"/>`;
 else if(t=="m")g=`<path d="M45 38 49 58 37 72 24 142Q60 152 96 142L83 72 71 58 75 38 69 38 66 54H54L51 38Z" fill="${c}"/>
  <path d="M60 54H66L69 38 75 38 71 58 83 72 96 142Q78 147 60 148Z" fill="#000" opacity=".1"/>
  <path d="M37 72Q60 80 83 72" stroke="#000" stroke-opacity=".18" stroke-width="1.4" fill="none"/>
  <path d="M60 56V146" stroke="#000" stroke-opacity=".15" stroke-width="1.2"/>
  <g fill="#fff" opacity=".85"><circle cx="60" cy="64" r="1.8"/><circle cx="60" cy="80" r="1.8"/><circle cx="60" cy="96" r="1.8"/><circle cx="60" cy="112" r="1.8"/><circle cx="60" cy="128" r="1.8"/></g>
  <path d="M26 132Q60 142 94 132" stroke="#000" stroke-opacity=".15" stroke-width="1.2" fill="none"/>`;
 else if(t=="t")g=`<path d="M38 40 54 38Q60 52 66 38L82 40 102 64 90 77 84 69V122H36V69L30 77 18 64Z" fill="${c}"/>
  <path d="M60 52 66 38 82 40 102 64 90 77 84 69V122H60Z" fill="#000" opacity=".1"/>
  <path d="M54 38Q60 52 66 38" stroke="#000" stroke-opacity=".28" stroke-width="1.6" fill="none"/>
  <path d="M42 84H78M40 98H80M42 112H78" stroke="#fff" stroke-opacity=".32" stroke-width="1.2" stroke-dasharray="5 4"/>
  <path d="M36 122H84" stroke="#000" stroke-opacity=".15" stroke-width="1.4"/>`;
 else g=`<path d="M36 40H84V50H36Z" fill="${c}"/><path d="M36 50H84L98 144H64L60 76 56 144H22Z" fill="${c}"/>
  <path d="M60 50H84L98 144H64L60 76Z" fill="#000" opacity=".1"/>
  <path d="M36 50H84" stroke="#000" stroke-opacity=".25" stroke-width="1.4"/>
  <g stroke="#000" stroke-opacity=".28" stroke-width="2" stroke-linecap="round"><path d="M42 40v10M78 40v10"/></g>
  <path d="M60 50 60 76M44 56 40 140M76 56 80 140" stroke="#000" stroke-opacity=".12" stroke-width="1.3"/>`;
 return `<svg viewBox="0 0 120 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${back}${hang}${g}</svg>`}
const IMG={"p": "images/product-wide-leg-trousers.jpg", "m": "images/product-sage-midi-dress.jpg", "t": "images/product-rose-linen-top.jpg", "d": "images/product-linen-wrap-dress.jpg"};
const items=[["Linen Wrap Dress",38000,"d","#d9a441"],["Sage Midi Dress",34500,"m","#7d8f6b"],["Rose Linen Top",18000,"t","#b36a68"],["Wide-Leg Trousers",27000,"p","#c9a878"]];
$("grid").innerHTML=items.map((x,i)=>`<div class="p" data-s="${(x[0]+" "+({d:"dress",m:"dress",t:"top shirt blouse",p:"pants trousers"})[x[2]]).toLowerCase()}"><div class="im">${IMG[x[2]]?`<img src="${IMG[x[2]]}" alt="${x[0]}">`:art(x[2],x[3])}</div><h3>${x[0]}</h3><small>₦${x[1].toLocaleString()}</small><button data-add="${i}">Add to bag</button></div>`).join("");

const STORY=["images/story-warm-tones.jpg", "images/story-soft-fabrics.jpg", "images/story-made-for-everyday.jpg"];
const stories=[["Warm tones","Burnt orange, sage and rose, picked to sit well in daylight."],["Soft fabrics","Linen that relaxes with every wash and still holds its shape."],["Made for every day","Pieces that move from errands to dinner without a change."]];
$("stories").innerHTML=stories.map((s,i)=>`<figure class="st"><div class="ph"><img src="${STORY[i]}" alt="${s[0]}"></div><h3>${s[0]}</h3><p>${s[1]}</p></figure>`).join("");

function toast(t){const e=$("toast");e.textContent=t;e.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("show"),1800)}
/* Bag */
const cart={};const money=v=>"₦"+v.toLocaleString();
function renderBag(){
 const keys=Object.keys(cart);let total=0,count=0;
 keys.forEach(i=>{total+=items[i][1]*cart[i];count+=cart[i]});
 $("bagitems").innerHTML=keys.map(i=>{const x=items[i];return `<li><img src="${IMG[x[2]]}" alt=""><div><b>${x[0]}</b><small>${money(x[1])}</small><div class="qty"><button data-q="${i}" data-d="-1" aria-label="Fewer ${x[0]}">−</button><span>${cart[i]}</span><button data-q="${i}" data-d="1" aria-label="More ${x[0]}">+</button></div></div><button class="rm" data-rm="${i}" aria-label="Remove ${x[0]}">✕</button></li>`}).join("");
 $("bagempty").hidden=keys.length>0;$("bagfoot").hidden=!keys.length;
 $("total").textContent=money(total);$("cnt").textContent=count;
}
function bagOpen(o){$("bag").classList.toggle("open",o);$("scrim").hidden=!o;$("bag").setAttribute("aria-hidden",String(!o))}
$("bagbtn").onclick=()=>bagOpen(true);$("bagclose").onclick=()=>bagOpen(false);$("scrim").onclick=()=>bagOpen(false);
$("checkout").onclick=()=>toast("Checkout isn't connected yet");
document.addEventListener("click",e=>{
 const add=e.target.closest("[data-add]");
 if(add){const i=add.dataset.add;cart[i]=(cart[i]||0)+1;renderBag();toast(items[i][0]+" added to bag");return}
 const qb=e.target.closest("[data-q]");
 if(qb){const i=qb.dataset.q;cart[i]+=+qb.dataset.d;if(cart[i]<1)delete cart[i];renderBag();return}
 const rm=e.target.closest("[data-rm]");
 if(rm){delete cart[rm.dataset.rm];renderBag()}
});
renderBag();

/* Search */
const sb=$("searchbar"),qi=$("q");
function filt(){const v=qi.value.trim().toLowerCase();let shown=0;document.querySelectorAll(".p").forEach(el=>{const m=!v||el.dataset.s.includes(v);el.hidden=!m;if(m)shown++});$("nores").hidden=shown>0}
function searchClose(){sb.hidden=true;qi.value="";filt()}
$("sbtn").onclick=()=>{if(sb.hidden){sb.hidden=false;qi.focus()}else searchClose()};
$("qclose").onclick=searchClose;
qi.oninput=()=>{filt();if(qi.value.trim())$("shop").scrollIntoView()};
document.addEventListener("keydown",e=>{if(e.key==="Escape"){bagOpen(false);if(!sb.hidden)searchClose()}});
$("go").onclick=()=>$("shop").scrollIntoView();
$("burger").onclick=()=>$("nav").classList.toggle("open");
$("f").onsubmit=e=>{e.preventDefault();e.target.reset();toast("Thank you for subscribing")};
$("theme").onclick=()=>{const r=document.documentElement,d=matchMedia("(prefers-color-scheme:dark)").matches;const c=r.dataset.theme||(d?"dark":"light");r.dataset.theme=c==="dark"?"light":"dark"};
const words=["Luxury","Elegance","Confidence","Style"];let w=0;
setInterval(()=>{const e=$("word");e.style.opacity=0;setTimeout(()=>{w=(w+1)%words.length;e.textContent=words[w];e.style.opacity=1},400)},3200);
const HERO=["images/hero-left.jpg", "images/hero-circle.jpg", "images/hero-right.jpg"];
[["fa",0,"Woman in a sage green shirt dress holding a woven bag"],["fb",1,"Woman in an olive button-front dress carrying a tan tote"],["fc",2,"Woman in a terracotta linen outfit leaning on a stone wall"]].forEach(([id,i,alt])=>{$(id).innerHTML=`<img src="${HERO[i]}" alt="${alt}">`});
