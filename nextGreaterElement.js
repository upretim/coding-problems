/* find next greater  element to the right of element in a array [1,2,3,4,5]  ==> [2,3,4,5,-1] if no greater prelace with -1*/

const nextGreaterElement= (arr)=>{
    let returnArr = new Array(arr.length).fill(-1);
    for(let i=0;i<arr.length;i++){
       for(let j=i+1;j<arr.length;j++){
           if(arr[j]>arr[i]){
            returnArr[i] = arr[j];
            break;
           } 
       }
    }
    return returnArr;
}


nextGreaterElement([3,2,6,3,4,4,5,7]);
nextGreaterElement([1,2,3,4,5]);