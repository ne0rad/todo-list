import { todoArr } from "./todoArr";

function toggleCard(i) {
    todoArr[i].toggleCompleted();
    let card = document.getElementById("card-" + i);
    if(todoArr[i].completed) {
        card.classList.add('card-done');
    } else {
        card.classList.remove('card-done');
    }
}

export { toggleCard };