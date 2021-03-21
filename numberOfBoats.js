//https://leetcode.com/problems/boats-to-save-people/
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b);
    let counter =0;
    let i=0;
    console.log(people);
    while(i<people.length){
        let limitSum =0;
        counter++;
        while(i<people.length && limitSum<=limit){
            limitSum = limitSum + people[i];
             if(limitSum<=limit) i++;
        }
    }
        
    return counter;
};
numRescueBoats([2,1],3);
numRescueBoats([3,2,2,1],3);
numRescueBoats([3,5,3,4],5);