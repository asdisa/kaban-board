class Board extends TitledEntity {
    constructor(title, cards=[]) {
        super(title);
        this._cards = cards;
        this._cardCreator = TitledEntityCreatorFactory.create(Card)
    }

    get cards() {
        return cards;
    }

    get cardCreator() {
        return this._cardCreator;
    }

    placeCard(card, index=null) {
        index = index != null ? index : this.cards.lenght; 
        this._cards.splice(index, 0, card);
    }

    addCard() {
        this.placeCard(this.cardCreator.create());
    }
}