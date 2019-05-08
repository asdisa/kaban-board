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
        if (!title) {
            this.meep_moop();
        } else {
            this._controller.handleSubmitTitle(index, title);
        }
    }

    meep_moop(index) {
        let textareaElement = document.getElementById(`textarea-${index}`);
        console.log(textareaElement);
        (async () => {
            textareaElement.style.webkitTransform = "rotate(-4deg)";
            await new Promise(r => setTimeout(r, 150));
            textareaElement.style.webkitTransform = "rotate(2deg)";
            await new Promise(r => setTimeout(r, 100));
            textareaElement.style.webkitTransform = "rotate(0deg)";
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

        titleTextareaElement.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
                console.log("enter")
                this.submitTitle(index, titleTextareaElement.value);
            }
        });

        const cardElement = document.createElement("LI");
        cardElement.setAttribute("class", "card");
        cardElement.appendChild(titleTextareaElement);

        if (!entityCreator.addSectionInsidesShown) {
            cardElement.setAttribute("style", "display:none;");
        } else {
            this.focusElement(titleTextareaElement);
        }

        return cardElement;
    }

    makeAddSectionInsidesListItem(entityCreator, index) {
        const addButtonElement = document.createElement("button");
        this.setAttributes(addButtonElement, {
            "id": `add-${index}`,
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
        insidesElement.setAttribute("class", "add-section-insides");
        insidesElement.appendChild(addButtonElement);
        insidesElement.appendChild(crossInputElement);

        if (!entityCreator.addSectionInsidesShown) {
            insidesElement.setAttribute("style", "display:none;");
        }

        return insidesElement;
    }


    makeCardsElement(cards, entityCreator, index) {
        const cardsElement = document.createElement("OL");
        cardsElement.setAttribute("class", "cards");

        for (let card of cards) {
            let cardElement = document.createElement("LI");
            cardElement.setAttribute("class", "card");
            cardElement.setAttribute("draggable", "true");
            cardElement.innerText = card.title;

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