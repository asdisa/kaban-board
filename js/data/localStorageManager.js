class LocalStorageManager {
    static serializeBoards(boards) {
        let serializedBoards = [];
        for (let board of boards) {
            let serializedCards = [];
            for (let card of board.childEntities) {
                serializedCards.push({ "title": card.title });
            }

            let serializedBoard = {
                "title": board.title,
                "cards": serializedCards
            };
            serializedBoards.push(serializedBoard);
        }
        return serializedBoards;
    }

    static deserializeBoards(serializedBoards) {
        let boards = []
        for (let serializeBoard of serializedBoards) {
            let cards = [];
            for (let serializedCard of serializeBoard.cards) {
                cards.push(new Card(serializedCard.title));
            }

            let board = new Board(serializeBoard.title, cards);
            boards.push(board);
        }
        return boards;
    }

    static saveBoards(boards) {
        localStorage.setItem('boards', JSON.stringify(LocalStorageManager.serializeBoards(boards)));
    }

    static loadBoards() {
        const parsed = JSON.parse(localStorage.getItem('boards'));
        return parsed == null ? parsed : LocalStorageManager.deserializeBoards(parsed);
    }

    static removeBoardsFromStorage() {
        localStorage.removeItem('boards');
    }
}