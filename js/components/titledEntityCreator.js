class TitledEntityCreator {
    constructor(className, faceText, inputPlaceholder, addButtonText) {
        this._className = className;
        this._faceText = faceText;
        this._inputPlaceholder = inputPlaceholder;
        this._addButtonText = addButtonText;
        this.addSectionInsidesShown = false;
        this.titleInput = '';
    }

    get faceText() {
        return this._faceText;
    }

    get inputPlaceholder() {
        return this._inputPlaceholder;
    }

    get addButtonText() {
        return this._addButtonText;
    }

    create() {
        return new this._className(this.titleInput);
    }
}

const TitledEntityCreatorFactory = {

    registeredClassNames: new Map([
        [Card, {
            'faceText': 'Добавить еще одну карточку',
            'inputPlaceholder': 'Введите название карточки',
            'addButtonText': 'Добавить карточку',
        }],
        [Board, {
            'faceText': 'Добавить еще одну колонку',
            'inputPlaceholder': 'Введите название колонки',
            'addButtonText': 'Добавить колонку',
        }]
    ]),

    create(className) {
        let { faceText, inputPlaceholder, addButtonText } = this.registeredClassNames.get(className);
        return new TitledEntityCreator(className, faceText, inputPlaceholder, addButtonText);
    }
}