'use strict'

var tap = require('tap')
var getData = require('../lib/getData')

tap.test('getData should catch errors', function (test) {
  var options = {
    apiUrl: 'http://yabendabenduhuusnippelapp.no',
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
    'apiUrl': 'http://hotell.difi.no/api/json/npmlovesyou',
    'qs': {
      query: 'doyoulovenpm'
    }
  }
  var expectedErrorMessage = 'Dataset or folder not found.'
  getData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
