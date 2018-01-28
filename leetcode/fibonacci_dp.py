class Solution(object):
    def fib(self,n,cache={}):
        if n in cache:
            return cache[n]
        if n <= 1:
            return 1
        cache[n] = self.fib(n-1,cache) + self.fib(n-2,cache)
        return cache[n]

if __name__ == '__main__':
    print Solution().fib(10)
