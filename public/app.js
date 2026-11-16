const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
function closeMenu(){menu?.setAttribute('aria-expanded','false');nav?.classList.remove('is-open');}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
matchMedia('(min-width:761px)').addEventListener('change',closeMenu);
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='All Work'&&card.dataset.category!==button.dataset.filter;});const empty=document.querySelector('.gallery-empty');if(empty)empty.hidden=[...document.querySelectorAll('[data-category]')].some(card=>!card.hidden);document.querySelector('#filter-status').textContent=`Showing ${button.dataset.filter.toLowerCase()}.`;}));
const form=document.querySelector('#quote-form');
if(form){
 const select=form.elements.service;const preselect=new URLSearchParams(location.search).get('service');if([...select.options].some(o=>o.value===preselect))select.value=preselect;
 const required=['name','email','phone','location','service','details'];
 const messages={name:'Please enter your full name.',email:'Please enter a valid email address.',phone:'Please enter a valid phone number.',location:'Please enter your suburb or location.',service:'Please select a service.',details:'Please describe your project.'};
 const status=document.querySelector('#form-status');let prepared='';
 function validate(id){const field=form.elements[id];let valid=field.value.trim().length>0&&field.checkValidity();if(id==='phone')valid=valid&&/^[+\d\s().-]{6,40}$/.test(field.value)&&field.value.replace(/\D/g,'').length>=6;field.setAttribute('aria-invalid',String(!valid));document.getElementById(`${id}-error`).textContent=valid?'':messages[id];return valid;}
 required.forEach(id=>form.elements[id].addEventListener('input',()=>{if(form.elements[id].getAttribute('aria-invalid')==='true')validate(id);}));
 form.addEventListener('submit',event=>{event.preventDefault();if(form.elements.website.value)return;const invalid=required.filter(id=>!validate(id));if(invalid.length){status.textContent='Please check the highlighted fields.';form.elements[invalid[0]].focus();return;}
 prepared=`Painting & decorating enquiry\n\nFull name: ${form.elements.name.value.trim()}\nEmail: ${form.elements.email.value.trim()}\nPhone: ${form.elements.phone.value.trim()}\nLocation: ${form.elements.location.value.trim()}\nService: ${select.selectedOptions[0].text}\nPreferred timeframe: ${form.elements.timeframe.value.trim()||'Not specified'}\n\nProject details:\n${form.elements.details.value.trim()}`;
 document.querySelector('#enquiry-copy').value=prepared;document.querySelector('#email-fallback').hidden=false;
 status.textContent='Your enquiry is prepared, but has not been sent. Review and send it in your email app, or use the copy option below.';
 const recipient=document.querySelector('.contact-details a[href^="mailto:"]').href;
 const mailto=`${recipient}?subject=${encodeURIComponent('Quote enquiry — '+select.selectedOptions[0].text)}&body=${encodeURIComponent(prepared)}`;
 if(mailto.length>7000){status.textContent='Your enquiry is prepared, but has not been sent. Please copy it below and paste it into an email.';}else{location.href=mailto;}
 });
 document.querySelector('#copy-enquiry').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(prepared);status.textContent='Enquiry copied. Paste it into an email and send it to the address above.';}catch{const copy=document.querySelector('#enquiry-copy');copy.hidden=false;copy.focus();copy.select();status.textContent='Select and copy the enquiry below, then paste it into your email app.';}});
}

// Mobile-only video: desktop/tablet never request the video file.
const film=document.querySelector('#hero-video');
if(film){
 const mobile=matchMedia('(max-width: 767px)');
 const startFilm=()=>{film.muted=true;film.play().catch(()=>{});};
 const syncMedia=()=>{
  const source=mobile.matches?film.dataset.mobileSrc:film.dataset.src;
  if(film.getAttribute('src')!==source)film.src=source;
  startFilm();
 };
 film.addEventListener('canplay',startFilm);
 film.addEventListener('pause',()=>{if(!document.hidden)startFilm();});
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)startFilm();});
 document.addEventListener('pointerdown',startFilm,{once:true,passive:true});
 document.addEventListener('keydown',startFilm,{once:true});
 mobile.addEventListener('change',syncMedia);
 syncMedia();
}

// Home header changes from transparent over the film to a solid fixed bar.
const homeHeader=document.querySelector('.home-page .header');
if(homeHeader){
 let previousState;
 const syncHeader=()=>{
  const scrolled=window.scrollY>40;
  if(scrolled===previousState)return;
  previousState=scrolled;
  homeHeader.classList.toggle('is-scrolled',scrolled);
 };
 syncHeader();
 window.addEventListener('scroll',syncHeader,{passive:true});
 window.addEventListener('pageshow',syncHeader);
}
