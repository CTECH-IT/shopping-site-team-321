(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    function RemoteDataStore(url) {
        if(!url) {
            throw new Error('No remote URL supplied');
        }
        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function (key, val) {
        // Call jQuery's $.Post method to send the value to the serverUrl
        // When the server responds, call an anonymous function with serverResponse
        $.post(this.serverUrl, val, function (serverResponse) {
            console.log(serverResponse);
        });
        console.log("Added it!");
    };

    RemoteDataStore.prototype.getAll = function (cb) {
        // Make a "get" call to the server URL
        // Pass in an anonymous function that calls the "cb" callback function
        $.get(this.serverUrl, function(serverResponse){
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.get = function (key, cb) {
        // Make a "get" call to the server, but pass an email address
        // so that it returns just one order
        // then call the function "cb" on the response
        $.get(this.serverUrl + '/' + key, function(serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.remove = function (key) {
        // Call the server URL using the ajax 'DELETE' command
        $.ajax(this.serverUrl, + '/' + key, {
            type: 'DELETE' });
            console.log('Ye, it gone.');
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;

})(window);