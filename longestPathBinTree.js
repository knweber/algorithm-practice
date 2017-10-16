var TreeNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function maxDepth(node) {
  if(!node) {
    return 0;
  } else {

    var leftDepth = maxDepth(node.left);
    var rightDepth = maxDepth(node.right);

    if(leftDepth > rightDepth) {
      return leftDepth + 1;
    } else {
      return rightDepth + 1;
    }
  }
}

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(4);

maxDepth(root); // => 3
