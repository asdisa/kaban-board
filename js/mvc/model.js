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
}
