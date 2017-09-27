// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

let numIslands = (grid) => {
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                dfs(grid,i,j);
                count++;
            }
        }
    }
    return count;
};

// can use either DFS or BFS, but DFS is a bit easier to implementdf

let dfs = (grid, i , j) => {
    if(i >= 0 && j >= 0 && i < grid.length && j < grid[0].length && grid[i][j] === '1') {
        grid[i][j] = '0';
        dfs(grid, i+1, j);
        dfs(grid, i-1, j);
        dfs(grid, i, j+1);
        dfs(grid, i, j-1);
    }
};

// Example input:
// 11110
// 11010
// 11000
// 00000
//
// Output: 1
