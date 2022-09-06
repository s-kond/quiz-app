const answerButtons = document.querySelectorAll('[data-js="answerButton"]');
const answer = document.querySelectorAll('[data-js="hidden"]');

for (let i=0; i<answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', () => {
        answer[i].classList.toggle("hidden");
        if (answerButtons[i].innerHTML === "Show answer") {
            answerButtons[i].innerHTML = "Hide answer";
        } else {
            answerButtons[i].innerHTML = "Show answer";
        }
    })
}
