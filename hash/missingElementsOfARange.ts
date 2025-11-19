/**
 * Given an array, arr[0..n-1] of distinct elements and a range [low, high], 
 * find all numbers that are in a range, but not the array. 
 * The missing elements should be printed in sorted order.

Examples:  

    Input: arr[] = {10, 12, 11, 15}, 
        low = 10, high = 15
    Output: 13, 14

    Input: arr[] = {1, 14, 11, 51, 15}, 
        low = 50, high = 55
    Output: 50, 52, 53, 54 55
*/

class MissingElementsOfARange {
    hash(arr: number[], low: number, high: number): number[]  {
        const missing: number[] = [];
        const map = new Map()

        for (let i = low; i <= high; i++) {
            map.set(i, 0);
        }

        for (let k of arr) {
            if (map.has(k)) {
                map.set(k, 1);
            }
        }

        for (let [k, v] of map.entries()) {
            if (v === 0) {
                missing.push(k);
            }
        }

        return missing;
    }
}

{
    const s = new MissingElementsOfARange();

    const case1 = [10, 12, 11, 15];
    const low1 = 10;
    const high1 = 15;
    console.log(s.hash(case1, low1, high1))  // 13, 14

    const case2 = [1, 14, 11, 51, 15];
    const low2 = 50;
    const high2 = 55;
    console.log(s.hash(case2, low2, high2))  // 50, 52, 53, 54, 55
}