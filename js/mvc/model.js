class Model extends Observable {
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
}
