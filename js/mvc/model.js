class Model extends Observable {
    constructor(boards = []) {
        super();
        this.previousBoardsState = boards; 
        this.boardManager = new TitledEntityManager(null, boards, Board);
        this.boardCreator = this.boardManager.childEntityCreator; 
    }
    
    get boards() {
        return this.boardManager.childEntities;
    }

    saveBoardsState() {
        this.previousBoardsState = LocalStorageManager.deserializeBoards(LocalStorageManager.serializeBoards(this.boards)); 
    }

    saveBoardsStateToLocalStorage() {
        LocalStorageManager.saveBoards(this.boards);
    }

    loadPreviousBoardsState() {
        console.log(this.previousBoardsState, this.boards)
        if (this.previousBoardsState !== this.boards) {
            this.boardManager = new TitledEntityManager(null, this.previousBoardsState, Board);
            this.boardCreator = this.boardManager.childEntityCreator;
            this.notifyAll();     
        }
    }

    deleteChildEntity(entityManager, childIndex) {
        this.saveBoardsState()
        entityManager.deleteChildEntityWithIndex(childIndex);
    }

    incertEntity(entityManager, title, childIndex) {
        this.saveBoardsState()

        let entrineCreator = entityManager.childEntityCreator;
        let entity = entrineCreator.create(title);
        entityManager.incertChildEntity(entity, childIndex);
    }

    addEntity(entityManager, title) {
        this.saveBoardsState()
        this.incertEntity(entityManager, title, null);
    }
}
