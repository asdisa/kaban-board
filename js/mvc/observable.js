/**
 * Abstract class of Observable pattern implementation.
 * @abstract
 */
class Observable {
  /**
   * Constructs an Observable with emply array of corresponding Observers.
   */
  constructor() {
    this._observers = [];
  }

  /**
   * Adds `observer` to array of corresponding Observers.
   *
   * @param {Observer} observer Observer to be registered
   */
  registerObserver(observer) {
    this._observers.push(observer);
  }

  /**
   * Updates all registered Observers.
   */
  notifyAll() {
    this._observers.forEach((observer) => {
      observer.update(this);
    });
  }
}
