// A class responsible of handling TodoCard related operations

class TodoItem {
    constructor(title, note) {
        // Default/required parameters are set
        this.title = title;
        this.date = Date();
        this.note = note;
        this.completed = false;

        // Select div where we add new ToDo item
        this.content = document.getElementById("content");

        // Create main card div
        this.todoCard = document.createElement('div');
        this.todoCard.classList.add('card');
        this.content.appendChild(this.todoCard);

        // Bind event listener to toggle completed status
        this.todoCard.onclick = this.toggleCompleted.bind(this);

        // Add title to the card
        this.cardTitle = document.createElement('div');
        this.cardTitle.classList.add('card-title');
        this.cardTitle.textContent = `${this.title}`;
        this.todoCard.appendChild(this.cardTitle);

        // Add note to the card
        this.cardNote = document.createElement('div');
        this.cardNote.classList.add('card-note');
        this.cardNote.textContent = `${this.note}`;
        this.todoCard.appendChild(this.cardNote);

    }

    toggleCompleted() {
        // Toggle ToDo item as completed
        if (this.completed) this.todoCard.classList.remove('card-done');
        else this.todoCard.classList.add('card-done');

        this.completed = !this.completed;
    }
}

export { TodoItem }
