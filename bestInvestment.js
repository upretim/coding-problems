
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
Question - 12
Selecting Stocks
SCORE: 100 points
 * @param {*} saving 
 * @param {*} currentPrice 
 * @param {*} futurePrice 
 * @returns 
 */

/*this is not solution to above problem just an initial attempt*/
const selectStock = (saving, currentPrice, futurePrice)=>{
     if(saving<=0) return;
    
    let maxPorfit =0;
    let profit=0;
     for(let i=0;i<currentPrice.length;i++){
         if(futurePrice[i] >currentPrice[i]){
            let newSavings = saving-currentPrice[i];
            profit = profit + futurePrice[i] - currentPrice[i];
            if(profit>maxPorfit){
                maxPorfit = profit;
            }
            currentPrice.splice(i,1);
            futurePrice.splice(i,1);
            selectStock(newSavings, currentPrice,futurePrice)
         }

     }
     return maxPorfit;

}

selectStock(250,[175, 133, 109, 210, 97],[200, 125, 128, 228, 133]);