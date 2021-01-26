//https://leetcode.com/problems/number-of-good-ways-to-split-a-string/
//1525. Number of Good Ways to Split a String

/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let map1= new Map(), map2 = new Map();
    for(let i=0;i<s.length;i++){
        if(map1.has(s[i]))
         map1.set(s[i],  (map1.get(s[i])+1));
        else map1.set(s[i],1);
    }
    let counter =0;

    for(let i=0;i<s.length;i++){
        if(!map2.has(s[i])) map2.set(s[i],true);
        if(map1.has(s[i])) map1.set(s[i],(map1.get(s[i])-1));
        if(map1.get(s[i])==0) map1.delete(s[i]);
        if(map1.size && map1.size == map2.size) counter++;
        if(map2.size > map1.size) break;
    }
    return counter;
};

numSplits("aaaaa");