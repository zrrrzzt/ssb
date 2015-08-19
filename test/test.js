'use strict'

var ssb = require('../index')
var assert = require('assert')
var opts = {}

describe('ssb', function () {

  beforeEach(function () {
    opts = {}
  })

  it('Should throw if dataset is not supplied', function (done) {
    ssb(opts, function (err, data) {
      assert.throws(function () {
          if (err) {
            throw err
          }
        }, function (err) {
          if ((err instanceof Error) && /Missing required param: dataset/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      )
      done()
    })
  })

  it('Should return json in Norwegian as default', function (done) {
    opts.dataset = 1120
    ssb(opts, function (err, data) {
      if (err) {
        throw err
      }

      var res = JSON.parse(data)

      assert.equal(res.dataset.dimension.VareGrupper2.label, 'varegruppe')
      done()
    })
  })

  it('Should return json in English if lang is en', function (done) {
    opts.dataset = 1120
    opts.lang = 'en'
    ssb(opts, function (err, data) {
      if (err) {
        throw err
      }

      var res = JSON.parse(data)

      assert.equal(res.dataset.dimension.VareGrupper2.label, 'commodity group')
      done()
    })
  })

  it('Should return csv if format is csv', function (done) {
    opts.dataset = 1120
    opts.lang = 'en'
    opts.format = 'csv'

    ssb(opts, function (err, data) {
      if (err) {
        throw err
      }

      var res = data.split(',')

      assert.equal(res[0], '\"commodity group\"')
      done()
    })
  })
})
