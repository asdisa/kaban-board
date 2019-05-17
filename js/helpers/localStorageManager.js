/* eslint-disable no-return-assign */

/**
 * Static class responsible for interactions with localStorage.
 */
class LocalStorageManager {
  /**
   * Serializes an `obj` to stringified JSON.
   *
   * @param {Object} obj Obj to serialize
   * @returns {string}
   */
  static encode(obj) {
    const _result = {};

    Object.getOwnPropertyNames(obj)
      .forEach(prop => _result[prop] = obj[prop]);
    Object.getOwnPropertyNames(Object.getPrototypeOf(obj))
      .forEach(method => _result[method] = obj[method]);

    const replacer = (key, value) => (typeof value === 'function' ? value : value);
    return JSON.stringify(_result, replacer, 2);
  }

  /**
   * Constructs a State instance from `serializedState`.
   *
   * @param {string} serializedState Stringified JSON representation of State instance
   * @returns {State}
   */
  static decodeState(serializedState) {
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

  /**
   * Saves a serialized State instance to localStorage.
   *
   * @param {State} stateInstance State to be saved
   */
  static saveState(stateInstance) {
    localStorage.setItem('appState', LocalStorageManager.encode(stateInstance));
  }

  /**
   * Retreives a State instance from localStorage.
   *
   * @returns {State}
   */
  static loadState() {
    const parsed = JSON.parse(localStorage.getItem('appState'));
    return parsed == null ? parsed : LocalStorageManager.decodeState(JSON.stringify(parsed));
  }

  /**
   * Removes saved state from localStorage.
   */
  static removeStateFromLocalStorage() {
    localStorage.removeItem('appState');
  }
}
