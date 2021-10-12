import { TodoList } from './modules/todoList';
import './styles/style.css';

const todoArr = [];
// Array where all todo items are stored for display

function newTodo(title, note) {
    // Creates a new todo item
    todoArr.push(new TodoList(title, note));
}

function toggleCompleted(i) {
    todoArr[i].toggleCompleted();
    document.getElementById("complete" + i)
        .textContent = `Done ${todoArr[i].completed ? "✔" : "✘"}`;
}

// TEST CARDS BEGIN
newTodo("Hello", "How are you?");
newTodo("Test2", "Note body is written here");
newTodo("Another test", "And yet another note");
// TEST CARDS END

let content = document.getElementById("content");

// Display all todo cards
for (let i = 0; i < todoArr.length; i++) {
    // Create main card div
    let todoCard = document.createElement('div');
    todoCard.classList.add('card');
    content.appendChild(todoCard);

    // Add title to the card
    let cardTitle = document.createElement('div');
    todoCard.textContent = ` > Title: ${todoArr[i].title}`;
    todoCard.appendChild(cardTitle);

    // Add note to the card
    let cardNote = document.createElement('div');
    cardNote.textContent = ` > Note: ${todoArr[i].note}`;
    todoCard.appendChild(cardNote);

    // Add button to the card
    let completeToggle = document.createElement('button');
    completeToggle.textContent = `Done ${todoArr[i].completed ? "✔" : "✘"}`;
    completeToggle.id = "complete" + i;
    // Add event listener to toggle completed status
    completeToggle.addEventListener("click", () => toggleCompleted(i));
    todoCard.appendChild(completeToggle);

    // WONT NEED THIS ONCE CSS IS DONE
    todoCard.appendChild(document.createElement('br'));
    todoCard.appendChild(document.createElement('br'));
}

