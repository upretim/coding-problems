//Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = (s) =>{
    if(s.length<2) return s.length;
    let obj = {};
    let index = 0;
    let longest =0;
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]!== undefined){
            while(index<=obj[s[i]]){
                obj[s[index]] = undefined;
                index++;
            }
        }
        let temp = i-index;
        if( temp> longest) longest = temp;
        obj[s[i]] = i;
    }
    return longest+1;

};
