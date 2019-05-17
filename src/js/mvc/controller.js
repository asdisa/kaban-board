import Model from './model';
import LocalStorageManager from '../helpers/localStorageManager';
import TitledEntityManager from '../components/titledEntityManager';
import State from '../components/state';
import { parseIntOrNull, getElementIndices, has } from '../helpers/general';
import { scrollToBottom } from '../helpers/viewHelpers';
import initialState from '../data/initialState';


/* eslint-disable class-methods-use-this */
/**
 * Major pillar of application, responsible for handling events passed from View
 * via changing the state inside Model.
 */
export default class Controller {
  /**
   * Constructs a Controller corresponding to `model`.
   *
   * @param {Model} model Corresponding Model
   */
  constructor(model) {
    this._model = model;
    this._draggedElement = null;
  }

  get model() {
    return this._model;
  }

  updatePreviousState() {
    // Deep cloning
    this.model.previousState = LocalStorageManager.decodeState(LocalStorageManager.encode(this.model.state));
  }

  saveStateToLocalStorage() {
    LocalStorageManager.saveState(this.model.state);
  }

  /**
   * Loads `state` into model.
   *
   * @param {State} state New state
   */
  loadState(state) {
    if (state !== this.model.state) {
      this.model.state = state;
      this.model.notifyAll();
    }
  }

  loadStateFromLocalStorage() {
    this.updatePreviousState();
    this.loadState(LocalStorageManager.loadState());
  }

  loadInitialState() {
    this.updatePreviousState();
    this.loadState(LocalStorageManager.decodeState(JSON.stringify(initialState)));
  }

  loadPreviousState() {
    this.loadState(this.model.previousState);
  }

  /**
   * Constructs an object with Boards corresponding to their indices
   * and Wall corresponding to null.
   *
   * @returns {Object}
   */
  getEntityManagersDict() {
    const entityManagersDict = { null: this.model.wall };
    for (let i = 0; i < this.model.boards.length; i += 1) {
      entityManagersDict[i] = this.model.boards[i];
    }
    return entityManagersDict;
  }

  /**
   * Retreives EntityManager with `parentIndex` index.
   *
   * @returns {TitledEntityManager}
   */
  getEntityManagerWithIndex(parentIndex) {
    return this.getEntityManagersDict()[parentIndex];
  }

  /**
   * Computes index of the last child of entityMagader
   * with `parentIndex` index.
   *
   * @returns {TitledEntityManager}
   */
  lastChildIndex(parentIndex) {
    return this.getEntityManagersDict()[parentIndex].childEntities.length - 1;
  }

  deleteEntity(parentIndex, childIndex) {
    this.updatePreviousState();
    const entityManager = this.getEntityManagerWithIndex(parentIndex);
    entityManager.deleteChildEntityWithIndex(childIndex);
  }

  incertEntity(parentIndex, childIndex, title) {
    const entityManager = this.getEntityManagerWithIndex(parentIndex);
    const entity = entityManager.makeChildEntity(title);
    entityManager.incertChildEntity(entity, childIndex);
    if (has(entityManager, 'insidesShown')) {
      entityManager.insidesShown = false;
    }
  }

  addChildEntity(parentIndex, title) {
    this.updatePreviousState();
    this.incertEntity(parentIndex, null, title);
    this.model.notifyAll();
  }

  deleteEntityAndUpdateView(entityIndices) {
    const [parentIndex, childIndex] = entityIndices;
    this.deleteEntity(parentIndex, childIndex);
    this.model.notifyAll();
  }

  handleFacadeClick(e) {
    const parentIndex = parseIntOrNull(e.target.id.split('-')[1]);
    const entityManagerDict = this.getEntityManagersDict();
    for (const index of Object.keys(entityManagerDict)) {
      entityManagerDict[index].insidesShown = index === String(parentIndex);
    }

    this.model.notifyAll();
  }

  handleCrossClick(e) {
    const parentIndex = parseIntOrNull(e.target.id.split('-')[1]);
    this.getEntityManagerWithIndex(parentIndex).insidesShown = false;
    this.model.notifyAll();
  }

  handleDragStart(e) {
    const targetElement = e.target;
    this._draggedElement = targetElement;

    const ghostElement = targetElement.cloneNode(true);
    ghostElement.classList.add('ghost');
    document.body.appendChild(ghostElement);
    e.dataTransfer.setDragImage(ghostElement, 0, 0);

    targetElement.classList.add('empty-slot');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', targetElement.innerHTML);
  }

  handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  handleDragEnter(e) {
    const targetElement = e.target;
    if (targetElement.id) {
      targetElement.classList.add('over');
    }
  }

  handleDragLeave(e) {
    const targetElement = e.target;
    if (targetElement.id) {
      targetElement.classList.remove('over');
    }
  }

  handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    const targetElement = e.target;
    if (this._draggedElement !== targetElement && targetElement.id) {
      let [targetParentIndex, targetChildIndex] = getElementIndices(targetElement);
      if (targetParentIndex == null) {
        [targetParentIndex, targetChildIndex] = [targetChildIndex, null];
      }
      const [draggedParentIndex, draggedChildIndex] = getElementIndices(this._draggedElement);
      const draggedTitle = this._draggedElement.innerHTML;

      this.deleteEntity(draggedParentIndex, draggedChildIndex);
      this.incertEntity(targetParentIndex, targetChildIndex, draggedTitle);
      this.model.notifyAll();
      scrollToBottom(document.getElementById(`cards-${targetParentIndex}`));
    }

    return false;
  }

  handleDragEnd(e) {
    e.target.classList.remove('empty-slot');
    const cardElements = document.querySelectorAll('.card');
    [].forEach.call(cardElements, (card) => {
      card.classList.remove('over');
    });
  }
}
