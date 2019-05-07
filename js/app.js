function main() {
    let boards = [
        new Board("ora ora", [
            new Card("Complete mock-up for client website"),
            new Card("Email mock-up to client for feedback"),
            new Card("Update personal website header background image"),
            new Card("Update personal website heading fonts"),
            new Card("Add google map to personal website"),
            new Card("Begin draft of CSS Grid article"),
            new Card("Read new CSS-Tricks articles"),
            new Card("Read new Smashing Magazine articles"),
            new Card("Read other bookmarked articles"),
            new Card("Look through portfolios to gather inspiration"),
            new Card("Create something cool for CodePen"),
        ]),
    ];
    const model = new Model(boards);
    const controller = new Controller(model);
    const view = new View(controller);

    controller.model.notifyAll();
}

main();