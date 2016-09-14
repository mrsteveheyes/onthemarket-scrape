#!/usr/bin/env node
'use strict';

var OnTheMarket = require('./src/onthemarket.js');

// Remove node and file path
var params = process.argv.slice(2);

// Check to see if the command is to listen
if (params[0] == "listen") {
    // Set up a blank app
    var app = new OnTheMarket();
    // Subscribe to the channel
    app.subscribe();
} else {
    // Set up the app with the correct params
    var app = new OnTheMarket(params[0], params[1], params[2], params[3], params[4]);

    // Run the app
    app
    // Get the HTML
        .getHTML()
        .then(function (html) {
            // Once it's resolved, publish the HTML
            app.publish(html);
        })
        .catch(function (error) {
            // Catch the errors and display them
            process.stdout.write(error.toString());
            process.exit();
        });
}


