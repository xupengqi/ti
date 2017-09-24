var assert = require('assert');

// n steps of stairs. Each time take either 1 or 2 steps. How many possible ways to climb.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var nStepRecursion = function(n) {
  if (n==1) return 1;
  if (n==2) return 2;
  return nStepRecursion(n-1) + nStepRecursion(n-2);
};

var nStepsIterative = function(n) {
  if (n<3) return n;
  var n_1 = 2;
  var n_2 = 1;
  for (var i=3; i<=n; i++) {
    let nn = n_1 + n_2;
    n_2 = n_1;
    n_1 = nn;
  }
  return n_1;
};

describe('Interleaving String', function() {
  it('should determine if interleaving', function() {
    assert.equal(nStepRecursion(4), 5);
    assert.equal(nStepRecursion(5), 8);
    assert.equal(nStepsIterative(4), 5);
    assert.equal(nStepsIterative(5), 8);
  });
});