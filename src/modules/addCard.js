import { todoArr } from "./todoArr";
import { TodoItem } from "./TodoItem";
import { toggleCard } from "./toggleCard";

function addCard(title, note) {
    let content = document.getElementById("content");

    // Set card index to largest index + 1
    let index;
    if(!todoArr[todoArr.length - 1]) index = 0;
    else index = todoArr[todoArr.length - 1].index + 1;
    
    todoArr.push(new TodoItem(title, note, index));

    // Create main card div
    let todoCard = document.createElement('div');
    todoCard.id = "card-" + index;
    todoCard.classList.add('card');
    content.appendChild(todoCard);

    // Add event listener to toggle completed status
    todoCard.addEventListener("click", () => toggleCard(index));

    // Add title to the card
    let cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = `${title}`;
    todoCard.appendChild(cardTitle);

    // Add note to the card
    let cardNote = document.createElement('div');
    cardNote.classList.add('card-note');
    cardNote.textContent = `${note}`;
    todoCard.appendChild(cardNote);
}

export { addCard }
