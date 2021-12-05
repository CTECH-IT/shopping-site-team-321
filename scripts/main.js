(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-shopping-order="form"]';
    const CHECKLIST_SELECTOR = '[data-shopping-order="checklist"]';

    let App = window.App;
    let Store = App.Store;
    let DataStore = App.DataStore;
    let Validation = App.Validation;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;

    let myStore = new Store('1234', new DataStore());
    let checkList = new CheckList(CHECKLIST_SELECTOR);

    let formHandler = new FormHandler(FORM_SELECTOR);

     //when a checkbox is clicked, call "DeliverOrder" on myTruck
     checkList.addClickHandler(myStore.deliverOrder.bind(myStore));

     formHandler.addSubmitHandler(function (data) {
        myStore.createOrder.call(myStore, data);
        checkList.addRow.call(checkList, data);
    });

    formHandler.addInputHandler(Validation.isCompanyEmail);

    window.myStore = myStore;

})(window);