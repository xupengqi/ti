var assert = require('assert');
var bst = require('../util/bst.js');

// https://leetcode.com/problems/binary-search-tree-iterator/description/
// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

function TreeAssert(vals) {
  var r = bst.TreeGen(vals);
  var i = new BSTIterator(r), a = [];
  while (i.hasNext()) a.push(i.next());
  assert.deepEqual(a, vals);
}

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.curVal = null;
  this.nodes = [root];
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.nodes.length;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  while (this.nodes[this.nodes.length-1].left && (this.nodes[this.nodes.length-1].left.val > this.curVal || this.curVal == null)) {
    this.nodes.push(this.nodes[this.nodes.length-1].left);
  }
  var node = this.nodes.pop();
  if (node.right) {
    this.nodes.push(node.right);
  }
  this.curVal = node.val;
  return node.val;
};


describe('BST Iterator', function() {
  it('should iterate BST', function() {
    TreeAssert([1]);
    TreeAssert([1,2]);
    TreeAssert([1,2,3]);
    TreeAssert([1,2,3,4,5,6,7]);
  });
});