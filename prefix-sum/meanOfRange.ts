/**
 * Given an array arr[] of n integers and q queries represented by an array queries[][], 
 * where queries[i][0] = l and queries[i][1] = r. 
 * For each query, the task is to calculate the mean of elements in the range l to r and return its floor value.

Examples: 

    Input: arr[] = [3, 7, 2, 8, 5] queries[][] = [[1, 3], [2, 5]]
    Output: 4 5
    Explanation: For query [1, 3] - Elements in range are 3, 7, 2
    Mean is (3+7+2)/3 = 4, Floor value is 4
    For query [2, 5] - Elements in range are 7, 2, 8, 5, 
    Mean is (7+2+8+5)/4 = 5.5, Floor value is 5

    Input: arr[] = [10, 20, 30, 40, 50, 60], queries[][] = [[4, 6]]
    Output: 50
    Explanation: For query [4, 6] - Elements in range are 40, 50, 60
    Mean is (40+50+60)/3 = 50, Floor value is 50
 */

class MeanOfRange {
    prefixSum(arr: number[], queries: number[][]): number[] {
        let prefixSum = [arr[0]];
        const res: number[] = [];

        for (let i = 1; i < arr.length; i++) {
            prefixSum[i] = prefixSum[i - 1] + arr[i];
        }

        for (let query of queries) {
            const r = query[1] - 1;
            const l = query[0] - 1;
            const total = l > 0 ? prefixSum[r] - prefixSum[l - 1] : prefixSum[r]
            const count = r - l + 1;
            const final = Math.floor(total / count)
            res.push(final)
        }

        return res;
    }
}

{
    const s = new MeanOfRange();

    console.log(s.prefixSum([3, 7, 2, 8, 5], [[1, 3], [2, 5]]))  // 4 5
    console.log(s.prefixSum([10, 20, 30, 40, 50, 60], [[4, 6]]))  // 50
}