'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.svn_add = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);
    test.ok(true, "Default opts.");

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);
    test.ok(true, "Custom opts.");

    test.done();
  },
  not_found: function(test) {
    test.expect(1);
    test.ok(true, "Not found path.");

    test.done();
  },
  multiple_files: function(test) {
    test.expect(1);
    test.ok(true, "Multiple files.");

    test.done();
  },
  empty_files: function(test) {
    test.expect(1);
    test.ok(true, "Empty files.");

    test.done();
  }
};
