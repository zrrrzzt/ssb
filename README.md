#ssb [![Build Status](https://travis-ci.org/zrrrzzt/ssb.svg?branch=master)](https://travis-ci.org/zrrrzzt/ssb)

Node.js/CLI app for [Statistics Norway’s API](http://data.ssb.no/api/?lang=en)

The data is available through the [NLOD License](http://data.norge.no/nlod/en/)

##Installation

```
$ npm install ssb
```

Or globally if you want to use the CLI app

```
$ npm install ssb -g
```

##Usage - Module

Pass an object with params.

**dataset** ID of [dataset](http://data.ssb.no/api/?lang=en) ***required***

**format** Format of response. csv og json (default)

**lang** Language of response. en or no (default)

```
var ssb = require('ssb')
  , opts = {dataset:'1120'}
  ;

ssb(opts, function(err, data){
  if(err) throw err;

  console.log(data);
});
```

##Usage - CLI

```
$ ssb --dataset=<dataset>
```

Optional supply other arguments.

See [http://www.ssb.no/en/omssb/tjenester-og-verktoy/api/brukerveiledning](http://www.ssb.no/en/omssb/tjenester-og-verktoy/api/brukerveiledning) for details

```
$ ssb --dataset=<dataset> --format=<json|csv> --lang=<no|en>`
```

##Test

```
$ npm test
```

##License
MIT