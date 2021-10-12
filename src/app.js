import { TodoItem } from './modules/todoList';
import { loadCards } from './modules/loadCards';
import { todoArr } from "./modules/todoArr";
import './styles/style.css';

function newTodo(title, note) {
    // Creates a new todo item
    todoArr.push(new TodoItem(title, note));
}


function initLoad() {
    // TEST CARDS BEGIN
    newTodo("Meeting", "Meet with Josh");
    newTodo("Workout", "Go to the gym");
    newTodo("Study", "Study the ways of JavaScript");
    newTodo("Study", "Learn some stuff about objective programing and apply said knowledge");

    // TEST CARDS END

    loadCards();
}

window.onload = initLoad();
