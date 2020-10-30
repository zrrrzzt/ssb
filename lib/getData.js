module.exports = (options, callback) => {
  const https = require('https')
  const querystring = require('querystring')
  const apiEndpoint = options.apiUrl
  let body = ''
  let url = apiEndpoint + '?'

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
