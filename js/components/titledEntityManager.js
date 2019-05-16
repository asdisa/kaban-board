class TitledEntityManager extends TitledEntity {
  constructor(title, childEntities = [], childEntityClass = Card) {
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

  makeChildEntity(title) {
    return new this._childEntityClass(title);
  }

  incertChildEntity(childEntity, index = null) {
    index = index != null ? index : this.childEntities.length;
    this._childEntities.splice(index, 0, childEntity);
  }

  deleteChildEntityWithIndex(index) {
    this._childEntities.splice(index, 1);
  }
}
