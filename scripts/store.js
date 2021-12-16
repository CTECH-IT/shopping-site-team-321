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

    Store.prototype.printOrders = function () {
        let customerIdArray = Object.keys(this.dataBase.getAll());

        console.log('Store #' + this.storeId + ' has pending orders:');

        customerIdArray.forEach(function (id) {
            console.log(this.dataBase.get(id));
        }.bind(this))}

        Store.prototype.updatePage = function (Url) {
            window.jQuery.get(Url, function(data) {
                //This is where I have to parse out the "FashionBoutique" data 
                //Add a click handler to each entry
                //The final step is writing the inner html with the finished content.
                //let readableData = JSON.stringify(data);
                //document.getElementById("checklist").innerHTML = readableData;
                document.getElementById("checklist").innerHTML = data;
                return (data);
            })
        };

    App.Store = Store;

    window.App = App;

})(window);