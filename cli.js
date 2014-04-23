#!/usr/bin/env node
'use strict';

var ssb = require('./index')
  , pkg = require('./package.json')
  , query = process.argv[2]
  , argv = require('minimist')((process.argv.slice(2)))
  , opts = {}
  , defaults = {
      format: 'json',
      lang: 'no'
    }
  ;

function printHelp() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage:');
  console.log('  $ ssb --dataset=<dataset>');
  console.log('');
  console.log('Optional, supply other arguments.');
  console.log('See http://www.ssb.no/en/omssb/tjenester-og-verktoy/api/brukerveiledning for details');
  console.log('  $ ssb --dataset=<dataset> --format=<json|csv> --lang=<no|en>');
}

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  printHelp();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

if(!argv.dataset){
  printHelp();
  return;
}

opts.dataset = argv.dataset;
opts.format = argv.format || defaults.format;
opts.lang = argv.lang || defaults.lang;

ssb(opts, function(err, data){
  if(err){
    console.log(err);
  } else {
    console.log(data);
  }
});