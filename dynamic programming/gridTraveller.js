/**
 * there is a grid traveller in m *n grid, he can only move right or bottom, 
 * in how many ways traveller can  travel from top left to bottom right of grid
 */
const gridTraveller=(m, n, memo={})=>{
    //memo object
    const key = m +','+ n;
    if(memo[key]) return memo[key];
    //base case
    if(m==0 || n==0) return 0;
    if(m==1 && n==1) return 1;
    //recursive logic
     memo[key] = gridTraveller(m-1,n, memo) + gridTraveller(m,n-1, memo);
     return memo[key];
}

console.log(gridTraveller(2,3));
console.log(gridTraveller(12,13));
console.log(gridTraveller(18,18));