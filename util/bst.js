function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function TreeGen(vals, start, end) {
  if (start == undefined) start = 0;
  if (end == undefined) end = vals.length-1;
  if (start > end) return null;
  if (start == end) {
    return new TreeNode(vals[start]);
  }
  var mid = start + Math.floor((end - start) / 2);
  var node = new TreeNode(vals[mid]);
  node.left = TreeGen(vals, start, mid-1);
  node.right = TreeGen(vals, mid+1, end);
  return node;
}

module.exports = {
  TreeNode: TreeNode,
  TreeGen: TreeGen
};