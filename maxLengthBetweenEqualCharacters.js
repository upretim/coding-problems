/**
 * 1624. Largest Substring Between Two Equal Characters
 
 * Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.
 A substring is a contiguous sequence of characters within a string.
 */
//https://leetcode.com/problems/largest-substring-between-two-equal-characters/

var maxLengthBetweenEqualCharacters = function(s) {
    let obj = { };
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]===undefined){
            obj[s[i]] = s[i];
            obj[s[i]] = {};
            obj[s[i]]['first'] = i;
            obj[s[i]]['last'] = i;
        }
        else{
            obj[s[i]]['last'] = i;     
        }    
    }
   let max =0;
   for(let i=0;i<s.length;i++){
 
       if(obj[s[i]]['last'] -obj[s[i]]['first']>max)    
       max = obj[s[i]]['last'] -obj[s[i]]['first']
    }
    return max; 
};

maxLengthBetweenEqualCharacters("aaabbbb");