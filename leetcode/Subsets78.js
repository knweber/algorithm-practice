// Given a set of distinct integers, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// For example,
// If nums = [1,2,3], a solution is:
//
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

var subsets = function(nums) {
  var result = [];
  recurse(nums,0,[],result);
  return result;
}

function recurse(nums,index,subset,result) {
  result.push(subset);
  for(var i = index; i < nums.length; i++) {
    recurse(nums, i+1, subset.concat(nums[i]), result);
  }
}
