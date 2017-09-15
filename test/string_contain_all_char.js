var assert = require('assert');

// Find the shortest string contain all characters
// Input: "aabbcb"
// Alphabet: "abc"
// Output: "abbc"

var shortestStringContain = function(str, dict) {
  var map = {};
  var count = 0;
  var start = 0;
  for (var i=0; i<str.length; i++) {
    if (dict.has(str[i])) {
      if (map[str[i]] == undefined) {
        map[str[i]] = 1;
        count++;
      }
      else {
        map[str[i]]++;
      }
    }

    if (count == dict.size) {
      while(start<i) {
        if (dict.has(str[start])) {
          if (map[str[start]] > 1) {
            map[str[start]]--;
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
      console.log(start,i-start+1)
      return str.substr(start,i-start+1);
    }
  }
};

describe('Shortest String Contain All Characters', function() {
  it('should find shortest string with cost O(n)', function() {
    assert.equal(shortestStringContain("abc", new Set(["a"])), "a");
    assert.equal(shortestStringContain("abc", new Set(["a", "b"])), "ab");
    assert.equal(shortestStringContain("abc", new Set(["b", "c"])), "bc");
    assert.equal(shortestStringContain("abc", new Set(["a", "b", "c"])), "abc");
    assert.equal(shortestStringContain("aaaaaaaaaac", new Set(["c"])), "c");
    assert.equal(shortestStringContain("aaaaaaaaaac", new Set(["a", "c"])), "ac");
    assert.equal(shortestStringContain("baaaaaaaaaac", new Set(["a", "b", "c"])), "baaaaaaaaaac");
    assert.equal(shortestStringContain("aabbcb", new Set(["a", "b", "c"])), "abbc");
  });
});