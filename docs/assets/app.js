
function filterCards(){
  const q = (document.getElementById('q')?.value || '').toLowerCase();
  document.querySelectorAll('[data-name]').forEach(el=>{
    const t = (el.getAttribute('data-name')||'').toLowerCase();
    el.style.display = t.includes(q) ? '' : 'none';
  });
}
