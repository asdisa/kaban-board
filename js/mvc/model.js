class Model extends Observable {
    constructor(boards = []) {
        super();
        this.boardManager = new TitledEntityManager(null, boards, Board);
        this.boardCreator = this.boardManager.childEntityCreator; 
    }

    get boards() {
        return this.boardManager.childEntities;
    }

    addEntity(entityManager, title) {
        let entrineCreator = entityManager.childEntityCreator;
        let entity = entrineCreator.create(title);
        entityManager.addChildEntity(entity);
    }

    notifyAll() {
        super.notifyAll();
        LocalStorageManager.saveBoards(this.boards);
    }
}
