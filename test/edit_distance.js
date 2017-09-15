var assert = require('assert');

// There are three operations permitted on a word: replace, delete, insert.
// The edit distance between "a" and "b" is 1, the edit distance between "abc" and "def" is 3.
// http://www.programcreek.com/2013/12/edit-distance-in-java/
// http://codercareer.blogspot.com/2011/12/no-25-edit-distance.html

var editDistance = function(a,b) {
  var min = [];
  for (var i=0; i<=a.length; i++) {
    min[i] = [];
    for (var j=0; j<=b.length; j++) {
      if (i==0 || j==0) {
        min[i][j] = i+j;
      }
      else if (a[i-1] == b[j-1]) {
        min[i][j] = min[i-1][j-1];
      }
      else {
        min[i][j] = Math.min(min[i-1][j-1], min[i][j-1], min[i-1][j])+1;
      }
    }
  }
  return min[a.length][b.length];
};


describe('Word Edit Distance', function() {
  it('should find minimum cost O(mXn)', function() {
    assert.equal(editDistance("a","b"), 1);
    assert.equal(editDistance("abc","def"), 3);
    assert.equal(editDistance("abc","bca"), 2);
    assert.equal(editDistance("abc","adc"), 1);
    assert.equal(editDistance("abc","a"), 2);
    assert.equal(editDistance("a","abc"), 2);
  });
});