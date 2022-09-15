//addNewCards
const formNewCard = document.querySelector('[data-js="form-new-card"]');
const cardContainer = document.querySelector('[data-js="card-container"]')

formNewCard.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const newCard = document.createElement('section');
    newCard.classList.add("card");
    
    const newQuestion = document.createElement('h2');
    newQuestion.classList.add("card__question");
    newQuestion.innerText = data.newQuestion;

    const newButtonContainer = document.createElement('div');
    newButtonContainer.classList.add("card__btn-container");

    const newButton = document.createElement('button');
    newButton.classList.add("card__answer-btn");
    newButton.setAttribute("data-js", "answerButton");
    newButton.innerText = "Show answer";

    newButtonContainer.append(newButton);

    const newAnswer = document.createElement('div');
    newAnswer.classList.add("card__answer", "hidden");
    newAnswer.setAttribute("data-js", "hidden");
    newAnswer.innerText = data.newAnswer;

    newButton.addEventListener('click', () => {
        newAnswer.classList.toggle("hidden");
        if (newButton.textContent === "Show answer") {
            newButton.textContent = "Hide answer";
        } else {
            newButton.textContent = "Show answer";
       }
    })

    const newTaglist = document.createElement('ul');
    newTaglist.classList.add("card__hashtag-box-list");
    
    const newListItem = document.createElement('li');
    newListItem.innerText = `#${data.newTag}`;

    newTaglist.append(newListItem);

    newCard.append(newQuestion, newButtonContainer, newAnswer, newTaglist);
    cardContainer.append(newCard);

    event.target.reset();
    event.target.elements.newQuestion.focus();
})

// count letters in input-fields

const letterCountQuestion = document.querySelector('[data-js="questionCounter"]');
const letterCountAnswer = document.querySelector('[data-js="answerCounter"]');
const questionInput = document.querySelector('[data-js="newQuestionInput"]'); 
const answerInput = document.querySelector('[data-js="newAnswerInput"]');


questionInput.addEventListener('input', ()=> {
    let inputLetters = 150 - questionInput.value.length;
    letterCountQuestion.innerText = `${inputLetters} letters left.`
})

answerInput.addEventListener('input', ()=> {
    let inputLetters = 150 - answerInput.value.length;
    letterCountAnswer.innerText = `${inputLetters} letters left.`
})