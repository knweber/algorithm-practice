var twoSum = function(nums, target) {
  var remainders = {};
  for(var i = 0; i < nums.length; i++) {
    var curr = nums[i];
    if(remainders[curr] !== undefined) {  // if the complement to the current number needed to equal the target exists
      return [remainders[curr], i];  // return the two indices whose respective values sum to the target
    } else {
      remainders[target - curr] = i;  // the remainder/difference you need to find in order to equal the target
    }
  }
  return [];
}
