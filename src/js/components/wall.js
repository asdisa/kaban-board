import TitledEntityManager from './titledEntityManager';
import Board from './board';

/**
 * Wall with kaban boards placed on it.
 * @extends TitledEntityManager
 */
export default class Wall extends TitledEntityManager {
  /**
   * Constructs an wall with kaban boards stored in an array
   * initially containing `board` members.
   *
   * @param {Board[]} boards Initially placed kaban boards
   */
  constructor(boards = []) {
    super(null, boards, Board);
  }

  get boards() {
    return this.childEntities;
  }
}
