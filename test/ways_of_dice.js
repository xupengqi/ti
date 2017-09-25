var assert = require('assert');

// Given N dices. Each dice has A faces.That means each dice has numbers from 1 to A.
// Given Sum S, find the number of ways to make the sum S if dices are rolled together.
// http://www.careercup.com/question?id=17850664

var waysOfDice = function(numDice, sides, sum) {
  var results = [0];
  for (let i=1; i<=sides; i++) {
    results.push(1);
  }
  for (var i=2; i<=numDice; i++) {
    let total = 0;
    let newWays = [0,0];
    for (var j=2; j<=sum; j++) {
      total -= j-sides-1 < 0 ? 0 : (results[j-sides-1] || 0);
      total += (results[j-1] || 0);
      newWays.push(total);
    }
    results = newWays;
  }
  return results[sum];
};

describe('Ways of Dice', function() {
  it('should determine number of ways of dice roll', function() {
    assert.equal(waysOfDice(1,6,6), 1);
    assert.equal(waysOfDice(2,6,1), 0);
    assert.equal(waysOfDice(3,6,5), 6);
    assert.equal(waysOfDice(2,6,7), 6);
    assert.equal(waysOfDice(2,6,9), 4);
  });
});

// Start with one dice, what are the ways from 1 until sum?