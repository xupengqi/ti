var assert = require('assert');

// https://leetcode.com/problems/3sum/description/
// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var results = [];
  nums.sort(function(a,b) {
    if (a>b) return 1;
    else return -1;
  });
  for (var i=0; i<nums.length; i++) {
    if (i>0 && nums[i] == nums[i-1]) continue;
    let s = i+1, e = nums.length - 1;
    while (s < e) {
      let sum = nums[i] + nums[s] + nums[e];
      if (sum == 0) {
        results.push([nums[i], nums[s], nums[e]]);
      }
      if (sum >= 0) {
        e--;
        while (nums[e] == nums[e+1]) {
          e--;
        }
      }
      if (sum <= 0) {
        s++;
        while (nums[s] == nums[s-1]) {
          s++;
        }
      }
    }
  }
  return results;
};

describe('3 Sum', function() {
  it('should find three elements sum of 0', function() {
    // assert.deepEqual(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
    assert.deepEqual(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]), [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]])
  });
});