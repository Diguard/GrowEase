document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('backToTop');

  // Укажи селектор ТВОЕЙ второй секции
  const secondSection = document.querySelector('.section-intro');

  if (!backToTopBtn || !secondSection) return;

  // 1. Отслеживаем прокрутку с помощью IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Если 2-я секция НЕ пересекает экран (т.е. мы пролистали ниже ее верхней части)
        // и ее нижняя граница выше верхней границы экрана (boundingClientRect.top < 0)
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          backToTopBtn.classList.add('is-visible');
        } else {
          backToTopBtn.classList.remove('is-visible');
        }
      });
    },
    {
      root: null, // Использовать область просмотра (viewport)
      threshold: 0, // Срабатывает сразу как только секция выйдет за пределы экрана
    }
  );

  observer.observe(secondSection);

  // 2. Плавный скролл наверх при клике
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
