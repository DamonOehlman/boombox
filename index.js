/* jshint node: true */
/* global window, document: false */
'use strict';

var append = require('dd/append');
var crel = require('crel');
var testResults;

module.exports = function(tape) {
  // if we are not running in a browser, just return tape
  if (typeof window == 'undefined') {
    return tape;
  }

  // get or create our test container
  testResults = testResults || createResultsContainer();

  return function(name, fn) {
    // initialise tape
    var test = tape(name, fn);

    test.on('plan', function(count) {
      console.log('plan: ', arguments);
    });

    test.on('prerun', function() {
      console.log('prerun: ', arguments);
    });

    test.on('result', function() {
      console.log('result: ', arguments);
    });

    test.on('run', function() {
      console.log('run: ', arguments);
    });

    test.on('end', function() {
      console.log('end: ', arguments);
    });

    return test;
  };
};

function createResultsContainer() {
  var results = crel('ul');

  // insert the boombox and results list
  append.to(document.body, crel('div', { class: 'boombox' },
    results
  ));

  return results;
}