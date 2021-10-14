// A class responsible of handling TodoCard related operations

class TodoItem {
    constructor(title, note) {
        // Default/required parameters are set
        this.title = title;
        this.note = note;
        this.completed = false;
        this.render();
    }

    render() {
        this.renderCard();
        this.renderTitle();
        this.renderNote();
    }

    renderCard() {
        // Select div where we add new ToDo item
        this.container = document.getElementById("list-container");

        // Create main card div
        this.todoCard = document.createElement('div');
        this.todoCard.classList.add('card');
        this.container.appendChild(this.todoCard);

        // Bind event listener to toggle completed status
        this.todoCard.onclick = this.toggleCompleted.bind(this);
    }

    renderTitle() {
        // Add title to the card
        this.cardTitle = document.createElement('div');
        this.cardTitle.classList.add('card-title');
        this.cardTitle.textContent = this.title;
        this.todoCard.appendChild(this.cardTitle);
    }

    renderNote() {
        // Add note to the card
        this.cardNote = document.createElement('div');
        this.cardNote.classList.add('card-note');
        this.cardNote.textContent = this.note;
        this.todoCard.appendChild(this.cardNote);
    }

    toggleCompleted() {
        // Toggle ToDo item completed/incompleted
        this.updateCompleted();
        this.completed = !this.completed;
    }

    updateCompleted() {
        // Set class depending on item marked as completed or not
        if (this.completed) {
            this.todoCard.classList.remove('card-done');
        } else {
            this.todoCard.classList.add('card-done');
        }
    }
}

export { TodoItem }
