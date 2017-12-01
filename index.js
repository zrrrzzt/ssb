var util = require('util')
var getData = require('./lib/getData')
var apiUrl = 'https://data.ssb.no/api'
var defaults = {
  apiVersion: 'v0',
  format: 'json',
  lang: 'no'
}

module.exports = (options, callback) => {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }

  if (!options.dataset) {
    return callback(new Error('Missing required input: options.dataset'), null)
  }

  var dataset = options.dataset
  var version = options.api || defaults.apiVersion
  var format = options.format || defaults.format
  var lang = options.lang || defaults.lang
  var uri = util.format('%s/%s/dataset/%s.%s', apiUrl, version, dataset, format)
  var qs = {lang: lang}
  var requestOptions = {
    apiUrl: uri,
    qs: qs
  }

  getData(requestOptions, (error, body) => {
    if (error) {
      return callback(error, null)
    }
    var result = format === 'json' ? JSON.parse(body) : body
    return callback(null, result)
  })
}
