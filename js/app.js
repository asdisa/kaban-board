function main() {
  const storedBoards = LocalStorageManager.loadBoards();
  const boards = storedBoards != null
    ? storedBoards
    : LocalStorageManager.deserializeBoards(initialState.boards);

  const model = new Model(boards);
  const controller = new Controller(model);
  const view = new View(controller);

  controller.model.notifyAll();
}

main();
