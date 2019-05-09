class Controller {
    constructor(model) {
        this._model = model;
        this._draggedCardElement  = null;
    }

    get model() {
        return this._model;
    }

    getEntityManagerWithIndex(boardIndex) {
        if (boardIndex < 0) {
            return this.model.boardManager;
        }
        return this.model.boards[boardIndex];
    }

    getCardPosition(cardElement) {
        const boardIndex = parseInt(cardElement.id.split('-')[1]); 
        const cardIndex = parseInt(cardElement.id.split('-')[2]);
        return [boardIndex, cardIndex];
    }

    incertEntity(boardIndex, cardIndex, title) {
        const entityManager = this.getEntityManagerWithIndex(boardIndex);
        this.model.incertEntity(entityManager, title, cardIndex);
        entityManager.childEntityCreator.addSectionInsidesShown = false;
    }

    deleteCard(boardIndex, cardIndex) {
        this.getEntityManagerWithIndex(boardIndex).deleteChildEntityWithIndex(cardIndex);
    }

    handleFacadeClick(boardIndex) {
        this.getEntityManagerWithIndex(boardIndex).childEntityCreator.addSectionInsidesShown = true;
        this.model.notifyAll();
    }

    handleCrossClick(boardIndex) {
        this.getEntityManagerWithIndex(boardIndex).childEntityCreator.addSectionInsidesShown = false;
        this.model.notifyAll();
    }

    handleIncertEntity(boardIndex, cardIndex, title) {
        this.incertEntity(boardIndex, cardIndex, title);
        this.model.notifyAll();
    }

    handleSubmitTitle(boardIndex, title) {
        this.handleIncertEntity(boardIndex, null, title);
    }

    handleDeleteCard(boardIndex, cardIndex) { 
        this.deleteCard(boardIndex, cardIndex);
        this.model.notifyAll();
    }

    handleDragStart(e) {
        this._draggedCardElement  = e.target;

        console.log(this.getCardPosition(this._draggedCardElement))
        var crt = e.target.cloneNode(true);
        crt.classList.add("ghost");
        document.body.appendChild(crt);
        e.dataTransfer.setDragImage(crt, 0, 0);
        // Target (this) element is the source node.
        e.target.classList.add("empty-slot");


        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.innerHTML);
    }

    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }

        e.dataTransfer.dropEffect = "move";  // See the section on the DataTransfer object.

        return false;
    }

    handleDragEnter(e) {
        // this / e.target is the current hover target.
        e.target.classList.add("over");  // this / e.target is previous target element.


    }

    handleDragLeave(e) {
        e.target.classList.remove("over");  // this / e.target is previous target element.
    }

    handleDrop(e) {
        // this/e.target is current target element.

        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }

        const targetCardElement = e.target;
        if (this._draggedCardElement !== targetCardElement) {
            const[targetBoardIndex, targetCardIndex] = this.getCardPosition(targetCardElement); 
            const draggedTitle = this._draggedCardElement.innerHTML;

            const[draggedBoardIndex, draggedCardIndex] = this.getCardPosition(this._draggedCardElement); 
            console.log(draggedBoardIndex, draggedCardIndex);
            this.deleteCard(draggedBoardIndex, draggedCardIndex);
            this.incertEntity(targetBoardIndex, targetCardIndex, draggedTitle);

            this._model.notifyAll();
        }

        return false;
    }

    handleDragEnd(e) {
        // this/e.target is the source node.
        e.target.classList.remove("empty-slot");  // this / e.target is previous target element.
        var cards = document.querySelectorAll(".card");
        [].forEach.call(cards, (card) => {
            card.classList.remove("over");
        });
    }

}
