/**
 * Wall with caban boards placed on it
 */
class Wall extends TitledEntityManager {
  /**
   * Constructs an wall with kaban boards stored in an array
   * initially containing `board` members
   *
   * @param {Board[]=} [] boards Initially placed kaban boards
   */
  constructor(boards = []) {
    super(null, boards, Board);
  }

  get boards() {
    return this.childEntities;
  }
}
