import TitledEntity from './titledEntity';

/**
 * Card user is placing on a kaban board.
 * @extends TitledEntity
 */
class Card extends TitledEntity {
  /**
   * Constructs a Card with a `title` which can point to `href` url.
   * @param {string} title Title of the card
   * @param {?string} href Destination url
   */
  constructor(title, href = null) {
    super(title);
    this.href = href;
  }
}

export default Card;
