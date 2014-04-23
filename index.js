var request = require('request')
  , util = require('util')
  , apiUrl = 'http://data.ssb.no/api'
  , defaults = {
      apiVersion: 'v0',
      format: 'json',
      lang: 'no'
    }
  ;

module.exports = function(opts, callback){

  if(!opts.dataset){
    return callback(new Error('Missing required param: dataset'), null);
  }

  var dataset = opts.dataset
    , version = opts.api || defaults.apiVersion
    , format = opts.format || defaults.format
    , lang = opts.lang || defaults.lang
    , uri = util.format('%s/%s/dataset/%s.%s', apiUrl,version, dataset, format)
    , qs = {lang:lang}
    ;

  request(uri,{qs:qs}, function(err, response, body){
    if(err){
      return callback(err, null)
    }
    return callback(null, body.toString());
  });

}