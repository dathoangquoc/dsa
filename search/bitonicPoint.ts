/**
 * Given an array arr[] of integers which is initially strictly increasing and then strictly decreasing, the task is to find the bitonic point, that is the maximum value in the array. 

Note: Bitonic Point is a point in bitonic sequence before which elements are strictly increasing and after which elements are strictly decreasing.

Examples: 

    Input: arr[] = [1, 2, 4, 5, 7, 8, 3]
    Output: 8
    Explanation: 8 is the maximum element in the array.

    Input: arr[] = [10, 20, 30, 40, 50]
    Output: 50
    Explanation: 50 is the maximum element in the array.

    Input: arr[] = [120, 100, 80, 20, 0]
    Output: 120
    Explanation: 120 is the maximum element in the array.
 */

class BitonicPoint {
    binarySearch(arr: number[]): number {
        let l = 1;
        let h = arr.length - 2;
        let m;

        // Edge cases
        if (arr[0] > arr[1]) return arr[0];
        if (arr[arr.length - 1] > arr[ arr.length - 2]) return arr[arr.length - 1];

        while (l <= h) {
            m = l + Math.floor((h - l) / 2);

            if (arr[m] > arr[m - 1] && arr[m] > arr[m + 1]) return arr[m];
            
            if (arr[m] < arr[m + 1]) {
                l = m + 1;
            } else {
                h = m - 1;
            }
        } 
        return -1
    }
}

{
    const s = new BitonicPoint();

    const case1 = [1, 2, 4, 5, 7, 8, 3];
    console.log(s.binarySearch(case1))  // 8

    const case2 = [10, 20, 30, 40, 50];
    console.log(s.binarySearch(case2))  // 50
    
    const case3 = [120, 100, 80, 20, 0];
    console.log(s.binarySearch(case3))  // 120
}