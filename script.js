// terminal typing
const lines=[...document.querySelectorAll('#term p')];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
lines.forEach((p,i)=>reduce?p.classList.add('on'):setTimeout(()=>p.classList.add('on'),300+i*260));

// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// copy buttons
document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(b.dataset.copy);b.textContent='copiado ✓'}
  catch(e){b.textContent='selecione o texto'}
  setTimeout(()=>b.textContent='copiar',1800);
}));

// Botões com link ainda não preenchido (ex.: "LINK-DA-DEMO") ficam escondidos
document.querySelectorAll('[data-link]').forEach((a) => {
  if (/LINK-/.test(a.getAttribute('href'))) a.hidden = true;
});
