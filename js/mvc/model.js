class Model extends Observable {
    constructor(boards = []) {
        super();
        this.boardManager = new TitledEntityManager(null, boards, Board);
        this.boardCreator = this.boardManager.childEntityCreator; 
    }

    get boards() {
        return this.boardManager.childEntities;
    }

    incertEntity(entityManager, title, index) {
        let entrineCreator = entityManager.childEntityCreator;
        let entity = entrineCreator.create(title);
        entityManager.incertChildEntity(entity, index);
    }

    addEntity(entityManager, title) {
        this.incertEntity(entityManager, title, null);
    }

    notifyAll() {
        super.notifyAll();
        LocalStorageManager.saveBoards(this.boards);
    }
}
