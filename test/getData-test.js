'use strict'

const tap = require('tap')
const getData = require('../lib/getData')

tap.test('getData should catch errors', function (test) {
  const options = {
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
  const options = {
    apiUrl: 'https://data.ssb.no/api/v0/npmlovesyou/json',
    qs: {
      query: 'doyoulovenpm'
    }
  }
  const expectedErrorMessage = 'Page not found.'
  getData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
