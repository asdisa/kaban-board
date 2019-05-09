class TitledEntityManager extends TitledEntity {
    constructor(title, childEntities=[], childEntityClass=Card) {
        super(title);
        this._childEntities = childEntities;
        this._childEntityCreator = TitledEntityCreatorFactory.create(childEntityClass)
    }

    get childEntities() {
        return this._childEntities;
    }

    get childEntityCreator() {
        return this._childEntityCreator;
    }

    placeChildEntity(childEntity, index=null) {
        index = index != null ? index : this.childEntities.length; 
        this._childEntities.splice(index, 0, childEntity);
    }

    addChildEntity(childEntity) {
        this.placeChildEntity(childEntity);
    }

    deleteChildEntityWithIndex(index) {
        this._childEntities.splice(index, 1);
    }
}