class Model extends Observable{
    constructor(boards=[]) {
        super();
        this.boardManager = new TitledEntityManager(null, boards, Board);
    }
    
    get boards() {
        return this.boardManager.childEntities;
    }
}
