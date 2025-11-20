/**
 * Given two strings txt and pat having lowercase letters, 
 * the task is to check if any permutation of pat is a substring of txt.

Examples:

    Input: txt = "geeks", pat = "eke"
    Output: true
    Explanation: "eek" is a permutation of "eke" which exists in "geeks".

    Input: txt = "programming", pat = "rain"
    Output: false
    Explanation: No permutation of "rain" exists as a substring in "programming".
*/

class PermutationInSubstring {
    slidingWindow(txt: string, pat: string): boolean {
        const patMap = new Map<string, number>();
        const windowMap = new Map<string, number>();

        // count of each char in pat
        for (let c of pat) {
            patMap.set(c, (patMap.get(c) ?? 0) + 1)
        }

        // init the first window
        for (let i = 0; i < pat.length; i++) {
            windowMap.set(txt[i], (windowMap.get(txt[i]) ?? 0) + 1);
        }

        function areMapsEqual(map1: Map<string, number>, map2: Map<string, number>): boolean {
            if (map1.size !== map2.size) return false;
            
            for (let [k, v] of map1) {
                if (map2.get(k) !== v) {
                    return false
                }
            }
            return true;
        }

        // check the first window
        if (areMapsEqual(patMap, windowMap)) return true;

        // slide the window
        for (let i = pat.length; i < txt.length; i++) {
            // decrease count of prev char
            let prevChar = txt[i - pat.length];
            windowMap.set(prevChar, (windowMap.get(prevChar)! - 1));
            if (windowMap.get(prevChar) === 0) {
                windowMap.delete(prevChar);
            }
            
            // increase count of next char
            let nextChar = txt[i];
            windowMap.set(nextChar, (windowMap.get(nextChar) ?? 0) + 1);

            if (areMapsEqual(patMap, windowMap)) return true;
        }
        
        return false;
    }
}

{
    const s = new PermutationInSubstring();
    console.log(s.slidingWindow("geeks", "eke"));  // true
    console.log(s.slidingWindow("programming", "rain"));  // false
}