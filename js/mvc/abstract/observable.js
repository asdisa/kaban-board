/**
 * Abstract class of Observable pattern implementation.
 * @abstract
 */
class Observable {
  constructor() {
    this._observers = [];
  }

  registerObserver(observer) {
    this._observers.push(observer);
  }

  notifyAll() {
    this._observers.forEach((observer) => {
      observer.update(this);
    });
  }
}
