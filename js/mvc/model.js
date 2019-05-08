class Model extends Observable {
    constructor(boards = []) {
        super();
        this.boardManager = new TitledEntityManager(null, boards, Board);
        this.boardCreator = this.boardManager.childEntityCreator; 
    }

    get boards() {
        return this.boardManager.childEntities;
    }

    addBoard(title) {
        console.log(this.boardCreator.create(title));
    }

    addCardToBoardWithIndex(index, title) {
        let cardCreator = this.boards[index].childEntityCreator;
        let card = cardCreator.create(title);
        this.boards[index].addChildEntity(card);
    }

    notifyAll() {
        super.notifyAll();
        LocalStorageManager.saveBoards(this.boards);
    }
}
