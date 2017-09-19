var assert = require('assert');

// https://leetcode.com/problems/interleaving-string/description/
// Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
// For example,
// Given:
// s1 = "aabcc",
// s2 = "dbbca",
// When s3 = "aadbbcbcac", return true.
// When s3 = "aadbbbaccc", return false.

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  var results = [];
  for (var i=0; i<=s1.length; i++) {
    for (var j=0; j<=s2.length; j++) {
      if (i==0 && j==0) {
        results.push(true);
      }
      else if (j>0 && results[j-1] && s2[j-1] == s3[i+j-1]) {
        results[j] = true;
      }
      else if (i>0 && results[j] && s1[i-1] == s3[i+j-1]) {
        results[j] = true;
      }
      else {
        results[j] = false;
      }
    }
  }
  return results[j-1];
};

describe('Interleaving String', function() {
  it('should determine if interleaving', function() {
    assert.equal(isInterleave("","","a"), false);
    assert.equal(isInterleave("a","","a"), true);
    assert.equal(isInterleave("","a","a"), true);
    assert.equal(isInterleave("aabcc","dbbca","aadbbcbcac"), true);
    assert.equal(isInterleave("aabcc","dbbca","aadbbbaccc"), false);
    assert.equal(isInterleave("aaaaaaaaaa","aaaaaaaaaa","aaaaaaaaaaaaaaaaaaaa"), true);
    assert.equal(isInterleave("babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab","bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa","babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab"), false);
  });
});