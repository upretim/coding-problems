const slidingMaxNumber =(arr, num)=>{
    let startArr = arr.slice(0,num);
    let returnValue = [];
    returnValue.push(Math.max(...startArr));
    for(let i=num;i<arr.length;i++){
        startArr.shift();
        startArr.push(arr[i]);
        returnValue.push(Math.max(...startArr));
    }
    return returnValue;
}

console.log(slidingMaxNumber([4,3,8,9,0,1],3));