var permute = function(nums) {
    var used = [];
    var result = [];
     dfs(nums,[],result,used);
    return result;
};

function dfs(str,arr,result,used) {
  if(arr.length === str.length) {
    return result.push(arr.slice(0));
  }
  for(var i = 0; i < str.length; i++) {
    if(!used[i]) {
      used[i] = true;
      arr.push(str[i]);
      dfs(str,arr,result,used);
      used[i] = false;
      arr.pop();
    }
  }
}
