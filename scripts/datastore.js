(function (window) {
    'use strict';
    
    let App = window.App || {};

    //We will be using a normal data store, not remote, because it's not required for the assignment.

    function DataStore() {
        this.data = {};
    }

    App.DataStore = DataStore;
    window.App = App;

})(window);