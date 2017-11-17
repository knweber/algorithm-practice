// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note: The solution set must not contain duplicate triplets.
//
// For example, given array S = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var threeSum = function(nums) {

  if(nums.length < 3 || !nums) {  // edge case
    return [];
  }

  nums = nums.sort(function(a,b) {
    return a-b;
  })

  if(nums.length === 3) {
    if(nums[0]+nums[1]+nums[2] === 0) {
      return [nums];
    }
  }

  var ans = [];

  for(var i = 0; i < nums.length - 2; i++) {
    if(i === 0 || nums[i] !== nums[i-1]) {  // if the current value is different from the previous one
      var low = i+1;  // left pointer (next value)
      var high = nums.length-1;  // right pointer
      while(low < high) {
        var sum = nums[i] + nums[low] + nums[high];
        if(sum >= 0) {
          if(sum === 0 && (high === nums.length - 1 || nums[high] !== nums[high+1])) {
            ans.push([nums[i],nums[low],nums[high]]);
          }
          high--;  // decrement right pointer
        } else {
          low++;  // increment left pointer to increase value of i if current sum is less than zero
        }
      }
    }
  }
  return ans;
}
