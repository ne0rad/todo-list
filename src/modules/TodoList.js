// Class Where the ToDo lists are managed
import { TodoItem } from "./TodoItem";

class TodoList {
    constructor() {
        this.AddMenuOpen = false;
        this.render();
    }

    render() {
        this.renderMenu();
        this.renderMenuAdd();
        this.renderMenuDeleteCompleted();
        this.renderAdd();
        this.renderAddButton();
        this.renderCancelButton();
        this.renderListContainer();
    }

    renderMenu() {
        this.content = document.getElementById('content');

        this.menu = document.createElement('div');
        this.menu.classList.add('list-menu');
        this.content.appendChild(this.menu);
    }

    renderMenuAdd() {
        this.menuAdd = document.createElement('div');
        this.menuAdd.classList.add('menu-item');
        this.menuAdd.textContent = "New ToDo";
        this.menuAdd.onclick = this.toggleAdd.bind(this);
        this.menu.appendChild(this.menuAdd);
    }

    renderMenuDeleteCompleted() {
        this.menuDeleteCompleted = document.createElement('div');
        this.menuDeleteCompleted.classList.add('menu-item');
        this.menuDeleteCompleted.textContent = "Delete Completed";
        this.menuDeleteCompleted.onclick = this.deleteAllCompleted.bind(this);
        this.menu.appendChild(this.menuDeleteCompleted);
    }

    renderAdd() {
        this.add = document.createElement('div');
        this.add.classList.add('list-add');
        this.add.innerHTML = `
        <div class="list-add-item">
            <span>Title:&nbsp;</span>
            <input class="input" name="title" id="input-title" type="text">
        </div>
        <div class="list-add-item">
            <span>Note:&nbsp;</span>
            <input class="input" name="note" id="input-note" type="text">
        </div>`;
        this.content.appendChild(this.add);
    }

    renderAddButton() {
        this.addContainer = document.createElement('div');
        this.addContainer.classList.add('list-add-item');
        this.add.appendChild(this.addContainer);

        this.addButton = document.createElement('span');
        this.addButton.classList.add('btn');
        this.addButton.textContent = "Submit";
        this.addButton.onclick = this.addNewTodo.bind(this);
        this.addContainer.appendChild(this.addButton);
    }

    renderCancelButton() {
        this.cancelButton = document.createElement('span');
        this.cancelButton.classList.add('btn');
        this.cancelButton.textContent = "Cancel";
        this.cancelButton.onclick = this.cancelTodo.bind(this);
        this.addContainer.appendChild(this.cancelButton);
    }

    renderListContainer() {
        this.listContainer = document.createElement('div');
        this.listContainer.classList.add('list-container');
        this.listContainer.id = 'list-container';
        this.content.appendChild(this.listContainer);
    }

    deleteAllCompleted() {
        let completedArr = document.getElementsByClassName('card-done');
        if (completedArr.length > 0) {
            completedArr[0].remove();
            this.deleteAllCompleted();
        }
    }

    toggleAdd() {
        if (this.AddMenuOpen) {
            this.add.classList.remove('add-open');
        } else {
            this.add.classList.add('add-open');
        }
        this.AddMenuOpen = !this.AddMenuOpen;
    }

    addNewTodo() {
        let title = document.getElementById('input-title');
        let note = document.getElementById('input-note');
        if (title.value.length > 0 && note.value.length > 0) {
            new TodoItem(title.value, note.value);
            title.value = "";
            note.value = "";
        }
    }

    cancelTodo() {
        let title = document.getElementById('input-title');
        let note = document.getElementById('input-note');
        this.add.classList.remove('add-open');
        this.AddMenuOpen = false;
        title.value = "";
        note.value = "";
    }
}

export { TodoList }
