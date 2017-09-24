var assert = require('assert');

// https://leetcode.com/problems/maximal-square/description/
// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  var max = [];
  var curMax = 0;
  for (var i=0; i<matrix.length; i++) {
    var newMax = [];
    for (var j=0; j<matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        newMax.push(0);
      }
      else {
        newMax.push(Math.min(
          max[j] ? max[j] : 0,
          (j > 0 && max[j-1]) ? max[j-1] : 0,
          (j > 0 && newMax[j-1]) ? newMax[j-1] : 0
        ) + 1);
        curMax = Math.max(newMax[j], curMax);
      }
    }
    max = newMax;
  }
  return curMax * curMax;
};

describe('Max Square Size', function() {
  it('should find max square size', function() {
    assert.equal(maximalSquare(["10100","10111","11111","10010"]), 4);
    assert.equal(maximalSquare(["11","00"]), 1);
    assert.equal(maximalSquare(["11","11"]), 4);
  });
});