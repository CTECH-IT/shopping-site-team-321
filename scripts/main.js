(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-shopping-order="form"]';
    const CHECKLIST_SELECTOR = '[data-shopping-order="checklist"]';
    const MANAGER_CHECKLIST_SELECTOR = '[data-shopping-order-manager="checklist"]';
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
    let managerChecklist = new CheckList(MANAGER_CHECKLIST_SELECTOR);
    //let managerChecklist = new ManagerChecklist(CHECKLIST_SELECTOR);

    //NEW STUFF============================

// get all the data from the remote data store and put it in the truck

remoteDS.getAll(function (orders) {

    // go through the orders with a loop
    // figure out if this order belongs to you, 
    // if it does, create a new order and then call

    let data = {};

    Object.entries(orders).forEach((entry) => {
      const [key, value] = entry;
      //console.log(`** ${key}: ${value} **`);
      Object.entries(value).forEach((field) => {
        const [k, v] = field;
        //if ([k] == "color") {
            console.log("This is your order")
            console.log(entry);
            data[k] = v;
            console.log(k + " is " + v);
          // entry.forEach(function (item) {
          //     //Items getting over written
          //     console.log(item.name)
          //     data[item.name] = item.value;
          //     console.log(item.name + ' is ' + item.value); 
          // });
            managerChecklist.addRow.call(managerChecklist, data);
            console.log("Dumping checklist data " + data);
        //}
        //console.log(`----- ${k}: ${v}`);
      });
      //neworder = 0; // ?
      //myTruck.createOrder(neworder);
    });
    

  });

  managerChecklist.addClickHandler(myStore.deliverOrder.bind(myStore));

    // get all the data from the remote data store and put it in the truck
    // remoteDS.getAll(function (orders) {

    //     console.log(orders);
        
    //     Object.keys(orders).forEach(key => {
    //                     //console.log(key, orders[key]);
    //                     if (orders[key].color) {
    //                         console.log(key, orders[key]);
    //                         let managerOrders = {};
    //                         managerOrders = managerOrders + JSON.stringify(orders[key]);
    //                         console.log(orders[key].emailAddress);
    //                         //console.log(data[key].item1);
    //                         //managerRowData = managerRowData + data[key];
                                            
    //                         //This doesn't overwrite the data
    //                                     // let newArray = [];
    //                                     // newArray.push(data[key].emailAddress);
    //                                     // console.log(newArray);
    //                                     }
    //     });
    // go through the orders with a loop
    // figure out if this order belongs to you, 
    // if it does, create a new order and then call
    //neworder = 0; // ?
    //myTruck.createOrder(neworder);

  //}); 

    //NEW STUFF======================

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

//   function update_page(){
//     window.jQuery.get('http://saturn.rochesterschools.org:8080/json', function(data) {
//         //This is where I have to parse out the "FashionBoutique" data 
//         //Add a click handler to each entry
//         //The final step is writing the inner html with the finished content.
//         let readableData = JSON.stringify(data);
//         //console.log(readableData);
//         //Row(data);

//         Object.keys(data).forEach(key => {
//             //console.log(key, data[key]);
//             if (data[key].color) {
//                 //console.log(key, data[key]);
//                 //managerOrders = managerOrders + JSON.stringify(data[key]);
//                 //console.log(data[key].emailAddress);
//                 //console.log(data[key].item1);
//                 //managerRowData = managerRowData + data[key];
                
//                 //This doesn't overwrite the data
//             let newArray = [];
//             newArray.push(data[key].emailAddress);
//             console.log(newArray);
//             }
//             Row(data);

//             // Object.keys(data).forEach(key => {
//             //     new Row(data);
//             //});
//         });

//     })   
//   };

//   function Row(shoppingOrder) {
//     Object.keys(shoppingOrder).forEach(key => {
//         //console.log(key, data[key]);
//         if (shoppingOrder[key].color) {
//     let $div = $('<div></div>', {
//         'data-shopping-order': 'checkbox',
//         'class': 'checkbox'
//     });
//     let $label = $('<label></label>');

//     let $checkbox = $('<input></input>', {
//         type: 'checkbox',
//         value: shoppingOrder.emailAddress
//     });

//     let description = 'Size ' + shoppingOrder[key].size + ' ';
//     if (shoppingOrder[key].color) {
//         description += shoppingOrder[key].color + ' ';
//     }

//     if (shoppingOrder[key].item1) {
//         description += shoppingOrder[key].item1 + ', ';
//     };

//     if (shoppingOrder[key].item2) {
//         description += shoppingOrder[key].item2 + ', ';
//     };

//     if (shoppingOrder[key].item3) {
//         description += shoppingOrder[key].item3 + ', ';
//     };

//     if (shoppingOrder[key].item4) {
//         description += shoppingOrder[key].item4 + ', ';
//     };

//     if (shoppingOrder[key].item5) {
//         description += shoppingOrder[key].item5 + ', ';
//     };

//     if (shoppingOrder[key].item6) {
//         description += shoppingOrder[key].item6 + ', ';
//     };

//     console.log(description);

//     //ASK ABOUT THIS - Concatenates, but only as a string, won't treat as actual code.
//     // for (let i = 1; i <= 6; i++) {
//     //     let itemCnt = "item" + i;
//     //     let itemOrder = "shoppingOrder." + itemCnt;
//     //     description += itemOrder + ', ';
//     //   }
    

//     description = description + ' (' + shoppingOrder[key].emailAddress + ')';

//     $label.append($checkbox);
//     $label.append(description);
//     $div.append($label);

//     this.$element = $div;

//     let cb_type = '<input type = "checkbox"';
//     let cb_id = 'id = "checklist"';
//     let cb_name = 'name = "checklist';
//     let cb_value = 'value =';
//     console.log(description);
//     //description = cb_type + cb_id + cb_name + cb_value + shoppingOrder[key];

//     console.log(typeof description);
//     let finalDescription = '<input type = "checkbox" id="checklist" name="checklist" value =' + description + '>';
//     let labelDescription = '<label id="checklist" name="checklist">' + description + '</label>'

//     document.getElementById("checklist").innerHTML = finalDescription + labelDescription;

//     //Need to delete HTML once it's been clicked (it looks like click handler is already working though?)
    
// }

// });
//   };
    

//This is what changes the HTML to the orders (without click handlers or formatting.)
// document.getElementById("checklist").innerHTML = data

  //Need to add new row, add click handlers to it.
  
  // let checkList = new App.CheckList('[data-shopping-order="checklist"]');
  // if (update_page() != undefined) {
  //   checkList.addRow.call(checkList, update_page());
  // }
  
  