/**
 * Given an array prices[] representing stock prices, 
 * find the maximum total profit that can be earned by buying 
 * and selling the stock any number of times.

Note: We can only sell a stock which we have bought earlier 
and we cannot hold multiple stocks on any day.

Examples:

    Input: prices[] = [100, 180, 260, 310, 40, 535, 695]
    Output: 865
    Explanation: Buy the stock on day 0 and sell it on day 3 = 310 - 100 = 210 
    and Buy the stock on day 4 and sell it on day 6 = 695 - 40 = 655 
    so the Maximum Profit  is = 210 + 655 = 865.

    Input: prices[] = [4, 2]
    Output: 0
    Explanation: Stock prices keep decreasing, 
    there is no chance to sell at a higher price after buying, so no profit can be made.

    */

class MultipleStockBuyAndSell {
    accumulate(arr: number[]): number {
        let res = 0;
        
        for (let i = 0; i < arr.length; i++) {
            const profit = arr[i + 1] - arr[i];
            if (profit > 0) res += profit             
        }

        return res;
    }
}

{
    const s = new MultipleStockBuyAndSell();

    console.log(s.accumulate([100, 180, 260, 310, 40, 535, 695]))  // 865
    console.log(s.accumulate([4, 2]))  // 0
    console.log(s.accumulate([100, 250, 500, 400, 300, 200, 50, 1000]))  // 0
}