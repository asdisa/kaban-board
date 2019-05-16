/**
 * Abstract class of a titledEntity with corresponding array of
 * titledEntities, acting as it's children.
 */
class TitledEntityManager extends TitledEntity {
  /**
   * Constructs a TitledEntityManager with a title set to `title`,
   * and `childEntityClass` members stored in an array
   * initially containing `childEntities` members
   *
   * @param {string} title Title of an entity
   * @param {Array<TitledEntity>} childEntities Existing child entities
   * @param {function} title Class of child entities
   */
  constructor(title, childEntities = [], childEntityClass = Card) {
    if (!childEntities.every(e => e instanceof childEntityClass)) {
      throw new Error(`Some members of ${childEntities} are not instances of ${childEntityClass}`);
    }
    super(title);
    this._childEntities = childEntities;
    this._childEntityClass = childEntityClass;
    this.insidesShown = false;
  }

  get childEntities() {
    return this._childEntities;
  }

  get childEntityClass() {
    return this._childEntityClass;
  }

  /**
  * Constructs a childEntityClass instance with a title set to `title`
  *
  * @param {string} title Title of an entity
  * @returns {TitledEntity}
  */
  makeChildEntity(title) {
    return new this._childEntityClass(title);
  }

  /**
  * Incerts `childEntity` into childEntities at `index` position
  *
  * @param {TitledEntity} childEntity Instance of managers's childEntityClass
  * to be incerted into managers's childEntities array
  * @param {number||null} index Index at which an entity will be inserted
  * (null coresponds to inserting as a last member of array)
  */
  incertChildEntity(childEntity, index = null) {
    if (!(childEntity instanceof childEntityClass)) {
      throw new Error(`${childEntity} is not instance of ${childEntityClass}`);
    }
    index = index != null ? index : this.childEntities.length;
    this._childEntities.splice(index, 0, childEntity);
  }

  /**
  * Deletes entity at `index` position
  *
  * @param {number} index Index of an entity to be deleted
  */
  deleteChildEntityWithIndex(index) {
    this._childEntities.splice(index, 1);
  }
}
