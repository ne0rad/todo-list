// A class responsible of handling TodoCard related operations

class TodoList {
    constructor(title, note) {
        // Default/required parameters are set
        this.title = title;
        this.date = Date();
        this.note = note;
        this.completed = false;
    }

    toggleCompleted() {
        // Mark todo item as completed
        this.completed = !this.completed;
    }
}

export { TodoList }