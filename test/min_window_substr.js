var assert = require('assert');

// https://leetcode.com/problems/minimum-window-substring/description/
// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
// For example,
// S = "ADOBECODEBANC"
// T = "ABC"
// Minimum window is "BANC".
// Note:
// If there is no such window in S that covers all characters in T, return the empty string "".
// If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.

var minWindow = function(str, t) {
  var dict = t.split('').reduce(function(d,c) {
    if (!d[c]) d[c]=0;
    d[c]++;
    return d;
  }, {});
  var total = Object.keys(dict).length;
  var count = 0;
  var start = 0;
  for (var i=0; i<str.length; i++) {
    if (dict[str[i]] !== undefined) {
      dict[str[i]]--;
      if (dict[str[i]] == 0) {
        count++;
      }
    }

    if (count == total) {
      while(start<i) {
        if (dict[str[start]] !== undefined) {
          if (dict[str[start]] < 0) {
            dict[str[start]]++;
            start++;
          }
          else {
            break;
          }
        }
        else {
          start++;
        }
      }
      return str.substr(start,i-start+1);
    }
  }
  return "";
};

describe('Minimum Window Substring', function() {
  it('should find shortest string with cost O(n)', function() {
    assert.equal(minWindow("a", "aa"), "");
    assert.equal(minWindow("aa", "aa"), "aa");
    assert.equal(minWindow("abc", "a"), "a");
    assert.equal(minWindow("abc", "ab"), "ab");
    assert.equal(minWindow("abc", "bc"), "bc");
    assert.equal(minWindow("abc", "abc"), "abc");
    assert.equal(minWindow("aaaaaaaaaac", "c"), "c");
    assert.equal(minWindow("aaaaaaaaaac", "ac"), "ac");
    assert.equal(minWindow("baaaaaaaaaac", "abc"), "baaaaaaaaaac");
    assert.equal(minWindow("aabbcb", "abc"), "abbc");
  });
});