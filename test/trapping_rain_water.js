var assert = require('assert');

// https://leetcode.com/problems/trapping-rain-water/description/
// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it is able to trap after raining.
// For example,
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var left = 0, right = height.length-1;
  var lmax = 0;
  var rmax = 0;
  var total = 0;
  while (left <= right) {
    if (lmax < rmax) {
      if (height[left] > lmax) {
        lmax = height[left];
      }
      else {
        total += lmax - height[left];
      }
      left++;
    }
    else {
      if (height[right] > rmax) {
        rmax = height[right];
      }
      else {
        total += rmax - height[right];
      }
      right--;
    }
  }
  return total;
};

describe('Trapping Rain Water', function() {
  it('should find total unit trapped', function() {
    assert.equal(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 6);
    assert.equal(trap([5]), 0);
    assert.equal(trap([5,6]), 0);
    assert.equal(trap([5,6,7,6,5]), 0);
    assert.equal(trap([10,5,10]), 5);
  });
});

// Find max to the left and max to the right.
// The minimum of the two defines the current bucket.