let orderEmailAddress = "";

(function (window) {
    'use strict';

    let App = window.App || {};
    let $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided!');
        }

        // find the "selector" in the DOM using jQuery and assign it to this.formElement
        this.$formElement = $(selector);
        if (this.$formElement.length == 0) {
            throw new Error('Could not find element with selector: ' + selector);
        } 
    }
    
    let data = {};
    console.log(data);

    FormHandler.prototype.addSubmitHandler = function (func) {
        console.log('Setting the submit handler for the form...');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            //Need to figure out a way to allow multiple values in an array
            //item.value needs to be an array, then have something that goes into that multiple times? It's an array within an array

            $(this).serializeArray().forEach(function (item) {
                //Items getting over written
                console.log(item.name)
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value); 
            });
            console.log(data);
            func(data);

            this.reset(); // reset the form 
            this.elements[0].focus(); // focus on the first field 
        });
    }

    FormHandler.prototype.addInputHandler = function (func) {
        console.log("Setting input handler for form...");
        this.$formElement.on('input', '[name="emailAddress"]', function (event) {
            let emailAddress = event.target.value;
            orderEmailAddress = event.target.value;
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