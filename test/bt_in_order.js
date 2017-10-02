var assert = require('assert');

// return binary tree using in-order traversal without recursion
// http://leetcode.com/2010/04/binary-search-tree-in-order-traversal.html
// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  var r = [], s = [], c = root;
  while (s.length || c) {
    if (c) {
      s.push(c);
      c = c.left;
    }
    else {
      let n = s.pop();
      r.push(n.val);
      c = n.right;
    }
  }
};

// Start with an empty stack and use a pointer to point to the next item.
// Base condition is either non-empty stack or pointer