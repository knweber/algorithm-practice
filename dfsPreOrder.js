// pre-order DFS for BST

function dfs(root) {
  var stack = [root]; // last-in, first-out
  var result = [];

  while(stack.length) { // will continue until no more children are left in stack (all have been popped off)
    var popped = stack.pop(); // pop off last value
    result.push(popped.value); // add popped value (last value) to result
    if(popped.right) stack.push(popped.right); // if popped value has a right child, add the right child to the top of the stack
    if(popped.left) stack.push(popped.left); // if popped value has a left child, add the left child to the top of the stack
    // continue with while loop for the child nodes now in the stack (LIFO)
  }
  return result;
}
