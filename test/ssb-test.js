'use strict'

var tap = require('tap')
var ssb = require('../index')

tap.test('It requires an options object to be supplied', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  ssb(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage)
    test.done()
  })
})

tap.test('It requires a dataset to be supplied', function (test) {
  var options = {}
  var expectedErrorMessage = 'Missing required input: options.dataset'
  ssb(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage)
    test.done()
  })
})

tap.test('Should return json in Norwegian as default', function (test) {
  var options = {
    dataset: 1120
  }
  var expectedData = 'varegruppe'
  ssb(options, function (error, data) {
    if (error) {
      throw error
    }
    test.equal(data.dataset.dimension.VareGrupper2.label, expectedData)
    test.done()
  })
})

tap.test('Should return json in English if lang is en', function (test) {
  var options = {
    dataset: 1120,
    lang: 'en'
  }
  var expectedData = 'commodity group'
  ssb(options, function (error, data) {
    if (error) {
      throw error
    }
    test.equal(data.dataset.dimension.VareGrupper2.label, expectedData)
    test.done()
  })
})

tap.test('Should return csv if format is csv', function (test) {
  var options = {
    dataset: 1120,
    lang: 'en',
    format: 'csv'
  }
  var expectedData = '\"commodity group\"'
  ssb(options, function (error, data) {
    if (error) {
      throw error
    }
    var result = data.split(',')
    test.equal(result[0], expectedData)
    test.done()
  })
})

tap.test('Should return error if data is not found', function (test) {
  var options = {
    dataset: 'npmlovesyou',
    lang: 'en',
    format: 'csv'
  }
  var expectedErrorMessage = 'Page not found.'
  ssb(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage)
    test.done()
  })
})
