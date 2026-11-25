const FACE=CONFIG.assets.face, SND=CONFIG.assets.sound;
window.AVD={"มะนาว": ["#4fa800", "assets/image_02.jpg"], "สตอ": ["#ff4f93", "assets/image_03.jpg"], "ฮันนี่": ["#d99a00", "assets/image_04.jpg"], "เชอร์รี่": ["#e0283c", "assets/image_05.jpg"], "หมอก": ["#6f7fa8", "assets/image_06.jpg"], "ฟ้า": ["#2f6df0", "assets/image_07.jpg"]};
(function(){window.coin=coin;function coin(){const av=document.querySelector('.av img'),img=new Image();img.src=CH.src||(av?av.src:'');const cv=document.createElement('canvas');cv.style.cssText='position:fixed;inset:0;z-index:40;width:100%;height:100%;touch-action:none';document.body.appendChild(cv);const g=cv.getContext('2d');const oc=document.createElement('canvas'),o=oc.getContext('2d');let W,Hh,sc,VW,VH,oy;
const fit=()=>{W=cv.width=innerWidth;Hh=cv.height=innerHeight-(touch?120:0);cv.style.height=Hh+'px';sc=Math.max(2,Math.floor(Math.min(Hh/(touch?180:230),W/(touch?240:340))*2)/2);VW=Math.ceil(W/sc);VH=Math.ceil(Hh/sc);oc.width=VW;oc.height=VH;oy=VH-180};fit();addEventListener('resize',fit);
cv.addEventListener('touchstart',e=>e.stopPropagation(),{passive:true});
let run=true;const bt={l:0,r:0,j:0,a:0,ju:0},btns=[];
const mk=(txt,k,css)=>{const b=document.createElement('div');b.textContent=txt;b.style.cssText='position:fixed;z-index:41;width:64px;height:64px;border-radius:50%;background:rgba(255,126,176,.85);color:#fff;font:700 30px sans-serif;display:flex;align-items:center;justify-content:center;user-select:none;touch-action:none;bottom:calc(24px + env(safe-area-inset-bottom,0px));box-shadow:0 4px 0 #e0608f;'+css;const on=e=>{e.stopPropagation();bt[k]=1},off=()=>{bt[k]=0};b.addEventListener('pointerdown',on);['pointerup','pointercancel','pointerleave'].forEach(n=>b.addEventListener(n,off));b.addEventListener('touchstart',e=>e.stopPropagation(),{passive:true});document.body.appendChild(b);btns.push(b)};
if(touch){const bar=document.createElement('div');bar.style.cssText='position:fixed;left:0;right:0;bottom:0;height:calc(120px + env(safe-area-inset-bottom,0px));background:#1b1020;z-index:40';document.body.appendChild(bar);btns.push(bar);const jb=document.createElement('div');jb.style.cssText='position:fixed;z-index:41;left:20px;bottom:calc(8px + env(safe-area-inset-bottom,0px));width:104px;height:104px;border-radius:50%;background:rgba(255,255,255,.12);border:2px solid rgba(255,126,176,.7);touch-action:none';const jt=document.createElement('div');jt.style.cssText='position:absolute;left:30px;top:30px;width:44px;height:44px;border-radius:50%;background:rgba(255,126,176,.9);box-shadow:0 3px 0 #e0608f;pointer-events:none';jb.appendChild(jt);let jid=null;
const jm=e=>{const r=jb.getBoundingClientRect();let dx=e.clientX-(r.left+52),dy=e.clientY-(r.top+52);const d=Math.hypot(dx,dy);if(d>40){dx=dx/d*40;dy=dy/d*40}jt.style.transform='translate('+dx+'px,'+dy+'px)';bt.l=dx<-12?1:0;bt.r=dx>12?1:0;bt.ju=dy<-12?1:0};
const jo=()=>{jid=null;jt.style.transform='';bt.l=bt.r=bt.ju=0};
jb.addEventListener('pointerdown',e=>{e.stopPropagation();try{jb.setPointerCapture(e.pointerId)}catch(x){}jid=e.pointerId;jm(e)});jb.addEventListener('pointermove',e=>{if(jid===e.pointerId)jm(e)});jb.addEventListener('pointerup',jo);jb.addEventListener('pointercancel',jo);jb.addEventListener('touchstart',e=>e.stopPropagation(),{passive:true});document.body.appendChild(jb);btns.push(jb);mk('\u2728','a','right:24px')}
cv.addEventListener('pointerdown',()=>{bt.a=1;setTimeout(()=>{bt.a=0},60)});
function ping(f,ty){if(!ac)return;try{const q=ac.createOscillator(),gg=ac.createGain();q.type=ty||'triangle';q.frequency.value=f;gg.gain.setValueAtTime(.22,ac.currentTime);gg.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.2);q.connect(gg);gg.connect(ac.destination);q.start();q.stop(ac.currentTime+.22)}catch(e){}}
let sec=0;const fin=()=>{window.GCOINS=(window.GCOINS|0)+coins;window.__rc=0;run=false;cv.remove();btns.forEach(b=>b.remove());window.__guide('ghost',()=>start())};
function secret(){sec=1;bt.l=bt.r=bt.ju=bt.a=0;
const R=document.createElement('div');R.style.cssText='position:fixed;inset:0;z-index:50;background:#0a1020;display:flex;flex-direction:column;color:#fff;font-family:Mali,Sarabun,system-ui,sans-serif;touch-action:none';
const cs=document.createElement('canvas');cs.width=120;cs.height=80;cs.style.cssText='position:static;flex:1;min-height:0;width:100%;object-fit:contain;image-rendering:pixelated';
const tb=document.createElement('div');tb.style.cssText='background:none;padding:22px 14px calc(14px + env(safe-area-inset-bottom,0px));width:100%;max-width:580px;margin:0 auto;box-sizing:border-box';
R.append(cs,tb);document.body.appendChild(R);R.addEventListener('touchstart',e=>e.stopPropagation(),{passive:true});
const c=cs.getContext('2d');let rt=0,ks=0,tr=0;
const r=(x,y,w,h,f)=>{c.fillStyle=f;c.fillRect(Math.round(x),Math.round(y),w,h)};
const kk=(x,y,f)=>{r(x-3,y-3,6,6,f);r(x-1,y-1,2,2,'#0b1226');r(x-1,y+3,2,9,f);r(x+1,y+8,3,2,f);r(x+1,y+11,2,1,f)};
const dr=()=>{if(!R.isConnected)return;requestAnimationFrame(dr);rt+=.016;const y=36+Math.sin(rt*2)*2;
r(0,0,120,80,'#0b1226');for(let i=0;i<9;i++){r(i*14,0,8,3+i%3*3,'#16213f');r(i*14+2,0,4,6+i%3*3,'#16213f')}
r(0,62,120,18,'#18223f');r(0,68,120,1,'#0b1226');for(let i=0;i<6;i++)r(i*22,69,1,11,'#0b1226');
c.globalAlpha=.18+.06*Math.sin(rt*3);c.fillStyle='#7df9ff';c.beginPath();c.arc(60,y+6,26,0,7);c.fill();c.globalAlpha=.5;r(55,y+18,10,57-(y+18),'#59b6ff');c.globalAlpha=1;
r(48,y+4,4,9,'#59b6ff');r(68,y+4,4,9,'#59b6ff');r(52,y,16,18,'#59b6ff');r(52,y+14,16,4,'#8fd0ff');r(47,y+12,3,3,'#f7d3bd');r(70,y+12,3,3,'#f7d3bd');
r(54,y-10,12,11,'#f7d3bd');r(54,y-1,12,8,'#fff');r(56,y+6,8,3,'#fff');r(57,y-6,2,2,'#222');r(62,y-6,2,2,'#222');
r(53,y-14,14,4,'#ffd23f');r(54,y-17,3,3,'#ffd23f');r(58,y-18,4,4,'#ffd23f');r(63,y-17,3,3,'#ffd23f');
r(40,56,40,12,'#6b7080');r(40,56,40,3,'#9097ab');r(43,57,34,3,'#2f8fe8');r(43,57,34,1,'#bfe6ff');
if(ks){const b=Math.sin(rt*3)*1.5;kk(30,4+b,'#ffd23f');kk(60,4-b,'#dfe6ee');kk(90,4+b,'#8a5a3c')}
for(let i=0;i<6;i++){c.globalAlpha=.5+.5*Math.sin(rt*3+i*2);r(16+i*17,20+((i*29)%30),1,1,'#fff')}c.globalAlpha=1};
const BX='position:relative;background:#fff8ea;color:#2a2622;border:3px solid #2a2622;border-radius:18px;padding:14px 16px 12px;box-shadow:0 4px 0 #2a2622;text-align:left;font-family:Mali,Sarabun,system-ui,sans-serif',BTN='display:block;width:100%;margin:8px 0 0;padding:8px;font:inherit;font-size:1rem;font-weight:700;background:#e8604c;color:#fff;border:3px solid #2a2622;border-radius:999px;box-shadow:0 3px 0 #2a2622;cursor:pointer';
let tiv=null,skipFn=null;
const say=(T,bs)=>{const L=(Array.isArray(T)?T:[T]).map(x=>Array.from(x));let li=0,ci=0;
tb.innerHTML='<div style="'+BX+'"><div style="position:absolute;top:-15px;left:14px;background:#e8604c;color:#fff;border:2px solid #2a2622;border-radius:999px;padding:0 12px;font-weight:700;font-size:.85rem">พระเจ้าบ่อน้ำ</div><div class="gt" style="font-size:1.1rem;line-height:1.6;font-weight:700;min-height:3.2em;white-space:pre-wrap"></div><div class="bs"></div></div>';
const tx=tb.querySelector('.gt'),bz=tb.querySelector('.bs');
const add=(l,f)=>{const b=document.createElement('button');b.textContent=l;b.style.cssText=BTN;b.onclick=e=>{e.stopPropagation();f()};bz.appendChild(b)};
const ready=()=>{bz.innerHTML='';if(li<L.length-1)add('ต่อไป ▶',()=>{li++;typeLine()});else bs.forEach(([l,f])=>add(l,f))};
const typeLine=()=>{const Lx=L[li];ci=0;tx.textContent='';bz.innerHTML='';clearInterval(tiv);tiv=setInterval(()=>{const ch=Lx[ci];tx.textContent=Lx.slice(0,++ci).join('');tkey(ch===' ');if(ci>=Lx.length){clearInterval(tiv);ready()}},55)};
skipFn=()=>{if(ci<L[li].length){clearInterval(tiv);ci=L[li].length;tx.textContent=L[li].join('');ready()}};
typeLine()};
tb.onclick=()=>skipFn&&skipFn();
const out=()=>{R.remove();sec=0;if(B.gone)return fin();P.x=1358;P.y=100;P.vy=0;P.inv=1.2;msg=2.5;msgT='ได้กุญแจแล้ว! ไปสู้บอส'};
const good=()=>{gk=1;P.hp=Math.min(5,P.hp+1);ping(880);say('ซื่อสัตย์ยิ่งนัก! ข้าจะมอบกุญแจให้เจ้า… รีบหนีออกจากบ้านหลังนี้เถิด 🔑',[['รับกุญแจ ✨',out]])};
const ask=()=>{ks=1;say(tr++?'นั่นไม่ใช่ของเจ้า! อย่าโลภ ตอบตามความจริงเถิด… กุญแจดอกไหนคือของเจ้า?':'เจ้าทำกุญแจตกลงบ่อของข้า… บอกมาซิ กุญแจดอกไหนคือของเจ้า?',[['🥇 กุญแจทอง',0],['🥈 กุญแจเงิน',0],['🗝️ กุญแจเหล็กเก่า ๆ ขึ้นสนิม',1]].sort(()=>Math.random()-.5).map(([l,ok])=>[l,ok?good:ask]))};
if(gk)say('ข้าให้กุญแจเจ้าไปแล้วนี่ รีบไปเถิด!',[['ขอบคุณ',out]]);else say(['ฮึ่ม… ใครตกลงมาในห้องลับของข้า?','ข้าคือพระเจ้าแห่งบ่อน้ำ ผู้เฝ้ากุญแจทุกดอกที่ตกลงมา','เจ้าทำของตกลงบ่อของข้าสินะ… เอาล่ะ มาคุยกันหน่อย'],[['คุยกับพระเจ้าบ่อน้ำ 💬',ask]]);dr()}
let seen=0;
let TKB=null;
function tkey(sp){try{if(!ac)return;if(ac.state==='suspended')ac.resume();if(!TKB){const n=Math.floor(ac.sampleRate*.035),b=ac.createBuffer(1,n,ac.sampleRate),d=b.getChannelData(0);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,3);TKB=b}
const src=ac.createBufferSource();src.buffer=TKB;src.playbackRate.value=.85+Math.random()*.4;const f=ac.createBiquadFilter();f.type='bandpass';f.frequency.value=(sp?700:1800)+Math.random()*1200;f.Q.value=.8;const g=ac.createGain();g.gain.value=sp?.3:.22+Math.random()*.1;src.connect(f);f.connect(g);g.connect(ac.destination);src.start()}catch(e){}}
function bossIntro(){if(!(CH&&CH.n==='ฟ้า')){bossBoy();return}sec=1;bt.l=bt.r=bt.ju=bt.a=0;
const R=document.createElement('div');R.id='gdv';R.style.background='rgba(10,5,25,.88)';R.style.transition='opacity .5s';
R.innerHTML='<img class="gc"><div class="gb"><div class="gt" style="font-size:1.2rem"></div></div><div style="position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none;transition:opacity .25s"></div>';
const im=R.children[0],gb=R.children[1],tx=gb.firstChild,fl=R.children[2];im.src=GIRL;R.addEventListener('touchstart',e=>e.stopPropagation(),{passive:true});document.body.appendChild(R);
const tf=()=>{im.style.animation='sh .08s infinite';ping(120,'sawtooth');setTimeout(()=>{fl.style.opacity=1;ping(80,'sawtooth')},800);
setTimeout(()=>{im.style.animation='none';im.src=BIG;im.style.left='50%';im.style.bottom='auto';im.style.top='50%';im.style.height='min(60vh,80vw)';im.style.transform='translate(-50%,-50%) scale(1.15)';im.style.filter='drop-shadow(0 0 24px #f33)';gb.style.visibility='hidden';fl.style.opacity=0},1100);
setTimeout(()=>{R.style.opacity=0},2400);setTimeout(()=>{R.remove();sec=0;B.on=1},2900)};
const FEM=TEXTS.bossIntro.other,
MAL=TEXTS.bossIntro.fa;
const LN=((CH&&CH.n==='ฟ้า')?MAL:FEM).map(t=>Array.from(t));
gb.insertAdjacentHTML('beforeend','<div class="gf"><div class="gd">'+LN.map(()=>'<i></i>').join('')+'</div><div><button class="gn"></button></div></div>');
const btn=gb.querySelector('.gn'),dots=[...gb.querySelectorAll('.gd i')];
let li=0,ci=0,iv=null,go=0;
const typeLine=()=>{const L=LN[li];ci=0;tx.textContent='';clearInterval(iv);dots.forEach((d,j)=>d.classList.toggle('on',j===li));btn.textContent=li<LN.length-1?'ต่อไป ▶':'ลุยเลย!';iv=setInterval(()=>{const ch=L[ci];tx.textContent=L.slice(0,++ci).join('');tkey(ch===' ');if(ci>=L.length)clearInterval(iv)},55)};
const nextLine=()=>{if(go)return;if(++li<LN.length)typeLine();else{go=1;tf()}};
R.addEventListener('click',()=>{if(go)return;const L=LN[li];if(ci<L.length){clearInterval(iv);ci=L.length;tx.textContent=L.join('')}else nextLine()});
const kd=e=>{if(!R.isConnected){removeEventListener('keydown',kd,true);return}if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();R.click()}};addEventListener('keydown',kd,true);
typeLine()}
let pit=null,mdv=0,lT=0,wasAir=false,tAir=0,lnd=0;const LG=[],gl=(x,y,r,c,a)=>{LG.push([x,y,r,c,a])};
function runScript(gb,tx,LN0,done){const LN=LN0.map(t=>Array.from(t));
gb.insertAdjacentHTML('beforeend','<div class="gf"><div class="gd">'+LN.map(()=>'<i></i>').join('')+'</div><div><button class="gn"></button></div></div>');
const btn=gb.querySelector('.gn'),dots=[...gb.querySelectorAll('.gd i')],R=gb.parentNode;let li=0,ci=0,iv=null,go=0;
const typeLine=()=>{const L=LN[li];ci=0;tx.textContent='';clearInterval(iv);dots.forEach((d,j)=>d.classList.toggle('on',j===li));btn.textContent=li<LN.length-1?'ต่อไป ▶':'ลุยเลย!';iv=setInterval(()=>{const ch=L[ci];tx.textContent=L.slice(0,++ci).join('');tkey(ch===' ');if(ci>=L.length)clearInterval(iv)},55)};
const nextLine=()=>{if(go)return;if(++li<LN.length)typeLine();else{go=1;done()}};
R.addEventListener('click',()=>{if(go)return;const L=LN[li];if(ci<L.length){clearInterval(iv);ci=L.length;tx.textContent=L.join('')}else nextLine()});
const kd=e=>{if(!R.isConnected){removeEventListener('keydown',kd,true);return}if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();R.click()}};addEventListener('keydown',kd,true);
typeLine()}
function bossBoy(){sec=1;bt.l=bt.r=bt.ju=bt.a=0;
const R=document.createElement('div');R.id='gdv';R.style.cssText='background:radial-gradient(circle at 50% 58%,#1c2f9a 0%,#080818 72%);transition:opacity .5s;opacity:0';
R.innerHTML='<img class="gc"><div class="gb"><div class="gt" style="font-size:1.2rem"></div></div><div style="position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none;transition:opacity .3s"></div>';
const im=R.children[0],gb=R.children[1],tx=gb.firstChild,fl=R.children[2];im.src=ART;im.style.height='min(58vh,380px)';R.addEventListener('touchstart',e=>e.stopPropagation(),{passive:true});document.body.appendChild(R);
requestAnimationFrame(()=>requestAnimationFrame(()=>{R.style.opacity=1;ping(70,'sawtooth')}));
const LN=['…ฮึ่ม ในที่สุดก็มาจนได้นะ','จำได้ไหม? ลีซอรอบที่แล้วแกปัดข้อความฉันทิ้ง!!','ฉันตั้งใจพิมพ์ตั้งนานเลยนะ… หึ ไม่เป็นไร 💢','รอบนี้ฉันมาแก้แค้น!!','เตรียมรับกำปั้นได้เลย ฮึบบบ!!'];
runScript(gb,tx,LN,()=>{fl.style.opacity=1;ping(220,'square');
setTimeout(()=>{B.on=1;B.dead=0;B.two=1;B.hp=B.mh=12;B.x=P.x<1640?1830:1400;B.y=GY-B.h;B.vx=0;B.vy=0;B.gr=1;B.t=2;B.inv=0;B.stun=0;B.dt=1.2;B.lt=0;B.gu=1.2;B.atk=0;CO.forEach(c=>{if(c.h)c.on=1});spark(B.x+18,GY-20,'#4d7cff',30);R.style.opacity=0;sec=0},350);
setTimeout(()=>R.remove(),900)})}
function falling(){sec=1;const D=document.createElement('div');D.style.cssText='position:fixed;inset:0;z-index:50;background:#000;opacity:0;transition:opacity 1s;display:flex;align-items:center;justify-content:center;color:#fff;font:700 22px Sarabun,system-ui,sans-serif;text-align:center;padding:20px';D.textContent='ตกลงไป… มืดไปหมดเลย';document.body.appendChild(D);requestAnimationFrame(()=>requestAnimationFrame(()=>D.style.opacity=1));ping(150,'sawtooth');setTimeout(()=>{fin();D.style.opacity=0;setTimeout(()=>D.remove(),1000)},1800)}
// level
const LW=1900,GY=150;let sd=7;const rnd=()=>(sd=sd*16807%2147483647)/2147483647;
const SO=[];[[0,260],[304,200],[548,260],[850,150],[1044,260],[1348,552]].forEach(([x,w])=>SO.push({x,y:GY,w,h:30}));
[[330,112,64],[420,96,48],[600,118,70],[700,92,60],[780,66,50],[870,112,56],[960,92,56],[1100,112,60],[1190,86,70],[1480,112,60],[1700,112,60]].forEach(([x,y,w])=>SO.push({x,y,w,h:12,f:1}));
SO.push({x:LW-8,y:-40,w:8,h:230});const gate={x:1380,y:70,w:6,h:80};
const SL=document.createElement('canvas');SL.width=LW;SL.height=180;const s=SL.getContext('2d');
const LAMPS=[];
function prop(x,gy,k,flt){
if(flt){if(k==0){s.fillStyle='#3d4660';s.fillRect(x,gy-7,11,7);s.fillStyle='#566082';s.fillRect(x,gy-7,11,2);s.fillStyle='#1c2036';s.fillRect(x+2,gy-5,4,4);s.fillStyle='#2b3250';s.fillRect(x+3,gy-4,2,2);s.fillStyle='#ff4d6d';s.fillRect(x+8,gy-4,1,1)}
else{s.fillStyle='#4a5272';s.fillRect(x,gy-8,2,8);s.fillRect(x-3,gy-6,8,1);s.fillRect(x-2,gy-3,6,1)}return}
if(k<2){s.fillStyle='#1d2034';s.fillRect(x,gy-40,2,40);s.fillRect(x-1,gy-3,4,3);s.fillRect(x,gy-41,9,2);s.fillStyle='#ffe9a8';s.fillRect(x+6,gy-39,5,2);s.fillStyle='#fff6d0';s.fillRect(x+7,gy-39,3,1);LAMPS.push([x+8,gy-38,gy])}
else if(k==2){s.fillStyle='#b32535';s.fillRect(x,gy-9,6,9);s.fillRect(x-1,gy-10,8,2);s.fillRect(x-2,gy-6,10,2);s.fillStyle='#e04a5a';s.fillRect(x+1,gy-8,1,6)}
else if(k==3){s.fillStyle='#1f5a4a';s.fillRect(x,gy-12,22,12);s.fillStyle='#2e7d68';s.fillRect(x,gy-12,22,2);s.fillStyle='#143d33';s.fillRect(x+2,gy-8,18,1);s.fillRect(x+2,gy-5,18,1);s.fillStyle='#0d0f1a';s.fillRect(x+2,gy-1,3,1);s.fillRect(x+17,gy-1,3,1)}
else{for(let c=0;c<2;c++){const X=x+c*8;s.fillStyle='#ff7a1a';s.fillRect(X+1,gy-8,3,8);s.fillRect(X,gy-2,5,2);s.fillStyle='#f5f5f5';s.fillRect(X+1,gy-5,3,1)}}}
SO.forEach(b=>{if(b.h>100)return;const flt=b.h==12,n=flt?(b.w>50?1:0):Math.floor(b.w/90);for(let i=0;i<n;i++)prop((b.x+12+rnd()*(b.w-24))|0,b.y,flt?(rnd()*2|0):(i==0?0:(rnd()*5|0)),flt)});
SO.forEach(b=>{if(b.h>100)return;const{x,y,w,h}=b;
if(h==12){s.fillStyle='#2b3048';s.fillRect(x,y,w,h);for(let i=0;i<w*h/30;i++){s.fillStyle=rnd()<.5?'#232840':'#343b58';s.fillRect((x+rnd()*w)|0,(y+3+rnd()*(h-3))|0,(1+rnd()*3)|0,1)}
s.fillStyle='#171a2b';s.fillRect(x,y+h-2,w,2);s.fillStyle='#5a6486';s.fillRect(x,y,w,3);s.fillStyle='#8a96c0';s.fillRect(x,y,w,1);
for(let i=x+4;i<x+w-2;i+=8){s.fillStyle='#161a2c';s.fillRect(i,y+6,2,2)}}
else{s.fillStyle='#1e2134';s.fillRect(x,y,w,h);for(let i=0;i<w*h/30;i++){s.fillStyle=rnd()<.5?'#171a2a':'#292d44';s.fillRect((x+rnd()*w)|0,(y+6+rnd()*(h-6))|0,(1+rnd()*4)|0,(1+rnd()*2)|0)}
s.fillStyle='#4d5575';s.fillRect(x,y,w,5);s.fillStyle='#7b86ab';s.fillRect(x,y,w,1);s.fillStyle='#3a4160';for(let i=x+8;i<x+w;i+=18)s.fillRect(i,y+1,1,4);
s.fillStyle='#14172a';s.fillRect(x,y+5,w,2);s.fillStyle='#b8942a';for(let i=x+4;i<x+w-6;i+=14)s.fillRect(i,y+19,8,1)}});
const CP=[0,548,1044,1400];let cpx,coins,CO,MO,B,P,cx=0,msg=0,msgT='',T=0,fy=null,fyT=0,fyNext=5,wasFight=false,wasLive=false;const SP=[],PR=[],HEA=[];
const sl=(x,y,a,b)=>({t:0,x,y:y-18,w:12,h:18,min:a,max:b,d:1,a:1}),bat=(x,y,a,b)=>({t:1,x,y,y0:y,w:16,h:10,min:a,max:b,d:1,a:1,ph:x});
function reset(){if(pit&&pit.open)SO.splice(5,2,{x:1348,y:GY,w:552,h:30});pit=null;PR.length=0;fy=null;HEA.length=0;wasFight=false;wasLive=false;coins=0;cpx=0;gate.on=0;cx=0;P={x:20,y:120,w:10,h:17,vx:0,vy:0,gr:0,coy:0,jl:0,hp:3,inv:0,kb:0,kv:0,face:1,at:0,cd:0,al:0};
CO=[[90,134],[150,134],[200,134],[340,134],[355,98],[430,82],[450,134],[570,134],[620,104],[720,78],[800,52],[880,98],[980,78],[1080,134],[1120,98],[1215,72],[1260,134],[1500,98],[1720,98],[1600,134]].map(([x,y])=>({x,y,on:1,h:x>1400}));
MO=[sl(140,GY,100,240),sl(380,GY,320,490),sl(620,118,600,658),sl(650,GY,560,790),sl(900,GY,860,985),sl(1100,GY,1060,1280),sl(1200,GY,1060,1280),bat(560,95,500,640),bat(1020,100,980,1100),bat(1250,90,1150,1300)];
B={x:1700,y:GY-52,w:36,h:52,hp:9,mh:9,vx:0,vy:0,gr:1,t:2,inv:0,stun:0,dead:0,dt:1.2,on:0,dir:-1}}
reset();
const AT=()=>({x:-999,y:-999,w:0,h:0});const ov=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
function spark(x,y,c,n){for(let i=0;i<n;i++)SP.push({x,y,vx:(Math.random()-.5)*120,vy:-Math.random()*100,l:.6,c})}
function drop(m){CO.push({x:m.x+m.w/2,y:Math.max(24,m.y+m.h/2),on:1,h:false})}
function bossRetry(){const two=!!B.two;PR.length=0;HEA.length=0;fy=null;wasFight=false;wasLive=false;
P.x=1430;P.y=100;P.vx=0;P.vy=0;P.hp=3;P.inv=1.5;P.kb=0;P.at=0;P.gr=0;cx=Math.max(0,P.x-VW/2);
B=two?{x:1830,y:GY-52,w:36,h:52,hp:12,mh:12,vx:0,vy:0,gr:1,t:2,inv:0,stun:0,dead:0,dt:1.2,on:1,dir:-1,two:1,lt:0,gu:1.2,atk:0}:{x:1700,y:GY-52,w:36,h:52,hp:9,mh:9,vx:0,vy:0,gr:1,t:2,inv:0,stun:0,dead:0,dt:1.2,on:1,dir:-1};
CO.forEach(c=>{if(c.h)c.on=1})}
function lose(){msg=1.6;msgT='\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07!';if(gate.on&&!B.gone&&seen){bossRetry();return}reset()}
function hurt(dir){if(P.inv>0)return;P.hp--;P.inv=1.5;P.vy=-140;P.kb=.25;P.kv=dir*90;ping(140,'sawtooth');if(P.hp<=0)lose()}
function px(x,y,w,h,c){o.fillStyle=c;o.fillRect(Math.round(x),Math.round(y),w,h)}
function mts(par,base,col,pk){const TT=260,off=-((cx*par)%TT);for(let k=-1;k<VW/TT+2;k++){const X=off+k*TT;o.fillStyle=col;o.beginPath();o.moveTo(X,base);for(const[a,b]of pk)o.lineTo(X+a,base-b);o.lineTo(X+TT,base);o.closePath();o.fill();for(const[a,b]of pk)if(b>=60){o.fillStyle='#d9d0d3';o.beginPath();o.moveTo(X+a-8,base-b+12);o.lineTo(X+a,base-b);o.lineTo(X+a+8,base-b+12);o.fill()}}}
const FAR=[[0,26,80],[30,22,105],[56,34,70],[94,24,118],[122,30,88],[156,36,64],[196,22,100],[222,34,76]],
MID=[[4,30,70],[38,26,52],[68,36,88],[108,24,60],[136,38,78],[178,28,48],[210,34,92],[248,40,60]],
PK=['#ff4fd8','rgba(255,79,216,.9)'],CY=['#50e6ff','rgba(80,230,255,.9)'],YL=['#ffd23f','rgba(255,210,63,.9)'],
NEAR=[[8,34,62,PK],[46,28,92],[78,40,70],[122,30,104,CY],[156,36,58],[196,32,84,YL],[232,42,66],[278,34,96,PK],[316,20,52]];
const CC=new Map();
function cityTile(pat,TT,body,edge,dens,wc){let t=CC.get(pat);if(t)return t;
let mh=0;pat.forEach(b=>mh=Math.max(mh,b[2]));const HC=mh+12,c=document.createElement('canvas');c.width=TT;c.height=HC;const k=c.getContext('2d'),f=(x,y,w,h,col)=>{k.fillStyle=col;k.fillRect(x,y,w,h)};
pat.forEach(([a,w,h,sg],bi)=>{const x=a,y=HC-h;f(x,y,w,h+1,body);f(x,y,w,2,edge);f(x,y,1,h,edge);if(h>85)f(x+(w>>1),y-7,1,7,edge);
for(let r=0,wy=y+5;wy<HC-4;r++,wy+=5)for(let cc=0,wx=x+3;wx<x+w-3;cc++,wx+=4){const hv=((bi*131+r*31+cc*17)*2654435761>>>0)%100;if(hv<dens)f(wx,wy,2,2,wc[hv%wc.length])}
if(sg)f(x+w-4,y+8,3,20,'#0b0e22')});
t={cv:c,HC};CC.set(pat,t);return t}
function city(par,base,TT,pat,body,edge,dens,wc){const t=cityTile(pat,TT,body,edge,dens,wc),off=-((cx*par)%TT);
for(let k=-1;k<VW/TT+2;k++){const X=Math.round(off+k*TT);if(X>VW||X+TT<0)continue;o.drawImage(t.cv,X,base-t.HC);
for(let bi=0;bi<pat.length;bi++){const[a,w,h,sg]=pat[bi],x=X+a,y=base-h;if(x>VW||x+w<0)continue;
if(h>85&&Math.sin(T*3+bi*2)>0){const ax=x+(w>>1);px(ax,y-8,1,1,'#ff3b3b');gl(ax,y-8,7,'rgba(255,60,60,.9)',.35)}
if(sg){const sy=y+8,fl=.75+.25*Math.sin(T*9+bi*3);o.globalAlpha=fl;px(x+w-4,sy+1,3,18,sg[0]);o.globalAlpha=1;gl(x+w-3,sy+10,24,sg[1],.28*fl)}}}}
const RED=new Image(),BLU=new Image();RED.src='assets/image_08.png';BLU.src='assets/image_09.png';
const bimg=new Image();bimg.src='assets/image_10.png';const fc=document.createElement('canvas');fc.width=fc.height=60;const fx=fc.getContext('2d');
const BRC=new Map();const BR=i=>{let c=BRC.get(i);if(!c){c=document.createElement('canvas');c.width=i.naturalWidth;c.height=i.naturalHeight;const k=c.getContext('2d');k.filter='brightness(1.25) saturate(1.1)';k.drawImage(i,0,0);BRC.set(i,c)}return c};
function drawBoss(){if(B.dead&&!B.two&&((B.dt*12|0)%2))return;
if(B.two){if(!SPB.complete||!SPB.naturalWidth)return;const vy=B.vy,lv=Math.min(8,(B.mh||6)-B.hp+2);let f;
if(B.dead)f=B.dt>.7?37:38;
else if(B.gu>0)f=39+Math.min(4,(1-B.gu/1.2)*5|0);
else if(B.ph==3)f=12+((T*14|0)%2);else if(B.ph==4)f=41;else if(B.lt>0)f=24+Math.min(3,(1-B.lt/.4)*4|0);else if(B.ph==2)f=10;else if(B.stun>0)f=B.stun>.5?34:B.stun>.25?35:36;
else if(!B.gr)f=vy<-150?18:vy<-60?17:vy<-20?22:vy<90?22+((T*14|0)%2):23;
else if(B.atk>0)f=3+Math.min(6,(1-B.atk/.7)*7|0);
else if(B.t<.7)f=lv>=4?29+((T*12|0)%2):19;
else f=lv>=3?12+((T*8|0)%2):((T*4|0)%3);
const[sx,sy,sw,sh,ax,ay]=SP2[f],x=Math.round(B.x-cx+B.w/2),y=Math.round(B.y+oy+B.h)+1;gl(x,y-28,(B.ph==2||B.ph==3)?64:46,'rgba(110,160,255,.95)',.45+.1*Math.sin(T*6));
o.save();o.translate(x,y);if(B.dir<0)o.scale(-1,1);if(B.inv>0&&!B.dead&&((B.inv*14|0)%2))o.globalAlpha=.45;o.drawImage(BR(SPB),sx,sy,sw,sh,-ax*KB2,-ay*KB2,sw*KB2,sh*KB2);o.restore();return}if(!SPA.complete||!SPA.naturalWidth)return;
const vy=B.vy,lv=Math.min(8,(B.mh||6)-B.hp+(B.two?2:0));let f;
if(B.lt>0)f=B.lt>.27?13:14;else if(B.stun>0)f=3;
else if(!B.gr)f=vy<-150?6:vy<-60?7:vy<-20?8:vy<90?9+((T*18|0)%3):12;
else if(B.t<.3)f=2;else if(B.t<.7)f=1;else f=lv>=3?4+((T*8|0)%2):((T*4|0)%2);
const[sx,sy,sw,sh,ax,ay]=SPR[f],x=Math.round(B.x-cx+B.w/2),y=Math.round(B.y+oy+B.h)+1;gl(x,y-28,(B.lt>0||!B.gr)?60:42,'rgba(200,120,255,.95)',.42+.08*Math.sin(T*5));
o.save();o.translate(x,y);if(B.dir<0)o.scale(-1,1);if(B.inv>0&&((B.inv*14|0)%2))o.globalAlpha=.45;
o.drawImage(BR(SPA),sx,sy,sw,sh,-ax*KB,-ay*KB,sw*KB,sh*KB);o.restore()}
function fairyUp(dt){
const live=B.on&&!B.dead&&!sec,fight=live&&coins>=10;
if(live&&!wasLive){msg=2;msgT=coins>=10?'นางฟ้าจะมาช่วยเป็นระยะ 💖':'เหรียญไม่ถึง 10 เหรียญ นางฟ้าจะไม่มา';fyT=0;fyNext=5}
wasLive=live;
if(fight){fyT+=dt;if(!fy&&fyT>=fyNext){fyT=0;fyNext=5;const lx=Math.max(1410,Math.min(1860,P.x+5+(Math.random()<.5?-1:1)*(40+Math.random()*30)));fy={x:cx+VW+30,y:GY-70,s:0,t:0,lx,fl:-1,proj:null,thrown:0}}}
else fy=null;
if(fy){fy.t+=dt;
 if(fy.s==0){const tx=fy.lx-12,ty=GY-72+Math.sin(T*5)*3;fy.fl=fy.x>tx?-1:1;fy.x+=(tx-fy.x)*Math.min(1,dt*3);fy.y+=(ty-fy.y)*Math.min(1,dt*4);if(Math.abs(fy.x-tx)<3){fy.s=1;fy.t=0;fy.fl=1;msg=1.6;msgT='นางฟ้ามาแล้ว! เก็บหัวใจ 💖';ping(1200,'sine')}}
 else if(fy.s==1){fy.y=GY-72+Math.sin(T*5)*3;fy.fl=1;
  if(!fy.thrown&&fy.t>=.55){fy.thrown=1;fy.proj={x:fy.x+14,y:fy.y-18,px:fy.x+14,py:fy.y-18,t:0,sx:fy.x+14,sy:fy.y-18};ping(1000,'sine')}
  if(fy.t>=1.1){fy.s=2;fy.t=0}}
 else{fy.fl=1;fy.x+=dt*190;fy.y-=dt*50;if(fy.x>cx+VW+50||fy.t>2.2)fy=null}
 if(fy&&fy.proj){const q=fy.proj;q.px=q.x;q.py=q.y;q.t+=dt;const u=Math.min(1,q.t/.5);q.x=q.sx+(fy.lx-q.sx)*u;q.y=q.sy+(GY-8-q.sy)*u*u;if(u>=1){HEA.push({x:fy.lx,t:0,life:7});fy.proj=null;ping(700,'sine')}}
}
for(let i=HEA.length-1;i>=0;i--){const h=HEA[i];h.t+=dt;
 if(h.t>.4&&P.hp<5&&Math.abs(P.x+5-h.x)<15&&P.y+P.h>GY-24){P.hp++;ping(980);ping(1300,'sine');spark(h.x,GY-12,'#ff4f93',16);spark(h.x,GY-12,'#fff',8);h.t=h.life}
 if(h.t>=h.life)HEA.splice(i,1)}
}
const EXP=[];const expl=(x,y,k)=>EXP.push({x,y,k,t:T});
function drawMon(g,CX){g.save();g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';
for(const m of MO){if(!m.a)continue;const bl=m.t,I=bl?BLU:RED;if(!I.complete||!I.naturalWidth)continue;
const cw=bl?102:78,ch=bl?84:81,fr=Math.floor(T*(bl?8:7)+m.x*.05)%4,k=(bl?21:23)*sc/ch,w=cw*k,h=ch*k,X=(m.x+m.w/2-CX)*sc;
const Y=bl?(m.y+m.h/2+oy)*sc+h*.5:(m.y+m.h+oy+1)*sc-Math.abs(Math.sin(T*7+m.x))*1.5*sc*(fr%2);
g.save();g.translate(Math.round(X),Math.round(Y));if(bl?m.d>0:m.d<0)g.scale(-1,1);g.drawImage(I,fr*cw,0,cw,ch,-w/2,-h,w,h);g.restore()}
g.restore()}
function drawSpr(g,CX){const S=SHT[CH.n]||SHT['สตอ'];if(!S.img.complete||!S.img.naturalWidth)return;const M=S.m;
g.save();g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';
const FR=FRY,FOK=FR.img.complete&&FR.img.naturalWidth;
if(FOK)for(const h of HEA){const a=h.t,fi=a<.12?0:a<.24?1:a<.36?2:a<.5?3:4+((T*5|0)%2),r=FR.m.gnd[fi],k=.2*sc;g.globalAlpha=Math.max(0,Math.min(1,(h.life-a)/1));g.drawImage(FR.img,r[0],r[1],r[2],r[3],(h.x-CX)*sc-r[4]*k,(GY+oy)*sc-r[5]*k,r[2]*k,r[3]*k)}
g.globalAlpha=1;
for(const q of PR){const r=((T*18|0)%2)?M.e.p1:M.e.p2,k=.19*sc;g.save();g.translate((q.x-CX)*sc,(q.y+oy)*sc);if(q.vx<0)g.scale(-1,1);g.drawImage(S.img,r[0],r[1],r[2],r[3],-r[2]*.7*k,-r[3]*.5*k,r[2]*k,r[3]*k);g.restore()}
if(!(P.inv>0&&((P.inv*12|0)%2))){const W=SHW[CH.n]||SHW['สตอ'],ea=.3-P.at,mv=Math.abs(P.vx)>1&&P.kb<=0,dtT=Math.max(0,Math.min(.1,T-lT));lT=T;
if(!P.gr){if(!wasAir){wasAir=true;tAir=T}}else if(wasAir){wasAir=false;lnd=.16}lnd=Math.max(0,lnd-dtT);
let img=S.img,r,K=.18*sc;
if(P.at>.01){r=M.f[ea<.04?2:ea<.08?3:ea<.12?4:ea<.16?5:6]}
else if(W.img.complete&&W.img.naturalWidth){img=W.img;K=W.m.k*sc;
if(!P.gr){const ta=T-tAir;r=W.m.j[ta<.07?1:P.vy<-60?2:P.vy<60?3:4]}
else if(lnd>0)r=W.m.j[lnd>.08?5:6];
else if(mv)r=W.m.w[(T*10|0)%7];else r=W.m.w[0]}
else r=M.f[0];
g.save();g.translate(Math.round((P.x+5-CX)*sc),Math.round((P.y+oy+18)*sc));if(P.face<0)g.scale(-1,1);g.drawImage(img,r[0],r[1],r[2],r[3],-r[4]*K,-r[5]*K,r[2]*K,r[3]*K);g.restore()}
if(FOK&&fy){const r=FR.m.fly[(T*10|0)%8],k=.23*sc;g.globalAlpha=1;g.save();g.translate((fy.x-CX)*sc,(fy.y+oy)*sc);if(fy.fl<0)g.scale(-1,1);g.drawImage(FR.img,r[0],r[1],r[2],r[3],-r[4]*k,-r[5]*k,r[2]*k,r[3]*k);g.restore();
 if(fy.s==1&&!fy.thrown){const r2=FR.m.proj[5],k2=(.05+.1*Math.min(1,fy.t/.55))*sc;g.save();g.translate((fy.x+14-CX)*sc,(fy.y-18+oy)*sc);g.drawImage(FR.img,r2[0],r2[1],r2[2],r2[3],-r2[2]*k2/2,-r2[3]*k2/2,r2[2]*k2,r2[3]*k2);g.restore()}
 if(fy.proj){const q=fy.proj,r2=FR.m.proj[((T*14|0)%2)?3:4],k2=.14*sc,an=Math.atan2(q.y-q.py,(q.x-q.px)||.01);g.save();g.translate((q.x-CX)*sc,(q.y+oy)*sc);g.rotate(an);g.drawImage(FR.img,r2[0],r2[1],r2[2],r2[3],-r2[2]*.7*k2,-r2[3]*.5*k2,r2[2]*k2,r2[3]*k2);g.restore()}}
for(let i=EXP.length-1;i>=0;i--){const e=EXP[i],a=T-e.t;if(a>.42){EXP.splice(i,1);continue}
const r=[M.e.b1,M.e.b2,M.e.b3][e.k],kk=[.15,.18,.21][e.k]*sc*(.7+.4*Math.min(1,a/.12));
g.globalAlpha=a>.25?Math.max(0,1-(a-.25)/.17):1;g.save();g.translate((e.x-CX)*sc,(e.y+oy)*sc+r[3]*kk*.45);g.drawImage(S.img,r[0],r[1],r[2],r[3],-r[4]*kk,-r[5]*kk,r[2]*kk,r[3]*kk);g.restore()}
g.restore()}
let last=performance.now(),t0=last;
const GLC={};let VGc=null;
function lp(now){if(!run)return;window.__rc=coins;requestAnimationFrame(lp);const dt=Math.min((now-last)/1000,.04);last=now;if(sec)return;T+=dt;
const jh=keys.KeyW||keys.ArrowUp||keys.Space||bt.j||bt.ju,ax=((keys.KeyD||keys.ArrowRight||bt.r)?1:0)-((keys.KeyA||keys.ArrowLeft||bt.l)?1:0);
const SS=gate.on?SO.concat([gate]):SO;
const ah=keys.KeyJ||keys.KeyX||keys.KeyK||keys.Enter||bt.a;P.cd=Math.max(0,P.cd-dt);P.at=Math.max(0,P.at-dt);if(!ah)P.al=0;if(ah&&!P.al&&P.cd<=0){P.at=.3;P.cd=.34;P.al=1;P.go=1;ping(520,'sine')}if(P.go&&P.at<=.14){P.go=0;PR.push({x:P.x+(P.face>0?P.w+4:-4),y:P.y+8,vx:P.face*200,l:.75});ping(900,'sine');spark(P.x+5+P.face*10,P.y+8,CH.c1,6)}if(ax)P.face=ax;
P.inv=Math.max(0,P.inv-dt);P.kb=Math.max(0,P.kb-dt);P.vx=P.kb>0?P.kv:ax*95;P.coy=P.gr?.15:P.coy-dt;if(!jh)P.jl=0;
if((jh&&!P.jl||bt.ju)&&P.coy>0){P.vy=-315;P.coy=0;P.jl=1;ping(520)}if(!jh&&P.vy<-110)P.vy=-110;
P.x=Math.max(0,P.x+P.vx*dt);for(const b of SS){if(b.f)continue;if(ov(P,b)){if(P.vx>0)P.x=b.x-P.w;else if(P.vx<0)P.x=b.x+b.w}}
const pb=P.y+P.h;P.vy=Math.min(400,P.vy+900*dt);P.y+=P.vy*dt;P.gr=0;
for(const b of SS){if(!ov(P,b))continue;if(b.f){if(P.vy>=0&&pb<=b.y+1){P.y=b.y-P.h;P.vy=0;P.gr=1}}else if(P.vy>0){P.y=b.y-P.h;P.vy=0;P.gr=1}else if(P.vy<0){P.y=b.y+b.h;P.vy=0}}
for(const c of CP)if(c>cpx&&P.x>c+10&&P.gr)cpx=c;
if(P.y>205){if(pit&&pit.open){falling();return}if(P.x>1296&&P.x<1348){secret();return}P.hp--;if(P.hp<=0)lose();else{P.x=cpx+6;P.y=100;P.vy=0;P.inv=1}}
if(!gate.on&&!B.gone&&P.x>1420){gate.on=1;if(seen)B.on=1;else{seen=1;bossIntro()}}
for(const c of CO)if(c.on&&Math.abs(c.x-P.x-5)<9&&Math.abs(c.y-P.y-7)<11){c.on=0;if(c.h){if(P.hp<5)P.hp++;ping(980);spark(c.x,c.y,'#ff4f93',10)}else{coins++;ping(700+coins*25);spark(c.x,c.y,'#ffe45c',6);if(coins%10==0&&P.hp<5)P.hp++}}
for(const m of MO){if(!m.a)continue;m.x+=m.d*(m.t?35:20)*dt;if(m.x<m.min)m.d=1;if(m.x>m.max)m.d=-1;if(m.t)m.y=m.y0+Math.sin(T*3+m.ph)*12;
if(P.at>0&&ov(AT(),m)){m.a=0;drop(m);spark(m.x+6,m.y+4,'#7df9ff',12);ping(300)}else if(ov(P,m)){if(P.vy>40&&P.y+P.h-m.y<9){m.a=0;drop(m);P.vy=-210;spark(m.x+6,m.y+4,m.t?'#c33':'#b86be8',10);ping(300)}else hurt(P.x<m.x?-1:1)}}
if(B.on&&!B.dead){B.stun=Math.max(0,B.stun-dt);B.inv=Math.max(0,B.inv-dt);B.lt=Math.max(0,(B.lt||0)-dt);B.gu=Math.max(0,(B.gu||0)-dt);B.atk=Math.max(0,(B.atk||0)-dt);if(B.gu>0)B.stun=Math.max(B.stun,.05);B.t-=dt;const dir=P.x+5<B.x+B.w/2?-1:1,lv=Math.min(8,(B.mh||6)-B.hp+(B.two?2:0));B.dir=dir;
if(B.two&&B.ph==2){B.vx=0;B.pt-=dt;if(B.pt<=0){B.ph=3;B.pt=1.3;B.dd=dir;ping(200,'sawtooth')}}else if(B.two&&B.ph==3){B.vx=B.dd*(290+lv*12);B.pt-=dt;if(Math.random()<.7)spark(B.dd>0?B.x:B.x+B.w,GY-3,'#7aa8ff',1);if(B.pt<=0||B.x<=1393||B.x>=1884-B.w-1){B.ph=4;B.pt=.6;B.vx=0;spark(B.x+18,GY-4,'#fff',12)}}else if(B.two&&B.ph==4){B.vx*=.9;B.pt-=dt;if(B.pt<=0){B.ph=0;B.t=.8}}else if(B.stun>0){if(B.gr)B.vx=0}else if(B.gr){if(B.atk>0)B.vx=0;else if(B.two&&B.t>.9&&Math.abs(P.x+5-B.x-B.w/2)<48&&P.y+P.h>B.y){B.atk=.7;B.t+=.6;B.vx=0;ping(260,'square')}else if(B.t<=0){if(B.two){const tx=P.x<1620?1830:1400;B.vy=-430;B.vx=Math.max(-380,Math.min(380,(tx-B.x)/.88));B.leap=1;B.t=99;B.gr=0;ping(180,'square')}else{B.vy=-330;B.vx=dir*(100+lv*9);B.t=Math.max(.6,1.6-lv*.13);B.gr=0}}else B.vx=dir*(32+lv*7)}
B.x=Math.max(1392,Math.min(1884-B.w,B.x+B.vx*dt));B.vy+=900*dt;B.y+=B.vy*dt;if(B.y+B.h>=GY){if(B.vy>50){B.lt=.4;spark(B.x+18,GY-2,'#b66bff',14);ping(90,'sawtooth');if(B.leap){B.leap=0;B.ph=2;B.pt=.7}}B.y=GY-B.h;B.vy=0;B.gr=1}else B.gr=0;
if(B.stun>0)B.atk=0;if(B.two&&B.atk>0){const pg=1-B.atk/.7;if(pg>.45&&pg<.9&&ov(P,{x:B.dir>0?B.x+B.w-4:B.x-30,y:B.y+8,w:34,h:34}))hurt(P.x<B.x?-1:1)}
if(P.at>0&&ov(AT(),B)&&B.inv<=0){B.hp--;B.inv=.8;B.stun=.7;B.vx=0;spark(B.x+18,B.y+20,'#7df9ff',16);ping(200);if(B.hp<=0){B.dead=1;spark(B.x+18,B.y+20,'#ffd23f',30)}}
if(ov(P,B)){if(P.vy>30&&P.y+P.h-B.y<10&&B.inv<=0){B.hp--;B.inv=.8;B.stun=.7;P.vy=-260;spark(B.x+18,B.y,'#ff9a3c',14);ping(200);if(B.hp<=0){B.dead=1;spark(B.x+18,B.y+20,'#ffd23f',30)}}else if(B.stun<=0)hurt(P.x<B.x?-1:1)}}
if(B.dead){B.dt-=dt;if(Math.random()<.5)spark(B.x+Math.random()*36,B.y+Math.random()*40,'#ffd23f',2);if(B.dt<=0){if(gk&&!B.two){fin();return}B.dead=0;B.on=0;B.gone=1;pit={t:0,open:0,x:P.x-30,w:64};msg=1.3;msgT='พื้นสั่นสะเทือน…'}}
if(pit){pit.t+=dt;if(!pit.open){if(Math.random()<.6)spark(pit.x+Math.random()*64,GY-1,'#8a5a3c',1);if(pit.t>1.3){pit.open=1;pit.x=Math.max(1352,Math.min(1830,P.x+5-32));SO.splice(5,1,{x:1348,y:GY,w:pit.x-1348,h:30},{x:pit.x+64,y:GY,w:1900-pit.x-64,h:30});ping(70,'sawtooth');spark(pit.x+32,GY,'#b66bff',24);msg=1.5;msgT='พื้นถล่ม!!'}}}
fairyUp(dt);
for(const q of PR){q.x+=q.vx*dt;q.l-=dt;
for(const m of MO){if(m.a&&q.l>0&&Math.abs(q.x-(m.x+m.w/2))<m.w/2+3&&Math.abs(q.y-(m.y+m.h/2))<m.h/2+3){m.a=0;drop(m);q.l=0;spark(m.x+6,m.y+4,'#7df9ff',12);expl(m.x+6,m.y+6,0);ping(300)}}
if(q.l>0&&B.on&&!B.dead&&B.inv<=0&&q.x>B.x&&q.x<B.x+B.w&&q.y>B.y&&q.y<B.y+B.h){q.l=0;B.hp--;B.inv=.8;B.stun=.5;spark(q.x,q.y,'#7df9ff',14);expl(q.x,q.y,B.hp<=0?2:1);ping(200);if(B.hp<=0){B.dead=1;spark(B.x+18,B.y+20,'#ffd23f',30)}}
for(const b of SS){if(!b.f&&q.l>0&&q.x>b.x&&q.x<b.x+b.w&&q.y>b.y&&q.y<b.y+b.h){q.l=0;spark(q.x,q.y,'#ff9ec4',4);expl(q.x,q.y,0)}}}
for(let i=PR.length-1;i>=0;i--)if(PR[i].l<=0)PR.splice(i,1);
for(const q of SP){q.x+=q.vx*dt;q.y+=q.vy*dt;q.vy+=300*dt;q.l-=dt}for(let i=SP.length-1;i>=0;i--)if(SP[i].l<=0)SP.splice(i,1);
cx+=(Math.max(0,Math.min(LW-VW,P.x+5-VW/2))-cx)*Math.min(1,dt*6);const CX=Math.round(cx);
// draw
const bands=['#04050d','#080b1f','#0f1230','#1a1745','#2b1f55'],bh=Math.ceil(VH/5);bands.forEach((c,i)=>px(0,i*bh,VW,bh+1,c));
{const q=o.createLinearGradient(0,oy+40,0,oy+165);q.addColorStop(0,'rgba(255,90,140,0)');q.addColorStop(1,'rgba(255,120,90,.32)');o.fillStyle=q;o.fillRect(0,oy+40,VW,125)}
o.fillStyle='#fff';for(let i=0;i<26;i++){const X=(i*53+7)%VW,Y=(i*37)%(oy+70);o.globalAlpha=.25+.45*Math.pow(Math.sin(T*2+i),2);o.fillRect(X,Y,1,1)}o.globalAlpha=1;
o.fillStyle='#241d46';for(let i=0;i<4;i++){const X=(((i*97-T*4-CX*.05)%(VW+90))+VW+90)%(VW+90)-45,Y=14+i*14;o.fillRect(X|0,Y,30,3);o.fillRect((X+6)|0,Y-2,16,2)}
{const sx=VW*.78,sy=oy+34,q=o.createRadialGradient(sx,sy,2,sx,sy,VW*.6);q.addColorStop(0,'rgba(220,230,255,.8)');q.addColorStop(.12,'rgba(150,170,255,.28)');q.addColorStop(1,'rgba(90,110,200,0)');o.fillStyle=q;o.fillRect(0,0,VW,VH);o.fillStyle='#eef2ff';o.beginPath();o.arc(sx,sy,7,0,7);o.fill();o.fillStyle='#c9d2f2';o.beginPath();o.arc(sx-2,sy-1,1.6,0,7);o.fill();o.beginPath();o.arc(sx+2,sy+2,1.1,0,7);o.fill()}
city(.1,oy+158,260,FAR,'#151b3d','#232c5c',22,['#a88a4a','#8a6f3c','#5c9aa6']);
o.fillStyle='rgba(70,30,100,.16)';o.fillRect(0,oy+50,VW,VH);
city(.25,oy+172,300,MID,'#0f1330','#1c2552',30,['#e0b04e','#f0c868','#b98a3a','#5fd2e0']);
o.fillStyle='rgba(40,20,80,.14)';o.fillRect(0,oy+70,VW,VH);
city(.5,oy+180,340,NEAR,'#0b0e22','#2a3466',36,['#ffd36b','#ffe9a8','#f0a64a','#7df9ff','#ff8fd0']);
o.drawImage(SL,-CX,oy);
for(const[lx,ly,lg]of LAMPS){const X=lx-CX;if(X<-40||X>VW+40)continue;const fk=.9+.1*Math.sin(T*2.3+lx);gl(X,ly+oy,26,'rgba(255,214,130,.95)',.55*fk);gl(X,lg+oy-3,34,'rgba(255,200,110,.9)',.2*fk);
o.save();o.globalCompositeOperation='lighter';o.globalAlpha=.09;o.fillStyle='#ffd98a';o.beginPath();o.moveTo(X-2,ly+oy+1);o.lineTo(X+2,ly+oy+1);o.lineTo(X+22,lg+oy);o.lineTo(X-22,lg+oy);o.closePath();o.fill();o.restore()}
for(const b of SO)if(b.h==12){const X=b.x-CX;if(X>VW||X+b.w<0)continue;const pk=((b.x/7)|0)%2,nc=pk?'#ff4fd8':'#50e6ff',gc=pk?'rgba(255,79,216,.9)':'rgba(80,230,255,.9)';px(X,b.y+oy+b.h-1,b.w,1,nc);for(let i=0;i<b.w;i+=14)gl(X+i+7,b.y+b.h+oy+1,13,gc,.3)}
{const q=o.createLinearGradient(0,GY+oy,0,VH);q.addColorStop(0,'rgba(30,10,50,0)');q.addColorStop(1,'rgba(30,10,50,.16)');o.fillStyle=q;o.fillRect(0,GY+oy,VW,VH-GY-oy);o.globalAlpha=.18;o.fillStyle='#1a0830';for(const b of SO)if(b.y<GY-4&&b.w<300)o.fillRect(b.x-CX-(GY-b.y)*.35,GY+oy,b.w,3);o.globalAlpha=.55;o.fillStyle='#8fa6ff';for(const b of SO)o.fillRect(b.x-CX,b.y+oy,b.w,1);o.globalAlpha=1}o.globalAlpha=.2+.12*Math.sin(T*3);px(1306-CX,GY+oy,40,30,'#7df9ff');o.globalAlpha=.8;for(let i=0;i<4;i++)px(1312+i*10-CX,GY+oy+28-((T*14+i*8)%28),1,1,'#fff');o.globalAlpha=1;
if(pit){if(!pit.open){o.globalAlpha=.7;for(let i=0;i<6;i++)px(pit.x+i*10-CX,GY+oy+1,5,1,'#1a0d22');o.globalAlpha=1}else{px(pit.x-CX,GY+oy,pit.w,30,'#0a0510');o.globalAlpha=.35+.15*Math.sin(T*6);px(pit.x-CX,GY+oy,pit.w,9,'#b66bff');o.globalAlpha=1}}
if(gate.on){px(gate.x-CX,gate.y+oy,6,80,'#59627d');for(let i=0;i<80;i+=8)px(gate.x-CX,gate.y+oy+i,6,1,'#2a3046');for(let i=0;i<80;i+=16)px(gate.x-CX-1,gate.y+oy+i,8,3,(i/16%2)?'#1a1d2b':'#e0b030');gl(gate.x-CX+3,gate.y+oy+40,28,'rgba(255,60,60,.9)',.15)}
for(const c of CO)if(c.on&&c.h){const X=Math.round(c.x-CX),Y=Math.round(c.y+oy+Math.sin(T*3+c.x)*1.5),k='#ff4f93';px(X-4,Y-4,3,2,k);px(X+1,Y-4,3,2,k);px(X-5,Y-2,10,3,k);px(X-4,Y+1,8,2,k);px(X-2,Y+3,4,1,k);px(X-1,Y+4,2,1,k);px(X-4,Y-3,1,1,'#fff');px(X-3,Y-2,1,1,'#fff')}else if(c.on){const w=Math.abs(Math.cos(T*4+c.x))*6+1;px(c.x-CX-w/2,c.y+oy-4,w,8,'#e0a100');px(c.x-CX-w/2+.5,c.y+oy-3,Math.max(1,w-1),6,'#ffd23f')}
for(const c of CO)if(c.on)gl(c.x-CX,c.y+oy,11,c.h?'rgba(255,90,150,.9)':'rgba(255,210,70,.9)',.5);
{const sd=(x,w,fy)=>{let gy=null;for(const b of SO)if(x>=b.x&&x<=b.x+b.w&&b.y>=fy-4&&(gy===null||b.y<gy))gy=b.y;if(gy===null)return;const h=Math.min(1,Math.max(0,(gy-fy)/80));o.globalAlpha=.38*(1-h*.7);o.fillStyle='#1a0830';o.beginPath();o.ellipse(x-CX,gy+oy+1,w*(1-h*.4),2.2,0,0,7);o.fill();o.globalAlpha=1};
for(const m of MO)if(m.a)sd(m.x+m.w/2,m.w*.6,m.y+m.h);if(B.on)sd(B.x+B.w/2,B.two&&B.ph==3?22:17,B.y+B.h);sd(P.x+5,6,P.y+P.h);gl(P.x+5-CX,P.y+oy+8,20,'rgba(255,200,230,.9)',.16)}
for(const m of MO)if(m.a)gl(m.x+m.w/2-CX,m.y+m.h/2+oy,m.t?20:22,m.t?'rgba(80,150,255,.9)':'rgba(255,60,90,.9)',.38+.08*Math.sin(T*5+m.x));


for(const q of SP)px(q.x-CX,q.y+oy,2,2,q.c);
mdv+=((gate.on&&B.on?1:0)-mdv)*Math.min(1,dt*2);
o.save();o.globalCompositeOperation='multiply';{const q=o.createLinearGradient(0,0,0,VH);q.addColorStop(0,'#8c97dc');q.addColorStop(.6,'#7480c4');q.addColorStop(1,'#5f6aab');o.fillStyle=q;o.fillRect(0,0,VW,VH)}
if(mdv>.01){o.globalAlpha=.1*mdv;o.fillStyle='#a2a8e6';o.fillRect(0,0,VW,VH)}o.restore();
if(B.on)drawBoss();
for(const l of LG){const[X,Y,r,c,a]=l,key=c+'|'+r;let q=GLC[key];if(!q){q=GLC[key]=document.createElement('canvas');q.width=q.height=r*2;const k=q.getContext('2d'),gr=k.createRadialGradient(r,r,0,r,r,r);gr.addColorStop(0,c);gr.addColorStop(1,'rgba(0,0,0,0)');k.fillStyle=gr;k.fillRect(0,0,r*2,r*2)}o.save();o.globalCompositeOperation='lighter';o.globalAlpha=a;o.drawImage(q,Math.round(X-r),Math.round(Y-r));o.restore()}LG.length=0;
{if(!VGc||VGc.width!==VW||VGc.height!==VH){VGc=document.createElement('canvas');VGc.width=VW;VGc.height=VH;const k=VGc.getContext('2d'),q=k.createRadialGradient(VW/2,VH*.55,VH*.35,VW/2,VH*.55,VW*.62);q.addColorStop(0,'rgba(20,6,40,0)');q.addColorStop(1,'rgba(20,6,40,1)');k.fillStyle=q;k.fillRect(0,0,VW,VH)}o.globalAlpha=.1+.05*mdv;o.drawImage(VGc,0,0);o.globalAlpha=1}
g.imageSmoothingEnabled=false;g.drawImage(oc,0,0,VW*sc,VH*sc);drawMon(g,CX);drawSpr(g,CX);g.imageSmoothingEnabled=false;
g.textAlign='left';g.textBaseline='top';g.font='bold 22px sans-serif';g.fillStyle='#fff';g.shadowColor='#000';g.shadowBlur=4;g.fillText('\u2764\ufe0f'.repeat(P.hp),14,12+0);if(gk)g.fillText('🔑',14,42);g.shadowBlur=0;
if(B.on&&!B.dead){const bw=Math.min(300,W*.55),bx=(W-bw)/2;g.fillStyle='#000a';g.fillRect(bx-3,13,bw+6,16);g.fillStyle='#ff9a3c';g.fillRect(bx,16,bw*B.hp/(B.mh||6),10);g.fillStyle='#fff';g.font='bold 12px sans-serif';g.textAlign='center';g.fillText('BOSS',W/2,32)}
g.textAlign='center';g.fillStyle='#fff';g.shadowColor='#000';g.shadowBlur=4;if(msg>0){msg-=dt;g.font='bold 26px sans-serif';g.fillText(msgT,W/2,Hh*.4)}else if(now-t0<7000){g.font='12px sans-serif';g.fillText('\u0e40\u0e14\u0e34\u0e19 A/D \u00b7 \u0e01\u0e23\u0e30\u0e42\u0e14\u0e14 W/Space \u00b7 ยิงลูกแสง J/คลิก \u00b7 \u0e40\u0e2b\u0e22\u0e35\u0e22\u0e1a\u0e21\u0e2d\u0e19\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c \u00b7 \u0e2a\u0e39\u0e49\u0e1a\u0e2d\u0e2a\u0e17\u0e49\u0e32\u0e22\u0e14\u0e48\u0e32\u0e19!',W/2,Hh*.3)}g.shadowBlur=0}
requestAnimationFrame(lp)}})();
document.getElementById('face').src=FACE;
const M=["###############","#S....#.......#","#.###.#.#####.#","#.#...#.#...#.#","#.#.###.#.#.#.#","#.#.....#.#...#","#.#######.#####","#.......#.....#","#######.#####.#","#.....#.....#.#","#.###.#####.#.#","#.#.........#.#","#.#.#########.#","#...#K.......E#","###############"];
const N=15,S=3,H=3;
const wall=(c,r)=>r<0||c<0||r>=N||c>=N||M[r][c]=='#';
const ctr=(c,r)=>new THREE.Vector3((c+.5)*S,0,(r+.5)*S);
const find=ch=>{for(let r=0;r<N;r++)for(let c=0;c<N;c++)if(M[r][c]==ch)return[c,r]};
const sc=new THREE.Scene();sc.background=new THREE.Color(0x020202);sc.fog=new THREE.Fog(0x020202,1,16);
const cam=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,.1,60);cam.rotation.order='YXZ';sc.add(cam);
const rd=new THREE.WebGLRenderer({antialias:true});rd.setSize(innerWidth,innerHeight);rd.setPixelRatio(Math.min(devicePixelRatio,1.5));document.body.prepend(rd.domElement);
onresize=()=>{cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();rd.setSize(innerWidth,innerHeight)};
function tex(base,n){const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');g.fillStyle=base;g.fillRect(0,0,128,128);
for(let i=0;i<n;i++){g.fillStyle=`rgba(0,0,0,${Math.random()*.35})`;g.fillRect(Math.random()*128,Math.random()*128,Math.random()*30+2,Math.random()*30+2)}
const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;return t}
const wt=tex('#4a4036',60),ft=tex('#2a221c',80);
const wm=new THREE.MeshStandardMaterial({map:wt,roughness:1});
for(let r=0;r<N;r++)for(let c=0;c<N;c++)if(M[r][c]=='#'){const m=new THREE.Mesh(new THREE.BoxGeometry(S,H,S),wm);m.position.set((c+.5)*S,H/2,(r+.5)*S);sc.add(m)}
ft.repeat.set(N,N);const fl=new THREE.Mesh(new THREE.PlaneGeometry(N*S,N*S),new THREE.MeshStandardMaterial({map:ft,roughness:1}));fl.rotation.x=-Math.PI/2;fl.position.set(N*S/2,0,N*S/2);sc.add(fl);
const ce=fl.clone();ce.rotation.x=Math.PI/2;ce.position.y=H;sc.add(ce);
sc.add(new THREE.AmbientLight(0x221a14,.6));
const fo=new THREE.SpotLight(0xffe9c0,1.6,22,.6,.5,1.2);cam.add(fo);fo.position.set(0,0,0);fo.target.position.set(0,0,-1);cam.add(fo.target);
const pl=new THREE.PointLight(0xffd9a0,.5,9);cam.add(pl);
const [kc,kr]=find('K'),[ec,er]=find('E'),[sx,sy]=find('S');
const key=new THREE.Mesh(new THREE.OctahedronGeometry(.25),new THREE.MeshStandardMaterial({color:0xffcc33,emissive:0xaa7700}));key.position.copy(ctr(kc,kr));key.position.y=1;sc.add(key);
const kl=new THREE.PointLight(0xffcc33,.8,5);key.add(kl);
const GCS=[];{const cells=[];for(let r=0;r<N;r++)for(let c=0;c<N;c++)if(M[r][c]=='.')cells.push([c,r]);
const stp=Math.floor(cells.length/8),cg=new THREE.CylinderGeometry(.22,.22,.05,18);cg.rotateX(Math.PI/2);
for(let i=3,n=0;i<cells.length&&n<8;i+=stp,n++){const m=new THREE.Mesh(cg,new THREE.MeshStandardMaterial({color:0xffd23f,emissive:0xcc9900,emissiveIntensity:1.2}));m.position.copy(ctr(...cells[i]));m.position.y=1;sc.add(m);GCS.push({m,got:false})}}
const door=new THREE.Mesh(new THREE.BoxGeometry(.3,2.4,2),new THREE.MeshStandardMaterial({color:0x7a3a1a,emissive:0x1a0800}));door.position.copy(ctr(ec,er));door.position.x+=S/2-.2;door.position.y=1.2;sc.add(door);
// state
let st='menu',hasKey=false,yaw=0,pitch=0,t0=0;const keys={};const p=ctr(sx,sy);const ghost=ctr(ec,er);let gpath=[],gt=0;
const hud=document.getElementById('hud');
function setHud(){hud.textContent=(hasKey?'ได้กุญแจแล้ว! รีบไปที่ประตูทางขวาล่าง':'หากุญแจ 🔑')}
const SPA=new Image();SPA.src="assets/image_11.webp";const BIG="assets/image_12.webp";const SPR=[[0, 0, 63, 109, 32.3, 106.5], [65, 0, 69, 97, 34.9, 94.5], [136, 0, 76, 80, 40.9, 78.0], [214, 0, 108, 68, 70.4, 65.5], [324, 0, 132, 87, 86.9, 82.0], [458, 0, 117, 105, 80.6, 103.0], [577, 0, 84, 107, 48.1, 101.5], [663, 0, 83, 102, 47.3, 94.0], [748, 0, 75, 101, 44.4, 97.0], [825, 0, 97, 120, 50.6, 108.0], [924, 0, 100, 121, 48.1, 116.5], [1026, 0, 75, 115, 37.8, 111.5], [1103, 0, 66, 132, 37.8, 129.0], [0, 134, 163, 136, 79.1, 129.0], [165, 134, 229, 156, 116.3, 146.0]],KB=0.593;let CH={src:'',c1:'#ff7eb0',c2:'#c2487f'};
const SHT={'ฟ้า':{img:Object.assign(new Image(),{src:"assets/image_13.png"}),m:{"f": [[0, 0, 77, 131, 44.0, 130.0], [79, 0, 79, 131, 46.0, 130.0], [160, 0, 150, 127, 68.0, 126.0], [312, 0, 149, 131, 66.0, 130.0], [463, 0, 139, 131, 54.0, 130.0], [604, 0, 128, 129, 53.0, 128.0], [734, 0, 145, 140, 56.0, 139.0]], "e": {"orb": [881, 0, 75, 74, 37.5, 74.0], "p1": [958, 0, 104, 59, 52.0, 59.0], "p2": [1064, 0, 124, 68, 62.0, 68.0], "ring": [1190, 0, 97, 46, 48.5, 46.0], "b1": [1289, 0, 138, 78, 69.0, 78.0], "b2": [1429, 0, 145, 103, 72.5, 103.0], "b3": [1576, 0, 189, 119, 94.5, 119.0]}}},'สตอ':{img:Object.assign(new Image(),{src:"assets/image_14.png"}),m:{"f": [[0, 0, 89, 127, 48.0, 126.0], [91, 0, 88, 127, 43.0, 126.0], [181, 0, 153, 124, 68.0, 124.0], [336, 0, 154, 125, 68.0, 125.0], [492, 0, 133, 126, 42.0, 126.0], [627, 0, 126, 126, 51.0, 126.0], [755, 0, 146, 147, 57.0, 139.0]], "e": {"orb": [903, 0, 73, 76, 36.5, 76.0], "p1": [978, 0, 97, 64, 48.5, 64.0], "p2": [1077, 0, 118, 70, 59.0, 70.0], "ring": [1197, 0, 92, 46, 46.0, 46.0], "b1": [1291, 0, 108, 88, 54.0, 88.0], "b2": [1401, 0, 138, 112, 69.0, 112.0], "b3": [1541, 0, 186, 118, 93.0, 118.0]}}}};
const SHW={'ฟ้า':{img:SHT['ฟ้า'].img,m:{"k": 0.18, "w": [[1767, 0, 90, 131, 47.5, 131.0], [1859, 0, 93, 130, 48.5, 131.0], [1954, 0, 96, 131, 53.5, 131.0], [2052, 0, 95, 128, 55.5, 131.0], [2149, 0, 94, 131, 55.5, 131.0], [2245, 0, 90, 131, 51.5, 131.0], [2337, 0, 89, 131, 49.5, 131.0]], "j": [[2428, 0, 99, 129, 48.4, 128.8], [2529, 0, 131, 138, 65.5, 134.1], [2662, 0, 103, 118, 53.8, 136.3], [2767, 0, 103, 109, 53.8, 136.3], [2872, 0, 101, 127, 54.8, 136.3], [2975, 0, 143, 131, 70.8, 128.8], [3120, 0, 99, 137, 51.6, 136.3]]}},'สตอ':{img:SHT['สตอ'].img,m:{"k": 0.18, "w": [[1729, 0, 101, 127, 51.9, 127.0], [1832, 0, 107, 126, 57.7, 127.0], [1941, 0, 105, 125, 58.7, 127.0], [2048, 0, 108, 117, 61.6, 127.0], [2158, 0, 114, 138, 61.6, 127.0], [2274, 0, 103, 125, 56.7, 127.0], [2379, 0, 102, 125, 56.7, 127.0]], "j": [[2483, 0, 114, 124, 58.7, 123.9], [2599, 0, 143, 142, 73.8, 141.2], [2744, 0, 122, 123, 68.4, 141.2], [2868, 0, 122, 110, 71.7, 141.2], [2992, 0, 122, 125, 71.7, 141.2], [3116, 0, 147, 125, 74.9, 123.9], [3265, 0, 113, 131, 62.0, 130.4]]}}};const PORT={"\u0e1f\u0e49\u0e32": "assets/image_15.webp", "\u0e2a\u0e15\u0e2d": "assets/image_16.webp"};
function drawPick(cv,n){const S=SHT[n],g=cv.getContext('2d'),dr=()=>{const r=S.m.f[0],k=Math.min(cv.width/r[2],cv.height/r[3]);g.imageSmoothingQuality='high';g.drawImage(S.img,r[0],r[1],r[2],r[3],(cv.width-r[2]*k)/2,cv.height-r[3]*k,r[2]*k,r[3]*k)};S.img.complete&&S.img.naturalWidth?dr():S.img.addEventListener('load',dr)}
const FRY={img:Object.assign(new Image(),{src:"assets/image_17.png"}),m:{"fly": [[0, 0, 163, 154, 79.5, 162.0], [165, 0, 171, 149, 85.5, 176.0], [338, 0, 166, 149, 80.5, 197.0], [506, 0, 158, 149, 78.5, 208.0], [666, 0, 168, 145, 84.0, 186.0], [836, 0, 163, 144, 82.5, 165.0], [1001, 0, 141, 147, 70.0, 155.0], [1144, 0, 144, 146, 75.5, 158.0]], "proj": [[1290, 0, 62, 40, 31.0, 20.0], [1354, 0, 95, 55, 47.5, 27.5], [1451, 0, 106, 64, 53.0, 32.0], [1559, 0, 132, 71, 66.0, 35.5], [1693, 0, 132, 73, 66.0, 36.5], [1827, 0, 132, 82, 66.0, 41.0]], "gnd": [[1961, 0, 130, 88, 65.0, 80.0], [2093, 0, 148, 94, 74.0, 86.0], [2243, 0, 150, 96, 75.0, 88.0], [2395, 0, 137, 96, 68.5, 88.0], [2534, 0, 144, 96, 72.0, 88.0], [2680, 0, 150, 122, 75.0, 114.0]]}};
function pick(){const A=window.AVD||{},C=[['สตอ','🍓','#ff7eb0','#c2487f'],['ฟ้า','💙','#5b8cff','#2f55b8']];
const R=document.createElement('div');R.style.cssText='position:fixed;inset:0;z-index:35;background:linear-gradient(135deg,#e1ebff,#e7d8fb);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:20px;box-sizing:border-box;font-family:Sarabun,Mali,system-ui,sans-serif;color:#4a3d7a;touch-action:none';
R.innerHTML='<h2 style="margin:0;font-size:26px">เลือกตัวละคร</h2><div style="display:flex;gap:14px"></div><div style="font-size:14px;opacity:.7">แตะที่ตัวละครเพื่อเริ่มผจญภัย</div>';
C.forEach(([n,e,c1,c2])=>{const b=document.createElement('div');b.style.cssText='width:min(42vw,170px);padding:8px 8px 12px;background:#fff;border-radius:24px;border:3px solid '+c1+';box-shadow:0 5px 0 '+c2+';text-align:center;cursor:pointer;user-select:none';
b.innerHTML='<img src="'+PORT[n]+'" style="width:100%;aspect-ratio:258/410;object-fit:cover;display:block;border-radius:16px;background:#0a1020"><div style="margin-top:8px;font-weight:700;font-size:18px;color:'+c1+'">'+n+' '+e+'</div>';
b.onclick=()=>{CH={src:A[n]?A[n][1]:'',c1,c2,n};R.remove();window.__guide('coin',()=>coin())};R.children[1].appendChild(b)});
R.addEventListener('touchstart',e=>e.stopPropagation(),{passive:true});document.body.appendChild(R)}
const SPB=new Image();SPB.src="assets/image_18.webp";const SP2=[[0, 0, 51, 85, 23.9, 82.2], [53, 0, 50, 86, 24.1, 82.8], [105, 0, 51, 87, 23.1, 83.4], [158, 0, 70, 71, 41.9, 68.4], [230, 0, 76, 75, 42.6, 72.0], [308, 0, 85, 81, 42.3, 78.6], [395, 0, 103, 78, 48.5, 75.6], [500, 0, 94, 81, 49.2, 78.0], [596, 0, 70, 81, 41.4, 78.6], [668, 0, 103, 85, 60.2, 81.6], [773, 0, 66, 78, 35.6, 69.0], [841, 0, 108, 72, 65.1, 64.2], [951, 0, 130, 74, 79.5, 66.0], [1083, 0, 171, 76, 85.9, 73.8], [0, 89, 60, 58, 33.8, 55.8], [62, 89, 70, 71, 36.7, 68.4], [134, 89, 72, 82, 40.6, 79.2], [208, 89, 75, 83, 46.3, 80.4], [285, 89, 87, 84, 49.4, 81.0], [374, 89, 67, 63, 37.3, 59.4], [443, 89, 81, 84, 50.0, 79.8], [526, 89, 61, 79, 27.8, 73.8], [589, 89, 47, 81, 26.1, 76.8], [638, 89, 70, 108, 39.0, 105.0], [710, 89, 85, 66, 43.4, 63.0], [797, 89, 100, 74, 51.6, 70.2], [899, 89, 124, 86, 61.2, 82.2], [1025, 89, 178, 110, 85.8, 104.4], [1205, 89, 61, 85, 28.8, 81.6], [0, 201, 133, 105, 66.6, 102.6], [135, 201, 139, 109, 68.2, 105.6], [276, 201, 166, 100, 97.0, 96.6], [444, 201, 162, 100, 91.1, 96.0], [608, 201, 172, 111, 83.1, 104.4], [782, 201, 59, 78, 27.1, 73.8], [843, 201, 55, 75, 27.6, 71.4], [900, 201, 60, 78, 30.3, 73.8], [962, 201, 91, 59, 40.4, 54.6], [1055, 201, 106, 33, 48.8, 31.2], [1163, 201, 100, 36, 53.9, 33.0], [0, 314, 66, 58, 36.6, 56.4], [68, 314, 64, 61, 35.4, 58.8], [134, 314, 57, 77, 27.7, 73.2], [193, 314, 60, 78, 28.4, 74.4]],KB2=0.796,ART="assets/image_19.webp";let gk=0;const GIRL="assets/image_20.webp";
// audio
let ac;function beep(vol){if(!ac)return;const o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=720;g.gain.setValueAtTime(vol,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.18);g.connect(ac.destination);o.connect(g);o.start();o.stop(ac.currentTime+.2)}
const scare=new Audio(SND);scare.volume=1;
function start(){document.getElementById('menu').style.display='none';ac=ac||new (window.AudioContext||window.webkitAudioContext)();ac.resume();
scare.muted=true;scare.play().then(()=>{scare.pause();scare.currentTime=0;scare.muted=false}).catch(()=>{scare.muted=false});
p.copy(ctr(sx,sy));{const pth=bfs([sx,sy],[ec,er]),gi=pth[Math.min(7,pth.length-1)]||[ec,er];ghost.copy(ctr(...gi))}hasKey=!!gk;key.visible=!gk;walkT=0;GCS.forEach(c=>c.m.visible=!c.got);document.body.classList.add('gon');window.__tip&&window.__tip();yaw=-Math.PI/2;pitch=0;gpath=[];t0=performance.now();st='play';setHud();
if(!touch)rd.domElement.requestPointerLock&&rd.domElement.requestPointerLock()}
const touch='ontouchstart'in window&&matchMedia('(pointer:coarse)').matches;if(touch)document.getElementById('js').style.display='block';
let died=false;const EM=['เกิดข้อผิดพลาดร้ายแรง','Error 0xDEAD: ไฟล์ผีเสียหาย','มีบางอย่างอยู่ข้างหลังคุณ','ERROR: ไม่สามารถหนีได้','Fatal exception 666','ระบบไม่ตอบสนอง','มันเห็นคุณแล้ว…'];
function flood(){const ws=[];for(let i=0;i<50;i++)setTimeout(()=>{const w=document.createElement('div');w.className='w';w.style.left=Math.random()*Math.max(10,innerWidth-220)+'px';w.style.top=Math.random()*Math.max(10,innerHeight-110)+'px';w.innerHTML='<b><span>Error</span><span>✕</span></b><p>⚠️ '+EM[i%EM.length]+'</p><i>OK</i>';w.onclick=()=>w.remove();document.body.appendChild(w);ws.push(w)},i*50);setTimeout(()=>ws.forEach(w=>w.remove()),4800)}
let zc=0;function openMsg(w,msg){const mo=document.createElement('div');mo.className='mo';mo.innerHTML='<div class="w"><b><span>Error</span><span>✕</span></b><p>⚠️ '+msg+'</p><i>ปิด</i></div>';mo.addEventListener('touchstart',e=>e.stopPropagation(),{passive:true});const close=()=>{mo.remove();w.remove()};mo.querySelector('i').onclick=close;mo.querySelector('b span:last-child').onclick=close;document.body.appendChild(mo)}
function flood2(){document.exitPointerLock&&document.exitPointerLock();for(let i=0;i<50;i++)setTimeout(()=>{const msg=EM[i%EM.length];const w=document.createElement('div');w.className='w';w.style.left=Math.random()*Math.max(10,innerWidth-220)+'px';w.style.top=Math.random()*Math.max(10,innerHeight-120)+'px';w.style.zIndex=20+(zc++);w.innerHTML='<b><span>Error</span><span>✕</span></b><p>⚠️ '+msg+'</p><i>OK</i>';let sx=null,sy,ox,oy,moved=false;w.addEventListener('touchstart',e=>e.stopPropagation(),{passive:true});w.onpointerdown=e=>{w.setPointerCapture(e.pointerId);sx=e.clientX;sy=e.clientY;ox=w.offsetLeft;oy=w.offsetTop;moved=false;w.style.zIndex=20+(zc++)};w.onpointermove=e=>{if(sx===null)return;const dx=e.clientX-sx,dy=e.clientY-sy;if(Math.abs(dx)+Math.abs(dy)>6)moved=true;if(moved){w.style.left=ox+dx+'px';w.style.top=oy+dy+'px'}};w.onpointerup=()=>{if(sx!==null&&!moved)openMsg(w,msg);sx=null};document.body.appendChild(w)},i*450)}
document.getElementById('go').onclick=()=>{start()};
addEventListener('keydown',e=>keys[e.code]=1);addEventListener('keyup',e=>keys[e.code]=0);
addEventListener('mousemove',e=>{if(document.pointerLockElement){yaw-=e.movementX*.0025;pitch=Math.max(-1.2,Math.min(1.2,pitch-e.movementY*.0025))}});
rd.domElement.addEventListener('click',()=>{if(st=='play'&&!touch&&!document.querySelector('.w'))rd.domElement.requestPointerLock()});
const mv={x:0,y:0};let tj=null,tl=null;const jk=document.getElementById('jk');
addEventListener('touchstart',e=>{for(const t of e.changedTouches){if(t.clientX<innerWidth/2&&tj===null)tj={id:t.identifier,x:t.clientX,y:t.clientY};else if(tl===null)tl={id:t.identifier,x:t.clientX,y:t.clientY}}},{passive:true});
addEventListener('touchmove',e=>{for(const t of e.changedTouches){if(tj&&t.identifier==tj.id){let dx=(t.clientX-tj.x)/50,dy=(t.clientY-tj.y)/50;const l=Math.hypot(dx,dy);if(l>1){dx/=l;dy/=l}mv.x=dx;mv.y=dy;jk.style.transform=`translate(${dx*30}px,${dy*30}px)`}
else if(tl&&t.identifier==tl.id){yaw-=(t.clientX-tl.x)*.006;pitch=Math.max(-1.2,Math.min(1.2,pitch-(t.clientY-tl.y)*.006));tl.x=t.clientX;tl.y=t.clientY}}},{passive:true});
addEventListener('touchend',e=>{for(const t of e.changedTouches){if(tj&&t.identifier==tj.id){tj=null;mv.x=mv.y=0;jk.style.transform=''}if(tl&&t.identifier==tl.id)tl=null}},{passive:true});
function blocked(x,z,r){for(const[dx,dz]of[[r,r],[-r,r],[r,-r],[-r,-r]])if(wall(Math.floor((x+dx)/S),Math.floor((z+dz)/S)))return true;return false}
function bfs(from,to){const k=(c,r)=>r*N+c,q=[from],prev={[k(...from)]:null};while(q.length){const cur=q.shift();if(cur[0]==to[0]&&cur[1]==to[1])break;for(const[dc,dr]of[[1,0],[-1,0],[0,1],[0,-1]]){const c=cur[0]+dc,r=cur[1]+dr;if(wall(c,r)||(k(c,r)in prev))continue;prev[k(c,r)]=cur;q.push([c,r])}}
const path=[];let c=to;while(c&&(c[0]!=from[0]||c[1]!=from[1])){path.unshift(c);c=prev[k(...c)]}return path}
const cell=v=>[Math.floor(v.x/S),Math.floor(v.z/S)];
function caught(){st='dead';died=true;document.exitPointerLock&&document.exitPointerLock();const j=document.getElementById('js2');j.style.display='flex';scare.currentTime=0;scare.play();
const rr=document.getElementById('red');rr.style.opacity=.6;
setTimeout(()=>{j.style.display='none';rr.style.opacity=0},700);setTimeout(()=>{window.showBook(()=>window.openGacha(()=>start()))},1800)}
function win(){st='win';document.exitPointerLock&&document.exitPointerLock();const m=document.getElementById('menu');m.querySelector('h1').textContent='หนีออกมาได้แล้ว!';m.querySelector('h1').style.color='#6fbf73';m.querySelector('p').innerHTML='คุณรอดจากบ้านร้างได้ 🎉';document.getElementById('go').textContent='เล่นอีกครั้ง';m.style.display='flex'}
let last=performance.now(),nb=0,fk=0;
let walkT=0;
function loop(now){requestAnimationFrame(loop);const dt=Math.min((now-last)/1000,.05);last=now;
if(st=='play'){
let fx=(keys.KeyD?1:0)-(keys.KeyA?1:0)+mv.x,fz=(keys.KeyS?1:0)-(keys.KeyW?1:0)+mv.y;const l=Math.hypot(fx,fz);if(l>1){fx/=l;fz/=l}
const sp=3.4*dt,cy=Math.cos(yaw),sy=Math.sin(yaw);const dx=(fx*cy+fz*sy)*sp,dz=(-fx*sy+fz*cy)*sp;
if(!blocked(p.x+dx,p.z,.4))p.x+=dx;if(!blocked(p.x,p.z+dz,.4))p.z+=dz;
cam.position.set(p.x,1.6+Math.sin(now/180)*(l>0?.04:0),p.z);cam.rotation.set(pitch,yaw,0);
key.rotation.y+=dt*2;
if(!hasKey&&p.distanceTo(key.position)<1.2){hasKey=true;key.visible=false;setHud()}
for(const c of GCS)if(!c.got){c.m.rotation.y+=dt*3;if(p.distanceTo(c.m.position)<1.1){c.got=true;c.m.visible=false;window.GCOINS=(window.GCOINS|0)+1;try{beep(.5)}catch(e){}setHud()}}
if(hasKey&&p.distanceTo(door.position)<1.6)return win();
// ghost: appears after 20 seconds of walking
if(l>0)walkT+=dt;
if(walkT>=20){ghost.x=p.x+Math.sin(yaw)*.9;ghost.z=p.z+Math.cos(yaw)*.9;return caught()}
const dist=Math.max(.5,18*(1-walkT/20));
if(walkT>6){nb-=dt;if(nb<=0){beep(Math.min(.9,.2+walkT/20*.7));nb=Math.max(.18,1.2-walkT/20)}}
fk-=dt;if(fk<=0){fo.intensity=Math.random()<.12?.3:1.6;fk=.05+Math.random()*.4}
document.getElementById('red').style.opacity=walkT>12?Math.min(.4,(walkT-12)/8*.4):0;
}
if(document.body.classList.contains('gon')&&!window.__gzOpen)rd.render(sc,cam)}
(function(){if(touch)return;const b=document.createElement('div');b.textContent='⛶';b.title='เต็มจอ (F)';b.style.cssText='position:fixed;top:12px;right:128px;z-index:60;width:38px;height:38px;border-radius:10px;background:rgba(0,0,0,.45);color:#fff;font:22px/38px sans-serif;text-align:center;cursor:pointer;user-select:none';const tg=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen()};b.onclick=tg;addEventListener('keydown',e=>{if(e.code=='KeyF')tg()});document.body.appendChild(b)})();
cam.position.set(p.x,1.6,p.z);requestAnimationFrame(loop);
