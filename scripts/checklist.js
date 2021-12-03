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
CheckList.prototype.addRow = function (coffeeOrder) {
    //create a new instance of a row, using the coffee order info 

    //r4empove the existing rows that match the email adress
    this.removeRow(coffeeOrder.emailAddress);

    console.log(coffeeOrder);

    var rowElement = new Row(coffeeOrder);
    //add a new row instance's $element property to the checklist 
    this.$element.append(rowElement.$element);
}

CheckList.prototype.removeRow = function (email) {
    this.$element
    .find('[value="' + email + '"]')
    .closest('[data-coffee-order="checkbox"]')
    .remove();
};


    function Row(coffeeOrder) {
        let $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });
        let $label = $('<label></label>');

        let $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffeeOrder.emailAddress
        });

        let description = coffeeOrder.size + ' ';
        if (coffeeOrder.color) {
            description += coffeeOrder.color + ' ';
        }
        description += coffeeOrder.item + ', ';
        description += ' (' + coffeeOrder.emailAddress + ')';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;

    }

    App.CheckList = CheckList;
    window.App = App;
})(window);