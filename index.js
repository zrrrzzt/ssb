'use strict'

var request = require('request')
var util = require('util')
var apiUrl = 'http://data.ssb.no/api'
var defaults = {
  apiVersion: 'v0',
  format: 'json',
  lang: 'no'
}

module.exports = function (opts, callback) {

  if (!opts.dataset) {
    return callback(new Error('Missing required param: dataset'), null)
  }

  var dataset = opts.dataset
  var version = opts.api || defaults.apiVersion
  var format = opts.format || defaults.format
  var lang = opts.lang || defaults.lang
  var uri = util.format('%s/%s/dataset/%s.%s', apiUrl, version, dataset, format)
  var qs = {lang: lang}

  request(uri, {qs: qs}, function (err, response, body) {
    if (err) {
      return callback(err, null)
    }
    return callback(null, body.toString())
  })

}
