const arrayAndStringMethods = require('../solutions/ArraysAndStrings')
const assert = require('assert');

describe('isUnique function', function() {

  it('returns false when all characters are not unique', function() {
    let result = arrayAndStringMethods.isUnique("abc");
    assert.equal(result, false);
  });
  it('returns true when all characters are unique', function() {
    let result = arrayAndStringMethods.isUnique("aaa");
    assert.equal(result, true);
  });
  it('returns true on single character strings', function() {
    let result = arrayAndStringMethods.isUnique("a");
    assert.equal(result, true);
  });
  it('fails on numbers', function() {
    assert.throws(function() {
      arrayAndStringMethods.isUnique(0);
    });
  });
  it('fails on booleans', function() {
    assert.throws(function() {
      arrayAndStringMethods.isUnique(true);
    });
  });
  it('fails on objects', function() {
    assert.throws(function() {
      arrayAndStringMethods.isUnique({});
    });
  });

});

describe('urlify function', function() {
  it('converts space characters into %20', function() {
    let result = arrayAndStringMethods.urlify("a b c");
    assert.equal(result, "a%20b%20c");
  });
  it('returns an empty string for empty strings', function() {
    let result = arrayAndStringMethods.urlify("");
    assert.equal(result, "");
  });
  it('returns an %20 for a string with exactly one space character', function() {
    let result = arrayAndStringMethods.urlify(" ");
    assert.equal(result, "%20");
  });

  it('fails on numbers', function() {
    assert.throws(function() {
      arrayAndStringMethods.urlify(0);
    });
  });

  it('fails on booleans', function() {
    assert.throws(function() {
      arrayAndStringMethods.urlify(true);
    });
  });

  it('fails on objects', function() {
    assert.throws(function() {
      arrayAndStringMethods.urlify({});
    });
  });

});
