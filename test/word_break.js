var assert = require('assert');

// https://leetcode.com/problems/word-break-ii/description/
// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
// add spaces in s to construct a sentence where each word is a valid dictionary word.
// You may assume the dictionary does not contain duplicate words.
// Return all such possible sentences.

// For example, given
// s = "catsanddog",
// dict = ["cat", "cats", "and", "sand", "dog"].
// A solution is ["cats and dog", "cat sand dog"].

var breakable = function(s, wordDict) {
  var map = {};
  map[0] = true;
  for (var i=0; i<s.length; i++) {
    for (var j=0; j<wordDict.length; j++) {
      if (map[i]) {
        let wordLength = wordDict[j].length;
        let nextPos = i+wordLength;
        if (s.substr(i, wordLength) == wordDict[j]) {
          map[nextPos] = true;
        }
      }
    }
  }
  return map[s.length] || false;
}

var wordBreak = function(s, wordDict) {
  if (!breakable(s, wordDict)) return [];

  var map = {};
  map[0] = [""];
  for (var i=0; i<s.length; i++) {
    for (var j=0; j<wordDict.length; j++) {
      if (map[i] !== undefined) {
        let wordLength = wordDict[j].length;
        let nextPos = i+wordLength;
        if (s.substr(i, wordLength) == wordDict[j]) {
          if (map[nextPos] == undefined) {
            map[nextPos] = [];
          }
          if (i == 0) {
            map[nextPos].push(wordDict[j]);
          }
          else {
            for (var k=0; k<map[i].length; k++) {
              map[nextPos].push(map[i][k]+' '+wordDict[j]);
            }
          }
        }
      }
    }
  }
  return map[s.length];
};


describe('Word Break', function() {
  it('should return all possible solutions', function() {
    assert.deepEqual(wordBreak("catsanddog",["cat","cats","and","sand","dog"]), ["cat sand dog", "cats and dog"]);
    assert.deepEqual(wordBreak("iamadog",["i","am","a","dog","iama", "mad"]), ["iama dog", "i am a dog"]);
    assert.deepEqual(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]), []);
  });
});

// Store a list of sentences ends at each character