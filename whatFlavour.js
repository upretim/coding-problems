//https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem
function whatFlavors(cost, money) {
    let obj ={};
    let needed;
    for(let i=0;i<cost.length;i++){
        needed = money - cost[i];
        if(obj[needed]==true)break;  
        else obj[cost[i]] = true;    
    }
 }
 whatFlavors([1, 4, 5, 3, 2],5);