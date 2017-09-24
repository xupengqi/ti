var assert = require('assert');

// https://leetcode.com/problems/target-sum/description/
// You are given a list of non-negative integers, a1, a2, ..., an, and a target, S.
// Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
// Find out how many ways to assign symbols to make sum of integers equal to target S.

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  var ways = {};
  if (nums[0] == 0) {
    ways[0] = 2;
  }
  else {
    ways[-nums[0]] = 1;
    ways[nums[0]] = 1;
  }
  for (var i=1; i<nums.length; i++) {
    let n = nums[i];
    var totals = Object.keys(ways);
    var newWays = {};
    for (t of totals) {
      let ti = parseInt(t);
      if (!newWays[ti+n]) { newWays[ti+n] = 0; }
      if (!newWays[ti-n]) { newWays[ti-n] = 0; }
      newWays[ti+n] += ways[t];
      newWays[ti-n] += ways[t];
    }
    ways = newWays;
  }
  return ways[S] ? ways[S] : 0;
};

describe('Target Sum Ways', function() {
  it('should find ways to reach target sum', function() {
    // assert.equal(findTargetSumWays([1, 1, 1, 1, 1], 3), 5);
    assert.equal(findTargetSumWays([0,0,0,0,0,0,0,0,1], 1), 256);
  });
});