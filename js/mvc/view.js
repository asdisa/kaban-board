class View extends Observer {
    constructor(controller) {
        super();
        this._controller = controller;
        this._controller.model.registerObserver(this);
    }

    makeCardsElement(cards) {
        const cardsElement = document.createElement("OL");
        cardsElement.setAttribute("class", "cards");
        for (let card of cards) {
            let cardElement = document.createElement("LI");
            cardElement.setAttribute("class", "card");
            cardElement.setAttribute("draggable", "true");
            cardElement.innerText = card.title;

            cardsElement.appendChild(cardElement);
        }
        return cardsElement;
    }

    makeTitleTextareaListItem(entityCreator, index) {
        const titleTextareaElement = document.createElement("textarea");
        titleTextareaElement.setAttribute("id", `textarea-${index}`);
        titleTextareaElement.setAttribute("class", "title-textarea");
        titleTextareaElement.setAttribute("placeholder", entityCreator.titleTextareaElementPlaceholder)
        titleTextareaElement.setAttribute("rows", "2");
        
        const cardElement = document.createElement("LI");
        cardElement.appendChild(titleTextareaElement);

        if (!entityCreator.addSectionInsidesShown) {
            cardElement.setAttribute("style", "display:none;");
        }

        return cardElement;
    }

    makeAddSectionInsidesListItem(entityCreator, index) {
        const addButtonElement = document.createElement("button");
        addButtonElement.setAttribute("id", `add-${index}`);
        addButtonElement.setAttribute("class", "add-btn");
        addButtonElement.setAttribute("type", "submit");
        addButtonElement.innerText = entityCreator.addButtonText;
        
        const crossInputElement = document.createElement("input");
        crossInputElement.setAttribute("id", `cross-${index}`);
        crossInputElement.setAttribute("class", "svg-ico cross-ico");
        crossInputElement.setAttribute("type", "image");
        crossInputElement.setAttribute("alt", "X");
        crossInputElement.setAttribute("src", "img/cross.svg");
        
        const insidesElement = document.createElement("li");
        insidesElement.setAttribute("class", "add-section-insides");
        insidesElement.appendChild(addButtonElement);
        insidesElement.appendChild(crossInputElement);

        if (!entityCreator.addSectionInsidesShown) {
            insidesElement.setAttribute("style", "display:none;");
        } 

        return insidesElement;
    }

    makeAddSectionFacadeElement(entityCreator, index) {
        const plusInputElement = document.createElement("input");
        plusInputElement.setAttribute("id", `plus-${index}`);
        plusInputElement.setAttribute("class", "svg-ico plus-ico");
        plusInputElement.setAttribute("type", "image");
        plusInputElement.setAttribute("alt", "+");
        plusInputElement.setAttribute("src", "img/plus.svg");
        
        const facadeTextElement = document.createElement("p");
        facadeTextElement.setAttribute("class", "add-section-facade-text");
        facadeTextElement.innerText = entityCreator.facadeText;
        
        const facadeElement = document.createElement("div");
        facadeElement.setAttribute("class", "add-section-facade");
        facadeElement.appendChild(plusInputElement);
        facadeElement.appendChild(facadeTextElement);

        if (entityCreator.addSectionInsidesShown) {
            facadeElement.setAttribute("style", "display:none;");
        }

        return facadeElement;
    }

    makeBoardElement(entityManager, index) {
        console.log(entityManager);
        const boardElement = document.createElement("div");
        boardElement.setAttribute("class", "board");

        let cards = [];
        if (entityManager.title != null) {
            cards = entityManager.childEntities;

            const titleElement = document.createElement("h3");
            titleElement.setAttribute("class", "board-title");
            titleElement.innerText = entityManager.title;

            boardElement.appendChild(titleElement);
        }
        
        const titleTextareaListItem = this.makeTitleTextareaListItem(entityManager.childEntityCreator, index);
        const addSectionInsidesListItem = this.makeAddSectionInsidesListItem(entityManager.childEntityCreator, index);
        
        const cardsElement = this.makeCardsElement(cards);
        cardsElement.appendChild(titleTextareaListItem);
        cardsElement.appendChild(addSectionInsidesListItem);

        const addSectionFacadeElement = this.makeAddSectionFacadeElement(entityManager.childEntityCreator, index);

        boardElement.appendChild(cardsElement);
        boardElement.appendChild(addSectionFacadeElement);
        
        return boardElement;
    }

    update(data) {

        const wall = document.getElementsByClassName("wall")[0];
        
        for (let i = 0; i < data.boards.length; i++) {
            let board = data.boards[i];
            wall.appendChild(this.makeBoardElement(board, i));
        }

        wall.appendChild(this.makeBoardElement(data.boardManager, "boardManager"));
    }
}