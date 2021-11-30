(function (window) {
    'use strict';

    let App = window.App;
    let Store = App.Store;
    let DataStore = App.DataStore;

    let myStore = new Store('1234', new DataStore());

    window.myStore = myStore;

})(window);