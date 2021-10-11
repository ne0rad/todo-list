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
    todoCard.textContent = `> Title: ${todo.title} Note: ${todo.note}`;
    content.appendChild(todoCard);
});
