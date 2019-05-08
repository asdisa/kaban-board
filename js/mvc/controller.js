class Controller {
    constructor(model) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

    handleFacadeClick(index) {
        this.model.boards[index].childEntityCreator.addSectionInsidesShown = true;
        this.model.notifyAll();
    }

    handleCrossClick(index) {
        this.model.boards[index].childEntityCreator.addSectionInsidesShown = false;
        this.model.notifyAll();
    }

    handleAddButtonClick(index, title) {
        this.model.addCardToBoardWithIndex(index, title);
        this.model.notifyAll();
    }
}
