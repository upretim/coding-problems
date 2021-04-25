//https://www.hackerrank.com/challenges/ctci-coin-change/problem

function ways(n, coins) {
    let total=0;
    const combo=(n, coinArray)=>{
       if(n==0) return 1;
       if(n<0) return 0;
      for(let i=0;i<coinArray.length;i++){
        total = total + combo(n-coinArray[i] ,i);
      }
    }
    combo(n,coins);
    return total;
}


//console.log(ways(12,[1,2,5,10]));
console.log(ways(10,[2,5]))