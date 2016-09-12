"use strict";
var should = require('should');
var sinon = require('sinon');
var OnTheMarket = require('../src/onthemarket.js');
var data = require('./data/mocks.js');
var mock = require('./mocks/birmingham-30000-100000-house-3');

describe('OnTheMarket', function () {

    describe('#createTypeSegement()', function () {

        // Set up test args and expected
        var tests = [
            {args: ["Birmingham", 30000, 100000, "houses", 3], expected: '3-bed-houses'},
            {args: ["Birmingham", 30000, 100000, "flats-apartments", 0], expected: 'flats-apartments'},
        ];

        // Create tests for each test cases
        tests.forEach(function (test) {
            it('correctly builds segment to equal "' + test.expected + '"', function () {
                // Create test app
                var testApp = new OnTheMarket(test.args[0], test.args[1], test.args[2], test.args[3], test.args[4]);
                // Call the createTypeSegement();
                var result = testApp.createTypeSegment();

                // Assert result
                result.should.equal(test.expected);
            });
        });

        var optionTests = [
            {arg: "houses", expected: "houses"},
            {arg: "flats-apartments", expected: "flats-apartments"},
            {arg: "bungalows", expected: "bungalows"},
            {arg: "land", expected: "land"},
            {arg: false, expected: "property"},
            {arg: 400, expected: "property"},
            {arg: "test", expected: "property"}
        ];

        optionTests.forEach(function (test) {
            it('Using type param "' + test.arg + '" returns the expected result of "' + test.expected + '"', function () {
                var testApp = new OnTheMarket(null, null, null, test.arg, null);

                // Call the createTypeSegement();
                var result = testApp.createTypeSegment();

                // Assert result
                result.should.equal(test.expected);
            });
        });


    });

    describe('#createParams()', function () {
        // Param Test array
        var paramsTest = [
            {
                args: ["Area", 1, 2, "houses", 3],
                expected: [
                    {
                        param: "min-bedrooms",
                        value: 3
                    },
                    {
                        param: "max-price",
                        value: 2
                    },
                    {
                        param: "min-price",
                        value: 1
                    },
                    {
                        param: "radius",
                        value: "1.0"
                    }
                ]
            },
            {
                args: ["Area", 1, 2, "houses,bungalows", 3],
                expected: [
                    {
                        param: "min-bedrooms",
                        value: 3
                    },
                    {
                        param: "max-price",
                        value: 2
                    },
                    {
                        param: "min-price",
                        value: 1
                    },
                    {
                        param: "prop-types",
                        value: "houses"
                    },
                    {
                        param: "prop-types",
                        value: "bungalows"
                    },
                    {
                        param: "radius",
                        value: "1.0"
                    }
                ]
            }
        ];

        paramsTest.forEach(function (test) {
            it('Creates the correct array for the params to be used in the URL using type of "' + test.args[3] + '"', function () {
                // Create test app
                var testApp = new OnTheMarket(test.args[0], test.args[1], test.args[2], test.args[3], test.args[4]);
                // Call the createTypeSegement();
                var result = testApp.createParams();

                // Assert result
                result.should.eql(test.expected);
            })
        })
    });

    describe('#createURL()', function () {
        // Create URL Test options
        var urlTests = [{
            args: ["Area", 1, 2, "houses", 3],
            expected: 'https://www.onthemarket.com/for-sale/3-bed-houses/area/?min-bedrooms=3&max-price=2&min-price=1&radius=1.0'
        }, {
            args: ["Area", 1, 2, "houses,bungalows", 3],
            expected: 'https://www.onthemarket.com/for-sale/3-bed-property/area/?min-bedrooms=3&max-price=2&min-price=1&prop-types=houses&prop-types=bungalows&radius=1.0'
        }];

        // Run tests for each options
        urlTests.forEach(function (test) {
            it('Creates the correct URL based upon the params', function () {
                var testApp = new OnTheMarket(test.args[0], test.args[1], test.args[2], test.args[3], test.args[4]);
                // Call the createURL();
                var result = testApp.createURL();

                // Assert result
                result.should.equal(test.expected);
            });
        });
    });

    describe('#getJSON()', function () {
        // Set up the test app
        var testApp = new OnTheMarket("Birmingham", 30000, 100000, "house", 3);

        // Set up the stub for request.get
        before(function(){
            sinon
                .stub(testApp.request, 'get')
                .yields(null, null, mock.html);
        });

        // Reset request.get once the test has finished
        after(function(){
            testApp.request.get.restore();
        });

        it('Scrapes OnTheMarket and returns correct data', function () {
            // Get the json
            var json = testApp.getJSON();

            json.should.eql(data.mocks.testJSON);

        });
    });


});