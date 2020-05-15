'use strict'

var tap = require('tap')
var getData = require('../lib/getData')

tap.test('getData should catch errors', function (test) {
  var options = {
    apiUrl: 'https://yabendabenduhuusnippelapp.no',
    qs: {
      query: '994528130'
    }
  }
  getData(options, function (error, data) {
    tap.ok(error, 'Error exists')
    test.done()
  })
})

tap.test('Returns error message if dataset not found', function (test) {
  var options = {
    apiUrl: 'https://data.ssb.no/api/v0/npmlovesyou/json',
    qs: {
      query: 'doyoulovenpm'
    }
  }
  var expectedErrorMessage = 'Page not found.'
  getData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
