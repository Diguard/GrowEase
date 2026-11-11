(() => {
  const burgerBtn = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-menu]');

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      if (!href || href === '#' || href.length <= 1) return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const isMenuOpen =
          mobileMenu && mobileMenu.classList.contains('is-open');
        if (isMenuOpen) {
          mobileMenu.classList.remove('is-open');
          burgerBtn.classList.remove('is-open');
          burgerBtn.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('no-scroll');
        }

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        history.pushState(null, null, href);
      }
    });
  });
})();
