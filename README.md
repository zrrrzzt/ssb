[![Build Status](https://travis-ci.org/zrrrzzt/ssb.svg?branch=master)](https://travis-ci.org/zrrrzzt/ssb)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# ssb

Node.js/CLI app for [Statistics Norway’s API](http://data.ssb.no/api/?lang=en)

The data is available through the [NLOD License](http://data.norge.no/nlod/en/)

## Installation

```sh
$ npm install ssb
```

Or globally if you want to use the CLI app

```sh
$ npm install ssb -g
```

## Usage - Module

Pass an object with params.

**dataset** ID of [dataset](http://data.ssb.no/api/?lang=en) ***required***

**format** Format of response. csv og json (default)

**lang** Language of response. en or no (default)

```javascript
var ssb = require('ssb')
var options = {dataset: '1120'}

ssb(options, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

## Usage - CLI

```sh
$ ssb --dataset=<dataset>
```

Optional supply other arguments.

See [http://www.ssb.no/en/omssb/tjenester-og-verktoy/api/brukerveiledning](http://www.ssb.no/en/omssb/tjenester-og-verktoy/api/brukerveiledning) for details

```sh
$ ssb --dataset=<dataset> --format=<json|csv> --lang=<no|en>`
```

## Test

```sh
$ npm test
```

## License
MIT