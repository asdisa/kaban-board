class View extends Observer {
    constructor(controller) {
        super();
        this._controller = controller; 
        this._controller.model.registerObserver(this);
    }
}
