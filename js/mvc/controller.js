class Controller {
    constructor(model) {
        this._model = model;
        this._draggedCardElement = null;
    }

    get model() {
        return this._model;
    }

    saveBoardsState() {
        this.model.previousBoardsState = LocalStorageManager.deserializeBoards(LocalStorageManager.serializeBoards(this.model.boards)); 
    }

    saveBoardsStateToLocalStorage() {
        LocalStorageManager.saveBoards(this.model.boards);
    }

    loadBoardsState(boardsState) {
        if (boardsState !== this.boards) {
            this.model.boardManager = new TitledEntityManager(null, boardsState, Board);
            this.model.boardCreator = this.model.boardManager.childEntityCreator;
            this.model.notifyAll();     
        }
    }

    loadBoardsStateFromLocalStorage() {
        this.saveBoardsState();
        this.loadBoardsState(LocalStorageManager.loadBoards());
    }

    loadInitialBoardsState() {
        this.saveBoardsState();
        const initialBoardState = LocalStorageManager.deserializeBoards(initialState["boards"])
        this.loadBoardsState(initialBoardState);
    }

    loadPreviousBoardsState() {
        this.loadBoardsState(this.model.previousBoardsState);
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

    lastChildIndex(parentIndex) {
        return this.getEntityManagersDict()[parentIndex].childEntities.length - 1;
    }

    getEntityPosition(cardElement) {
        let parentIndex = parseInt(cardElement.id.split('-')[1]);
        let childIndex = parseInt(cardElement.id.split('-')[2]);
        childIndex = childIndex === childIndex ? childIndex : null;
        return [parentIndex, childIndex];
    }

    incertEntity(parentIndex, childIndex, title) {
        const entityManager = this.getEntityManagerWithIndex(parentIndex);
        let entityCreator = entityManager.childEntityCreator;
        let entity = entityCreator.create(title);
        entityManager.incertChildEntity(entity, childIndex);
        entityManager.childEntityCreator.addSectionInsidesShown = false;
    }

    deleteEntity(parentIndex, childIndex) {
        this.saveBoardsState();
        const entityManager = this.getEntityManagerWithIndex(parentIndex);
        entityManager.deleteChildEntityWithIndex(childIndex);
    }

    handleFacadeClick(e) {
        let parentIndex = parseInt(e.target.id.split("-")[1]); 
        parentIndex = parentIndex === parentIndex ? parentIndex : null;
        const entityManagerDict = this.getEntityManagersDict();
        for (let index of Object.keys(entityManagerDict)) {
            entityManagerDict[index].childEntityCreator.addSectionInsidesShown = index === String(parentIndex);  
        }

        this.model.notifyAll();
    }

    handleCrossClick(e) {
        const parentIndex = parseInt(e.target.id.split("-")[1]); 
        this.getEntityManagerWithIndex(parentIndex).childEntityCreator.addSectionInsidesShown = false;
        this.model.notifyAll();
    }

    addChildEntity(parentIndex, title) {
        this.saveBoardsState();
        this.incertEntity(parentIndex, null, title);
        this.model.notifyAll();
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
