#!/usr/bin/env node
'use strict';

var OnTheMarket = require('./src/onthemarket.js');

// Remove node and file path
var params = process.argv.slice(2);

var app = new OnTheMarket(params);

console.log(OnTheMarket);

