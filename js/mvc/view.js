class View extends Observer {
    constructor(controller) {
        super();
        this._controller = controller; 
        this._controller.model.registerObserver(this);
        
        this._wall = document.getElementsByClassName('wall')[0];
    }

    update(data) {
        console.log(data.boardManager);
        console.log(data.boards);
    }
}
