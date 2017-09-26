// Find minimum element of a binary search tree using DFS

function findMin(root) {
  if(root) {
    if(root.left) {
      return findMin(root.left);
    }
    return root.value;
  } else {
    return null;
  }
}
