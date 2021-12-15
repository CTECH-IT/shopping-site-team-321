(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-shopping-order="form"]';
    const CHECKLIST_SELECTOR = '[data-shopping-order="checklist"]';
    const SERVER_URL = 'http://saturn.rochesterschools.org:8080/json';

    let App = window.App;
    let Store = App.Store;
    let DataStore = App.DataStore;
    let RemoteDataStore = App.RemoteDataStore;
    let LocalDataStore = App.LocalDataStore;
    let Validation = App.Validation;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;
    //let ManagerChecklist = App.ManagerChecklist;

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
    //let managerChecklist = new ManagerChecklist(CHECKLIST_SELECTOR);

    let formHandler = new FormHandler(FORM_SELECTOR);

     //when a checkbox is clicked, call "DeliverOrder" on myTruck
     checkList.addClickHandler(myStore.deliverOrder.bind(myStore));
     //managerChecklist.addClickHandler(myStore.deliverOrder.bind(myStore));

     formHandler.addSubmitHandler(function (data) {
        myStore.createOrder.call(myStore, data);
        checkList.addRow.call(checkList, data);
        //Manager Checklist needs to pull from the remotedatastore.
        //managerChecklist.addRow.call(managerChecklist, data);
    });

    formHandler.addInputHandler(Validation.isCompanyEmail);

    window.myStore = myStore;

})(window);

function change_page(){
    window.open("manager.html", '_blank');
    sessionStorage.getItem('Order')
  };

  function update_page(){
    window.jQuery.get('http://saturn.rochesterschools.org:8080/json', function(data) {
        //This is where I have to parse out the "FashionBoutique" data 
        //Add a click handler to each entry
        //The final step is writing the inner html with the finished content.
        let readableData = JSON.stringify(data);
        document.getElementById("checklist").innerHTML = readableData;
    })
       
  };
  