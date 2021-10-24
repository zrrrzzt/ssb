const tap = require('tap')
const ssb = require('../index')

tap.test('It requires an options object to be supplied', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input: options'
  ssb(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage)
    test.end()
  })
})

tap.test('It requires a dataset to be supplied', function (test) {
  const options = {}
  const expectedErrorMessage = 'Missing required input: options.dataset'
  ssb(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage)
    test.end()
  })
})

tap.test('Should return json in Norwegian as default', function (test) {
  const options = {
    dataset: 1120
  }
  const expectedData = 'varegruppe'
  ssb(options, function (error, data) {
    if (error) {
      throw error
    }
    test.equal(data.dataset.dimension.VareGrupper2.label, expectedData)
    test.end()
  })
})

tap.test('Should return json in English if lang is en', function (test) {
  const options = {
    dataset: 1120,
    lang: 'en'
  }
  const expectedData = 'commodity group'
  ssb(options, function (error, data) {
    if (error) {
      throw error
    }
    test.equal(data.dataset.dimension.VareGrupper2.label, expectedData)
    test.end()
  })
})

tap.test('Should return csv if format is csv', function (test) {
  const options = {
    dataset: 1120,
    lang: 'en',
    format: 'csv'
  }
  const expectedData = '"commodity group"'
  ssb(options, function (error, data) {
    if (error) {
      throw error
    }
    const result = data.split(',')
    test.equal(result[0], expectedData)
    test.end()
  })
})

tap.test('Should return error if data is not found', function (test) {
  const options = {
    dataset: 'npmlovesyou',
    lang: 'en',
    format: 'csv'
  }
  const expectedErrorMessage = 'Page not found.'
  ssb(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage)
    test.end()
  })
})
