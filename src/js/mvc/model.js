import Observable from './observable';
import State from '../components/state';

/**
 * Major pillar of application, responsible for storing state.
 * @extends Observable
 */
class Model extends Observable {
  /**
   * Constructs a Model with initial state set to `state`.
   * @param {?State} state Initial state of the application
   */
  constructor(state = null) {
    super();
    this.state = state != null ? state : new State();
    this.previousState = this.state;
  }

  get wall() {
    return this.state.wall;
  }

  get boards() {
    return this.wall.boards;
  }

  getEntityWithIndices(parentIndex, childIndex) {
    if (parentIndex == null) {
      return this.boards[childIndex];
    }
    return this.boards[parentIndex].cards[childIndex];
  }
}

export default Model;
