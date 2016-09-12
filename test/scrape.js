"use strict";
var should = require('should');
var OnTheMarket = require('../src/onthemarket.js');

describe('OnTheMarket', function() {

    it('Create the correct type segment using only the type parameters', function(){
        // Create test app
        var testAppNoBedrooms = new OnTheMarket("Birmingham", 30000, 100000, "flats-and-apartment", 0);
        // Call the createTypeSegement();
        var resultNoBedrooms = testAppNoBedrooms.createTypeSegment();

        // Assert result
        resultNoBedrooms.should.equal('flats-and-apartment');

    });

    it('Create the correct type segment using both min bedroom and type parameters', function(){
        // Create test app
        var testApp = new OnTheMarket("Birmingham", 30000, 100000, "house", 3);
        // Call the createTypeSegement();
        var result = testApp.createTypeSegment();

        // Assert result
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