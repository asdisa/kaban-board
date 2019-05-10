class Controller {
    constructor(model) {
        this._model = model;
        this._draggedCardElement = null;
    }

    get model() {
        return this._model;
    }

    handleSave() {
        this.model.saveBoardsStateToLocalStorage();
    }

    handleUndoChange() {
        this.model.loadPreviousBoardsState();
    }

    getEntityManagersDict() {
        let entityManagersDict = { null: this.model.boardManager };
        for (let i = 0; i < this.model.boards.length; i++) {
            entityManagersDict[i] = this.model.boards[i];
        }
        return entityManagersDict;
    }

    getEntityManagerWithIndex(parentIndex) {
        return this.getEntityManagersDict()[parentIndex];
    }

    getEntityPosition(cardElement) {
        let parentIndex = parseInt(cardElement.id.split('-')[1]);
        let childIndex = parseInt(cardElement.id.split('-')[2]);
        childIndex = childIndex === childIndex ? childIndex : null;
        return [parentIndex, childIndex];
    }

    incertEntity(parentIndex, childIndex, title) {
        const entityManager = this.getEntityManagerWithIndex(parentIndex);
        this.model.incertEntity(entityManager, title, childIndex);
        entityManager.childEntityCreator.addSectionInsidesShown = false;
    }

    deleteEntity(parentIndex, childIndex) {
        this.model.saveBoardsState();
        this.model.deleteChildEntity(this.getEntityManagerWithIndex(parentIndex), childIndex);
    }

    handleFacadeClick(parentIndex) {
        const entityManagerDict = this.getEntityManagersDict();
        for (let index of Object.keys(entityManagerDict)) {
            entityManagerDict[index].childEntityCreator.addSectionInsidesShown = index === String(parentIndex);  
        }

        this.model.notifyAll();
    }

    handleCrossClick(parentIndex) {
        this.getEntityManagerWithIndex(parentIndex).childEntityCreator.addSectionInsidesShown = false;
        this.model.notifyAll();
    }

    handleIncertEntity(parentIndex, childIndex, title) {
        this.incertEntity(parentIndex, childIndex, title);
        this.model.notifyAll();
    }

    handleSubmitTitle(parentIndex, title) {
        this.model.saveBoardsState();
        this.handleIncertEntity(parentIndex, null, title);
    }

    handleDeleteEntity(parentIndex, childIndex) {
        this.deleteEntity(parentIndex, childIndex);
        this.model.notifyAll();
    }

    handleDragStart(e) {
        const targetElement = e.target;
        this._draggedCardElement = targetElement;

        var ghostElement = targetElement.cloneNode(true);
        ghostElement.classList.add("ghost");
        document.body.appendChild(ghostElement);
        e.dataTransfer.setDragImage(ghostElement, 0, 0);

        targetElement.classList.add("empty-slot");
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", targetElement.innerHTML);
    }

    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = "move";
        return false;
    }

    handleDragEnter(e) {
        const targetElement = e.target;
        if (targetElement.id) {
            targetElement.classList.add("over");
        }
    }

    handleDragLeave(e) {
        const targetElement = e.target;
        if (targetElement.id) {
            targetElement.classList.remove("over");
        }
    }

    handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        const targetElement = e.target;
        if (this._draggedCardElement !== targetElement && targetElement.id) {
            const [targetBoardIndex, targetCardIndex] = this.getEntityPosition(targetElement);
            const [draggedBoardIndex, draggedCardIndex] = this.getEntityPosition(this._draggedCardElement);
            const draggedTitle = this._draggedCardElement.innerHTML;

            this.deleteEntity(draggedBoardIndex, draggedCardIndex);
            this.incertEntity(targetBoardIndex, targetCardIndex, draggedTitle);
            this.model.notifyAll();
        }

        return false;
    }

    handleDragEnd(e) {
        e.target.classList.remove("empty-slot");
        var cards = document.querySelectorAll(".card");
        [].forEach.call(cards, (card) => {
            card.classList.remove("over");
        });
    }
}
