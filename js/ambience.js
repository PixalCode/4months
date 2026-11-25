
(function(){
const ACX=window.AudioContext||window.webkitAudioContext;if(!ACX)return;
const mtof=m=>440*Math.pow(2,(m-69)/12),rnd=Math.random,pk=a=>a[(rnd()*a.length)|0];
function mk(ctx,dest,kind){
  const out=ctx.createGain();out.gain.value=0;out.connect(dest);
  const send=ctx.createGain(),dl=ctx.createDelay(1.5),fb=ctx.createGain(),fl=ctx.createBiquadFilter();
  send.gain.value=1;dl.delayTime.value=kind==='gacha'?.27:.38;fb.gain.value=.35;fl.type='lowpass';fl.frequency.value=2600;
  send.connect(dl);dl.connect(fl);fl.connect(fb);fb.connect(dl);fl.connect(out);
  const nodes=[],nb=ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate),nd=nb.getChannelData(0);
  for(let i=0;i<nd.length;i++)nd[i]=rnd()*2-1;
  const tone=(f,t,d,o)=>{o=o||{};const os=ctx.createOscillator(),g=ctx.createGain(),v=o.v||.1,a=o.a||.005;
    os.type=o.type||'sine';os.frequency.setValueAtTime(f,t);if(o.to)os.frequency.exponentialRampToValueAtTime(o.to,t+d);
    g.gain.value=.0001;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v,t+a);g.gain.exponentialRampToValueAtTime(.0001,t+d);
    let n=os;if(o.lp){const l=ctx.createBiquadFilter();l.type='lowpass';l.frequency.value=o.lp;os.connect(l);n=l}
    n.connect(g);g.connect(out);if(o.fx){const s=ctx.createGain();s.gain.value=o.fx;g.connect(s);s.connect(send)}
    os.start(t);os.stop(t+d+.05)};
  const nz=(t,d,o)=>{o=o||{};const s=ctx.createBufferSource(),f=ctx.createBiquadFilter(),g=ctx.createGain(),v=o.v||.05,a=o.a||.003;
    s.buffer=nb;s.loop=true;f.type=o.ft||'highpass';f.frequency.setValueAtTime(o.f||3000,t);if(o.f2)f.frequency.exponentialRampToValueAtTime(o.f2,t+d);f.Q.value=o.q||.7;
    g.gain.value=.0001;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v,t+a);g.gain.exponentialRampToValueAtTime(.0001,t+d);
    s.connect(f);f.connect(g);g.connect(out);s.start(t,rnd()*1.5);s.stop(t+d+.05)};
  const bell=(m,t,v,fx)=>{const f=mtof(m);tone(f,t,3.2,{v:v,a:.01,fx:fx||.9});tone(f*2.76,t,1.5,{v:v*.3,a:.01,fx:.6})};
  const drone=(f,v,c,hz)=>{const g=ctx.createGain(),l=ctx.createBiquadFilter(),lf=ctx.createOscillator(),lg=ctx.createGain();
    g.gain.value=v;l.type='lowpass';l.frequency.value=c;l.Q.value=3;
    [f,f*1.006].forEach(x=>{const o=ctx.createOscillator();o.type='sawtooth';o.frequency.value=x;o.connect(l);o.start();nodes.push(o)});
    lf.frequency.value=hz;lg.gain.value=c*.5;lf.connect(lg);lg.connect(l.frequency);lf.start();nodes.push(lf);l.connect(g);g.connect(out)};
  const thump=(t,v)=>tone(75,t,.22,{to:38,v:v,a:.004});
  let spb=1,step=()=>{};
  if(kind==='puz'){
    spb=1;drone(55,.14,260,.07);
    step=(t,i)=>{
      nz(t,.03,{ft:'bandpass',f:i%4?4500:2600,v:i%4?.04:.075,q:5});
      if(i%4===0&&rnd()<.75){const m=pk([69,70,72,74,76,77]);bell(m,t,.06);if(rnd()<.25)bell(m+6,t+.5,.04)}
      if(rnd()<.07)nz(t,3,{ft:'bandpass',f:300,f2:800,q:1.5,v:.05,a:1.2});
    };
  }else if(kind==='coin'){
    spb=60/126/2;drone(55,.06,200,.05);
    const bass=[45,0,45,0,48,0,45,0,52,0,51,0,48,0,46,0];
    step=(t,i)=>{
      const m=bass[i%16];if(m)tone(mtof(m),t,.2,{type:'triangle',v:.16,lp:700,a:.004});
      if(i%4===0)tone(120,t,.18,{to:45,v:.22,a:.003});
      nz(t,.04,{f:7000,v:i%2?.03:.015});
      if(i%8===4)nz(t,.12,{ft:'bandpass',f:1800,q:1,v:.05});
      if(i%4===2&&rnd()<.4)bell(pk([76,77,80,81,83,84]),t,.04,.8);
    };
  }else if(kind==='ghost'){
    spb=.43;drone(55,.16,170,.04);
    step=(t,i)=>{
      if(i%2===0){thump(t,.4);thump(t+.26,.25)}
      if(i%8===0)nz(t,3.4,{ft:'bandpass',f:350,f2:700,q:1.6,v:.035,a:1.4});
      if(i%16===0&&rnd()<.5){tone(880,t,3.5,{a:1.6,v:.025,fx:.8});tone(932,t,3.5,{a:1.6,v:.025,fx:.8})}
      if(i%4===2&&rnd()<.12)bell(pk([52,53,55,58]),t,.05);
      if(rnd()<.04)nz(t,.35,{ft:'bandpass',f:1200,f2:2400,q:6,v:.03});
    };
  }else{
    const g=kind==='gacha',P=g?[[48,[60,64,67,72]],[43,[55,59,62,67]],[45,[57,60,64,67]],[41,[53,57,60,65]]]:[[48,[60,64,67,71]],[45,[57,60,64,67]],[41,[53,57,60,64]],[43,[55,59,62,64]]],
      pent=[72,74,76,79,81,84,86],ar=[0,1,2,3,2,1,2,1];let mi=2;
    spb=g?60/90/2:60/72/2;
    step=(t,i)=>{
      const b=P[(i>>3)&3],p=i&7;
      if(p===0)b[1].forEach(n=>tone(mtof(n),t,spb*8.2,{type:'triangle',v:g?.026:.03,a:.7,lp:1100}));
      if(p===0)tone(mtof(b[0]),t,1.2,{v:.13,a:.01,lp:500});
      if(p===4||(g&&p===3))tone(mtof(b[0]+(p===4?7:0)),t,.9,{v:.08,a:.01,lp:500});
      const n=b[1][ar[p]]+12;tone(mtof(n),t,1.1,{v:g?.04:.05,a:.004,fx:g?.35:.5});tone(mtof(n)*2,t,.5,{v:.012,a:.004});
      if(g){if(p%2)nz(t,.05,{f:8000,v:.012});
        if(rnd()<.55){mi=Math.max(0,Math.min(pent.length-1,mi+pk([-2,-1,0,1,2])));tone(mtof(pent[mi]),t,.5,{type:'triangle',v:.045,a:.004,fx:.35});}
        if(p===6&&rnd()<.5)tone(mtof(pk([93,96,98])),t,1.4,{v:.025,a:.004,fx:.9})}
      else if((p===0||p===3||p===6)&&rnd()<.5){mi=Math.max(0,Math.min(pent.length-1,mi+pk([-2,-1,1,2])));bell(pent[mi],t,.06,.8)}
    };
  }
  const lvl={puz:.55,coin:1,ghost:.5,book:1.2,gacha:.85}[kind]||1;
  return{kind,out,spb,step,lvl,stop(){const n=ctx.currentTime;out.gain.cancelScheduledValues(n);out.gain.setTargetAtTime(0,n,.4);
    setTimeout(()=>{nodes.forEach(x=>{try{x.stop()}catch(e){}});try{out.disconnect()}catch(e){}},2600)}};
}
let ctx=null,master=null,cur=null,want=null,muted=false,coinOn=false;
try{muted=localStorage.getItem('amb-mute')==='1'}catch(e){}
function ensure(){if(ctx)return true;try{ctx=new ACX()}catch(e){return false}
  master=ctx.createGain();master.gain.value=muted?0:.8;const cp=ctx.createDynamicsCompressor();master.connect(cp);cp.connect(ctx.destination);return true}
