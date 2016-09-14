#!/usr/bin/env node
'use strict';

var OnTheMarket = require('./src/onthemarket.js');

// Remove node and file path
var params = process.argv.slice(2);

if (params[0] == "listen") {
    var app = new OnTheMarket();
    app.subscribe();
} else {
    var app = new OnTheMarket(params[0], params[1], params[2], params[3], params[4]);

    // Run the app
    app
    // Get the JSON
        .getHTML()
        // Once it's resolved, write out the JSON
        .then(function (html) {
            app.publish(html);

        })
        .catch(function (error) {
            process.stdout.write(error.toString());
            process.exit();
        });
}


