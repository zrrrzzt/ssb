const util = require('util')
const getData = require('./lib/getData')
const apiUrl = 'https://data.ssb.no/api'
const defaults = {
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

  const dataset = options.dataset
  const version = options.api || defaults.apiVersion
  const format = options.format || defaults.format
  const lang = options.lang || defaults.lang
  const uri = util.format('%s/%s/dataset/%s.%s', apiUrl, version, dataset, format)
  const qs = { lang: lang }
  const requestOptions = {
    apiUrl: uri,
    qs: qs
  }

  getData(requestOptions, (error, body) => {
    if (error) {
      return callback(error, null)
    }
    const result = format === 'json' ? JSON.parse(body) : body
    return callback(null, result)
  })
}
