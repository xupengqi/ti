var assert = require('assert');

// https://leetcode.com/problems/dungeon-game/description/

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  var result = [];
  for (var i=0; i<dungeon.length; i++) {
    result.push([]);
    for (var j=0; j<dungeon[i].length; j++) {
      result[i].push(0);
    }
  }
  for (var i = dungeon.length - 1; i>=0; i--) {
    for (var j = dungeon[i].length - 1; j>=0; j--) {
      result[i][j] = 0;
      if (i == dungeon.length - 1 && j == dungeon[i].length - 1) {
        result[i][j] = dungeon[i][j];
      }
      else if (i == dungeon.length - 1) {
        result[i][j] = result[i][j+1] + dungeon[i][j];
      }
      else if (j == dungeon[i].length - 1) {
        result[i][j] = result[i+1][j] + dungeon[i][j];
      }
      else {
        result[i][j] = Math.max(result[i][j+1], result[i+1][j]) + dungeon[i][j];
      }
      if (result[i][j] > 0) result[i][j] = 0;
    }
  }
  return 1 - result[0][0];
};

describe('Dungeon Game', function() {
  it('should find min health required', function() {
    assert.equal(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]), 7);
    assert.equal(calculateMinimumHP([[0,0,0],[1,1,-1]]), 1);
    assert.equal(calculateMinimumHP([[1,-3,3],[0,-2,0],[-3,-3,-3]]), 3);
  });
});