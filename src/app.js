import './styles/style.css';
import { TodoItem } from './modules/TodoItem';
import { TodoList } from './modules/TodoList';


function initLoad() {
    new TodoList();
    // TEST CARDS BEGIN
    new TodoItem("Meeting", "Meet with Josh");
    new TodoItem("Workout", "Go to the gym");
    new TodoItem("Study", "Study the ways of JavaScript");
    new TodoItem("Study", "Learn some stuff about objective programing and apply said knowledge");
    // TEST CARDS END
}

window.onload = initLoad();
