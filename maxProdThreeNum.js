// Given an integer array, find three numbers whose product is maximum and output the maximum product.

var maximumProduct = function(nums) {
    nums = nums.sort(function(a,b) {
        return a - b;
    });

    if(nums.length > 3) {
      // placeholder -- smallest value
        var max = nums[0];

        if(nums[0] >= 0) {
            var product = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
            if(product >= max) {
                max = product;
                return max;
            }
        } else {
            var firstTwoProd = (nums[0])*(nums[1]);
            var lastTwoProd = (nums[nums.length - 2]) * (nums[nums.length - 3]);
            if(firstTwoProd > lastTwoProd) {
                max = (nums[0])*(nums[1])*(nums[nums.length - 1]);
                return max;
            } else {
                max = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
                return max;
            }
        }

    } else if(nums.length === 3) {
        return(nums[0]*nums[1]*nums[2]);
    }
};
