/* jshint node: true */
/* global window, document: false */
'use strict';

var append = require('fdom/append');
var crel = require('crel');
var testResults;

/**
  # boombox

  Boombox is a visual wrapper for visualising
  [tape](https://github.com/substack/tape) test results when running
  in a browser instance.  Tape _correctly_ focuses on the job of running tests
  for you in an environment agnostic way.  This leave your browser output
  a little lack-lustre though if you are want the results to be interpreted
  by humans.

  That's where boombox comes in.  It takes the pure magnetic information
  generated on a tape into sweet, sweet music (well not yet, but probably
  could) that humans can enjoy.

  ## Example Usage

  For an example on how to humanify your tape test output, see the following
  example from some rather contrived local tests:

  <<< test/types.js

  ## NOTE

  This is currently a work in progress, being developed to support the
  [WebRTC Spec Parity Tests](https://github.com/rtc-io/spec-parity) in
  [rtc.io](https://rtc.io).

**/

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
    var item = append.to(testResults, crel('li', name));

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