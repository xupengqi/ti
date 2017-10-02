var assert = require('assert');

// https://leetcode.com/problems/sort-colors/discuss/
// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.
// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var zero = -1;
  var two = nums.length;
  while (nums[zero+1] < 1) {
    zero++;
  }
  while (nums[two-1] > 1) {
    two--;
  }
  for (var i=zero+1; i<two; i++) {
    if (nums[i]<1) {
      zero++;
      swap(nums, zero, i);
    }
    else if (nums[i] > 1) {
      two--;
      swap(nums, two, i);
      i--;
    }
  }
  if (zero < two-1 && nums[zero+1] > nums[two-1]) {
    swap(nums, zero+1, two-1);
  }
  return nums;
};

var swap = function(nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};

describe('Sort Colors', function() {
  it('should sort array', function() {
    assert.deepEqual(sortColors([1,0]), [0,1]);
    assert.deepEqual(sortColors([0,2]), [0,2]);
    assert.deepEqual(sortColors([2,0]), [0,2]);
    assert.deepEqual(sortColors([2,1]), [1,2]);
    assert.deepEqual(sortColors([1,2,0]), [0,1,2]);
    assert.deepEqual(sortColors([1,1,0,0,2,2,0,0,1,1]), [0,0,0,0,1,1,1,1,2,2]);
    assert.deepEqual(sortColors([1,1,0,0]), [0,0,1,1]);
    assert.deepEqual(sortColors([2,2,1,1,0,0]), [0,0,1,1,2,2]);
    assert.deepEqual(sortColors([2,2,2,2,2,0]), [0,2,2,2,2,2]);
    assert.deepEqual(sortColors([1,1,1,1,1,0]), [0,1,1,1,1,1]);
    assert.deepEqual(sortColors([2,1,1,1,1,1]), [1,1,1,1,1,2]);
    assert.deepEqual(sortColors([1,2,2,2,2,0,0,0,1,1]), [0,0,0,1,1,1,2,2,2,2]);
  });
});

// Use two pointers for end of left part and beginning of right part.
// Backup and swap with right
// No need to back up when swap with left because its either 0 or 1