
var FreqStack = function() {
    this.stack = [];  
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
     this.stack.push(x);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    if(this.stack.length==0) return null;
    let map = new Map();
    let maxVal=0;
    let index;
    let retVal;
    for(let i=0;i<this.stack.length;i++){
        let value;
        if(map.has(this.stack[i])){
            value = map.get(this.stack[i])+1
            map.delete(this.stack[i]);
            map.set(this.stack[i],value);
        }
        else{
             map.set(this.stack[i],1);
             value =1;
        } 
        if(value>=maxVal) {
            maxVal = value;
            index =i;
            retVal = this.stack[i];
        } 
    }
    this.stack.splice(index,1);
   
    return retVal;
};

let stack = new FreqStack();
stack.push(1)
stack.push(0)
stack.push(0)
stack.push(1)
stack.pop();
stack.pop();
stack.pop();
stack.pop();