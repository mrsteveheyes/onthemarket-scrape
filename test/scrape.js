"use strict";
var should = require('should');
var OnTheMarket = require('../src/onthemarket.js');

describe('OnTheMarket', function() {

    it('Create the correct bedroom and type segment', function(){
        var testApp = new OnTheMarket("Birmingham", 30000, 100000, "house", 3);

        var result = testApp.createTypeSegment();

        result.should.equal('3-bed-house');
    });
    //
    // it('Create the correct type segment', function(){
    //     false.should.be.True();
    // });
    //
    // it('Creates the correct URL to call', function(){
    //     false.should.be.True();
    // });
    //
    // it('Call the page and return the correct JSON object', function(){
    //     false.should.be.True();
    // });

});