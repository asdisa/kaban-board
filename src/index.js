import './css/styles.css';
import vkIcon from './img/vk-icon.ico';
import LocalStorageManager from './js/helpers/localStorageManager';
import Model from './js/mvc/model';
import Controller from './js/mvc/controller';
import View from './js/mvc/view';
import initialState from './js/data/initialState';

function main() {
  const favicon = document.createElement('link');
  favicon.setAttribute('rel', 'shortcut icon');
  favicon.setAttribute('href', vkIcon);

  const head = document.querySelector('head');
  head.appendChild(favicon);


  const storedState = LocalStorageManager.loadState();

  const state = storedState != null
    ? storedState
    : LocalStorageManager.decodeState(JSON.stringify(initialState));

  const model = new Model(state);
  const controller = new Controller(model);
  const view = new View(controller);

  controller.model.notifyAll();
}

main();
