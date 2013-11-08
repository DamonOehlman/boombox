var boombox = require('..');
var test = boombox(require('tape'));

test('a string is a string', function(t) {
  t.plan(1);
  t.ok(typeof 'hello' == 'string');
});

test('a number is a number', function(t) {
  t.plan(1);
  t.ok(typeof 3 == 'number');
});