var isBalanced = function(root) {
  if(findDepth(root) === -1) {
    return false;
  } else {
    return true;
  }
}

function findDepth(root) {
  if(root === null) {
    return 0;
  }

  var leftDepth = findDepth(root.left);
  var rightDepth;

  if(leftDepth === -1) {
    return -1;
  }

  rightDepth = findDepth(root.right);

  if(rightDepth === -1) {
    return -1;
  }

  if(Math.abs(leftDepth - rightDepth) > 1) {
    return -1;
  }

  return Math.max(leftDepth, rightDepth) + 1;
}
