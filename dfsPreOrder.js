// pre-order DFS for BST

function dfs(root) {
  var stack = [root];
  var result = [];

  while(stack.length) {
    var popped = stack.pop();
    result.push(popped.value);
    if(popped.right) stack.push(popped.right);
    if(popped.left) stack.push(popped.left);
  }
  return result;
}
