class LocalStorageManager {
  static encode(instance) {
    const _result = {};

    Object.getOwnPropertyNames(instance)
      .forEach(prop => _result[prop] = instance[prop]);
    Object.getOwnPropertyNames(Object.getPrototypeOf(instance))
      .forEach(method => _result[method] = instance[method]);

    const replacer = (key, value) => (typeof value === 'function' ? value.toString() : value);
    return JSON.stringify(_result, replacer, 2);
  }

  static decode(serializedObject) {
    const revivier = (key, value) => (typeof value === 'string' && value.indexOf('function ') === 0
      ? Function.apply(null, [`return ${value}`])() : value);

    return JSON.parse(serializedObject, revivier);
  }

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
