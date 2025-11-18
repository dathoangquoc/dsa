export default function binarySearch(arr: number[], x: number): number {
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (high >= low) {
        mid = low + Math.floor((high - low) / 2)
        
        if (arr[mid] === x) return mid;
        
        if (arr[mid] > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1
}

// Test cases
{
    const case1 = [0,1,2,3,4,5,6,7,8,9];
    const case2 = [-4,3,7,11,90];

    console.log(binarySearch(case1, 9));
    console.log(binarySearch(case2, -4));
    console.log(binarySearch(case2, 10));
}