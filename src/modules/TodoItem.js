// A class responsible of handling TodoCard related operations

class TodoItem {
    constructor(title, note, index) {
        // Default/required parameters are set
        this.title = title;
        this.date = Date();
        this.note = note;
        this.index = index;
        this.completed = false;
    }

    toggleCompleted() {
        // Mark todo item as completed
        this.completed = !this.completed;
    }
}

export { TodoItem }
