var assert = require('assert');

// https://leetcode.com/problems/sliding-window-maximum/description/
// http://articles.leetcode.com/sliding-window-maximum/
// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right.
// You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Therefore, return the max sliding window as [3,3,5,5,6,7].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  var dq = [];
  var result = [];
  for (var i=0; i<nums.length; i++) {
    while (dq.length && nums[dq[dq.length-1]] < nums[i]) {
      dq.pop();
    }
    dq.push(i);
    while (dq.length && dq[0] <= i-k) {
      dq.shift();
    }
    if (i>=k-1) {
      result.push(nums[dq[0]]);
    }
  }
  return result;
};

describe('Max Sliding Window', function() {
  it('should find max sliding window', function() {
    assert.deepEqual(maxSlidingWindow([1,3,-1], 1), [1,3,-1]);
    assert.deepEqual(maxSlidingWindow([], 1), []);
    assert.deepEqual(maxSlidingWindow([1], 1), [1]);
    assert.deepEqual(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3), [3,3,5,5,6,7]);
  });
});