var assert = require('assert');
var bst = require('../util/bst.js');

// Find two nodes in a BST that adds up to x
// http://www.careercup.com/question?id=15320677
// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solution/

var bstSum = function(root, n) {
};

describe('BST SUM', function() {
  it('should find two nodes add up to X', function() {
    // assert.deepEqual(bstSum(bst.TreeGen([1,2,3,4,5,6]), 3), [1,2]);
  });
});

// bst2Sum: function(root, n) {
//   var lq = [root], rq = [root], lc = root[1], rc = root[2];
//   while (lq.length > 0 || rq.length > 0 || lc || rc) {
//     if (lc) {
//       lq.push(lc);
//       lc = lc[1];
//     }
//     else if (rc) {
//       rq.push(rc);
//       rc = rc[2];
//     }
//     else {
//       if (lq.length <= 1 && rq.length <= 1) return [];
//       if (lq.length === 0 || rq.length === 0) return [];
//       var l = lq.pop(), r = rq.pop();
//       if (l[0] == r[0]) return []; // to prevent adding the same node
//       if (l[0]+r[0] === n) return [l[0],r[0]];
//       if (l[0]+r[0] < n) {
//         rq.push(r);
//         lc = l[2];
//       }
//       else {
//         lq.push(l);
//         rc = r[1];
//       }
//     }
//   }
//   return [];
// },