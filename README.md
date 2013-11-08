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


[![NPM](https://nodei.co/npm/boombox.png)](https://nodei.co/npm/boombox/)

[![Build Status](https://travis-ci.org/DamonOehlman/boombox.png?branch=master)](https://travis-ci.org/DamonOehlman/boombox)

## Example Usage

For an example on how to humanify your tape test output, see the following
example from some rather contrived local tests:

```js
var boombox = require('boombox');
var test = boombox(require('tape'));

test('a string is a string', function(t) {
  t.plan(1);
  t.ok(typeof 'hello' == 'string');
});

test('a number is a number', function(t) {
  t.plan(1);
  t.ok(typeof 3 == 'number');
});
```

## NOTE

This is currently a work in progress, being developed to support the
[WebRTC Spec Parity Tests](https://github.com/rtc-io/spec-parity) in
[rtc.io](https://rtc.io).

## License(s)

### MIT

Copyright (c) 2013 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
