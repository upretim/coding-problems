/**
 * there is a grid traveller in m *n grid, he can only move right or bottom, 
 * in how many ways traveller can  travel from top left to bottom right of grid
 */
const gridTraveller=(m, n, memo={})=>{
    //memo object
    const key = m +','+ n;
    const key2 = n +','+ m;
    if(memo[key]) return memo[key];
    if(memo[key2]) return memo[key2];
    //base case
    if(m==0 || n==0) return 0;
    if(m==1 && n==1) return 1;
    //recursive logic and storing result
     memo[key] = gridTraveller(m-1,n, memo) + gridTraveller(m,n-1, memo);
     memo[key2] = memo[key];
     return memo[key];
}

console.log(gridTraveller(2,3));
console.log(gridTraveller(12,13));
console.log(gridTraveller(18,18));