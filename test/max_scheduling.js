var assert = require('assert');

// http://practice.geeksforgeeks.org/problems/activity-selection/0
// Given N activities with their start and finish times.
// Select the maximum number of activities that can be performed by a single person,
// assuming that a person can only work on a single activity at a time.

var maxScheduling = function(schedules) {
  var startTime = [];
  var max =[0];
  for(s of schedules) {
    if (!startTime[s[0]]) {
      startTime[s[0]] = []
    }
    startTime[s[0]].push(s);
  }
  for (var i=1; i<startTime.length; i++) {
    if (!max[i]) {
      max[i] = max[i-1];
    }
    if (startTime[i]) {
      for (s of startTime[i]) {
        if (!startTime[s[1]]) {
          max[s[1]] =  max[i-1]+1;
        }
        else {
          max[s[1]] = Math.max(startTime[s[1]], max[i-1]+1);
        }
      }
    }
  }
  return max[max.length-1];
};

describe('Max Scheduling', function() {
  it('should find max number of activities', function() {
    assert.deepEqual(maxScheduling([[1,2],[3,4],[0,6],[5,7],[8,9],[5,9]]), 4);
  });
});