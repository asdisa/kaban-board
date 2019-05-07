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

    makeAddFormListItem(entityCreator, id) {
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
        
        const form = document.createElement("formform")
        form.setAttribute("id", id);
        form.appendChild(input);
        
        card_element.appendChild(form);
        return card_element;
    }

    makeAddSectionInsidesListItem(entityCreator, id) {
        const addButtonElement = document.createElement("button");
        addButtonElement.setAttribute("class", "add-btn");
        addButtonElement.setAttribute("type", "submit");
        addButtonElement.setAttribute("form", id);
        addButtonElement.innerText = entityCreator.addButtonText;
        
        const crossImgElement = document.createElement("img");
        crossImgElement.setAttribute("src", "img/cross.svg");
        
        const insidesElement = document.createElement("li");
        insidesElement.setAttribute("class", "add-section-insides");
        insidesElement.appendChild(addButtonElement);
        insidesElement.appendChild(crossImgElement);

        if (!entityCreator.addSectionInsidesShown) {
            insidesElement.setAttribute("style", "display:none;");
        } 

        return insidesElement;
    }

    makeAddSectionFacadeElement(entityCreator, id) {
        const plusImgElement = document.createElement("img");
        plusImgElement.setAttribute("src", "img/plus.svg");
        
        const facadeTextElement = document.createElement("p");
        facadeTextElement.setAttribute("class", "add-section-facade-text");
        facadeTextElement.innerText = entityCreator.facadeText;
        
        const facadeElement = document.createElement("div");
        facadeElement.setAttribute("class", "add-section-facade");
        facadeElement.appendChild(plusImgElement);
        facadeElement.appendChild(facadeTextElement);

        if (entityCreator.addSectionInsidesShown) {
            facadeElement.setAttribute("style", "display:none;");
        }

        return facadeElement;
    }

    makeBoardElement(entityManager, id) {
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
        
        const addFormListItem = this.makeAddFormListItem(entityManager.childEntityCreator, id);
        const addSectionInsidesListItem = this.makeAddSectionInsidesListItem(entityManager.childEntityCreator, id);
        
        const cardsElement = this.makeCardsElement(cards);
        cardsElement.appendChild(addFormListItem);
        cardsElement.appendChild(addSectionInsidesListItem);

        const addSectionFacadeElement = this.makeAddSectionFacadeElement(entityManager.childEntityCreator, id);

        boardElement.appendChild(cardsElement);
        boardElement.appendChild(addSectionFacadeElement);
        
        return boardElement;
    }

    update(data) {

        const wall = document.getElementsByClassName("wall")[0];
        
        for (let i = 0; i < data.boards.length; i++) {
            let board = data.boards[i];
            let id = `card-manager-${i}`;
            wall.appendChild(this.makeBoardElement(board, id));
        }

        wall.appendChild(this.makeBoardElement(data.boardManager, "board-manager"));



    }
}
