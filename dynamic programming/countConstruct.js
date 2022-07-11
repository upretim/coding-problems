/*Top down solution given a word and a word bank , total number of ways
  we can construct word using word bank (we can reuse words of word bank) */
function countConstruct (str, bank){
    return countConstructHelper(str, bank, new Map());
}

function countConstructHelper(str, bank, map){
     if(str=='') return 1;
     if(map.has(str)) return map.get(str);
     let ways =0;
     for(let word of bank){
        if(str.indexOf(word)===0){
            ways = ways + countConstructHelper(str.slice(word.length), bank, map);   
        }
     }
     map.set(str, ways);
     return ways;
}
console.log(countConstruct("abcdef", ['ab','bc', 'cd', 'ef','abcd', 'cdef']));