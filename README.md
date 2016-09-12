# On The Market Scrape Tool

This tool is a simple CLI command than goes to [On The Market](http://onthemarket.com) and pulls the top ten results from your given parameters.

```
$ onthemarket Birmingham 30000 100000 houses 3
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

# Usage

```
$ onthemarket {area} {min price} {max price} {houses|flats-apartments|bungalows|land} {min number of rooms}
```

_(OnTheMarket.com and the associated logos are registered trademarks of Agents' Mutual Ltd. This repo is a personal project and is no way afficliated with Agents' Mutual Ltd or OnTheMarket.com.)_ 