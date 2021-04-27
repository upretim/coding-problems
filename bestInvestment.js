
/**
 * An investor has saved some money and wants to invest in the stock
market. There are a number of stocks to choose from, and they wants
to buy at most 1 share in any company. The total invested cannot
exceed the funds available. A friend who is a stock market expert has
predicted the values of each stock after 1 year. Determine the
maximum profit that can be earned at the end of the year assuming
the predictions come true.

Example
saving = 250
currentValue = [175, 133, 109, 210, 97]
futureValue = [200, 125, 128, 228, 133]
To maximize profits, the investor should buy stocks at indices 2 and
4 for an investment of 109 + 97 = 206. At the end of the year the stocks

 * @param {*} saving 
 * @param {*} currentPrice 
 * @param {*} futurePrice 
 * @returns 
 */

function getBestInvestment(saving, currentValue, futureValue){
    let profit =[];
    for(let i=0;i<currentValue.length;i++){
        profit[i] = futureValue[i]-currentValue[i];
    }

   let len = currentValue.length;
   let map = new Map();
    const bestInvestmnetUtil=(len, investment, profit, saving, index, map)=>{
        let key = saving + "-"+ index;
        if(map.has(key)) return map.get(key);
        if(index==len || saving<=0) return 0;
        let itemIncluded=0;
        let itemExcluded =0;
       
        if(saving>=investment[index]){
            itemIncluded = bestInvestmnetUtil(len, investment, profit, saving-investment[index], index+1, map) + profit[index];
            itemExcluded = bestInvestmnetUtil(len, investment, profit, saving,index+1, map);
            let result = Math.max(itemIncluded, itemExcluded);
            map.set(key,result);
            return result;
        }
        else{
            itemExcluded = bestInvestmnetUtil(len, investment, profit, saving, index+1,map);
            map.set(key,itemExcluded);
            return itemExcluded;
        }
    }
   return bestInvestmnetUtil(len, currentValue, profit, saving, 0,map);
 }
 console.log(getBestInvestment(250, [175, 133, 109, 210, 97],[200, 125, 128, 228, 133]));
