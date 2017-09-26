// Find maximum element of a binary search tree using DFS

function findMax(root) {
  if(root) {
    if(root.right) {
      return findMax(root.right);
    }
    return root.value;
  } else {
    return null;
  }
}