function apply(){if(!ctx||ctx.state!=='running')return;if(cur&&cur.kind===want)return;
  if(cur)cur.stop();cur=null;if(!want)return;
  const s=mk(ctx,master,want);s.out.gain.setTargetAtTime(s.lvl,ctx.currentTime,.8);s.next=ctx.currentTime+.1;s.i=0;cur=s}
setInterval(()=>{if(!cur||!ctx)return;const n=ctx.currentTime;if(cur.next<n-.2)cur.next=n+.05;
  while(cur.next<n+.35){cur.step(cur.next,cur.i++);cur.next+=cur.spb}},60);
function unlock(){if(!ensure())return;if(ctx.state==='running'){apply();return}ctx.resume().then(apply).catch(()=>{})}
['pointerdown','touchend','click','keydown'].forEach(n=>addEventListener(n,unlock,true));
document.addEventListener('visibilitychange',()=>{if(!ctx)return;if(document.hidden)ctx.suspend();else ctx.resume().then(apply).catch(()=>{})});
const oc=window.coin;if(typeof oc==='function')window.coin=function(){coinOn=true;return oc.apply(this,arguments)};
const og=window.__guide;if(typeof og==='function')window.__guide=function(k){if(k==='ghost')coinOn=false;return og.apply(this,arguments)};
function detect(){
  const gz=document.getElementById('gzhost');if(gz&&gz.style.display==='block')return'gacha';
  if(document.getElementById('bkov'))return'book';
  try{if(typeof st!=='undefined'&&st==='play'&&document.body.classList.contains('gon'))return'ghost'}catch(e){}
  if(document.getElementById('pz'))return'puz';
  if(coinOn)return'coin';return null}
let last=null;
setInterval(()=>{const s=detect();if(s&&s!==last){last=s;want=s;apply()}},250);
const mb=document.createElement('button');mb.type='button';mb.setAttribute('aria-label','เปิด/ปิดเสียงเพลง');
const sy=()=>{mb.textContent=muted?'🔇':'🔊'};sy();
mb.style.cssText='position:fixed;z-index:2147483640;top:calc(52px + env(safe-area-inset-top,0px));left:10px;width:38px;height:38px;margin:0;padding:0;border-radius:50%;border:2px solid #2a2622;background:rgba(255,248,234,.88);font-size:18px;line-height:1;cursor:pointer;box-shadow:0 2px 0 #2a2622';
mb.onclick=e=>{e.stopPropagation();muted=!muted;sy();try{localStorage.setItem('amb-mute',muted?'1':'0')}catch(x){}
  if(ctx&&master)master.gain.setTargetAtTime(muted?0:.8,ctx.currentTime,.15)};
['touchstart','pointerdown'].forEach(n=>mb.addEventListener(n,e=>e.stopPropagation(),{passive:true}));
document.body.appendChild(mb);
window.AMB={scene:()=>cur&&cur.kind};
})();
