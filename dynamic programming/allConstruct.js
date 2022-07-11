/*Top down solution given a word and a word bank , total ways
  we can construct word using word bank (we can reuse words of word bank) */
  function allConstruct (str, bank){
    return allConstructHelper(str, bank, new Map());
}

function allConstructHelper(str, bank, map){
     if(str=='') return [[]];
     if(map.has(str)) return map.get(str);
     let ways =[];
     for(let word of bank){
        if(str.indexOf(word)===0){
            let result = allConstructHelper(str.slice(word.length), bank, map);
            for(let arr of result){
                ways.push([word, ...arr]);
            }
        }
     }
     map.set(str, ways);
     return ways;
}
console.log(allConstructHelper("abcdefg", ['ab','bc', 'cd', 'ef','abcd', 'cdefg'], new Map()));