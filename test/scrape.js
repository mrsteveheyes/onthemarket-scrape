"use strict";
var should = require('should');
var OnTheMarket = require('../src/onthemarket.js');

describe('OnTheMarket', function() {

    describe('#createTypeSegement()', function(){

        // Set up test args and expected
        var tests = [
            {args: ["Birmingham", 30000, 100000, "house", 3],   expected: '3-bed-house'},
            {args: ["Birmingham", 30000, 100000, "flats-and-apartment", 0],   expected: 'flats-and-apartment'},
        ];

        // Create tests for each test cases
        tests.forEach(function(test) {
            it('correctly builds segment to equal "' + test.expected + '"', function() {
                // Create test app
                var testApp = new OnTheMarket(test.args[0], test.args[1], test.args[2], test.args[3], test.args[4]);
                // Call the createTypeSegement();
                var result = testApp.createTypeSegment();

                // Assert result
                result.should.equal(test.expected);
            });
        });

        var optionTests = [
            {arg: "house", expected: "house"},
            {arg: "flats-and-apartment", expected: "flats-and-apartment"},
            {arg: "bungalows", expected: "bungalows"},
            {arg: "land", expected: "land"},
            {arg: false, expected: "property"},
            {arg: 400, expected: "property"},
            {arg: "test", expected: "property"}
        ];

        optionTests.forEach(function (test) {
            it('Using type param "'+test.arg+'" returns the expected result of "'+test.expected+'"', function(){
                var testApp = new OnTheMarket(null, null, null, test.arg, null);

                // Call the createTypeSegement();
                var result = testApp.createTypeSegment();

                // Assert result
                result.should.equal(test.expected);
            });
        });



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