var assert = require('assert');

// https://www.interviewcake.com/question/coin
// computes the number of ways to make amount of money with coins of the available denominations
// A great way to avoid recursion is to go bottom-up
// for each denomination, num ways(n) = num ways(n-denom) + num ways(n)
// For input [5, [1,2,3]]

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeWays = function(coins, amount) {
  var ways = [1];
  for (c of coins) {
    for (var i=c; i<=amount; i++) {
      if (ways[i] == undefined) ways[i] = 0;
      ways[i] += ways[i-c];
    }
  }
  return ways[amount];
};

describe('Coin Change Ways', function() {
  it('should determine ways of coin change', function() {
    assert.equal(coinChangeWays([1,2,3], 4), 4);
    assert.equal(coinChangeWays([1,2,3], 5), 5);
    assert.equal(coinChangeWays([1,2,3], 8), 10);
    assert.equal(coinChangeWays([1,3,5], 5), 3);
  });
});

// For 0 - amount, sum ways for each n-coin