/**
 * Given weights and values of n items, put these items in a knapsack of capacity W to get
 *  the maximum total value in the knapsack. In other words, given two integer arrays val[0..n-1]
 *  and wt[0..n-1] which represent values and weights associated with n items respectively.
 *  Also given an integer W which represents knapsack capacity, find out the maximum value subset
 *  of val[] such that sum of the weights of this subset is smaller than or equal to W. 
 * You cannot break an item, either pick the complete item or don't pick it (0-1 property).
 */

const knapsack=(w,v,capacity, map)=>{
    if(capacity==0 || v.length===0) return 0;
    let key = v.length + "__"+capacity;
    if(map.has(key)) return map.get(key);
    if(w[0]>capacity){
        let val = knapsack(w.slice(1), v.slice(1), capacity, map);
        map.set(key, val);
        return val;
    }else{
       let v1 = v[0] + knapsack(w.slice(1), v.slice(1), capacity-w[0], map);
       let v2 =  knapsack(w.slice(1), v.slice(1), capacity, map);
       let val =  Math.max(v1, v2);
       map.set(key, val);
       return val;
    }
}

const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const target = 15;
let map = new Map();

console.log(knapsack(weights,values,target, map));