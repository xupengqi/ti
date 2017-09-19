var assert = require('assert');

// https://leetcode.com/problems/candy/description/
// There are N children standing in a line. Each child is assigned a rating value.
// You are giving candies to these children subjected to the following requirements:
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  var candies = ratings.map(function(c) {
    return 1;
  });
  for (var i=1; i<ratings.length; i++) {
    if (ratings[i]>ratings[i-1]) {
      candies[i] = candies[i-1]+1;
    }
  }
  for (var i=ratings.length-2; i>=0; i--) {
    if (ratings[i]>ratings[i+1]) {
      candies[i] = Math.max(candies[i], candies[i+1]+1);
    }
  }
  return candies.reduce(function(t, c) {
    return t+c;
  },0);
};

describe('Candies', function() {
  it('should determine total candies', function() {
    assert.equal(candy([1,2,2]), 4);
    assert.equal(candy([1,2,3]), 6);
    assert.equal(candy([3,2,1]), 6);
    assert.equal(candy([1,4,1]), 4);
    assert.equal(candy([16,4,16]), 5);
    assert.equal(candy([16,4,3,3,16]), 9);
    assert.equal(candy([5,5,4,3,2,1,1]), 17);
    assert.equal(candy([1,1,2,3,4,5,5]), 17);
    assert.equal(candy([4,3,2,3,1,4,1]), 12);
    assert.equal(candy([5, 6, 2, 2, 4, 8, 9, 5, 4, 0, 5, 1]), 23);
  });
});