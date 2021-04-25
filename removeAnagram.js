/*

Two strings are anagrams if they are permutations of each other. In
other words, both strings have the same size and the same characters.
For example, "aaagmnrs" is an anagram of "anagrams". Given an array
of strings, remove each string that is an anagram of an earlier string,
then return the remaining array in sorted order.

Example
str = ['code', 'doce', 'ecod', 'framer', 'frame']
"code" and "doce" are anagrams. Remove "doce" from the array and keep the first occurrence "code" in the array.
"code" and "ecod" are anagrams. Remove "ecod" from the array and keep the first occurrence "code" in the array.
"code" and "framer" are not anagrams. Keep both strings in the array.
"framer" and "frame" are not anagrams due to the extra 'r' in 'framer'. Keep both strings in the array.
Order the remaining strings in ascending order: ["code","frame","framer"].
*/

const removeAnagram =(arr)=>{
   let mapArray =[];
   for(let i=0;i<arr.length;i++){
      mapArray[i] = getMap(arr[i]);
   }
   
   for(let i=0;i<mapArray.length-1;i++){
       for(let j=i+1;j<mapArray.length;j++){
          if((areAnagram(mapArray[i],mapArray[j]))){
            mapArray.splice(j,1);
            arr.splice(j,1);
            j--;
          }
       }
   }
    return arr.sort();
}
function getMap(str){
  let map = new Map();
  for(let i=0;i<str.length;i++){
      if(map.has(str.charAt(i))){
          let val = map.get(str.charAt(i));
          map.set(str.charAt(i),val+1)
      }
      else{
        map.set(str.charAt(i),1);
      }
  }
  return map;
}
function areAnagram(map1, map2){
    if([...map1.values()].length!==[...map2.values()].length) return false;
    for(let [key, value] of map1){
        if(!map2.has(key)) return false;
        if(map2.get(key)!== map1.get(key)) return false;
    }
    return true;
}

console.log(removeAnagram(['code', 'doce', 'ecod', 'framer', 'frame']));