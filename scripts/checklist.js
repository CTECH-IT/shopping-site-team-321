(function (window) {
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;
    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.lengh === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    CheckList.prototype.addClickHandler = function (func) {
        this.$element.on('click', 'input', function (event) {
            var email = event.target.value;
            this.removeRow(email);
            func(email);
        }.bind(this));
    }

//the method that adds a new row to the checklist 
CheckList.prototype.addRow = function (shoppingOrder) {
    //create a new instance of a row, using the coffee order info 

    //remove the existing rows that match the email address
    this.removeRow(shoppingOrder.emailAddress);
    //localStorage.removeItem(shoppingOrder.emailAddress, shoppingOrder);

    //Sets the item in local storage. Maybe give each order a unique order "number" so there can multiple orders from the same email?
    //Need to figure out how to change it to a new number each time after a submit.
    //Maybe the manager page is where the localStorage gets cleared? Has a clear all option.
    //Whenever an order's checkbox gets clicked, it removes it from lovalstorage?
    //let orderNumber = 0;
    //orderNumber += 1;
    //localStorage.setItem("Order " + orderNumber, JSON.stringify(shoppingOrder));
    var rowElement = new Row(shoppingOrder);
    //add a new row instance's $element property to the checklist 
    this.$element.append(rowElement.$element);
}

CheckList.prototype.removeRow = function (email) {
    this.$element
    .find('[value="' + email + '"]')
    .closest('[data-coffee-order="checkbox"]')
    .remove();
};


    function Row(shoppingOrder) {
        if (shoppingOrder.item1 || shoppingOrder.item2 || shoppingOrder.item3 || shoppingOrder.item4 || shoppingOrder.item5 || shoppingOrder.item6) {
        let $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });
        let $label = $('<label></label>');

        let $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: shoppingOrder.emailAddress
        });

        console.log(shoppingOrder);

        let description = 'Size ' + shoppingOrder.size + ' ';
        if (shoppingOrder.color) {
            description += shoppingOrder.color + ' ';
        }

        if (shoppingOrder.item1) {
            description += shoppingOrder.item1 + ', ';
        };

        if (shoppingOrder.item2) {
            description += shoppingOrder.item2 + ', ';
        };

        if (shoppingOrder.item3) {
            description += shoppingOrder.item3 + ', ';
        };

        if (shoppingOrder.item4) {
            description += shoppingOrder.item4 + ', ';
        };

        if (shoppingOrder.item5) {
            description += shoppingOrder.item5 + ', ';
        };

        if (shoppingOrder.item6) {
            description += shoppingOrder.item6 + ', ';
        };

        //ASK ABOUT THIS - Concatenates, but only as a string, won't treat as actual code.
        // for (let i = 1; i <= 6; i++) {
        //     let itemCnt = "item" + i;
        //     let itemOrder = "shoppingOrder." + itemCnt;
        //     description += itemOrder + ', ';
        //   }
        

        description += ' (' + shoppingOrder.emailAddress + ')';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    } else {
        console.log("Please Select A Clothing Item");
    };
    }

    App.CheckList = CheckList;
    window.App = App;
})(window);