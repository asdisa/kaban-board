class Column extends TitledEntity {
    constructor(title) {
        super(title);
        this._cards = [];
    }

    get cards() {
        return cards;
    }

    addCard(card) {
        this._cards.push(card);
    }
}