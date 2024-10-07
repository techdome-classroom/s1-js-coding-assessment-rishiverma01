const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set();

    const dfs = (r, c) => {
        
        if (r < 0 || r >= rows || c < 0 || c >= cols) return;
       
        if (grid[r][c] === 'L' && !visited.has(`${r},${c}`)) {
            visited.add(`${r},${c}`);
            
            dfs(r - 1, c); 
            dfs(r + 1, c); 
            dfs(r, c - 1); 
            dfs(r, c + 1); 
        }
    };

    let islandCount = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L' && !visited.has(`${r},${c}`)) {
                
                dfs(r, c);
                islandCount++;
            }
        }
    }

    return islandCount;
};

module.exports = getTotalIsles;
