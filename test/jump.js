var assert = require('assert');

// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.
// For example:
// A = [2,3,1,1,4], return true.
// A = [3,2,1,0,4], return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var lastIndex = nums.length - 1;
  for(var i=nums.length - 2; i>=0; i--) {
    if (nums[i] + i >= lastIndex) lastIndex = i;
  }
  return lastIndex == 0;
};

describe('Jump Game', function() {
  it('should determine if can reach end', function() {
    assert.equal(canJump([2,3,1,1,4]), true);
    assert.equal(canJump([3,2,1,0,4]), false);
  });
});

// Work from back.