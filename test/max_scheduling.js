var assert = require('assert');

// http://practice.geeksforgeeks.org/problems/activity-selection/0
// https://leetcode.com/problems/non-overlapping-intervals/description/
// http://web.stanford.edu/class/archive/cs/cs161/cs161.1176/Sections/final_review-1.pdf
// Given N activities with their start and finish times.
// Select the maximum number of activities that can be performed by a single person,
// assuming that a person can only work on a single activity at a time.

var maxScheduling = function(schedules) {
  schedules.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    else if (a[1] < b[1]) {
      return -1;
    }
    else if (a[0] > b[0]) {
      return 1;
    }
    else {
      return -1;
    }
  });
  var max = 0, curEnd = schedules[0][0];
  for (s of schedules) {
    if (s[0] >= curEnd) {
      max++;
      curEnd = s[1];
    }
  }
  return max;
};

describe('Max Scheduling', function() {
  it('should find max number of activities', function() {
    assert.deepEqual(maxScheduling([[1,2],[3,4],[0,6],[5,7],[8,9],[5,9]]), 4);
    assert.deepEqual(maxScheduling([[1,2], [2,3], [3,4], [1,3]]), 3);

  });
});