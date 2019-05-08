class TitledEntityCreator {
    constructor(className, facadeText, inputPlaceholder, addButtonText) {
        this._className = className;
        this._facadeText = facadeText;
        this._inputPlaceholder = inputPlaceholder;
        this._addButtonText = addButtonText;
        this.addSectionInsidesShown = false;
    }

    get facadeText() {
        return this._facadeText;
    }

    get inputPlaceholder() {
        return this._inputPlaceholder;
    }

    get addButtonText() {
        return this._addButtonText;
    }

    create(title) {
        return new this._className(title);
    }
}

const TitledEntityCreatorFactory = {

    registeredClassNames: new Map([
        [Card, {
            'facadeText': 'Добавить еще одну карточку',
            'inputPlaceholder': 'Введите название карточки',
            'addButtonText': 'Добавить карточку',
        }],
        [Board, {
            'facadeText': 'Добавить еще одну колонку',
            'inputPlaceholder': 'Введите название колонки',
            'addButtonText': 'Добавить колонку',
        }]
    ]),

    create(className) {
        let { facadeText, inputPlaceholder, addButtonText } = this.registeredClassNames.get(className);
        return new TitledEntityCreator(className, facadeText, inputPlaceholder, addButtonText);
    }
}