var assert = require('assert');

// https://leetcode.com/problems/minimum-size-subarray-sum/description/
// Given an array of n positive integers and a positive integer s,
// find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
// For example, given the array [2,3,1,2,4,3] and s = 7,
// the subarray [4,3] has the minimal length under the problem constraint.

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (!nums || !nums.length || s <= 0) {
        if (s > 0) return -1;
        return 0;
    }
    var curCount = 0;
    var curStart = 0;
    var minLength = nums.length;
    for (var i=0; i<nums.length; i++) {
        curCount += nums[i];
        if (i > 0) {
            while (curCount - nums[curStart] >= s) {
                curCount -= nums[curStart];
                curStart++;
            }
        }
        if (curCount >= s && minLength > i - curStart + 1) {
            minLength = i - curStart + 1;
        }
    }
    return minLength;
};

describe('Minimum Subarry Length', function() {
  it('should find minimum length of subarry with sum greater than s', function() {
    assert.equal(minSubArrayLen(7, [2,3,1,2,4,3]), 2);
  });
});