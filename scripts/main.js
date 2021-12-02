(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-shopping-order="form"]';

    let App = window.App;
    let Store = App.Store;
    let DataStore = App.DataStore;
    let Validation = App.Validation;
    let FormHandler = App.FormHandler;

    let myStore = new Store('1234', new DataStore());

    let formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(myStore.createOrder.bind(myStore));
    console.log(formHandler);

    formHandler.addInputHandler(Validation.isCompanyEmail);

    window.myStore = myStore;

})(window);