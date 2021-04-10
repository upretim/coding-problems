//https://www.hackerrank.com/challenges/manasa-and-stones/problem

function stones(n, a, b) {
    let arr =[];
    let acount = n-1;
    let bcount = 0;
    while(bcount<n){
        let last = a*acount + b*bcount;
        arr.push(last);
        acount--;
        bcount++; 
    }
   return arr.sort((a,b)=>a-b);
 }
console.log(stones(73,25,25));