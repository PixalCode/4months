(function(){
const CODE=CONFIG.puzzle.code;
const pz=document.createElement('div');pz.id='pz';
pz.style.cssText='position:fixed;inset:0;z-index:200;background:radial-gradient(ellipse at 50% 30%,#2a1d4d 0%,#0b0818 75%);font-family:Sarabun,system-ui,sans-serif;color:#efe8ff;touch-action:none;user-select:none;-webkit-user-select:none;overflow:hidden;transition:opacity .8s';
pz.innerHTML='<div style="position:absolute;top:'+(innerWidth<520?58:14)+'px;left:0;right:0;text-align:center;z-index:5;pointer-events:none"><div style="font-size:21px;font-weight:700;letter-spacing:.06em;text-shadow:0 0 14px #8b6cff">ตามหารหัสหน้าบ้านร้าง</div><div id="gh" style="font-size:14px;color:#b9a9e8;margin-top:6px">ลากนิ้วส่องไฟฉายหาตัวเลข 4 ตัว แล้วแตะเก็บ</div><div id="gc" style="font-size:26px;margin-top:6px;letter-spacing:.3em;font-weight:700"></div></div><div id="gw" style="position:absolute;inset:0"></div><div id="gd" style="position:absolute;inset:0;pointer-events:none;z-index:4"></div><div id="gp" style="position:absolute;inset:0;z-index:6;display:none;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:rgba(8,4,20,.93)"></div><div id="gk" style="position:absolute;bottom:14px;left:0;right:0;text-align:center;font-size:12px;color:#7d70a8;cursor:pointer;z-index:7">ข้ามเกม</div>';
document.body.appendChild(pz);
const gw=pz.querySelector('#gw'),gd=pz.querySelector('#gd'),gc=pz.querySelector('#gc'),gh=pz.querySelector('#gh'),gp=pz.querySelector('#gp');
const R=Math.round(Math.max(110,Math.min(160,Math.min(innerWidth,innerHeight)*.26)));let lx=innerWidth/2,ly=innerHeight/2,got=0,done=false,slots=['_','_','_','_'];
let sel=-1,pzLeft=3,busyF=0;
function show(){gc.innerHTML='';slots.forEach((d,i)=>{const s=document.createElement('span');s.textContent=d;s.style.cssText='display:inline-block;width:44px;height:52px;line-height:52px;margin:0 4px;border:2px solid '+(i===sel?'#ffd84d':'rgba(190,170,255,.4)')+';border-radius:10px;background:rgba(255,255,255,.08)';s.addEventListener('pointerdown',e=>e.stopPropagation());gc.appendChild(s)})}
const HINT=TEXTS.puzzle.hint;
function fail(){busyF=1;gh.textContent='เลขผิด! ต้องเริ่มหาใหม่…';gh.style.color='#ff6b6b';gc.style.color='#ff6b6b';tone(160,.5);setTimeout(()=>{got=0;slots=['_','_','_','_'];sel=-1;gh.style.color='';gc.style.color='';gh.textContent=HINT;show();build();busyF=0},1300)}
function check(){if(got<4||done)return;if(slots.join('')===CODE)win();else{gh.textContent='เรียงไม่ถูก! ต้องเริ่มหาใหม่…';gh.style.color='#ff6b6b';gc.style.color='#ff6b6b';tone(160,.5);setTimeout(()=>{got=0;slots=['_','_','_','_'];sel=-1;gh.style.color='';gc.style.color='';gh.textContent=HINT;show();build()},1300)}}
gc.style.pointerEvents='auto';gc.style.letterSpacing='0';show();
function dark(){gd.style.background='radial-gradient(circle at '+lx+'px '+ly+'px,rgba(255,240,190,.17) 0,rgba(255,240,190,.08) '+R*.5+'px,rgba(255,240,190,0) '+R+'px),radial-gradient(circle at '+lx+'px '+ly+'px,rgba(3,1,10,0) '+R*.3+'px,rgba(3,1,10,.5) '+R*.7+'px,rgba(3,1,10,.93) '+R*1.15+'px,rgba(3,1,10,.97) '+R*1.45+'px)'}dark();
const decoy=['🕸️','🪑','🕯️','🦇','🕷️','🖼️','💀','🪞','📜','🥀'];
const pts=[];
function rnd(){for(let sp=70;sp>=36;sp-=6)for(let t=0;t<150;t++){const x=8+Math.random()*84,y=(innerWidth<520?27:22)+Math.random()*(innerWidth<520?61:66);if(pts.every(p=>Math.hypot((p[0]-x)*innerWidth/100,(p[1]-y)*innerHeight/100)>sp)){pts.push([x,y]);return[x,y]}}const q=[8+Math.random()*84,22+Math.random()*66];pts.push(q);return q}
function put(e,x,y){e.style.cssText+=';position:absolute;left:'+x+'%;top:'+y+'%;transform:translate(-50%,-50%)';gw.appendChild(e)}
function build(){gw.innerHTML='';pts.length=0;
for(let i=pzLeft;i>0;i--){const e=document.createElement('div');e.textContent='🪙';e.style.cssText='font-size:30px;cursor:pointer;padding:8px;filter:drop-shadow(0 0 6px #ffcc33)';const[x,y]=rnd();put(e,x,y);e.addEventListener('pointerdown',ev=>{ev.stopPropagation();if(done||e.dataset.t)return;const r=e.getBoundingClientRect();if(Math.hypot(r.left+r.width/2-lx,r.top+r.height/2-ly)>R)return;e.dataset.t=1;pzLeft--;window.GCOINS=(window.GCOINS|0)+1;e.innerHTML='<b style="font-size:20px;color:#ffd84d">+1</b>';e.style.transition='transform .5s,opacity .5s';e.style.transform='translate(-50%,-50%) translateY(-34px)';e.style.opacity=0;e.style.pointerEvents='none';tone(1040,.15)})}
[...CODE.split(''),...'13456895'.split('')].forEach((d,i)=>{const e=document.createElement('div');e.innerHTML='<div style="font-size:40px;font-weight:700;color:#ffd84d;text-shadow:0 0 10px #ffb300">'+d+'</div>';e.style.cssText='cursor:pointer;padding:10px';const[x,y]=rnd();put(e,x,y);
 e.addEventListener('pointerdown',ev=>{ev.stopPropagation();if(done||e.dataset.t)return;const r=e.getBoundingClientRect();if(Math.hypot(r.left+r.width/2-lx,r.top+r.height/2-ly)>R)return;if(busyF)return;e.dataset.t=1;e.style.transition='transform .3s,opacity .3s';e.style.transform='translate(-50%,-50%) scale(1.8)';e.style.opacity=0;e.style.pointerEvents='none';const bad=d!==CODE[got];slots[got]=d;got++;show();if(bad)fail();else{tone(500+got*120,.25);check()}})});
decoy.forEach(d=>{const e=document.createElement('div');e.textContent=d;e.style.cssText='font-size:32px;opacity:.85;pointer-events:none';const[x,y]=rnd();put(e,x,y)});
}build();gh.textContent=HINT;
let AC=null;
function tone(f,d){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain();o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(.06,AC.currentTime);g.gain.exponentialRampToValueAtTime(.001,AC.currentTime+d);o.connect(g);g.connect(AC.destination);o.start();o.stop(AC.currentTime+d+.02)}catch(e){}}
function chime(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>tone(f,.4),i*120))}
function keypad(){
 gh.textContent='ได้ตัวเลขครบแล้ว ใส่รหัสเพื่อปลดล็อคประตู';
 let v='';
 gp.style.display='flex';
 gp.innerHTML='<div style="font-size:18px;color:#cfc3f5">ใส่รหัสปลดล็อค</div><div id="pd" style="font-size:36px;letter-spacing:.4em;font-weight:700;min-height:48px">&nbsp;</div><div id="pk" style="display:grid;grid-template-columns:repeat(3,70px);gap:10px"></div>';
 const pd=gp.querySelector('#pd'),pk=gp.querySelector('#pk');
 const upd=()=>{pd.textContent=v?v.split('').map(()=>'●').join(' '):'\u00a0'};
 ['1','2','3','4','5','6','7','8','9','C','0','⌫'].forEach(k=>{const b=document.createElement('button');b.textContent=k;b.style.cssText='height:60px;font:600 24px Sarabun,system-ui,sans-serif;color:#efe8ff;background:rgba(255,255,255,.1);border:1px solid rgba(190,170,255,.4);border-radius:12px';
  b.addEventListener('pointerdown',e=>{e.stopPropagation();if(done)return;tone(380,.08);
   if(k==='C')v='';else if(k==='⌫')v=v.slice(0,-1);else if(v.length<4)v+=k;
   upd();
   if(v.length===4){if(v===CODE)win();else{pd.style.color='#ff6b6b';pd.textContent='ผิด!';setTimeout(()=>{v='';pd.style.color='';upd()},700)}}});
  pk.appendChild(b)});
}
function open(){pz.style.opacity=0;pz.style.pointerEvents='none';setTimeout(()=>{pz.remove();try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();ac.resume();scare.muted=true;scare.play().then(()=>{scare.pause();scare.currentTime=0;scare.muted=false}).catch(()=>{scare.muted=false})}catch(e){}pick()},800)}
function win(){done=true;gh.textContent='ปลดล็อคแล้ว! ประตูกำลังเปิด…';gh.style.color='#9dffc4';gc.style.color='#9dffc4';chime();setTimeout(open,1200)}
function mv(e){lx=e.clientX;ly=e.clientY;dark()}
pz.addEventListener('pointermove',mv);pz.addEventListener('pointerdown',mv);
pz.querySelector('#gk').addEventListener('pointerdown',e=>{e.stopPropagation();if(!done){done=true;open()}});
window.__pz={solve(){win()}};
})();
