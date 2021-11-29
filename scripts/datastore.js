(function (window) {
    'use strict';
    
    let App = window.App || {};

    //We will be using a normal data store, not remote, because it's not required for the assignment.

    function DataStore() {
        this.data = {};
    }

    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    };

    DataStore.prototype.get = function (key) {
        return this.data[key];
    };

    DataStore.prototype.getAll = function () {
        return this.data;
    };

    DataStore.prototype.remove = function (key) {
        delete this.data[key];
    };

    App.DataStore = DataStore;
    window.App = App;

})(window);