class EntityCreator {
    constructor(className, faceText, inputPlaceholder, addButtonText){
        this._className = className;
        this._faceText = faceText;
        this._inputPlaceholder = inputPlaceholder;
        this._addButtonText = addButtonText;
        this.titleInput = '';
    }

    create () {
        return new this.className(this.titleInput);
    }
}

const EntityCreatorFactory = {

    registeredClassNames: new Map([
        [Card, {
            'faceText': 'Добавить еще одну карточку',
            'inputPlaceholder': 'Введите название карточки',
            'addButtonText': 'Добавить карточку',
        }],
        [Column, {
            'faceText': 'Добавить еще одну колонку',
            'inputPlaceholder': 'Введите название колонки',
            'addButtonText': 'Добавить колонку',
        }]
    ]),

    create(className) {
        let {faceText, inputPlaceholder, addButtonText} = this.registeredClassNames.get(className);
        return EntityCreator(className, faceText, inputPlaceholder, addButtonText);
    }
}