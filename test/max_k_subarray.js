var assert = require('assert');

// http://www.geeksforgeeks.org/largest-sum-subarray-least-k-numbers/
// Given an array, find the subarray (containing at least k numbers) which has the largest sum.

var maxSubArraySumK = function(nums, k) {
  var curMax = nums.slice(0);
  for (var i=1; i<nums.length; i++) {
    // finds the max subarray containing the i(th) element
    curMax[i] = Math.max(nums[i], curMax[i-1]+nums[i]);
  }
  var curWindow = 0;
  var max = null;
  for (var i=0; i<nums.length; i++) {
    curWindow += nums[i];
    if (i==k-1) {
      max = curWindow;
    }
    if (i>=k) {
      curWindow -= nums[i-k];
      max = Math.max(max, curWindow, curWindow + curMax[i-k]);
    }

  }
  return max;
};

describe('Max Subarray Sum of K+ Elements', function() {
  it('should find max', function() {
    assert.equal(maxSubArraySumK([-4, -2, 1, -3], 2), -1);
    assert.equal(maxSubArraySumK([1,1,1,1,1,1], 2), 6);
  });
});