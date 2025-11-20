/**
 * Given a string s having lowercase characters, find the length of the longest substring without repeating characters. 

Examples:

    Input: s = "geeksforgeeks"
    Output: 7 
    Explanation: The longest substrings without repeating characters are "eksforg” and "ksforge", with lengths of 7.

    Input: s = "aaa"
    Output: 1
    Explanation: The longest substring without repeating characters is "a"

    Input: s = "abcdefabcbb"
    Output: 6
    Explanation: The longest substring without repeating characters is "abcdef".
*/

class LongestSubstringWithoutRepeating {
    /*
    Keep a map of char: count
    max = map.size if larger than prev
    
    while right < s.length
    Keep increasing right until get count === 1
    then increase left until no longer get count === 1
    */
    slidingWindow(s: string): number {
        let max = 0;
        let l = 0;
        let r = 0;

        const map = new Map();
        map.set(s[0], 1);

        while (r < s.length - 1) {
            r++;
            map.set(s[r], (map.get(s[r]) ?? 0) + 1);

            while (map.get(s[r]) > 1 && l < r) {
                l++;
                map.set(s[l - 1], map.get(s[l - 1]) - 1)
            }

            let length = r - l + 1;
            max = length > max ? length : max;
        }

        return max;
    }
}

{
    const s = new LongestSubstringWithoutRepeating();

    console.log(s.slidingWindow("geeksforgeeks")); // 7
    console.log(s.slidingWindow("aaa")); // 1
    console.log(s.slidingWindow("abcdefabcbb")); // 6
}
