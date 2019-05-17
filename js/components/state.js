/**
 * Application state
 */
class State extends TitledEntityManager {
  /**
   * Constructs an application state with kaban boards stored in an array
   * initially containing `board` members
   *
   * @param {Board[]=} [] boards Initial state of boards
   */
  constructor(boards = []) {
    super(null, boards, Board);
  }
}
