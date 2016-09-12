# On The Market Scrape Tool

This tool is a simple CLI command than goes to [On The Market](http://onthemarket.com) and pulls the top ten results from your given parameters.

```
$ onthemarket Birmingham 30000 100000 houses 3
$ onthemarket "Birmingham City Centre" 10000 15000000 flats-apartments 2
```

## Install

To install, clone the repo down to your local environment.

```
$ git clone https://github.com/mrsteveheyes/onthemarket-scrape.git
```

Go into the directory of the repo and run the install script.

```
$ npm install -g
```

## Usage

```
$ onthemarket {area} {min price} {max price} {houses|flats-apartments|bungalows|land} {min number of rooms}
```

## Tests

Tests are written with [Mocha](http://mochajs.org), [Should](https://shouldjs.github.io) and [Sinon](http://sinonjs.org). To run the tests, while in the terminal, got to the repos directory and run the test command
 
```
$ npm test
```

_(OnTheMarket.com and the associated logos are registered trademarks of Agents' Mutual Ltd. This repo is a personal project and is no way afficliated with Agents' Mutual Ltd or OnTheMarket.com.)_ 