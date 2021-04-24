//https://www.hackerrank.com/challenges/ctci-coin-change/problem

function ways(n, coins) {
    let total=0;
    const combo=(n, currentCoin)=>{
       if(n==0) return 1;
       if(n<0) return 0;
      for(let i=currentCoin;i<coins.length;i++){
        total = total + combo(n-coins[i] ,i);
      }
    }
    combo(n,0);
    return total;
}


console.log(ways(12,[1,2,5,10]));
console.log(ways(5,[1,2,5]))