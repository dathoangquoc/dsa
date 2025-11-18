/*
Given an array arr[] representing a histogram, where each element denotes the height of a bar and every bar has a uniform width of 1 unit, find the largest rectangular area that can be formed within the histogram. The rectangle must be formed using contiguous bars.

Example: 

    Input: arr[] = [60, 20, 50, 40, 10, 50, 60]
    Output: 100
    Explanation: We get the maximum area by picking bars highlighted above in green (50, and 60). 
    The area is computed (smallest height) * (no. of the picked bars) = 50 * 2 = 100.

    Input: arr[] = [3, 5, 1, 7, 5, 9]
    Output: 15
    Explanation:  We get the maximum are by picking bars 7, 5 and 9. 
    The area is computed (smallest height) * (no. of the picked bars) = 5 * 3 = 15.
*/

class LargestRectArea {
    /*
    Left - right, add to stack
    max = min value of stack * length of stack
    if new max < prev max, pop all
    */
    
    // stk
    // stkMin
    // max
    monotonicStack(arr: number[]) {
        let stack: number[] = [];   // store indices of bars
        let maxArea = 0;

        for (let i = 0; i < arr.length; i++) {
            let currentHeight =  arr[i];

            stack.push(i)
        }
    }
}

{
    const s = new LargestRectArea();
    let case1 = [60, 20, 50, 40, 10, 50, 60];
    let case2 = [3, 5, 1, 7, 5, 9];
    console.log(s.monotonicStack(case1));   // 100
    console.log(s.monotonicStack(case2));   // 15
}