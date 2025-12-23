(() => {
  const burgerBtn = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-menu]");

  // Все ссылки с href начинающимся на #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // Пропускаем пустые # и не-якоря
      if (!href || href === "#" || href.length <= 1) return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault(); // Отменяем стандартное поведение

        // Если мобильное меню открыто — закрываем его и разблокируем скролл
        const isMenuOpen =
          mobileMenu && mobileMenu.classList.contains("is-open");
        if (isMenuOpen) {
          mobileMenu.classList.remove("is-open");
          burgerBtn.classList.remove("is-open");
          burgerBtn.setAttribute("aria-expanded", "false");
          document.body.classList.remove("no-scroll");
        }

        // Плавная прокрутка к секции
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Обновляем URL в адресной строке (например, добавляем #home)
        history.pushState(null, null, href);
      }
    });
  });
})();
