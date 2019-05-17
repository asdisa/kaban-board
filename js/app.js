function main() {
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
