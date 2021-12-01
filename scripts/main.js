(function (window) {
    'use strict';

    let App = window.App;
    let Store = App.Store;
    let DataStore = App.DataStore;
    let Validation = App.Validation;

    let myStore = new Store('1234', new DataStore());

    formHandler.addInputHandler(Validation.isCompanyEmail);

    window.myStore = myStore;

})(window);