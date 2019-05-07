class Model {
    constructor(boards) {    
        this.observers = []; 

        this.heading = "boards";

        this.registerObserver = (observer) => {
            this.observers.push(observer);
        }

        this.notifyAll = () => {
            this.observers.forEach((observer) => {
                observer.update(this);
            });
        }
    }
}
