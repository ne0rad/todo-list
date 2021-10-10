import { TodoList } from './modules/todoList';
import './styles/style.css';

const todoArr = [];
todoArr.push(new TodoList('HELLO', 'Note note note'));
todoArr.push(new TodoList('no', '123123'));
todoArr.push(new TodoList('Duude', 'asdadsa'));

let content = document.getElementById("content");

todoArr.forEach(todo => {
    let todoCard = document.createElement('div');
    todoCard.classList.add('card');
    todoCard.textContent = `> Title: ${todo.title} Note: ${todo.note}`;
    content.appendChild(todoCard);
});
