document.querySelectorAll('.faq__body-question').forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.closest('.faq__body-question').nextElementSibling;
    const isOpen = button.classList.toggle('is-open');
    button.setAttribute('aria-expanded', isOpen);
    answer.classList.toggle('is-open');

    const questions = document.querySelectorAll('.faq__body-question');
    const lastQuestion = questions[questions.length - 1];
    const lastAnswer = lastQuestion.nextElementSibling;

    if (lastAnswer && !lastAnswer.classList.contains('is-open')) {
      lastQuestion.classList.add('no-border');
    } else {
      lastQuestion.classList.remove('no-border');
    }
  });
});

const questions = document.querySelectorAll('.faq__body-question');
const lastQuestion = questions[questions.length - 1];
const lastAnswer = lastQuestion.nextElementSibling;
if (lastAnswer && !lastAnswer.classList.contains('is-open')) {
  lastQuestion.classList.add('no-border');
}
