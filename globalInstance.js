var instance = (function (Factory) {
    return new Factory();
})(function () {
    var stores = [];
    function Events() { }

    Events.prototype.registerStore = function (store) {
        stores.push(store);
    };

    Events.prototype.dispatch = function (name, target) {
        stores.forEach((s) => {
            s.register(name, target);
        });
        console.log(stores);
    };

    return Events;
});

export default instance;

