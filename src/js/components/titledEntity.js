/**
 * Abstract class of an entity with a title.
 * @abstract
 */
export default class TitledEntity {
  /**
   * Constructs a TitledEntity with a title set to `title`.
   * @param {?string} title Title of an entity
   */
  constructor(title) {
    this.title = title;
  }
}
