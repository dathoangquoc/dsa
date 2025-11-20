/**
 * Given an array arr[] and an integer k, we need to calculate the maximum sum of a subarray having size exactly k.

    Input  : arr[] = [5, 2, -1, 0, 3], k = 3
    Output : 6
    Explanation : We get maximum sum by considering the subarray [5, 2 , -1]

    Input  : arr[] = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4 
    Output : 39
    Explanation : We get maximum sum by adding subarray [4, 2, 10, 23] of size 4.
*/

class MaxSumOfSubArray {
    slidingWindow(arr: number[], k: number): number {
        let windowSum = 0;
        for (let i = 0; i < k; i++) {
            windowSum += arr[i] 
        }

        let maxSum = windowSum;
        for (let i = 1; (i + k - 1) < arr.length; i++) {
            windowSum = windowSum - arr[i - 1] + arr[i + k - 1];
            maxSum = maxSum >= windowSum ? maxSum : windowSum;
        }

        return maxSum;
    }
}

{
    const s = new MaxSumOfSubArray();

    console.log(s.slidingWindow([5, 2, -1, 0, 3], 3))   // 6
    console.log(s.slidingWindow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))   // 39
}