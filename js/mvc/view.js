class View extends Observer {
    constructor(controller) {
        super();
        this._controller = controller;
        this._controller.model.registerObserver(this);
    }

    makeCardsElement(cards) {
        const cards_element = document.createElement("OL");
        cards_element.setAttribute("class", "cards");
        for (let card of cards) {
            let card_element = document.createElement("LI");
            card_element.setAttribute("class", "card");
            card_element.setAttribute("draggable", "true");
            card_element.innerText = card.title;

            cards_element.appendChild(card_element);
        }
        return cards_element;
    }

    makeAddFormListItem(entityCreator, index) {
        const card_element = document.createElement("LI");

        let inputType = "text";
        if (!entityCreator.addSectionInsidesShown) {
            inputType = "hidden";
            card_element.setAttribute("style", "display:none;");
        }
;
        const input = document.createElement("input");
        input.setAttribute("class", "add-form-title-input");
        input.setAttribute("placeholder", entityCreator.inputPlaceholder)
        input.setAttribute("type", inputType);
        
        const form = document.createElement("form")
        form.setAttribute("id", `form-${index}`);
        form.appendChild(input);
        
        card_element.appendChild(form);
        return card_element;
    }

    makeAddSectionInsidesListItem(entityCreator, index) {
        const addButtonElement = document.createElement("button");
        addButtonElement.setAttribute("class", "add-btn");
        addButtonElement.setAttribute("type", "submit");
        addButtonElement.setAttribute("form", `form-${index}`);
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
        
        const addFormListItem = this.makeAddFormListItem(entityManager.childEntityCreator, index);
        const addSectionInsidesListItem = this.makeAddSectionInsidesListItem(entityManager.childEntityCreator, index);
        
        const cardsElement = this.makeCardsElement(cards);
        cardsElement.appendChild(addFormListItem);
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

        wall.appendChild(this.makeBoardElement(data.boardManager, "board-manager"));
    }
}
