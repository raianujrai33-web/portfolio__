/* ===== Main — nav, theme toggle, hamburger, footer year ===== */
(function () {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const themeToggle = document.getElementById('themeToggle');
  const navLinks = document.querySelectorAll('.nav__link');

  /* ---------- Theme toggle ---------- */
  if (themeToggle && window.PortfolioTheme) {
    themeToggle.addEventListener('click', () => window.PortfolioTheme.toggle());
  }

  /* ---------- Hamburger menu ---------- */
  function closeMenu() {
    if (!navMenu || !hamburger) return;
    navMenu.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger && navMenu) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
    });
  }

  /* ---------- Navbar scroll shadow ---------- */
  if (navbar) {
    const onScroll = () => {
      navbar.style.boxShadow = window.scrollY > 20
        ? '0 8px 30px rgba(0,0,0,0.15)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  if (sections.length && navLinks.length) {
    const linkMap = new Map();
    navLinks.forEach(link => {
      const id = link.getAttribute('href')?.replace('#', '');
      if (id) linkMap.set(id, link);
    });

    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.style.color = '');
          const active = linkMap.get(entry.target.id);
          if (active) active.style.color = 'var(--text)';
        }
      });
    }, { threshold: 0.3, rootMargin: '-70px 0px -50% 0px' });

    sections.forEach(s => spyObserver.observe(s));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();