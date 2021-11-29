(function (window) {
    'use strict';
    
    //"store.js" is in place of "truck.js", just because we want to make code that would fit for stores, not food trucks

    let App = window.App || {};

    function Store(storeId, dataBase) {
        this.storeId = storeId;
        this.dataBase = dataBase;
    }

    Store.prototype.createOrder = function (order) {
        console.log('Adding order for... ' + order.emailAddress);
        this.dataBase.add(order.emailAddress, order);
    }

    Store.prototype.deliverOrder = function (customerId) {
        console.log('Delivering order for... ' + customerId);
        this.dataBase.remove(customerId);
    }

    App.Store = Store;

    window.App = App;

})(window);