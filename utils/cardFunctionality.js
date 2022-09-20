export { toggleAnswer, toggleBookmark };

//answerButtons 
function toggleAnswer(){
    const answerButtons = document.querySelectorAll('[data-js="answerButton"]');
    const answer = document.querySelectorAll('[data-js="hidden"]');
    
    for (let i=0; i<answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', () => {
            answer[i].classList.toggle("hidden");
            if (answerButtons[i].textContent === "Show answer") {
                answerButtons[i].textContent = "Hide answer";
            } else {
                answerButtons[i].textContent = "Show answer";
            }
        })
    }
};
    
//bookmark logic
function toggleBookmark() {
    const bookmark = document.querySelector('[data-js="card-bookmark"]');
    const bookmarkChecked = document.querySelector('[data-js="card-bookmark2"]');
    
    bookmark.addEventListener('click', () => {
        bookmark.classList.toggle("hidden");
        bookmarkChecked.classList.toggle("hidden");
    })
    bookmarkChecked.addEventListener('click', () => {
        bookmark.classList.toggle("hidden");
        bookmarkChecked.classList.toggle("hidden");
    })
};