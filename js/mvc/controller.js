class Controller {
    constructor(model) {
        this._model = model;
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

    handleAddButtonClick(index, title) {
        const entityManager = this.getEntityManagerWithIndex(index);
        this.model.addEntity(entityManager, title);
        entityManager.childEntityCreator.addSectionInsidesShown = false;
        this.model.notifyAll();
    }
}
