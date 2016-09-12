'use strict';
var request = require('request');
var cheerio = require('cheerio');

/**
 * On The Market Class
 *
 * This class enables you to scrape the On The Market Site for the top ten results of your given parameters
 *
 * @param area
 * @param min_price
 * @param max_price
 * @param type
 * @param min_bedrooms
 * @constructor
 */
var OnTheMarket = function (area, min_price, max_price, type, min_bedrooms) {

    this.request = request;
    this.cheerio = cheerio;

    this.area = area;
    this.min_price = min_price;
    this.max_price = max_price;

    this.type = type;

    this.min_bedrooms = min_bedrooms;

    this.baseURL = "https://www.onthemarket.com/for-sale/";
};

/**
 * Create Type Segment
 *
 * This method creates the correct type segment in the URL depending on how many bedrooms and the type
 */
OnTheMarket.prototype.createTypeSegment = function () {
    // Set initial segment to the type
    var segment = "";

    // Check the type parameter
    switch (this.type) {
        // The list of excepted types
        case "houses":
        case "flats-apartments":
        case "bungalows":
        case "land":
            segment = this.type;
            break;

        // Default is just to use 'property'
        default:
            segment = "property";
            break;
    }

    // Check to see if there is a min bedroom requirement
    if (this.min_bedrooms > 0) {
        // Update the segment to reflect this requirement
        segment = this.min_bedrooms + '-bed-' + segment;
    }

    // Return the segment
    return segment;
};

/**
 * Create Params
 *
 * This function creates an array of the GET parameters that will be used in the request URL
 */
OnTheMarket.prototype.createParams = function () {
    // Init the param array
    var params = [];

    // Create min-bedrooms params
    params.push({
        param: 'min-bedrooms',
        value: this.min_bedrooms
    });
    // Create max price params
    params.push({
        param: 'max-price',
        value: this.max_price
    });
    // Create min-price param
    params.push({
        param: 'min-price',
        value: this.min_price
    });

    // Check if there is more than one type param
    var types = this.type.split(',');
    if (types.length > 1) {
        // Create Property Type params
        types.forEach(function (type) {
            params.push({
                param: "prop-types",
                value: type
            });
        })
    }

    // Create radius param
    params.push({
        param: 'radius',
        value: "1.0"
    });

    // Return the params
    return params;
};

/**
 * Create URL
 *
 * This function creates the URL to be used in the request
 */
OnTheMarket.prototype.createURL = function () {

    // Get the params and base URL
    var params = this.createParams(),
        url = this.baseURL;

    // Add on the type segment
    url += this.createTypeSegment() + "/";

    // Add the area
    url += this.area.toLowerCase() + "/?";

    // Add the GET params to the URL
    params.forEach(function (param) {
        url += param.param + "=" + param.value + "&";
    });

    // Remove last '&' from the string
    url = url.slice(0, -1);

    // Return URL
    return url;
};

/**
 * Get JSON
 *
 * This function goes off to the URL and scrapes the HTML, return the top results in a JSON object
 */
OnTheMarket.prototype.getJSON = function () {
    var url = this.createURL(),
        _cheerio = this.cheerio,
        _request = this.request,
        json = {
            data: []
        };

    return new Promise(function (resolve, reject) {

        _request.get(url, function (error, status, body) {

            var $ = _cheerio.load(body),
                $results = $('li.result');

            $results.each(function (i, $result) {

                if (i < 10) {

                    // Get the address
                    var address = $('.address', this).text();

                    // Get the price
                    var price = $('.price', this).text();
                    price = price.replace(/\D/g, '');

                    // Get the type
                    var title = $('.title', this).text(),
                        // Get the number of rooms
                        rooms = parseInt(title.charAt(0)),
                        // Get the type from the title
                        type = title.match(/(house|flat|apartment|land|bungalow)/g);

                    // Add the data to the json array
                    json.data.push({
                        address: address,
                        price: parseInt(price),
                        type: type[0],
                        number_rooms: rooms
                    });
                }
            });

            resolve(json);
        });
    });

};

// Export the class
module.exports = OnTheMarket;
