(function (window) {
    'use strict';

    let App = window.App || {};
    let $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided!');
        }

        // find the "selector" in the DOM using jQuery and assign it to this.formElement
        this.$formEement = $(selector);
        if (this.$formElement.length == 0) {
            throw new Error('Could not find element with selector: ' + selector);
        } 
    }

    FormHandler.prototype.addSubmitHandler = function (func) {
        console.log('Setting the submit handler for the form...');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            let data = {};
            $(this).serialArray().forEach(function (item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value); 
            });
            console.log(data);
            func(data);
        });
    }

    FormHandler.prototype.addInputHandler = function (func) {
        console.log("Setting input handler for form...");
        this.$formEement.on('input', '[name="emailAddress"]', function (event) {
            let emailAddress = event.target.value;
            if (func(emailAddress) == true) {
                event.target.setCustomValidity('');
            } else {
                event.target.setCustomValidity('Sorry, ' + emailAddress + ' is not a valid email address.')
            }
        });
    };

    App.FormHandler = FormHandler;
    window.App = App;

})(window);