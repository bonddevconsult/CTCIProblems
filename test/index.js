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

describe('catalogCharacterInstances function', function() {
  it('records the instances of every character in a string', function() {
    let result = arrayAndStringMethods.catalogCharacterInstances("aafdacscbbc");
    assert.deepEqual(result, {a:3,b:2,c:3,d:1,f:1,s:1});
  });
  it('fails on numbers', function() {
    assert.throws(function() {
      arrayAndStringMethods.catalogCharacterInstances(0);
    });
  });

  it('fails on booleans', function() {
    assert.throws(function() {
      arrayAndStringMethods.catalogCharacterInstances(true);
    });
  });

  it('fails on objects', function() {
    assert.throws(function() {
      arrayAndStringMethods.catalogCharacterInstances({});
    });
  });

});

describe('isPermutation function', function() {
  it('will return true if two string are a permutation of one another', function() {
    let result = arrayAndStringMethods.isPermutation("mom","omm");
    assert.equal(result, true);
  });
  it('will return false if two strings are not a permutation of one another', function() {
    let result = arrayAndStringMethods.isPermutation("mom","dad");
    assert.equal(result, "");
  });

  it('fails on numbers', function() {
    assert.throws(function() {
      arrayAndStringMethods.isPermutation(0);
    });
  });

  it('fails on booleans', function() {
    assert.throws(function() {
      arrayAndStringMethods.isPermutation(true);
    });
  });

  it('fails on objects', function() {
    assert.throws(function() {
      arrayAndStringMethods.isPermutation({});
    });
  });
});

describe('oneAway function', function() {
  it('returns false if the origin has two or more characters more than the target', function() {
    let result = arrayAndStringMethods.oneAway("test123","test1");
    assert.equal(result, false);
  });

  it('returns false if the target has one or more characters more than the origin', function() {
    let result = arrayAndStringMethods.oneAway("test1","test123");
    assert.equal(result, false);
  });

  it('returns true if the origin and target have one or fewer character differences', function() {
    let result = arrayAndStringMethods.oneAway("alan","alana");
    assert.equal(result, true);
  });

  it('returns true if the origin and target have one or fewer character differences regardless of order', function() {
    let result = arrayAndStringMethods.oneAway("alan","nala");
    assert.equal(result, true);
  });

  it('returns false if the target has different set of characters ', function() {
    let result = arrayAndStringMethods.oneAway("alan","malak");
    assert.equal(result, false);
  });

  it('fails on numbers', function() {
    assert.throws(function() {
      arrayAndStringMethods.oneAway(0);
    });
  });

  it('fails on booleans', function() {
    assert.throws(function() {
      arrayAndStringMethods.oneAway(true);
    });
  });

  it('fails on objects', function() {
    assert.throws(function() {
      arrayAndStringMethods.oneAway({});
    });
  });
});
describe('rotateMatrix function', function() {
  it('returns a matrix rotated 90 degrees for an nXn matrix', function() {
    const test = [['A','B','C'],
                  ['D','E','F'],
                  ['G','H','I']];
    const expectedResult = [['G','D','A'],
                    ['H','E','B'],
                    ['I','F','C']];
    let actualResult = arrayAndStringMethods.rotateMatrix(test);
    assert.deepEqual(actualResult, expectedResult);
  });
  it('returns the same array for a matrix of size 1', function(){
    let result = arrayAndStringMethods.rotateMatrix([["A"]])
    assert.deepEqual(result,[["A"]])
  });
  it('fails on numbers', function() {
    assert.throws(function() {
      arrayAndStringMethods.rotateMatrix(0);
    });
  });

  it('fails on booleans', function() {
    assert.throws(function() {
      arrayAndStringMethods.rotateMatirx(true);
    });
  });

  it('fails on strings', function() {
    assert.throws(function() {
      arrayAndStringMethods.rotateMatrix("");
    });
  });
  it('fails on matrices where the size is not MXN', function() {
      const test = [['A','B','C'],
                    ['D','E','F','G'],
                    ['G','H','I']];
      assert.throws(function() {
        arrayAndStringMethods.rotateMatrix(test)
      });
  });
  it('fails on empty arrays', function() {
    assert.throws(function() {
      arrayAndStringMethods.rotateMatrix([[]]);
    });
  });
});
