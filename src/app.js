import { TodoList } from './modules/todoList';
import './styles/style.css';

const todoArr = [];

function newTodo(title, note) {
    todoArr.push(new TodoList(title, note));
}

newTodo("Hello", "How are you?");
newTodo("Test2", "Note body is written here");
newTodo("Another test", "And yet another note");


let content = document.getElementById("content");

todoArr.forEach(todo => {
    let todoCard = document.createElement('div');
    todoCard.classList.add('card');
    content.appendChild(todoCard);

    let cardTitle = document.createElement('div');
    todoCard.textContent = ` > Title: ${todo.title}`;
    todoCard.appendChild(cardTitle);

    let cardNote = document.createElement('div');
    cardNote.textContent = ` > Note: ${todo.note}`;
    todoCard.appendChild(cardNote);

    todoCard.appendChild( document.createElement('br') );
});
