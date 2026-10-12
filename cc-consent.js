/* Lightweight self-hosted consent banner + Google Consent Mode v2 (default denied). SEC-06, 12 Oct 2026. */
(function(){
  var KEY='cc_consent_v1', WC_SRC='https://s.ksrndkehqnwntyxlhgto.com/174263.js';
  var CS=document.currentScript; var PRIV=(CS&&CS.getAttribute('data-privacy'))||'/privacy-policy/'; var HAS_WC=!!(CS&&CS.getAttribute('data-wc')==='1');
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){dataLayer.push(arguments);};
  gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
  function get(){try{return localStorage.getItem(KEY);}catch(e){return null;}}
  function set(v){try{localStorage.setItem(KEY,v);}catch(e){}}
  var wcLoaded=false;
  function loadWC(){if(wcLoaded||!HAS_WC)return;wcLoaded=true;var s=document.createElement('script');s.src=WC_SRC;s.async=true;document.head.appendChild(s);}
  function grant(){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});loadWC();}
  var c=get(); if(c==='granted'){grant();}
  function close(){var b=document.getElementById('cc-banner');if(b)b.parentNode.removeChild(b);}
  function choose(v){set(v);close();if(v==='granted'){grant();}else{gtag('consent','update',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});if(wcLoaded){location.reload();}}}
  function btn(t,v){var b=document.createElement('button');b.type='button';b.textContent=t;b.setAttribute('data-cc',v);
    b.style.cssText='flex:1 1 140px;min-height:44px;padding:10px 18px;font:600 15px/1.2 system-ui,sans-serif;border-radius:6px;cursor:pointer;border:2px solid #fff;background:#fff;color:#111';
    b.addEventListener('click',function(){choose(v);});return b;}
  function show(){if(document.getElementById('cc-banner'))return;
    var d=document.createElement('div');d.id='cc-banner';d.setAttribute('role','dialog');d.setAttribute('aria-live','polite');d.setAttribute('aria-label','Cookie choices');
    d.style.cssText='position:fixed;left:0;right:0;bottom:0;z-index:2147483000;background:#111827;color:#fff;padding:16px;box-shadow:0 -2px 12px rgba(0,0,0,.3);font:15px/1.5 system-ui,sans-serif';
    var w=document.createElement('div');w.style.cssText='max-width:960px;margin:0 auto;display:flex;flex-wrap:wrap;gap:12px;align-items:center';
    var p=document.createElement('p');p.style.cssText='flex:1 1 420px;margin:0';
    p.appendChild(document.createTextNode('We would like to use analytics and call-tracking cookies to see how the site is used and which adverts bring calls. They stay off unless you accept. '));
    var a=document.createElement('a');a.href=PRIV;a.textContent='Privacy and cookies';a.style.cssText='color:#fff;text-decoration:underline';p.appendChild(a);
    var g=document.createElement('div');g.style.cssText='display:flex;gap:10px;flex:1 1 300px';
    g.appendChild(btn('Reject','denied'));g.appendChild(btn('Accept','granted'));
    w.appendChild(p);w.appendChild(g);d.appendChild(w);document.body.appendChild(d);}
  function addLink(){var f=document.querySelector('footer');if(!f||document.getElementById('cc-settings'))return;
    var l=document.createElement('button');l.id='cc-settings';l.type='button';l.textContent='Cookie settings';
    l.style.cssText='background:none;border:0;padding:4px 0;color:inherit;text-decoration:underline;font:inherit;cursor:pointer';
    l.addEventListener('click',show);f.appendChild(l);}
  window.ccOpenSettings=show;
  function init(){addLink();if(!get())show();}
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
