# On The Market Scrape Tool

This tool provides 2 CLI commands. The first is a listener for events using `mubsub`. The second goes to [On The Market](http://onthemarket.com) and pulls the top ten results from your given parameters. It then publishes this data to the channel.

```
$ onthemarket listen

$ onthemarket Birmingham 30000 100000 houses 3
$ onthemarket "Birmingham City Centre" 10000 15000000 flats-apartments 2
```

## Install

To install, clone the repo down to your local environment.

```
$ git clone https://github.com/mrsteveheyes/onthemarket-scrape.git
```

Go into the directory of the repo and run the install script. (You may need to run this in `sudo`, depending on your setup.)

```
$ npm install -g
```

## Usage

The app is set to use MongoDB on the localhost. To change the location of your MongoDB go to line 25 on `src/onthemarket.js` and change it there.

Open up two terminal windows. In the first, start the listener

```
$ onthemarket listen
```

Now that we are listening and subscribed to the channel, in the second terminal window run the search command with your parameters.

```
$ onthemarket {area} {min price} {max price} {houses|flats-apartments|bungalows|land} {min number of rooms}
```

The terminal with the command that is listening will spit out the JSON based on what you have searched for. 

To use the command with just one terminal window, check out [version 0.1.1](https://github.com/mrsteveheyes/onthemarket-scrape/tree/0.1.1).

## Tests

Tests are written with [Mocha](http://mochajs.org), [Should](https://shouldjs.github.io) and [Sinon](http://sinonjs.org). To run the tests, while in the terminal, got to the repos directory and run the test command
 
```
$ npm test
```

_(OnTheMarket.com and the associated logos are registered trademarks of Agents' Mutual Ltd. This repo is a personal project and is no way afficliated with Agents' Mutual Ltd or OnTheMarket.com.)_ 