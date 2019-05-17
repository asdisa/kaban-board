/* eslint-disable no-return-assign */
class LocalStorageManager {
  static encode(instance) {
    const _result = {};

    Object.getOwnPropertyNames(instance)
      .forEach(prop => _result[prop] = instance[prop]);
    Object.getOwnPropertyNames(Object.getPrototypeOf(instance))
      .forEach(method => _result[method] = instance[method]);

    const replacer = (key, value) => (typeof value === 'function' ? value : value);
    return JSON.stringify(_result, replacer, 2);
  }

  static decode(serializedState) {
    const revivier = (key, value) => (typeof value === 'string' && value.indexOf('function ') === 0
      ? Function.apply(null, [`return ${value}`])() : value);
    const parsedObj = JSON.parse(serializedState, revivier);

    const boards = [];
    (parsedObj.wall._childEntities.forEach((serializedBoard) => {
      const cards = [];
      serializedBoard._childEntities.forEach((serializedCard) => {
        cards.push(new Card(serializedCard.title));
      });
      boards.push(new Board(serializedBoard.title, cards));
    }));
    return new State(new Wall(boards));
  }

  static saveState(stateObject) {
    localStorage.setItem('appState', LocalStorageManager.encode(stateObject));
  }

  static loadState() {
    const parsed = JSON.parse(localStorage.getItem('appState'));
    return parsed == null ? parsed : LocalStorageManager.decode(JSON.stringify(parsed));
  }

  static removeStateFromLocalStorage() {
    localStorage.removeItem('appState');
  }
}
