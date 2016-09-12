'use strict';

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
var OnTheMarket = function(area, min_price, max_price, type, min_bedrooms){
    this.area = area;
    this.min_price = min_price;
    this.max_price = max_price;

    switch(type){
        case "house":
        case "flats-and-apartment":
        case "bungalows":
        case "land":
            this.type  = type;
            break;

        default:
            this.type  = "property";
            break;
    }

    this.min_bedrooms = min_bedrooms;
};

/**
 * Create Type Segment
 *
 * This method creates the correct type segment in the URL depending on how many bedrooms and the type
 */
OnTheMarket.prototype.createTypeSegment = function () {
    var segment;

    segment = this.type;

    if(this.min_bedrooms > 0) {
        segment = this.min_bedrooms+'-bed-'+segment;
    }

    return segment;
};

module.exports = OnTheMarket;
