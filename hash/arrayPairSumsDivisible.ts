/**
 * Given an array of integers and a number k, write a function that returns true 
 * if the given array can be divided into pairs such that the sum of every pair is divisible by k.

Examples: 

    Input: arr[] = [9, 7, 5, 3], k = 6 
    Output: True 
    We can divide the array into (9, 3) and (7, 5). Sum of both of these pairs is a multiple of 6.

    Input: arr[] = [92, 75, 65, 48, 45, 35], k = 10 
    Output: True 
    We can divide the array into (92, 48), (75, 65) and (45, 35). The sum of all these pairs are multiples of 10.

    Input: arr[] = [91, 74, 66, 48], k = 10 
    Output: False 
 */

class ArrayPairSumsDivisible {
    hash(arr: number[], k: number): boolean {
        const map = new Map<number, number>();

        for (let num of arr) {
            const remainder = num % k;

            // Handle negative remainder
            const key = remainder < 0 ? remainder + k : remainder;
            map.set(key, (map.get(key) || 0) + 1);

            for (let [remainder, count] of map) {
                if (remainder === 0) {
                    // Remainder 0 must have even count
                    if (count % 2 !== 0) return false;
                } else if (remainder * 2 === k) {
                    // Remainder k/2 must have even count
                    if (count % 2 !== 0) return false;
                } else {
                    // Other must match count with its corresponding
                    const complementCount = map.get(k - remainder);
                    if (count !== complementCount) return false;
                }

            }
        }

        return true;
    }
}

{
    const s = new ArrayPairSumsDivisible();

    console.log(s.hash([9, 7, 5, 3], 6))  // true
    console.log(s.hash([92, 75, 65, 48, 45, 35], 10 ))  // true
    console.log(s.hash([91, 74, 66, 48], 10 ))  // false
}