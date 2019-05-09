class Controller {
    constructor(model) {
        this._model = model;
        this._dragSrcEl  = null;
    }

    get model() {
        return this._model;
    }

    getEntityManagerWithIndex(index) {
        if (index < 0) {
            return this.model.boardManager;
        }
        return this.model.boards[index];
    }

    handleFacadeClick(index) {
        this.getEntityManagerWithIndex(index).childEntityCreator.addSectionInsidesShown = true;
        this.model.notifyAll();
    }

    handleCrossClick(index) {
        this.getEntityManagerWithIndex(index).childEntityCreator.addSectionInsidesShown = false;
        this.model.notifyAll();
    }

    handleSubmitTitle(index, title) {
        const entityManager = this.getEntityManagerWithIndex(index);
        this.model.addEntity(entityManager, title);
        entityManager.childEntityCreator.addSectionInsidesShown = false;
        this.model.notifyAll();
    }

    handleDeleteCard(boardindex, cardIndex) { 
        this.getEntityManagerWithIndex(boardindex).deleteChildEntityWithIndex(cardIndex);
        this.model.notifyAll();
    }

    handleDragStart(e) {
        console.log(this, e.target);
        // Target (this) element is the source node.
        e.target.classList.add("empty-slot");

        this._dragSrcEl  = e.target;

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
        e.target.classList.add("over");
    }

    handleDragLeave(e) {
        e.target.classList.remove("over");  // this / e.target is previous target element.
    }

    handleDrop(e) {
        // this/e.target is current target element.

        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }

        // Don"t do anything if dropping the same column we"re dragging.
        if (this._dragSrcEl  != this) {
            // Set the source column"s HTML to the HTML of the column we dropped on.
            this._dragSrcEl.innerHTML = e.target.innerHTML;
            e.target.innerHTML = e.dataTransfer.getData("text/html");
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
