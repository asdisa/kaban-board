class LocalStorageManager {
  static serializeBoards(boards) {
    const serializedBoards = [];
    for (const board of boards) {
      const serializedCards = [];
      for (const card of board.childEntities) {
        serializedCards.push({ title: card.title });
      }

      const serializedBoard = {
        title: board.title,
        cards: serializedCards,
      };
      serializedBoards.push(serializedBoard);
    }
    return serializedBoards;
  }

  static deserializeBoards(serializedBoards) {
    const boards = [];
    for (const serializeBoard of serializedBoards) {
      const cards = [];
      for (const serializedCard of serializeBoard.cards) {
        cards.push(new Card(serializedCard.title));
      }

      const board = new Board(serializeBoard.title, cards);
      boards.push(board);
    }
    return boards;
  }

  static saveBoards(boards) {
    localStorage.setItem('boards', JSON.stringify(LocalStorageManager.serializeBoards(boards)));
  }

  static loadBoards() {
    const parsed = JSON.parse(localStorage.getItem('boards'));
    return parsed == null ? parsed : LocalStorageManager.deserializeBoards(parsed);
  }

  static removeBoardsFromStorage() {
    localStorage.removeItem('boards');
  }
}
