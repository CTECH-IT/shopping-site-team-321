(function (window) {
    'use strict';
    
    let App = window.App || {};
    let $ = window.jQuery;

    function LocalDataStore() {
        this.data = {};
    }

    function GenOrderNumber() {
        return "order_" + Date.now();
    }

    let orderNumber = "";

    LocalDataStore.prototype.add = function (key, val) {

        // $.each(localStorage, function (key, val) {
        //     console.log("================> " + key + " " + val);
        //     console.log(Object.values(localStorage));
        //     let existingOrders = Object.values(localStorage);
        //     console.log("Checking for existing order " + existingOrders.includes(orderEmailAddress));
        // });

        let existingOrders = Object.values(localStorage);

        Object.keys(existingOrders).forEach(function (k) {
            console.log("=================>")
            localStorage.getItem(k, existingOrders[k]);
            console.log(existingOrders[k], k);
            console.log("=================>")
            console.log("Checking for an email address " + existingOrders[1]);
            console.log("The current shopping cart contents " + existingOrders[orderEmailAddress]);
          });

        if (!existingOrders.includes(orderEmailAddress)) {
            orderNumber = GenOrderNumber();
            console.log("Generating a new order number " + orderNumber);
        };


            localStorage.setItem(this.data[orderNumber], JSON.stringify(this.data));

            this.data[orderNumber] = orderEmailAddress;
            console.log("Inside " + orderEmailAddress);
            console.log("Data order number " + this.data[orderNumber]);
            this.data[key] = val;

        localStorage.setItem(this.data[orderNumber], JSON.stringify(this.data));

        
        // this.data[orderNumber] = orderEmailAddress;
        // console.log("Inside " + orderEmailAddress);
        // this.data[key] = val;

        // localStorage.setItem(this.data[orderNumber], JSON.stringify(this.data));

    };

    LocalDataStore.prototype.get = function (key) {
        return this.data[key];
        //localStorage.getItem(orderNumber);
    };

    LocalDataStore.prototype.getAll = function () {
        return this.data;
    };

    LocalDataStore.prototype.remove = function (key) {
        delete this.data[key];
        //Doesn't have access to order number
        localStorage.removeItem(this.data[orderNumber]);
    };

    App.LocalDataStore = LocalDataStore;
    window.App = App;

})(window);

//Adjust all of this for a localdatastore (took it from regular datastore). Should work pretty similarly?
//Need to give each order a unique order number so it can't be edited. 