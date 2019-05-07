class Observer {
    update() {
        this.observers.forEach((observer) => {
            observer.update(this);
        });
    }
}
