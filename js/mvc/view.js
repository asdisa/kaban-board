class View extends Observer {
  constructor(controller) {
    super();
    this._controller = controller;
    this._controller.model.registerObserver(this);
  }

  addChildEntity(parentIndex, title) {
    const titleWithoutWitespaces = title.replace(/\s/g, '');
    if (!titleWithoutWitespaces) {
      wiggleElement(document.getElementById(`titleInput-${parentIndex}`));
    } else {
      this._controller.addChildEntity(parentIndex, title);
      const addedChildIndex = this._controller.lastChildIndex(parentIndex);
      focusElement(document.getElementById(`entity-${String(parentIndex)}-${addedChildIndex}`));
    }
  }

  deleteEntityById(elementId) {
    const [elementType, parentIndex, childIndex] = elementId.split('-');
    if (elementType === 'entity' && childIndex !== 'null') {
      const entityIndices = [parseIntOrNull(parentIndex), parseIntOrNull(childIndex)];
      this._controller.deleteEntityAndUpdateView(entityIndices);
    } else {
      wiggleElement(document.getElementById(elementId));
    }
  }

  makeTitleTextareaListItem(entityManager, index) {
    const childClass = entityManager.childEntityClass;
    const titleTextareaElement = document.createElement('textarea');
    setAttributes(titleTextareaElement, new Map([
      ['id', `textarea-${index}`],
      ['class', 'title-textarea'],
      ['placeholder', elementText.entityAdder.get(childClass).inputPlaceholder],
      ['rows', '2'],
    ]));
    titleTextareaElement.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.addChildEntity(index, titleTextareaElement.value);
      }
    });

    const cardElement = document.createElement('LI');
    setAttributes(cardElement, new Map([
      ['id', `titleInput-${index}`],
      ['class', 'card'],
    ]));

    if (!entityManager.insidesShown) {
      cardElement.setAttribute('style', 'display:none;');
    } else {
      focusElement(titleTextareaElement);
    }

    cardElement.appendChild(titleTextareaElement);

    return cardElement;
  }

  makeAddSectionInsidesListItem(entityManager, index) {
    const childClass = entityManager.childEntityClass;
    const addButtonElement = document.createElement('button');
    setAttributes(addButtonElement, new Map([
      ['id', `addBtn-${index}`],
      ['class', 'add-btn'],
      ['type', 'submit'],
    ]));

    addButtonElement.innerText = elementText.entityAdder.get(childClass).addButtonText;
    addButtonElement.addEventListener('click', (e) => {
      e.stopPropagation();
      const title = document.getElementById(`textarea-${index}`).value;
      this.addChildEntity(index, title);
    });

    const crossInputElement = document.createElement('input');
    setAttributes(crossInputElement, new Map([
      ['id', `cross-${index}`],
      ['class', 'svg-ico cross-ico unselectable'],
      ['type', 'image'],
      ['alt', 'X'],
      ['src', 'img/cross.svg'],
    ]));

    const insidesElement = document.createElement('li');
    setAttributes(insidesElement, new Map([
      ['id', `insides-${index}`],
      ['class', 'add-section-insides last-card unselectable'],
      ['style', !entityManager.insidesShown ? 'display:none;' : ''],
    ]));
    insidesElement.appendChild(addButtonElement);
    insidesElement.appendChild(crossInputElement);
    insidesElement.addEventListener('click', e => this._controller.handleCrossClick(e));

    return insidesElement;
  }


  makeCardsElement(cards, entityManager, index) {
    const cardsElement = document.createElement('OL');
    setAttributes(cardsElement, new Map([
      ['id', `cards-${index}`],
      ['class', 'cards'],
    ]));

    for (let j = 0; j < cards.length; j += 1) {
      const cardElement = document.createElement('LI');
      setAttributes(cardElement, new Map([
        ['id', `entity-${index}-${j}`],
        ['class', `card${j === cards.length - 1 && !entityManager.insidesShown ? ' last-card' : ''}`],
        ['draggable', 'true'],
        ['tabindex', '-1'],
      ]));
      cardElement.addEventListener('click', (e) => {
        e.stopPropagation();
        e.target.focus();
      });
      cardElement.addEventListener('keydown', (e) => {
        e.stopPropagation();
        if (e.key === 'Delete') {
          this.deleteEntityById(e.target.id);
        }
      });

      cardElement.addEventListener('dragstart',
        e => this._controller.handleDragStart(e), false);
      cardElement.addEventListener('dragenter',
        e => this._controller.handleDragEnter(e), false);
      cardElement.addEventListener('dragover',
        e => this._controller.handleDragOver(e), false);
      cardElement.addEventListener('dragleave',
        e => this._controller.handleDragLeave(e), false);
      cardElement.addEventListener('drop',
        e => this._controller.handleDrop(e), false);
      cardElement.addEventListener('dragend',
        e => this._controller.handleDragEnd(e), false);
      cardElement.innerText = cards[j].title;

      cardsElement.appendChild(cardElement);
    }

    if (cards.length === 0 && !entityManager.insidesShown) {
      cardsElement.setAttribute('style', 'display:none;');
    }
    const titleTextarea = this.makeTitleTextareaListItem(entityManager, index);
    const addSectionInsides = this.makeAddSectionInsidesListItem(entityManager, index);
    cardsElement.appendChild(titleTextarea);
    cardsElement.appendChild(addSectionInsides);

    return cardsElement;
  }

  makeFacadeElement(entityManager, index) {
    const childClass = entityManager.childEntityClass;
    const plusInputElement = document.createElement('input');
    setAttributes(plusInputElement, new Map([
      ['id', `plus-${index}`],
      ['class', 'svg-ico plus-ico unselectable'],
      ['type', 'image'],
      ['alt', '+'],
      ['src', 'img/plus.svg'],
    ]));

    const facadeTextElement = document.createElement('p');
    facadeTextElement.setAttribute('class', 'add-section-facade-text unselectable');
    facadeTextElement.innerText = elementText.entityAdder.get(childClass).facadeInnerText;

    const facadeElement = document.createElement('div');
    setAttributes(facadeElement, new Map([
      ['id', `facade-${index}`],
      ['class', 'add-section-facade'],
    ]));

    if (index !== null) {
      facadeElement.addEventListener('dragenter',
        e => this._controller.handleDragEnter(e), true);
      facadeElement.addEventListener('dragover',
        e => this._controller.handleDragOver(e), true);
      facadeElement.addEventListener('dragleave',
        e => this._controller.handleDragLeave(e), true);
      facadeElement.addEventListener('drop',
        e => this._controller.handleDrop(e), true);
      facadeElement.addEventListener('dragend',
        e => this._controller.handleDragEnd(e), true);
    }

    facadeElement.appendChild(plusInputElement);
    facadeElement.appendChild(facadeTextElement);

    if (entityManager.insidesShown) {
      facadeElement.setAttribute('style', 'display:none;');
    }

    facadeElement.addEventListener('click', (e) => {
      this._controller.handleFacadeClick(e);
      const addedCardIndex = e.target.id.split('-')[1];
      scrollToBottom(document.getElementById(`cards-${addedCardIndex}`));
    });

    return facadeElement;
  }

  makeBoardElement(entityManager, index) {
    const boardElement = document.createElement('div');
    setAttributes(boardElement, new Map([
      ['id', `entity-null-${index}`],
      ['class', 'board'],
      ['tabindex', '-2'],
    ]));
    boardElement.addEventListener('click', (e) => {
      e.stopPropagation();
      e.target.focus();
    });
    boardElement.addEventListener('keydown', (e) => {
      e.stopPropagation();
      const targeElementType = e.target.id.split('-')[0];
      if (e.key === 'Delete' && targeElementType !== 'textarea') {
        this.deleteEntityById(e.target.id);
      }
    });

    let cards = [];
    if (entityManager.title != null) {
      cards = entityManager.childEntities;

      const titleElement = document.createElement('h3');
      titleElement.setAttribute('class', 'board-title unselectable');
      titleElement.innerText = entityManager.title;

      boardElement.appendChild(titleElement);
    }

    const cardsElement = this.makeCardsElement(cards, entityManager, index);
    const facadeElement = this.makeFacadeElement(entityManager, index);

    boardElement.appendChild(cardsElement);
    boardElement.appendChild(facadeElement);

    return boardElement;
  }

  update(data) {
    const wallElement = document.getElementsByClassName('wall')[0];
    while (wallElement.firstChild) {
      wallElement.removeChild(wallElement.firstChild);
    }

    for (let i = 0; i < data.boards.length; i += 1) {
      const board = data.boards[i];
      wallElement.appendChild(this.makeBoardElement(board, i));
    }

    wallElement.appendChild(this.makeBoardElement(data.boardManager, null));

    document.onkeydown = (e) => {
      if ((window.navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        switch (e.keyCode) {
          case 83:
            this._controller.saveBoardsStateToLocalStorage();
            break;
          case 90:
            this._controller.loadPreviousBoardsState();
            break;
          case 76:
            this._controller.loadBoardsStateFromLocalStorage();
            break;
          case 73:
            this._controller.loadInitialBoardsState();
            break;
          default:
            break;
        }
      }
    };
  }
}
