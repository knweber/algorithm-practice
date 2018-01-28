class Solution(object):
    def numIslands(self,grid):
        if not grid:
            return 0
        row = len(grid)
        col = len(grid[0])
        count = 0
        for i in range(row):
            for j in range(col):
                if grid[i][j] == '1': # if we find land
                    self.dfs(grid,row,col,i,j)
                    count += 1
        return count

    def dfs(self,grid,row,col,x,y):
        if grid[x][y] == '0':
            return
        grid[x][y] = '0' # mark current cell as visited

        if x != 0: # if x is not the first row
            self.dfs(grid,row,col,x-1,y) # check previous row
        if x != row - 1: # if x is not the last row
            self.dfs(grid,row,col,x+1,y) # check next row
        if y != 0: # if y is not the first column
            self.dfs(grid,row,col,x,y-1) # check previous column
        if y != col - 1: # if y is not the last column
            self.dfs(grid,row,col,x,y+1) # check next column

if __name__ == '__main__':
    print Solution().numIslands([['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']])
    # -> 1
    print Solution().numIslands([['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']])
