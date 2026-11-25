
(function(){const p=document.createElement('div');p.id='gcp';
p.style.cssText='position:fixed;top:calc(12px + env(safe-area-inset-top,0px));right:max(12px,env(safe-area-inset-right,0px));z-index:2147483100;display:inline-flex;align-items:center;gap:6px;background:#fff8ea;color:#2a2622;border:3px solid #2a2622;border-radius:999px;padding:1px 12px;font:700 1.05rem/1.45 Mali,Sarabun,system-ui,sans-serif;box-shadow:0 3px 0 #2a2622;pointer-events:none';
p.innerHTML='🪙 <b>0</b>';document.body.appendChild(p);const b=p.querySelector('b');let last=-1;
setInterval(()=>{const n=(window.GCOINS|0)+(window.__rc|0);if(n!==last){last=n;b.textContent=n}p.style.display=window.__gzOpen?'none':'inline-flex'},200)})();
