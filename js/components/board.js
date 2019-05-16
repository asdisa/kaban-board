/**
 * Board user is placing cards on
 */
class Board extends TitledEntityManager {
  /**
   * Constructs a board with a title set to `title`,
   * and placed cards stored in an array
   * initially containing `cards` members
   *
   * @param {string} title Board title
   * @param {Array<Card>} cards Initially placed cards
   */
  constructor(title, cards = []) {
    super(title, cards, Card);
  }
}
