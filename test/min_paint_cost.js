var assert = require('assert');

// There are a row of houses, each house can be painted with three colors red, blue and green.
// The cost of painting each house with a certain color is different.
// You have to paint all the houses such that no two adjacent houses have the same color.
// You have to paint the houses with minimum cost. How would you do it?

var paintHouses = function(costs) {
  var minCostSoFar = costs[0];
  for (var i=1; i<costs.length; i++) {
    minCostSoFar = [
      Math.min(costs[i][0]+minCostSoFar[1], costs[i][0]+minCostSoFar[2]),
      Math.min(costs[i][1]+minCostSoFar[0], costs[i][1]+minCostSoFar[2]),
      Math.min(costs[i][2]+minCostSoFar[0], costs[i][2]+minCostSoFar[1])
    ];
  }
  return Math.min(minCostSoFar[0], minCostSoFar[1], minCostSoFar[2]);
};


describe('Paint Houses', function() {
  it('should find minimum cost O(n)', function() {
    assert.equal(paintHouses([[1,2,3]]), 1);
    assert.equal(paintHouses([[1,2,3],[0,0,0]]), 1);
    assert.equal(paintHouses([[1,2,3],[1,2,3]]), 3);
    assert.equal(paintHouses([[1,2,3],[3,2,1]]), 2);
    assert.equal(paintHouses([[1,1,1], [2,4,6], [-100,6,8], [0,90,20], [1,2,3]]), -74);
    assert.equal(paintHouses([[7,5,10],[3,6,1],[8,7,4],[6,2,9],[1,4,7],[2,3,6]]), 18);
    assert.equal(paintHouses([[7,8,9], [4,8,7], [10,10,1], [40,30,-20], [1,2,3]]), 3);
    assert.equal(paintHouses([[7,8,9], [4,8,7], [10,10,1], [20,20,20], [1,2,3]]), 34);
  });
});