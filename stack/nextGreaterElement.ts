/*
Given an array arr[] of integers, determine the Next Greater Element (NGE) for every element in the array, maintaining the order of appearance.

    The Next Greater Element for an element x is defined as the first element to the right of x in the array that is strictly greater than x.
    If no such element exists for an element, its Next Greater Element is -1.

Examples: 

    Input: arr[] = [1, 3, 2, 4]
    Output: [3, 4, 4, -1]
    Explanation: The next larger element to 1 is 3, 3 is 4, 2 is 4 and for 4, since it doesn't exist, it is -1.

    Input: arr[] = [6, 8, 0, 1, 3]
    Output: [8, -1, 1, 3, -1]
    Explanation: The next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1 , for 1 it is 3 and then for 3 there is no larger element on right and hence -1.
*/

class NextGreaterElement {

    // O(N^2) Time & O(1) Space
    nestedLoop(arr: number[]) {
        const result: number[] = new Array(arr.length);
        result.fill(-1);

        for (let i = 0; i < arr.length - 1; i++) {         
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > arr[i]) {
                    result[i] = arr[j];
                    break;
                }
            }
        }
        return result;
    }

    // TODO: 
    stack() {

    }
}

{
    const s = new NextGreaterElement()
    const case1 = [1, 3, 2, 4];
    const case2 = [6, 8, 0, 1, 3];
    console.log(s.nestedLoop(case1));
    console.log(s.nestedLoop(case2));
}