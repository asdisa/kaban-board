/**
 * Application state.
 */
class State {
  /**
   * Constructs an application state with kaban boards placed on the wall
   * initially set to `wall`.
   *
   * @param {?Wall} wall Initial state of the wall.
   */
  constructor(wall = null) {
    this.wall = wall != null ? wall : new Wall();
  }
}
