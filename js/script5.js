(function(){
const IMG="assets/image_28.webp",SC=TEXTS.tutorial.steps,seen={};
const TOUCH=('ontouchstart' in window)&&matchMedia('(pointer:coarse)').matches;
const V=Object.assign({},TOUCH?TEXTS.tutorial.controls.touch:TEXTS.tutorial.controls.pc);
const css=document.createElement('style');css.textContent=`
#gdv{position:fixed;inset:0;z-index:2147483200;background:rgba(5,3,14,.55);font-family:Mali,Sarabun,'Noto Sans Thai',system-ui,sans-serif;-webkit-tap-highlight-color:transparent;animation:gdf .25s}
@keyframes gdf{from{opacity:0}to{opacity:1}}
#gdv .gc{position:absolute;left:max(4px,env(safe-area-inset-left,0px));bottom:env(safe-area-inset-bottom,0px);height:min(46vh,300px);width:auto;pointer-events:none;filter:drop-shadow(0 4px 10px rgba(0,0,0,.5));animation:gdp .45s cubic-bezier(.2,1.4,.4,1),gdb 2.6s ease-in-out .5s infinite;transform-origin:50% 100%}
@keyframes gdp{from{transform:translateY(40%) scale(.8);opacity:0}to{transform:none;opacity:1}}
@keyframes gdb{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
#gdv .gb{position:absolute;left:calc(min(46vh,300px)*.86 + 14px);right:14px;bottom:calc(min(46vh,300px)*.34 + env(safe-area-inset-bottom,0px));max-width:480px;background:#fff8ea;color:#2a2622;border:3px solid #2a2622;border-radius:18px;padding:12px 16px 10px;box-shadow:0 4px 0 #2a2622;animation:gdp .3s .12s both}
#gdv .gb::before{content:'';position:absolute;left:-14px;bottom:20px;width:18px;height:18px;background:#fff8ea;border-left:3px solid #2a2622;border-bottom:3px solid #2a2622;transform:rotate(45deg)}
#gdv .gt{font-size:1.02rem;line-height:1.6;font-weight:700;min-height:3.2em;white-space:pre-wrap}
#gdv .gf{display:flex;justify-content:space-between;align-items:center;margin-top:8px;gap:10px}
#gdv .gd{display:flex;gap:5px}#gdv .gd i{width:8px;height:8px;border-radius:50%;background:#d9c7a6}#gdv .gd i.on{background:#e8604c}
#gdv button{font:inherit;cursor:pointer}
#gdv .gn{background:#e8604c;color:#fff;border:3px solid #2a2622;border-radius:999px;padding:3px 16px;font-weight:700;box-shadow:0 3px 0 #2a2622}
#gdv .gs{background:none;border:0;color:#7a6a52;text-decoration:underline;font-size:.85rem}
@media (max-aspect-ratio:1/1){#gdv .gc{height:min(36vh,260px)}#gdv .gb{left:12px;right:12px;bottom:calc(min(36vh,260px)*.9 + env(safe-area-inset-bottom,0px));max-width:none}#gdv .gb::before{left:calc(min(36vh,260px)*.55);bottom:-12px;transform:rotate(-45deg)}}
`;document.head.appendChild(css);
window.__guide=function(kind,cb){
  if(seen[kind]||!SC[kind]){cb&&cb();return}seen[kind]=1;
  const L=SC[kind].map(t=>t.replace(/\{(\w+)\}/g,(m,k)=>V[k]||'')),root=document.createElement('div');root.id='gdv';
  root.innerHTML='<img class="gc" src="'+IMG+'" alt=""><div class="gb"><div class="gt"></div><div class="gf"><div class="gd">'+L.map(()=>'<i></i>').join('')+'</div><div><button class="gs">ข้าม</button> <button class="gn"></button></div></div></div>';
  document.body.appendChild(root);
  const T=root.querySelector('.gt'),N=root.querySelector('.gn'),dots=[...root.querySelectorAll('.gd i')];let i=0,k=0,tm=null,full=false;
  const stop=e=>e.stopPropagation();['touchstart','touchmove','pointerdown','mousedown','click','keydown','keyup'].forEach(n=>root.addEventListener(n,stop));
  function say(){const ch=[...L[i]];T.textContent='';k=0;full=false;dots.forEach((d,j)=>d.classList.toggle('on',j===i));N.textContent=i<L.length-1?'ต่อไป ▶':'เริ่มเลย!';clearInterval(tm);tm=setInterval(()=>{T.textContent+=ch[k++]||'';if(k>=ch.length){clearInterval(tm);full=true}},28)}
  function end(){clearInterval(tm);removeEventListener('keydown',kd,true);root.remove();cb&&cb()}
  function next(){if(!full){clearInterval(tm);T.textContent=L[i];full=true;return}if(i<L.length-1){i++;say()}else end()}
  const kd=e=>{if(!document.getElementById('gdv'))return;if(e.key==='Enter'||e.key===' '||e.key==='ArrowRight'){e.preventDefault();e.stopPropagation();next()}else if(e.key==='Escape'){e.stopPropagation();end()}};
  addEventListener('keydown',kd,true);
  root.addEventListener('click',e=>{if(e.target.closest('.gs'))end();else next()});
  say();
};
window.__guide('puz');
})();
