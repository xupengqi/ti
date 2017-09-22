var assert = require('assert');

// https://leetcode.com/problems/russian-doll-envelopes/description/
// You have a number of envelopes with widths and heights given as a pair of integers (w, h).
// One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.
// What is the maximum number of envelopes can you Russian doll? (put one inside other)
// Example:
// Given envelopes = [[5,4],[6,4],[6,7],[2,3]], the maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  envelopes.sort(function(a, b) {
    if (a[0] > b[0]) {
      return 1;
    }
    else if (a[0] == b[0]) {
      if (a[1] > b[1]) return 1;
      return -1;
    }
    else {
      return -1;
    }
  });

  if (!envelopes.length) return 0;
  var max = 1;
  var len = envelopes.map(function() {return 1;});
  for (var i=1; i<envelopes.length; i++) {
    for (var j=0; j<i; j++) {
      if (envelopes[j][0] < envelopes[i][0] &&
          envelopes[j][1] < envelopes[i][1] &&
          len[j] >= len[i]) {
        len[i] = len[j]+1;
      }
      if (max < len[i]) {
        max = len[i];
      }
    }
  }
  return max;
};


describe('Maximum Russian Doll', function() {
  it('should find max russian dolls nested', function() {
    assert.equal(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]), 3);
  });
});