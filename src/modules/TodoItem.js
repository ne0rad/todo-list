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
        this.renderToolbar();
        this.renderDelete();
        this.renderMove();
    }

    renderCard() {
        // Select div where we add new ToDo item
        this.container = document.getElementById("list-container");

        this.cardWrap = document.createElement('div');
        this.cardWrap.classList.add('card-wrap');
        this.container.appendChild(this.cardWrap);

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

    renderToolbar() {
        this.cardToolbar = document.createElement('div');
        if(this.isTouchDevice()) this.cardToolbar.classList.add('card-toolbar-touch');
        else this.cardToolbar.classList.add('card-toolbar');
        this.cardWrap.appendChild(this.cardToolbar);
    }

    renderDelete() {
        // Creates Delete button
        this.deleteButton = document.createElement('button');
        this.deleteButton.classList.add('card-delete-btn');
        this.deleteButton.textContent = "X";
        this.deleteButton.onclick = this.delete.bind(this);
        this.cardToolbar.appendChild(this.deleteButton);
    }

    renderMove() {
        // Creates Move buttons
        this.renderMoveUp();
        this.renderMoveDown();
    }

    renderMoveUp() {
        this.moveButtonUp = document.createElement('div');
        this.moveButtonUp.classList.add('move-up-btn');
        this.moveButtonUp.textContent = "❯";
        this.moveButtonUp.onclick = this.moveUp.bind(this);
        this.cardToolbar.appendChild(this.moveButtonUp);
    }

    renderMoveDown() {
        this.moveButtonDown = document.createElement('div');
        this.moveButtonDown.classList.add('move-down-btn');
        this.moveButtonDown.textContent = "❯";
        this.moveButtonDown.onclick = this.moveDown.bind(this);
        this.cardToolbar.appendChild(this.moveButtonDown);
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
            this.deleteButton.classList.remove('delete-btn-done');
            this.moveButtonDown.classList.remove('move-done');
            this.moveButtonUp.classList.remove('move-done');
        } else {
            this.todoCard.classList.add('card-done');
            this.deleteButton.classList.add('delete-btn-done');
            this.moveButtonDown.classList.add('move-done');
            this.moveButtonUp.classList.add('move-done');
        }
    }

    delete() {
        this.cardWrap.remove();
    }

    moveUp() {
        if (this.cardWrap.previousElementSibling) {
            this.container.insertBefore(this.cardWrap, this.cardWrap.previousElementSibling);
        }
    }

    moveDown() {
        if (this.cardWrap.nextElementSibling) {
            this.container.insertBefore(this.cardWrap, this.cardWrap.nextElementSibling.nextElementSibling);
        }
    }

    isTouchDevice() {
        return (('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0));
      }
}

export { TodoItem }
