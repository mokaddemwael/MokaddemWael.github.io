const menu=document.querySelector('.menu');const nav=document.querySelector('nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));
let language='fr';const lang=document.querySelector('#lang');function setLanguage(next){language=next;document.documentElement.lang=next;document.querySelectorAll('[data-fr][data-en]').forEach(el=>el.textContent=el.dataset[next]);lang.textContent=next==='fr'?'EN':'FR';}lang.addEventListener('click',()=>setLanguage(language==='fr'?'en':'fr'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
