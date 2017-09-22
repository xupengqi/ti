var assert = require('assert');

// http://codercareer.blogspot.com/2011/12/no-26-minimal-number-of-coins-for.html
// https://leetcode.com/problems/interleaving-string/description/
// Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
// For example,
// Given:
// s1 = "aabcc",
// s2 = "dbbca",
// When s3 = "aadbbcbcac", return true.
// When s3 = "aadbbbaccc", return false.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  var min = [0];
  for (var i=1; i<=amount; i++) {
    min[i] = -1;
    for (c of coins) {
      if (i-c >=0 && min[i-c] >= 0 && (min[i] == -1 || min[i-c] + 1 < min[i])) {
        min[i] = min[i-c] + 1;
      }
    }
  }
  return min[i-1];
};

describe('Interleaving String', function() {
  it('should determine if interleaving', function() {
    assert.equal(coinChange([1, 2, 5], 11), 3);
    assert.equal(coinChange([2], 3), -1);
  });
});