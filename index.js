#!/usr/bin/env node
'use strict';

var OnTheMarket = require('./src/onthemarket.js');

// Remove node and file path
var params = process.argv.slice(2),
    app = new OnTheMarket(params[0], params[1], params[2], params[3], params[4]);

// Run the app
app
    // Get the JSON
    .getJSON()
    // Once it's resolved, write out the JSON
    .then(function (json) {
        process.stdout.write(JSON.stringify(json));
    });
