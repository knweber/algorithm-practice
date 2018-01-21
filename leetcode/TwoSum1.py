class Solution(object):
    def twoSum(self,nums,target):
        lookup = {}
        for i,num in enumerate(nums):
            if target-num in lookup: # difference we're looking for
                return [lookup[target-num],i] # indices of the two numbers adding up to target
            lookup[num] = i # otherwise, add key/value pair to lookup holding the current number and its index

if __name__ == '__main__':
    print Solution().twoSum((2,7,11,15),9)
    print Solution().twoSum((4,0,1),5)
