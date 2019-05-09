class View extends Observer {
    constructor(controller) {
        super();
        this._controller = controller;
        this._controller.model.registerObserver(this);
    }

    setAttributes(element, attrDict) {
        for (let attr in attrDict) {
            element.setAttribute(attr, attrDict[attr]);
        }
    }

    focusElement(element) {
        setTimeout(() => {
            element.focus();
        }, 0);
    }

    submitTitle(index, title) {
        if (!title.replace(/\s/g,'')) {
            this.meep_moop(document.getElementById(`card-${index}-titleInput`));
        } else {
            this._controller.handleSubmitTitle(index, title);
        }
    }

    meep_moop(element) {
        (async () => {
            element.style.webkitTransform = "rotate(-4deg)";
            await new Promise(r => setTimeout(r, 150));
            element.style.webkitTransform = "rotate(2deg)";
            await new Promise(r => setTimeout(r, 100));
            element.style.webkitTransform = "rotate(0deg)";
        })();
    }

    makeTitleTextareaListItem(entityCreator, index) {
        const titleTextareaElement = document.createElement("textarea");
        this.setAttributes(titleTextareaElement, {
            "id": `textarea-${index}`,
            "class": "title-textarea",
            "placeholder": entityCreator.inputPlaceholder,
            "rows": "2",
        });

        const cardElement = document.createElement("LI");
        this.setAttributes(cardElement, {
            "id": `card-${index}-titleInput`,
            "class": "card",    
        });

        if (!entityCreator.addSectionInsidesShown) {
            cardElement.setAttribute("style", "display:none;");
        } else {
            this.focusElement(titleTextareaElement);
        }

        cardElement.appendChild(titleTextareaElement);

        return cardElement;
    }

    makeAddSectionInsidesListItem(entityCreator, index) {
        const addButtonElement = document.createElement("button");
        this.setAttributes(addButtonElement, {
            "id": `addBtn-${index}`,
            "class": "add-btn",
            "type": "submit",
        });

        addButtonElement.innerText = entityCreator.addButtonText;
        addButtonElement.addEventListener("click", (e) => {
            let title = document.getElementById(`textarea-${index}`).value;
            this.submitTitle(index, title);
        });

        const crossInputElement = document.createElement("input");
        this.setAttributes(crossInputElement, {
            "id": `cross-${index}`,
            "class": "svg-ico cross-ico",
            "type": "image",
            "alt": "X",
            "src": "img/cross.svg",
        });
        crossInputElement.addEventListener("click", (e) =>
            this._controller.handleCrossClick(index));

        const insidesElement = document.createElement("li");
        const hideInsides = !entityCreator.addSectionInsidesShown;
        this.setAttributes(insidesElement, {
            "id": `card-${index}-insides`,
            "class": "add-section-insides",
            "style": hideInsides ? "display:none;" : "",    
        });
        insidesElement.appendChild(addButtonElement);
        insidesElement.appendChild(crossInputElement);

        return insidesElement;
    }


    makeCardsElement(cards, entityCreator, index) {
        const cardsElement = document.createElement("OL");
        this.setAttributes(cardsElement, {
            "class": "cards",
            "id": `cards-${index}`,
        });
        
        for (let j = 0; j < cards.length; j ++) {
            let cardElement = document.createElement("LI");
            this.setAttributes(cardElement, {
                "id": `card-${index}-${j}`,
                "class": "card",
                "draggable": "true",
            });
            cardElement.innerText = cards[j].title;

            cardsElement.appendChild(cardElement);
        }

        if (cards.length === 0 && !entityCreator.addSectionInsidesShown) {
            cardsElement.setAttribute("style", "display:none;");
        }

        const titleTextarea = this.makeTitleTextareaListItem(entityCreator, index)
        const addSectionInsides = this.makeAddSectionInsidesListItem(entityCreator, index)
        cardsElement.appendChild(titleTextarea);
        cardsElement.appendChild(addSectionInsides);

        return cardsElement;
    }

    makeAddSectionFacadeElement(entityCreator, index) {
        const plusInputElement = document.createElement("input");
        this.setAttributes(plusInputElement, {
            "class": "svg-ico plus-ico",
            "type": "image",
            "alt": "+",
            "src": "img/plus.svg",    
        });

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

        facadeElement.addEventListener("click", (e) =>
            this._controller.handleFacadeClick(index));

        return facadeElement;
    }

    makeBoardElement(entityManager, index) {
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

        const cardsElement = this.makeCardsElement(cards, entityManager.childEntityCreator, index);
        const addSectionFacadeElement = this.makeAddSectionFacadeElement(entityManager.childEntityCreator, index);

        boardElement.appendChild(cardsElement);
        boardElement.appendChild(addSectionFacadeElement);

        return boardElement;
    }

    update(data) {

        const wall = document.getElementsByClassName("wall")[0];
        while (wall.firstChild) {
            wall.removeChild(wall.firstChild);
        }

        for (let i = 0; i < data.boards.length; i++) {
            let board = data.boards[i];
            wall.appendChild(this.makeBoardElement(board, i));
        }

        wall.appendChild(this.makeBoardElement(data.boardManager, -1));
    }
}