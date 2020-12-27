/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 * Given two non-negative integers low and high. 
 * Return the count of odd numbers between low and high (inclusive).
 */
const countOdds = (low, high) =>{
    if(low===high) return low%2;
    if(low%2 && high%2) return (((high-low)/2) +1)
    return ((high-low)/2);
};