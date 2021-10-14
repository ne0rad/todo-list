// Class Where the ToDo lists are managed
class TodoList {
    constructor() {
        this.render();
    }

    render() {
        this.renderMenu();
        this.renderMenuAdd();
        this.renderMenuDeleteCompleted();
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
        this.menu.appendChild(this.menuAdd);
    }
    renderMenuDeleteCompleted() {
        this.menuDeleteCompleted = document.createElement('div');
        this.menuDeleteCompleted.classList.add('menu-item');
        this.menuDeleteCompleted.textContent = "Delete Completed";
        this.menuDeleteCompleted.onclick = this.deleteAllCompleted.bind(this);
        this.menu.appendChild(this.menuDeleteCompleted);
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
}

export { TodoList }
