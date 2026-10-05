class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyDay = 0;
        let sellDay = 1;
        let maxProfit =0;
        while(sellDay <prices.length){
            if(prices[buyDay] < prices[sellDay]){
                let profit =  prices[sellDay] - prices[buyDay];
                maxProfit = Math.max(maxProfit, profit);
            }else{
                buyDay = sellDay;
            }
            sellDay++;
        }
        return maxProfit;
    }
}
