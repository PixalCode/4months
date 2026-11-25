(function(){const de=document.documentElement,req=de.requestFullscreen||de.webkitRequestFullscreen;if(!req)return;
const isFS=()=>document.fullscreenElement||document.webkitFullscreenElement;
const go=()=>{if(isFS())return;try{const r=req.call(de);if(r&&r.catch)r.catch(()=>{})}catch(e){}};
['pointerup','touchend','click','keydown'].forEach(n=>addEventListener(n,go,true));
})();
