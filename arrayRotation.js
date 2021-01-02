//https://www.hackerrank.com/challenges/circular-array-rotation/problem
function circularArrayRotation(a, k, queries) {
    let rotation = k%a.length;
    let arr1 = [...a,...a];
    let arr =arr1.slice(a.length - rotation, (a.length)*2 - rotation);
    let returnValue =[];// [3,4,5,3,4,5];
    for(let i=0;i<queries.length;i++)
     returnValue.push(arr[queries[i]]);
     return returnValue;
}
console.log(circularArrayRotation([3,4,5],2,[1,2]));