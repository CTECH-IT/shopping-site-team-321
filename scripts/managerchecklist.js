// (function (window) {
//     'use strict';
//     let App = window.App || {};
//     let $ = window.jQuery;

//     //Use a get command from the remotedatastore, grab all of our orders.
//     //Put those orders in the html, adding click handlers to the items added.

//     function ManagerChecklist(selector) {
//         if (!selector) {
//             throw new Error('No selector provided');
//         }
//         this.$element = $(selector);
//         if (this.$element.lengh === 0) {
//             throw new Error('Could not find element with selector: ' + selector);
//         }
//     };

//     ManagerChecklist.prototype.addClickHandler = function (func) {
//         this.$element.on('click', 'input', function (event) {
//             var email = event.target.value;
//             this.removeRow(email);
//             func(email);
//         }.bind(this));
//     };

//     ManagerChecklist.prototype.addRow = function () {
//         this.removeRow(shoppingOrder.emailAddress);
//         var rowElement = new Row(shoppingOrder);
//         this.$element.append(rowElement.$element);
//     };

//     ManagerChecklist.prototype.removeRow = function (email) {
//         this.$element
//         .find('[value="' + email + '"]')
//         .closest('[data-shopping-order="checkbox"]')
//         .remove();
//     };

//     function Row(shoppingOrder) {
//         if (shoppingOrder.item1 || shoppingOrder.item2 || shoppingOrder.item3 || shoppingOrder.item4 || shoppingOrder.item5 || shoppingOrder.item6) {
//         let $div = $('<div></div>', {
//             'data-shopping-order': 'checkbox',
//             'class': 'checkbox'
//         });
//         let $label = $('<label></label>');

//         let $checkbox = $('<input></input>', {
//             type: 'checkbox',
//             value: shoppingOrder.emailAddress
//         });

//         console.log(shoppingOrder);

//         let description = 'Size ' + shoppingOrder.size + ' ';
//         if (shoppingOrder.color) {
//             description += shoppingOrder.color + ' ';
//         }

//         if (shoppingOrder.item1) {
//             description += shoppingOrder.item1 + ', ';
//         };

//         if (shoppingOrder.item2) {
//             description += shoppingOrder.item2 + ', ';
//         };

//         if (shoppingOrder.item3) {
//             description += shoppingOrder.item3 + ', ';
//         };

//         if (shoppingOrder.item4) {
//             description += shoppingOrder.item4 + ', ';
//         };

//         if (shoppingOrder.item5) {
//             description += shoppingOrder.item5 + ', ';
//         };

//         if (shoppingOrder.item6) {
//             description += shoppingOrder.item6 + ', ';
//         };

//         description += ' (' + shoppingOrder.emailAddress + ')';

//         $label.append($checkbox);
//         $label.append(description);
//         $div.append($label);

//         this.$element = $div;
//         } else {
//             console.log("Please Select A Clothing Item");
//         };
//     };

//     App.ManagerChecklist = ManagerChecklist;
//     window.App = App;

// })(window);