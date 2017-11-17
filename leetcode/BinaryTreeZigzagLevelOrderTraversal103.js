var zigzagLevelOrder = function(root) {
  function dfs(level,direction,root) {
    if(root) {
      if(level >= result.length) {
        result.push([]);
      }
      if(direction === 0) {
        result[level].push(root.val);
      }
      if(direction === 1) {
        result[level].unshift(root.val);
      }
      if(root.left) {
        dfs(level+1, (direction+1)%2, root.left);
      }
      if(root.right) {
        dfs(level+1, (direction+1)%2, root.right);
      }
    }
  }
  var result = [];
  dfs(0,0,root);
  return result;
}
