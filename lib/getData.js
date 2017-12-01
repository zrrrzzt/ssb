module.exports = (options, callback) => {
  var https = require('https')
  var querystring = require('querystring')
  var apiEndpoint = options.apiUrl
  var body = ''
  var url = apiEndpoint + '?'

  url = url + querystring.stringify(options.qs)

  https.get(url, res => {
    res.on('data', chunk => {
      body += chunk.toString()
    })

    res.on('end', () => {
      if (/Page not found/.test(body.toString())) {
        return callback(new Error('Page not found.'))
      } else {
        return callback(null, body)
      }
    })
  }).on('error', error => {
    return callback(error, null)
  })
}
