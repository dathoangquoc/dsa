/**
 * Given three sorted arrays in non-decreasing order, print all common elements in non-decreasing order across these arrays. If there are no such elements return an empty array. In this case, the output will be -1.

Note: In case of duplicate common elements, print only once.

Examples: 

    Input: arr1[] = [1, 5, 10, 20, 30], arr2[] = [5, 13, 15, 20], arr3[] = [5, 20] 
    Output: 5 20
    Explanation: 5 and 20 are common in all the arrays.

    Input: arr1[] = [2, 5, 10, 30], arr2[] = [5, 20, 34], arr3[] = [5, 13, 19]
    Output: 5
    Explanation: 5 is common in all the arrays.
 */

class CommonElementsInSortedArrays {
    threePointers(arr1: number[] , arr2: number[], arr3: number[]) {
        let p1 = 0;
        let p2 = 0;
        let p3 = 0;

        let res: number[] = [];

        // FIX: need to travel to the end of each arr
        while (p1 < arr1.length || p2 < arr2.length || p3 < arr3.length) {
            if (arr1[p1] === arr2[p2] && arr3[p3] === arr2[p2]) {
                res.push(arr1[p1]);
                p1++;
                p2++;
                p3++;
            } else if (arr1[p1] < arr2[p2] && p1 < arr1.length) {
                p1++;
            } else if (arr2[p2] < arr3[p3] && p2 < arr2.length) {
                p2++;
            } else {
                p3++;
            }
            
        }
        return res;
    }
}

{
    const s = new CommonElementsInSortedArrays();

    const case1 = [
        [1, 5, 10, 20, 30],
        [5, 13, 15, 20],
        [5, 20]
    ];
    console.log(s.threePointers(case1[0], case1[1], case1[2]));  // 5 20

    const case2 = [
        [2, 5, 10, 30],
        [5, 20, 34],
        [5, 13, 19]
    ];
    console.log(s.threePointers(case2[0], case2[1], case2[2]));  // 5
}