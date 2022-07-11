/*Top down solution given a word and a word bank can we construct word using word bank (we can reuse words of word bank) */
function canConstruct (str, bank){
    return canConstructHelper(str, bank, new Map());
}

function canConstructHelper(str, bank, map){
     if(str=='') return true;
     if(map.has(str)) return map.get(str);
     for(let word of bank){
        if(str.indexOf(word)===0){
            if(canConstructHelper(str.slice(word.length), bank, map)==true){
                map.set(str, true);
                return true;
            }
        }
     }
     map.set(str, false);
     return false;
}
console.log(canConstruct("abcdef", ['ab','bc', 'cd', 'ef']));