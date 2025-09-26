document.querySelectorAll(".faq__body-question-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.closest(".faq__body-question").nextElementSibling;
    const isOpen = button.classList.toggle("is-open");
    button.setAttribute("aria-expanded", isOpen);
    answer.classList.toggle("is-open");

    // Находим последний вопрос и ответ
    const questions = document.querySelectorAll(".faq__body-question");
    const lastQuestion = questions[questions.length - 1];
    const lastAnswer = lastQuestion.nextElementSibling;

    // Управляем border-bottom последнего вопроса
    if (lastAnswer && !lastAnswer.classList.contains("is-open")) {
      lastQuestion.classList.add("no-border"); // Ответ закрыт — убираем линию
    } else {
      lastQuestion.classList.remove("no-border"); // Ответ открыт — показываем линию
    }
  });
});

// Инициализация: убираем border-bottom у последнего вопроса, если все ответы закрыты
const questions = document.querySelectorAll(".faq__body-question");
const lastQuestion = questions[questions.length - 1];
const lastAnswer = lastQuestion.nextElementSibling;
if (lastAnswer && !lastAnswer.classList.contains("is-open")) {
  lastQuestion.classList.add("no-border");
}
