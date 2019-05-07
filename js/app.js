function main() {
    const model = new Model();
    const controller = new Controller(model);
    const view = new View(controller);
}

main();