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
        this.renderDelete();
    }

    renderCard() {
        // Select div where we add new ToDo item
        this.content = document.getElementById("content");

        this.cardWrap = document.createElement('div');
        this.cardWrap.classList.add('card-wrap');
        this.content.appendChild(this.cardWrap);

        // Create main card div
        this.todoCard = document.createElement('div');
        this.todoCard.classList.add('card');
        this.cardWrap.appendChild(this.todoCard);

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

    renderDelete() {
        // Creates Delete button
        this.deleteButton = document.createElement('button');
        this.deleteButton.classList.add('card-delete-btn');
        this.deleteButton.textContent = "X";
        this.deleteButton.onclick = this.delete.bind(this);
        this.cardWrap.appendChild(this.deleteButton);
    }

    toggleCompleted() {
        // Toggle ToDo item completed/incompleted
        if (this.completed) this.renderCompleted()
        else this.renderIncomplete();

        this.completed = !this.completed;
    }

    renderCompleted() {
        this.todoCard.classList.remove('card-done');
        this.deleteButton.classList.remove('delete-btn-done');
    }

    renderIncomplete() {
        this.todoCard.classList.add('card-done');
        this.deleteButton.classList.add('delete-btn-done');
    }

    delete() {
        this.cardWrap.remove();
    }
}

export { TodoItem }
