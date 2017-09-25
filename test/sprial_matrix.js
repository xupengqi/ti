var assert = require('assert');

// http://www.programcreek.com/2013/01/leetcode-spiral-matrix-java/
// https://leetcode.com/problems/spiral-matrix/description/
// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
// For example,
// Given the following matrix:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// You should return [1,2,3,6,9,8,7,4,5].

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  var m = matrix.length;
  var n = matrix[0].length;
  var i = 0;
  var result = [];
  while (i<m/2 && i < n/2) {
    for (var r = i; r< n-i; r++) {
      // console.log('r');
      result.push(matrix[i][r]);
    }
    for (var d = i+1; d<m-i; d++) {
      // console.log('d');
      result.push(matrix[d][r-1]);
    }
    if (d-1 > i) {
      for (var l = r-2; l>=i; l--) {
      // console.log('l');
        result.push(matrix[d-1][l]);
      }
    }
    if (r-1 > i) {
      for (var u = d-2; u>i; u--) {
        // console.log('u');
        result.push(matrix[u][i]);
      }
    }

    i++;
  }
  return result;
};

describe('Sprial Matrix', function() {
  it('should print matrix in spiral', function() {
    assert.deepEqual(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]), [1,2,3,6,9,8,7,4,5]);
    assert.deepEqual(spiralOrder([[1,2,3,5,6,7]]), [1,2,3,5,6,7]);
    assert.deepEqual(spiralOrder([[1],[4],[7]]), [1,4,7]);
  });
});