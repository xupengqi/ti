var assert = require('assert');

// Largest subset that forms a sequence. May contain duplicate
// {0,3,4,6,7,9,1,2} => {0,1,2,3,4}
// http://www.careercup.com/question?id=11070934
// http://www.programcreek.com/2013/01/leetcode-longest-consecutive-sequence-java/

var maxSeq = function(nums) {
  var maxLen = 0, maxSeq = null, hash = {};
  for (n of nums) {
    let lo = n, hi = n;
    if (hash[n-1] !== undefined && hash[n-1] < n) {
      lo = hash[n-1];
      delete hash[n-1];
    }
    if (hash[n+1] !== undefined && hash[n+1] > n) {
      hi = hash[n+1];
      delete hash[n+1];
    }
    hash[lo] = hi;
    hash[hi] = lo;
    if (hi-lo > maxLen) {
      maxLen = hi-lo;
      maxSeq = [lo, hi];
    }
  }
  return maxSeq;
};

describe('Max Continuous Sequence', function() {
  it('should find max continuous sequence', function() {
    assert.deepEqual(maxSeq([4,5,6,1,2,3]), [1,6]);
    assert.deepEqual(maxSeq([-1,-2,1,2,3,3,9,8,7,6,1,2,3,6,7,8,10,0,4]), [-2,4]);
    assert.deepEqual(maxSeq([1,2,3,3,9,8,7,6,1,2,3,6,7,8,10]), [6,10]);
  });
});