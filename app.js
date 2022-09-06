const answerBtn = document.querySelector(".card__answer-btn");
const answer = document.querySelector('[data-js="hidden"]');

answerBtn.addEventListener('click', () => {
    answer.classList.toggle("hidden");
    if (answerBtn.innerHTML === "Show answer") {
        answerBtn.innerHTML = "Hide answer";
    } else {
        answerBtn.innerHTML = "Show answer";
    }
})