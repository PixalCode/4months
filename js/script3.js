(function(){
const host=document.createElement('div');host.id='gzhost';host.style.cssText='position:fixed;inset:0;z-index:2147483000;display:none';document.body.appendChild(host);
const R=host.attachShadow({mode:'open'});
R.innerHTML='<link rel="stylesheet" href="css/style4.css">'+"<div class=\"gb\" id=\"wrap\"><main>\n<header class=\"hd\"><h1 id=\"ttl\">ตู้กาชา</h1><button class=\"ico\" id=\"nav\" aria-label=\"เปิดคอลเลกชัน\"></button></header><p class=\"sub\" id=\"sub\">โดนจับแล้ว… จบเกมแล้ว ใช้เหรียญที่มีสุ่มข้อความได้เลย 👻</p>\n<section id=\"vMain\">\n<div class=\"stage\"><div id=\"aura\"></div><svg id=\"mach\" viewBox=\"0 0 360 470\" role=\"img\" aria-label=\"ตู้กาชาปอง\">\n  <defs>\n    <clipPath id=\"gc\"><path d=\"M100 78H240Q268 78 268 112V202Q268 236 240 236H100Z\"/><path d=\"M100 78L78 67V225L100 236Z\"/></clipPath>\n    <linearGradient id=\"gB\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#f8f0e0\"/><stop offset=\"1\" stop-color=\"#e9ddc4\"/></linearGradient>\n    <linearGradient id=\"gS\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#cfc1a6\"/><stop offset=\"1\" stop-color=\"#ddd0b6\"/></linearGradient>\n    <linearGradient id=\"gT\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#fffdf6\"/><stop offset=\"1\" stop-color=\"#f4ead6\"/></linearGradient>\n    <linearGradient id=\"gG\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#eaf3f2\"/><stop offset=\"1\" stop-color=\"#c9dcdc\"/></linearGradient>\n  </defs>\n  <!-- floor shadow + plinth -->\n  <ellipse cx=\"170\" cy=\"414\" rx=\"140\" ry=\"17\" fill=\"#2a2622\" opacity=\".16\"/>\n  <path class=\"o\" d=\"M92 384L70 373V395L92 406Z\" fill=\"url(#gS)\"/>\n  <rect class=\"o\" x=\"92\" y=\"384\" width=\"188\" height=\"22\" rx=\"4\" fill=\"#e3d7be\"/>\n  <path d=\"M96 389H276\" stroke=\"#fff\" stroke-width=\"2\" opacity=\".6\" stroke-linecap=\"round\"/>\n  <!-- lower body -->\n  <path class=\"o\" d=\"M100 236L78 225V373L100 384Z\" fill=\"url(#gS)\"/>\n  <rect class=\"o\" x=\"100\" y=\"236\" width=\"168\" height=\"148\" fill=\"url(#gB)\"/>\n  <path d=\"M104 240V380\" stroke=\"#fff\" stroke-width=\"2.5\" opacity=\".7\"/>\n  <rect class=\"o\" x=\"112\" y=\"340\" width=\"0\" height=\"0\"/>\n  <rect class=\"o\" x=\"224\" y=\"332\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#f6efe0\" stroke-width=\"2.5\"/>\n  <path d=\"M229 339H249M229 345H243\" stroke=\"#2a2622\" stroke-width=\"1.5\" opacity=\".35\" stroke-linecap=\"round\"/>\n  <!-- globe -->\n  <path d=\"M100 78H240Q268 78 268 112V202Q268 236 240 236H100Z\" fill=\"url(#gG)\"/>\n  <path d=\"M100 78L78 67V225L100 236Z\" fill=\"#b9d0d2\"/>\n  <g clip-path=\"url(#gc)\"><g id=\"caps\"></g></g>\n  <path d=\"M100 78L78 67V225L100 236Z\" fill=\"#9fc0c6\" opacity=\".35\"/>\n  <path d=\"M112 92Q122 92 124 104V166\" fill=\"none\" stroke=\"#fff\" stroke-width=\"6\" stroke-linecap=\"round\" opacity=\".7\"/>\n  <path d=\"M250 98Q258 104 258 120V140\" fill=\"none\" stroke=\"#fff\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".6\"/>\n  <path class=\"o\" d=\"M100 78H240Q268 78 268 112V202Q268 236 240 236H100Z\" fill=\"none\"/>\n  <path class=\"o\" d=\"M100 78L78 67V225L100 236\" fill=\"none\"/>\n  <!-- top cap -->\n  <path class=\"o\" d=\"M92 40L70 29H254L276 40Z\" fill=\"url(#gT)\"/>\n  <path class=\"o\" d=\"M92 40L70 29V69L92 80Z\" fill=\"url(#gS)\"/>\n  <rect class=\"o\" x=\"92\" y=\"40\" width=\"184\" height=\"40\" rx=\"5\" fill=\"url(#gB)\"/>\n  <path d=\"M98 46H270\" stroke=\"#fff\" stroke-width=\"2.5\" opacity=\".75\" stroke-linecap=\"round\"/>\n  <!-- coin slot -->\n  <rect class=\"o\" x=\"232\" y=\"258\" width=\"22\" height=\"48\" rx=\"5\" fill=\"#e8604c\"/>\n  <rect x=\"241\" y=\"266\" width=\"4\" height=\"26\" rx=\"2\" fill=\"#2a2622\"/>\n  <path d=\"M236 262V300\" stroke=\"#f4897a\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <!-- knob -->\n  <circle class=\"o\" cx=\"190\" cy=\"298\" r=\"34\" fill=\"#e6dcc6\"/>\n  <circle class=\"o\" cx=\"190\" cy=\"298\" r=\"26\" fill=\"#f3ead8\" stroke-width=\"2.5\"/>\n  <g id=\"knob\" tabindex=\"0\" role=\"button\" aria-label=\"หมุนปุ่มกาชา\">\n    <path class=\"o\" d=\"M166 292L214 292Q220 292 220 298V305Q220 312 213 312H173Q166 312 166 305Z\" fill=\"#e8604c\"/>\n    <path class=\"o\" d=\"M166 292L178 276H192V292\" fill=\"#d9503c\"/>\n    <path d=\"M172 297H212\" stroke=\"#f4897a\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <path d=\"M174 308H210\" stroke=\"#a83a29\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".6\"/>\n  </g>\n  <!-- exit door -->\n  <path class=\"o\" d=\"M112 348Q112 328 148 328Q184 328 184 348V374H112Z\" fill=\"#5b5248\"/>\n  <path class=\"o\" d=\"M112 354Q148 340 184 354V374H112Z\" fill=\"#e8dfca\"/>\n  <path d=\"M120 360Q148 350 176 360\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.5\" opacity=\".7\" stroke-linecap=\"round\"/>\n  <!-- coin dish -->\n  <ellipse cx=\"304\" cy=\"446\" rx=\"46\" ry=\"14\" fill=\"#2a2622\" opacity=\".15\"/>\n  <ellipse class=\"o\" cx=\"302\" cy=\"438\" rx=\"46\" ry=\"15\" fill=\"#e1e8e8\"/>\n  <ellipse class=\"o\" cx=\"302\" cy=\"437\" rx=\"34\" ry=\"9\" fill=\"#cdd7d7\" stroke-width=\"2.5\"/>\n  <ellipse class=\"o\" cx=\"290\" cy=\"436\" rx=\"14\" ry=\"6\" fill=\"#d3d3cb\" stroke-width=\"2.5\"/>\n  <ellipse class=\"o\" cx=\"314\" cy=\"436\" rx=\"14\" ry=\"6\" fill=\"#d3d3cb\" stroke-width=\"2.5\"/>\n  <ellipse class=\"o\" cx=\"302\" cy=\"432\" rx=\"14\" ry=\"6\" fill=\"#dcdcd4\" stroke-width=\"2.5\"/>\n  <!-- coin + ring -->\n  <circle id=\"ring\" cx=\"243\" cy=\"282\" r=\"7\" fill=\"none\" stroke=\"#ffd23f\" stroke-width=\"3\"/>\n  <g id=\"coin\" tabindex=\"0\" role=\"button\" aria-label=\"หยอดเหรียญ\">\n    <circle r=\"24\" fill=\"transparent\"/>\n    <g id=\"cin\"><circle class=\"o\" r=\"12\" fill=\"#e4e8e6\" stroke-width=\"2.8\"/><circle r=\"8\" fill=\"none\" stroke=\"#2a2622\" stroke-width=\"1.2\" opacity=\".4\"/><text y=\"3\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"700\" fill=\"#2a2622\" opacity=\".7\">1</text><path d=\"M-7 -6Q-3 -10 2 -10\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\"/></g>\n  </g>\n  <!-- dropped capsule -->\n  <g id=\"drop\">\n    <g id=\"db\"><path class=\"o\" d=\"M-26 0A26 26 0 0 0 26 0Z\" fill=\"#fff8ea\"/><path d=\"M-20 12A24 24 0 0 0 20 12A22 17 0 0 1 -20 12Z\" fill=\"#2a2622\" opacity=\".12\"/></g>\n    <g id=\"dc\"><text y=\"-6\" text-anchor=\"middle\" font-size=\"26\">✨</text></g>\n    <g id=\"dt\"><path class=\"o\" id=\"dtp\" d=\"M-26 0A26 26 0 0 1 26 0Z\" fill=\"#e8604c\"/><ellipse cx=\"-10\" cy=\"-15\" rx=\"8\" ry=\"4\" fill=\"#fff\" opacity=\".55\" transform=\"rotate(-30 -10 -15)\"/></g>\n  </g>\n</svg></div>\n<p class=\"hint\" id=\"hint\"></p>\n<button class=\"go x5\" id=\"x5\"></button>\n<div class=\"pity\">หยอดครั้งละ <b>1</b> เหรียญ · ข้อความไม่ซ้ำกัน เหลืออีก <b id=\"left\">20</b> ข้อความ</div>\n</section>\n<section id=\"vCol\" hidden>\n<h2>สะสมแล้ว <span id=\"cnt\"></span></h2>\n<div class=\"lst\" id=\"col\"></div>\n<div class=\"rs\"><button id=\"reset\" style=\"margin:0\">รีเซ็ตคอลเลกชัน</button></div>\n</section>\n\n<p class=\"sub\" style=\"margin-top:22px\">ขอบคุณที่เล่นนะ 🌙 · รีเฟรชหน้าเพื่อเริ่มเล่นใหม่</p></main></div><div id=\"fx\"></div><div id=\"flash\"></div>\n<div class=\"ov\" id=\"ov\"><div class=\"card\" id=\"card\"></div></div>";

const CL={C:'--C',N:'--N',R:'--R',SR:'--SR',SSR:'--SSR',UR:'--UR'},W=CONFIG.gacha.weights,ORDER=['UR','SSR','SR','R','N','C'];
const POOL=TEXTS.gacha.pool;
const COST=CONFIG.gacha.cost,$=id=>R.getElementById(id);
{const pill=document.createElement('div');pill.style.cssText='display:inline-flex;align-items:center;gap:6px;margin-left:auto;margin-right:10px;background:#fff8ea;color:#2a2622;border:3px solid #2a2622;border-radius:999px;padding:2px 14px;font-weight:700;box-shadow:0 3px 0 #2a2622;white-space:nowrap';pill.innerHTML='🪙 <b id="wal">0</b>';const nb=$('nav');nb.parentNode.insertBefore(pill,nb)}
{const gx=document.createElement('div');
gx.innerHTML='<div class="hx"><img src="assets/image_21.webp" alt=""><div class="b"><i></i><span id="gdxt"></span></div></div>';
R.appendChild(gx);const st=document.createElement('style');st.textContent=`#sub,.pity,.hint:empty{display:none!important}main{padding-bottom:190px!important}main .stage svg{max-width:min(380px,42vh)!important}
.hx{position:fixed;left:0;bottom:0;z-index:6;pointer-events:none;display:flex;align-items:flex-end;padding-left:max(4px,env(safe-area-inset-left,0px));padding-bottom:env(safe-area-inset-bottom,0px);font-family:Mali,Sarabun,system-ui,sans-serif}
.hx img{height:min(21vh,170px);width:auto;filter:drop-shadow(0 4px 8px rgba(0,0,0,.35))}
.hx .b{position:relative;margin:0 0 min(6vh,46px) 8px;max-width:min(60vw,320px);background:#fff8ea;color:#2a2622;border:3px solid #2a2622;border-radius:16px;padding:8px 12px;box-shadow:0 3px 0 #2a2622;font-size:.76rem;line-height:1.45;font-weight:700;white-space:pre-wrap}
.hx .b i{position:absolute;left:-10px;bottom:14px;width:14px;height:14px;background:#fff8ea;border-left:3px solid #2a2622;border-bottom:3px solid #2a2622;transform:rotate(45deg)}
@media (min-aspect-ratio:1/1){main{max-width:min(1100px,96vw)!important;padding-bottom:30px!important}main .stage,main .stage svg{max-width:min(600px,56vw,max(150px,calc((100vh - 200px)/1.18)))!important}}
@media (min-aspect-ratio:1/1) and (min-width:760px) and (min-height:520px){.hx{flex-direction:column;align-items:flex-start}.hx img{height:min(28vh,250px)}.hx .b{order:-1;margin:0 0 6px 16px;max-width:min(26vw,330px);font-size:1rem;padding:10px 16px;border-radius:18px}.hx .b i{left:46px;bottom:-12px;transform:rotate(-45deg)}}
@media (min-width:1400px) and (min-height:760px){.hx img{height:min(32vh,320px)}.hx .b{font-size:1.1rem;max-width:380px}}
.lst{display:grid!important;grid-template-columns:repeat(2,1fr);gap:22px 16px;padding:14px 6px 0}
@media (min-width:700px){.lst{grid-template-columns:repeat(3,1fr)}}
@media (min-width:1100px){.lst{grid-template-columns:repeat(4,1fr)}}
.pn{position:relative;min-height:124px;padding:24px 12px 16px;border-radius:2px 2px 16px 2px;font-size:.95rem;line-height:1.5;font-weight:700;color:#2a2622;background:var(--pc);box-shadow:0 1px 0 rgba(0,0,0,.08),0 9px 14px rgba(70,45,10,.22);transform:rotate(var(--rot));display:flex;align-items:center;justify-content:center;text-align:center;font-family:Mali,Sarabun,system-ui,sans-serif}
.pn::before{content:'';position:absolute;top:-9px;left:50%;width:56px;height:18px;margin-left:-28px;background:rgba(255,255,255,.55);box-shadow:0 1px 3px rgba(0,0,0,.15);transform:rotate(-3deg)}
.pn::after{content:'';position:absolute;right:0;bottom:0;width:28px;height:28px;background:linear-gradient(135deg,rgba(0,0,0,0) 50%,rgba(0,0,0,.13) 50%);border-radius:0 0 16px 0}
.pn.c0{--pc:#fff3a3}.pn.c1{--pc:#ffd1dc}.pn.c2{--pc:#c9f0d5}.pn.c3{--pc:#cde4ff}.pn.c4{--pc:#ffe0b8}
.pn.no{--pc:#e7e0d1;color:#a89c85;box-shadow:0 1px 0 rgba(0,0,0,.05),0 5px 9px rgba(70,45,10,.12)}.pn .q{font-size:2rem}
.gb main{min-height:100%;display:flex;flex-direction:column;box-sizing:border-box}
.gb main #vMain:not([hidden]){flex:1;display:flex;flex-direction:column;justify-content:center}
.gb main #vMain .stage{width:100%}
.pn{flex-direction:column;gap:12px;cursor:pointer}.pn.no{cursor:default}
.pa{display:flex;align-items:center;justify-content:center;gap:7px;font-size:.74rem;font-weight:700;opacity:.9}
.pa img{width:28px;height:28px;border-radius:50%;object-fit:cover;border:2px solid #2a2622;background:#fff}
.tx .pa{margin-top:10px;font-size:.85rem}.tx .pa img{width:34px;height:34px}
.pbig{position:relative;width:min(520px,92vw);padding:44px 30px 26px;background:var(--pc);border-radius:3px 3px 24px 3px;box-shadow:0 16px 44px rgba(0,0,0,.45);transform:rotate(-1.2deg);text-align:center;font-family:Mali,Sarabun,system-ui,sans-serif;color:#2a2622;animation:pbi .25s cubic-bezier(.2,1.3,.4,1)}
@keyframes pbi{from{opacity:0;transform:rotate(-1.2deg) scale(.85)}to{opacity:1;transform:rotate(-1.2deg) scale(1)}}
.pbig::before{content:'';position:absolute;top:-12px;left:50%;width:84px;height:24px;margin-left:-42px;background:rgba(255,255,255,.6);box-shadow:0 1px 4px rgba(0,0,0,.2);transform:rotate(-3deg)}
.pbig .ptx{font-size:clamp(1.3rem,3.2vw,1.8rem);line-height:1.6;font-weight:700;padding:6px 4px 10px}
.pbig .who{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:14px;text-align:left}
.pbig .who img{width:64px;height:64px;border-radius:50%;object-fit:cover;border:3px solid #2a2622;background:#fff}
.pbig .who small{display:block;font-size:.75rem;opacity:.7}.pbig .who b{font-size:1.15rem}
.pbig .pcl{margin-top:20px;font:inherit;font-weight:700;background:#2a2622;color:#fff;border:0;border-radius:999px;padding:6px 26px;cursor:pointer}
.pbig.c0{--pc:#fff3a3}.pbig.c1{--pc:#ffd1dc}.pbig.c2{--pc:#c9f0d5}.pbig.c3{--pc:#cde4ff}.pbig.c4{--pc:#ffe0b8}

button.x5{display:block;margin:12px auto 0;padding:8px 26px;font-size:1rem;background:var(--SR);box-shadow:0 4px 0 var(--ink)}
button.x5:active{transform:translateY(3px);box-shadow:0 1px 0 var(--ink)}
button.x5.poor{opacity:.55}
.card.multi{width:min(380px,92vw);max-height:88vh;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;padding:14px 4px 0}
.card.multi .mx{display:flex;flex-direction:column;gap:18px;padding:10px 10px 0}
.card.multi .mx>div{animation:pop .55s cubic-bezier(.2,1.4,.4,1) both;animation-delay:calc(var(--i)*.14s)}
.card.multi .art .tx{min-height:0;padding:24px 14px 14px;gap:8px}
.card.multi .art .tx p{font-size:1rem}
.card.multi .new{right:-6px;top:-12px}
.card.multi button{display:block;position:sticky;bottom:6px;margin:16px auto 8px}
`;R.appendChild(st);}
const TCH=('ontouchstart' in window)&&matchMedia('(pointer:coarse)').matches,HELPT=Array.from('ยินดีต้อนรับสู่ตู้กาชา! 🎰\n• '+(TCH?'แตะ':'คลิก')+'เหรียญที่จาน = หยอด 1 เหรียญ\n• ได้ข้อความสุ่ม ไม่ซ้ำกัน สะสมให้ครบนะ\n• ปุ่ม ×5 = หยอด 5 เหรียญ ได้ 5 ข้อความพร้อมกัน\n• ปุ่มมุมขวาบน = ดูที่สะสมแล้ว');let helpIv=null;
function typeHelp(){const el=$('gdxt');let i=0;clearInterval(helpIv);el.textContent='';helpIv=setInterval(()=>{const ch=HELPT[i];el.textContent=HELPT.slice(0,++i).join('');if(ch&&ch!==' '&&ch!=='\n'&&typeof tkey==='function')tkey(false);if(i>=HELPT.length)clearInterval(helpIv)},38)}
let S={own:{}};
try{const s=localStorage.getItem('gacha-txt-v1');if(s)S=Object.assign(S,JSON.parse(s))}catch(e){}
const save=()=>{try{localStorage.setItem('gacha-txt-v1',JSON.stringify(S))}catch(e){}};
const col=t=>getComputedStyle(host).getPropertyValue(CL[t]).trim();

// capsules inside the globe
const P=['#e8604c','#a9c4a0','#7fa6b8','#e0b98a','#c7b8d6','#e8604c','#a9c4a0','#7fa6b8'];
let h='';
for(let i=0;i<22;i++){
  const r=i%7,c=Math.floor(i/7),x=104+r*22+(c%2)*10+(i%3)*3,y=212-c*34-(i%2)*4,a=(i*47)%90-45;
  const t=P[i%P.length],b=P[(i*3+2)%P.length];
  h+=`<g transform="translate(${x} ${y}) rotate(${a})"><g class="ball" style="--dx:${((i*13)%9-4)*2}px;--dy:${-6-(i*7)%12}px;--dr:${((i*29)%60)-30}deg;--dl:${((i*37)%10)/20}s"><path class="o" stroke-width="2.5" d="M-20 0A20 20 0 0 1 20 0Z" fill="${t}"/><path class="o" stroke-width="2.5" d="M-20 0A20 20 0 0 0 20 0Z" fill="${b}"/><path d="M-15 9A18 18 0 0 0 15 9A17 12 0 0 1 -15 9Z" fill="#2a2622" opacity=".13"/><ellipse cx="-8" cy="-11" rx="6" ry="3" fill="#fff" opacity=".55" transform="rotate(-30 -8 -11)"/></g></g>`;
}
$('caps').innerHTML=h;

const coinsNow=()=>Math.max(0,window.GCOINS|0),leftN=()=>POOL.filter(p=>!S.own[p[1]]).length;
function roll(){const av=POOL.filter(p=>!S.own[p[1]]);if(!av.length)return null;return av[Math.floor(Math.random()*av.length)]}
let busy=false;
const HI=t=>t==='SR'||t==='SSR'||t==='UR';
const FX={C:['#e0b98a','#fff3d6'],UR:['#ffd23f','#fff3b0','#ffffff','#ffb347','#ff6b6b','#7bdff2','#ff9ad5'],N:['#cfd6d9','#ffffff'],R:['#7fb2d0','#bfe0f0','#ffffff'],SR:['#b08be8','#ff9ad5','#ffffff','#8ee3ff'],SSR:['#ffd23f','#ff9f1c','#fff3b0','#ff6b6b','#7bdff2','#ffffff']};
const NB={C:8,UR:90,N:10,R:20,SR:34,SSR:64};
function burst(x,y,t){
  const fx=$('fx'),c=FX[t];
  for(let k=0;k<NB[t];k++){
    const p=document.createElement('i'),a=Math.random()*6.283,d=50+Math.random()*(HI(t)&&t!=='SR'?240:150),z=5+Math.random()*(HI(t)&&t!=='SR'?9:6);
    p.className=Math.random()<.55?'s':'';
    p.style.cssText=`left:${x}px;top:${y}px;width:${z}px;height:${z}px;--dx:${Math.cos(a)*d}px;--dy:${Math.sin(a)*d-50}px;--r:${Math.random()*720-360}deg;background:${c[k%c.length]};${p.className?'':'border-radius:50%'}`;
    fx.appendChild(p);setTimeout(()=>p.remove(),1400);
  }
}
function confetti(t){
  const fx=$('fx'),c=FX[t];
  for(let k=0;k<(t==='SSR'||t==='UR'?80:36);k++){
    const p=document.createElement('i');p.className='cf';
    p.style.cssText=`left:${Math.random()*100}vw;top:0;width:${6+Math.random()*6}px;height:${10+Math.random()*8}px;--dx:${Math.random()*160-80}px;--r:${Math.random()*900-450}deg;--t:${2.2+Math.random()*1.8}s;animation-delay:${Math.random()*.9}s;background:${c[k%c.length]}`;
    fx.appendChild(p);setTimeout(()=>p.remove(),4800);
  }
}
let AI=null;
const ACOL=['#cfd6d9','#7fb2d0','#b08be8','#e65bd0','#ffc933'];
function auraStart(){const a=$('aura');clearInterval(AI);a.className='on';a.style.setProperty('--ac','#ffe9a8');a.style.setProperty('--ao','.7');a.style.setProperty('--as','.9');
  let i=0;AI=setInterval(()=>a.style.setProperty('--ac',ACOL[(i++)%ACOL.length]),170)}
function auraLock(t){const a=$('aura');clearInterval(AI);
  const P={C:[.45,.85],N:[.5,.85],R:[.65,.95],SR:[.85,1.1],SSR:[.95,1.25],UR:[1,1.4]}[t];
  a.style.setProperty('--ac',col(t));a.style.setProperty('--ao',P[0]);a.style.setProperty('--as',P[1]);
  a.classList.add('lock');if(HI(t))a.classList.add('hi')}
function auraOff(){clearInterval(AI);$('aura').className=''}
function ripple(el,c){
  const r=el.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
  [0,.14].forEach(d=>{const p=document.createElement('i');p.className='rp';
    p.style.cssText=`left:${x}px;top:${y}px;--c:${c};--d:${d}s`;
    $('fx').appendChild(p);setTimeout(()=>p.remove(),1000)});
}
function play(n){n=n===5?5:1;
  if(busy)return;
  if(!leftN()){$('hint').hidden=false;$('hint').textContent='สุ่มได้ครบทุกข้อความแล้ว!';clearTimeout(window.__hT);window.__hT=setTimeout(()=>{$('hint').textContent=''},2600);return}
  const cnt=Math.min(n,leftN()),need=cnt*COST;
  if(coinsNow()<need){$('hint').hidden=false;$('hint').textContent='เหรียญไม่พอ! ต้องใช้ '+need+' เหรียญ';clearTimeout(window.__hT);window.__hT=setTimeout(()=>{$('hint').textContent=''},2200);if(navigator.vibrate)try{navigator.vibrate(30)}catch(e){}return}
  busy=true;$('hint').hidden=true;ripple($('coin'),'#ffd23f');
  window.GCOINS=coinsNow()-need;$('wal').textContent=coinsNow();
  const items=[];for(let k=0;k<cnt;k++){const x=roll();if(!x)break;S.own[x[1]]=1;items.push(x)}save();const it=items[0];
  const t='R',knob=$('knob'),caps=$('caps'),drop=$('drop'),coin=$('coin'),ring=$('ring');
  $('dtp').setAttribute('fill',{C:'#d9a066',N:'#b9c0c4',R:'#7fa6b8',SR:'#c7b8d6',SSR:'#f08fd8',UR:'#ffd23f'}[t]);
  [knob].forEach(e=>e.classList.remove('spin'));caps.classList.remove('shake');ring.classList.remove('go');
  drop.classList.remove('fall','open');void knob.getBBox();
  coin.classList.add('fly');
  setTimeout(()=>{auraStart();ring.classList.add('go');const M=$('mach');M.classList.remove('jolt');void M.getBoundingClientRect();M.classList.add('jolt');if(navigator.vibrate)try{navigator.vibrate(15)}catch(e){}},800);
  setTimeout(()=>{knob.classList.add('spin');caps.classList.add('shake');$('mach').classList.remove('jolt');$('mach').classList.add('rumble');ripple($('knob'),'#e8604c')},1000);
  setTimeout(()=>{$('mach').classList.remove('rumble');drop.classList.add('fall')},1900);
  setTimeout(()=>auraLock(t),2000);
  setTimeout(()=>{
    drop.classList.add('open');
    const r=drop.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,t);
    if(HI(t)){
      const f=$('flash');f.style.background=t==='UR'?'#fff2b0':t==='SSR'?'#ffd9f6':'#e9dcff';f.classList.remove('on');void f.offsetWidth;f.classList.add('on');
      $('mach').style.filter=`drop-shadow(0 0 22px ${col(t)})`;
    }
  },2750);
  setTimeout(()=>{
    const ov=$('ov');
    ov.style.setProperty('--rc',col(t));ov.classList.toggle('hi',HI(t));
    $('card').className='card '+t+(HI(t)?' hi':'');
    $('card').style.setProperty('--rc',col(t));
    const one=p=>{const au=auOf(p);return `<div class="art"><span class="new">ใหม่!</span><div class="tx"><p>${p[2]}</p><div class="pa"><img src="${au.i}" alt=""><b>${au.n}</b></div></div></div>`};
    $('card').innerHTML=items.length>1?`<div class="mx">${items.map((p,i)=>`<div style="--i:${i}">${one(p)}</div>`).join('')}</div><button id="ok">เก็บเข้าคอลเลกชัน (${items.length})</button>`:one(it)+'<button id="ok">เก็บเข้าคอลเลกชัน</button>';
    $('card').classList.toggle('multi',items.length>1);$('card').scrollTop=0;
    ov.classList.add('on');$('ok').focus({preventScroll:true});
    $('ok').onclick=close;ui();
    if(HI(t))confetti(t);
  },3350);
}
function close(){
  $('ov').classList.remove('on','hi');
  $('drop').classList.remove('fall','open');
  $('knob').classList.remove('spin');$('caps').classList.remove('shake');
  $('mach').style.filter='';auraOff();$('mach').classList.remove('rumble','jolt');
  $('coin').classList.remove('fly');
  $('hint').textContent='';$('hint').hidden=false;busy=false;ui();
}
$('ov').onclick=e=>{if(e.target===$('ov'))close()};
const AU={"guide": {"n": "ผู้ช่วยผมเหลือง", "i": "assets/image_22.webp"}, "helper": {"n": "ผู้ช่วยผมชมพู", "i": "assets/image_23.webp"}, "bear": {"n": "สาวหมวกหมี", "i": "assets/image_24.webp"}, "boss2": {"n": "หนุ่มผมขาว", "i": "assets/image_25.webp"}, "sto": {"n": "สตอ", "i": "assets/image_26.webp"}, "fa": {"n": "ฟ้า", "i": "assets/image_27.webp"}},AUTH={"m0": "guide", "m1": "guide", "m2": "guide", "m3": "sto", "m4": "bear", "m5": "helper", "m6": "fa", "m7": "sto", "m8": "boss2", "m9": "fa", "m10": "helper", "m11": "boss2", "m12": "fa", "m13": "helper", "m14": "boss2", "m15": "bear", "m16": "boss2", "m17": "bear", "m18": "helper", "m19": "guide"},auOf=p=>AU[AUTH[p[1]]]||AU.guide,PCOL=['#fff3a3','#ffd1dc','#c9f0d5','#cde4ff','#ffe0b8'];
let view='main';
function ui(){
  const got=POOL.length-leftN();
  $('left').textContent=leftN();$('wal').textContent=coinsNow();
  $('cnt').textContent=`(${got}/${POOL.length})`;
  $('coin').classList.toggle('poor',coinsNow()<COST||!leftN());
  {const b=$('x5'),n=Math.min(5,leftN());if(b){b.hidden=!n;b.textContent='หยอด ×'+n+' · ใช้ '+n+' 🪙';b.classList.toggle('poor',coinsNow()<n*COST)}}
  $('col').innerHTML=POOL.map((p,i)=>{const n=S.own[p[1]],rot=[-2.5,1.8,-1,2.6,-1.8,1.2][i%6],a=auOf(p);return `<div class="pn c${i%5}${n?'':' no'}" data-i="${i}" style="--rot:${rot}deg">${n?'<span>'+p[2]+'</span><div class="pa"><img src="'+a.i+'" alt=""><b>'+a.n+'</b></div>':'<span class="q">?</span>'}</div>`}).join('');
  const c=view==='col';
  {const hx=R.querySelector('.hx');if(hx)hx.style.display=c?'none':'flex'}
  $('vMain').hidden=c;$('vCol').hidden=!c;
  $('ttl').textContent=c?'คอลเลกชัน':'ตู้กาชา';
  $('nav').setAttribute('aria-label',c?'กลับไปตู้กาชา':'เปิดคอลเลกชัน');
  $('nav').innerHTML=c?ICO.home:ICO.col+'<b id="bd"></b>';
  if(!c)$('bd').textContent=got;
}
{const pu=document.createElement('div');pu.id='pu';pu.style.cssText='position:fixed;inset:0;z-index:20;background:rgba(30,20,10,.55);display:none;align-items:center;justify-content:center;padding:20px;overflow:auto';R.appendChild(pu);
const closePop=()=>{pu.style.display='none';pu.innerHTML=''};
pu.addEventListener('click',e=>{if(e.target===pu||e.target.closest('.pcl'))closePop()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&pu.style.display!=='none')closePop()});
window.__gzClosePop=closePop;
$('col').addEventListener('click',e=>{const n=e.target.closest('.pn');if(!n||n.classList.contains('no'))return;const i=+n.dataset.i,p=POOL[i],a=auOf(p);
pu.innerHTML=`<div class="pbig c${i%5}"><div class="ptx">${p[2]}</div><div class="who"><img src="${a.i}" alt=""><div><small>เขียนโดย</small><b>${a.n}</b></div></div><button class="pcl">ปิด</button></div>`;pu.style.display='flex'});}

$('coin').onclick=play;
$('x5').onclick=()=>play(5);
$('coin').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();play()}};
$('knob').onclick=play;
$('knob').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();play()}};
let rsT=null;$('reset').onclick=()=>{if(!rsT){$('reset').textContent='แตะอีกครั้งเพื่อยืนยัน';rsT=setTimeout(()=>{rsT=null;$('reset').textContent='รีเซ็ตคอลเลกชัน'},2500)}else{clearTimeout(rsT);rsT=null;$('reset').textContent='รีเซ็ตคอลเลกชัน';S={own:{}};save();ui()}};
const ICO={col:'<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/></svg>',
 home:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>'};
$('nav').onclick=()=>{view=view==='col'?'main':'col';ui()};
ui();

let doneCb=null;
window.openGacha=function(cb){window.__gzOpen=true;window.__gzClosePop&&window.__gzClosePop();doneCb=cb||null;typeHelp();try{document.exitPointerLock&&document.exitPointerLock()}catch(e){}
  view='main';busy=false;close();host.style.display='block';$('wrap').scrollTop=0;ui()};
window.__gz={S:()=>S,roll,POOL,play};
})();
