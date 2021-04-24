/**You can climb 1 or 2 stairs in  one step, how many diffrent ways, 
 * you can climb n stairs
 * https://leetcode.com/problems/climbing-stairs/
 * */

function numberOfWays(n, memo={}){
    if(memo[n]) return memo[n];
    if(n==1) {
        memo[n] =1;
        return 1;
    }
    if(n==2) {
        memo[n] =2;
        return 2;
    }
    memo[n] = numberOfWays(n-1,memo) + numberOfWays(n-2, memo);
    return memo[n];
}
console.log(numberOfWays(3));
console.log(numberOfWays(5));
console.log(numberOfWays(7));
console.log(numberOfWays(40));