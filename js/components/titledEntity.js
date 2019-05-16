/**
 * Abstract class of an entity with a title.
 */
class TitledEntity {
  /**
   * Constructs a new TitledEntity by setting it's title to `title`
   * @param {str} title Title of an entity.
   */
  constructor(title) {
    this._title = title;
  }

  get title() {
    return this._title;
  }
}
