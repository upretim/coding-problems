/**Problem statement
https://leetcode.com/problems/number-of-islands/
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
     let set = new Set();
     let counter =0;
    let width = grid.length;
    let height = grid[0].length;
    for(let i=0;i<width;i++){
        for(let j=0;j<height;j++){
            console.log('i ', i, ' j ', j);
            if(grid[i][j]=="1"){
                let val =[[i,j]];
                let key = i+"__"+j;
                if(!set.has(key)) {
                    counter++;
                    checkConnectedCells(grid,val, set);
                }
            }
        }
    }
    console.log(counter)
    return counter;
};

function checkConnectedCells(grid, cellsArr, set){
  let queue = cellsArr;
  let width = grid.length-1;
  let height = grid[0].length-1;
  while(queue.length){
      let val = queue.shift();
      let i= val[0], j =  val[1];
      let key = i + "__" + j;
      if(!set.has(key)){
        set.add(key);
        if(i>0 && (grid[i-1][j]=="1")){
              queue.push([i-1,j]);
        }
        if(i<width && grid[i+1][j]=="1"){
             queue.push([i+1,j]);
        }
        if(j>0 && grid[i][j-1]=="1"){
             queue.push([i,j-1]);
        }
        if(j<height && grid[i][j+1]=="1"){
            queue.push([i,j+1]);
        }
      }
  }
}
 let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];
  let grid2 =  [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
numIslands(grid);
numIslands(grid2);