// UNUSED FOR NOW
// Will be used for local storage import

import { toggleCard } from "./toggleCard";
import { todoArr } from "./todoArr";

function loadCards() {
    let content = document.getElementById("content");
    // Display all todo cards
    for (let i = 0; i < todoArr.length; i++) {
        // Create main card div
        let todoCard = document.createElement('div');
        todoCard.id = "card-" + i;
        todoCard.classList.add('card');
        content.appendChild(todoCard);

        // Add event listener to toggle completed status
        todoCard.addEventListener("click", () => toggleCard(i));

        // Add title to the card
        let cardTitle = document.createElement('div');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = `${todoArr[i].title}`;
        todoCard.appendChild(cardTitle);

        // Add note to the card
        let cardNote = document.createElement('div');
        cardNote.classList.add('card-note');
        cardNote.textContent = `${todoArr[i].note}`;
        todoCard.appendChild(cardNote);
    }
}

export { loadCards }
