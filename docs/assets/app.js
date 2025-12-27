(() => {
  function wire(inputId, containerId){
    const q = document.getElementById(inputId);
    const box = document.getElementById(containerId);
    if(!q || !box) return;
    const items = box.querySelectorAll('[data-search]');
    function apply(){
      const needle = (q.value || '').trim().toLowerCase();
      let shown = 0;
      items.forEach(el => {
        const hay = (el.getAttribute('data-search') || '').toLowerCase();
        const ok = !needle || hay.includes(needle);
        el.style.display = ok ? '' : 'none';
        if(ok) shown++;
      });
      const counter = document.getElementById('counter');
      if(counter) counter.textContent = String(shown);
    }
    q.addEventListener('input', apply);
    apply();
  }

  function init(){
    wire('q', 'grid');     // prodotti
    wire('qc', 'cats');    // categorie (griglia)
    // categorie (albero)
    const qc = document.getElementById('qc');
    const tree = document.querySelector('.tree');
    if(qc && tree){
      const leaves = tree.querySelectorAll('[data-search]');
      function applyTree(){
        const needle = (qc.value || '').trim().toLowerCase();
        leaves.forEach(el => {
          const hay = (el.getAttribute('data-search') || '').toLowerCase();
          const ok = !needle || hay.includes(needle);
          el.style.display = ok ? '' : 'none';
        });
      }
      qc.addEventListener('input', applyTree);
      applyTree();
    }
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();