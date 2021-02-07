// javascript code to get all the sub arrays of an array, except empty array.
const getAllSubArrays = (arr) => {
  let ArrayOfSubArrays =[];
  for(let i=0;i<arr.length;i++) {
      let subArr = [];
       for(let j=i;j<arr.length;j++) {
        subArr = subArr.concat([arr[j]]);
        let sum = subArr.reduce(((a,b)=>a+b),0);

            console.log(sum);
            console.log(subArr);
        
        ArrayOfSubArrays.push(subArr);
       }
  }
  return ArrayOfSubArrays;
}
getAllSubArrays([4,5,0,-2,-3,1]);
//console.log();