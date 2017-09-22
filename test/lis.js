var assert = require('assert');

// https://leetcode.com/problems/longest-increasing-subsequence/description/
// Given an unsorted array of integers, find the length of longest increasing subsequence.
// For example,
// Given [10, 9, 2, 5, 3, 7, 101, 18],
// The longest increasing subsequence is [2, 3, 7, 101],
// therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0;
  var curMax = 1;
  var max = nums.map(function() {return 1;});
  for (var i=1; i<nums.length; i++) {
    for (var j=0; j<i; j++) {
      if (nums[j] < nums[i] && max[j] >= max[i]) {
        max[i] = max[j]+1;
      }
      if (curMax < max[i]) {
        curMax = max[i];
      }
    }
  }
  return curMax;
};

describe('Longest Increasing Subsequence', function() {
  it('should find length of LIS', function() {

    assert.equal(lengthOfLIS([1,3,6,7,9,4,10,5,6]), 6);
    assert.equal(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4);
    assert.equal(lengthOfLIS([4, 3, 2, 1, 1]), 1);
    assert.equal(lengthOfLIS([1, 2, 3]), 3);
    assert.equal(lengthOfLIS([1]), 1);
    assert.equal(lengthOfLIS([]), 0);
  });
});