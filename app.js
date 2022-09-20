import { letterCounter, createCard, newTag } from "./utils/addCard.js";
import { toggleAnswer, toggleBookmark } from "./utils/cardFunctionality.js"

//Beim Laden der Home-Seite:
if (document.querySelector('[data-js="form-question"]')){
    toggleAnswer();
    toggleBookmark();
}

//Beim Laden der Add-Seite:
if (document.querySelector('[data-js="form-new-card"]')){
    newTag();
    letterCounter();
    createCard();
}
/* const search = document.querySelector('[data-js="input-search"]');

search.addEventListener('input', () => {
    const cards = document.querySelectorAll('[data-js="card"]');
    const result = cards.filter(card => {
        return card.ul.li === search.value;
    })

}) */