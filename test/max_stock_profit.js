var assert = require('assert');

// Given unsorted array, find i & j. Where i <= j and a[j] - a[i] yields max, O(n)
// http://www.careercup.com/question?id=12705676

var maxProfit = function(prices) {
  var minSoFar = prices[0];
  var maxProfit = 0;
  for (price of prices) {
    minSoFar = Math.min(price, minSoFar);
    maxProfit = Math.max(maxProfit, price-minSoFar);
  }
  return maxProfit;
};

describe('Max Profit', function() {
  it('should find max profit given list of prices', function() {
    assert.equal(maxProfit([34, 8, 10, 3, 2, 80, 30, 33, 1]), 78);
  });
});