(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-shopping-order="form"]';
    const CHECKLIST_SELECTOR = '[data-shopping-order="checklist"]';
    const SERVER_URL = 'https://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';

    let App = window.App;
    let Store = App.Store;
    let DataStore = App.DataStore;
    let RemoteDataStore = App.RemoteDataStore;
    let LocalDataStore = App.LocalDataStore;
    let Validation = App.Validation;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;

    //Runs when the manager page goes up- how to change that?
    // let localStorageClear = false;
    // if (!localStorageClear) {
    //     localStorage.clear()
    //     localStorageClear = true;
    // };

    //The remote database where orders are stored
    let remoteDS = new RemoteDataStore(SERVER_URL);

    //let myStore = new Store('1234', new LocalDataStore());
    //let myStore = new Store('1234', new DataStore());
    let myStore = new Store('1234', remoteDS);
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

function change_page(){
    window.open("manager.html", '_blank');
    sessionStorage.getItem('Order')
  };
  