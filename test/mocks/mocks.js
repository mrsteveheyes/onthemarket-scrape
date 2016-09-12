"use strict";

var mocks = {
    createTypeSegementData: [
        {args: ["Birmingham", 30000, 100000, "houses", 3], expected: '3-bed-houses'},
        {args: ["Birmingham", 30000, 100000, "flats-apartments", 0], expected: 'flats-apartments'},
    ],
    optionTests: [
        {arg: "houses", expected: "houses"},
        {arg: "flats-apartments", expected: "flats-apartments"},
        {arg: "bungalows", expected: "bungalows"},
        {arg: "land", expected: "land"},
        {arg: false, expected: "property"},
        {arg: 400, expected: "property"},
        {arg: "test", expected: "property"}
    ],
    paramTests: [
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
    ],
    urlTests: [{
        args: ["Area", 1, 2, "houses", 3],
        expected: 'https://www.onthemarket.com/for-sale/3-bed-houses/area/?min-bedrooms=3&max-price=2&min-price=1&radius=1.0'
    }, {
        args: ["Area", 1, 2, "houses,bungalows", 3],
        expected: 'https://www.onthemarket.com/for-sale/3-bed-property/area/?min-bedrooms=3&max-price=2&min-price=1&prop-types=houses&prop-types=bungalows&radius=1.0'
    }],
    testJSON: {
        data: [

            {
                address: "Lewis Street, Tipton",
                number_rooms: 3,
                price: 95000,
                type: "house"
            }, {
                address: "Farmhouse Way, Willenhall",
                number_rooms: 3,
                price: 89950,
                type: "house",
            }, {
                address: "136 High Street, Lye, Stourbridge, West Midlands",
                number_rooms: 3,
                price: 60000,
                type: "house",
            }, {
                address: "Elm Street, Willenhall",
                number_rooms: 3,
                price: 99950,
                type: "house"
            }, {
                address: "Farmhouse Road, Willenhall",
                number_rooms: 3,
                price: 99950,
                type: "house"
            }, {
                address: "Foster Avenue, Bilston",
                number_rooms: 3,
                price: 80000,
                type: "house"
            }, {
                address: "Hillside Road, Dudley",
                number_rooms: 3,
                price: 95000,
                type: "house"
            }, {
                address: "Rocket Pool Drive, Bilston",
                number_rooms: 3,
                price: 100000,
                type: "house"
            }, {
                address: "Bradley Lane, Bilston",
                type: "house",
                number_rooms: 3,
                price: 99500
            }, {
                address: "Wolverhampton Street, Bilston",
                number_rooms: 3,
                price: 94950,
                type: "house"
            }
        ]
    }
};

module.exports.mocks = mocks;
