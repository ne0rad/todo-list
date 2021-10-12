import './styles/style.css';
import { addCard } from './modules/addCard';


function initLoad() {
    // TEST CARDS BEGIN
    addCard("Meeting", "Meet with Josh");
    addCard("Workout", "Go to the gym");
    addCard("Study", "Study the ways of JavaScript");
    addCard("Study", "Learn some stuff about objective programing and apply said knowledge");
    // TEST CARDS END
}

window.onload = initLoad();
