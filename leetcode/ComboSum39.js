// Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
//
// The same repeated number may be chosen from C unlimited number of times.
//
// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [2, 3, 6, 7] and target 7,
// A solution set is:
// [
//   [7],
//   [2, 2, 3]
// ]

var comboSum = function(candidates,target) {
  var result = [];
  candidates.sort(function(a,b) {
    return a-b;
  })
  dfs(candidates,target,0,[],result);
  return result;
}

// for dfs, you need the original array of elements, the target value you're looking for, the current index (to keep track of where you are), the path you've built so far, and the results array containing the completed, correct paths

function dfs(candidates,target,index,path,result) {
  for(var i = index; i < candidates.length; i++) {
    var temp = target - candidates[i];
    if(temp < 0) {
      continue;
    } else if(temp === 0) {
      result.push(path.concat([candidates[i]]));
    } else {
      dfs(candidates, target - candidates[i], i, path.concat([candidates[i]]), result);
    }
  }
}
