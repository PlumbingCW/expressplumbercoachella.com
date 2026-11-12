(function () {
  var d = document, root = d.documentElement;
  var drawer = d.getElementById('mobDrawer'), overlay = d.getElementById('mobOverlay');
  var toggle = d.querySelector('.nav-toggle'), closeBtn = d.querySelector('.md-close');
  function openMenu() {
    drawer.classList.add('open'); overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true'); root.style.overflow = 'hidden';
  }
  function closeMenu() {
    drawer.classList.remove('open'); overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false'); root.style.overflow = '';
  }
  if (toggle && drawer) {
    toggle.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    drawer.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 768) closeMenu(); });
  }
  d.querySelectorAll('.faq-q').forEach(function (btn) {
    var panel = d.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      panel.style.maxHeight = open ? '0px' : panel.scrollHeight + 'px';
    });
  });
  var fc = d.querySelector('.float-call'), ft = d.querySelector('.site-footer');
  if (fc && ft && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { fc.classList.toggle('hide', en[0].isIntersecting); }).observe(ft);
  }
})();
