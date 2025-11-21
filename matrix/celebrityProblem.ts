/**
 * Given a square matrix mat[][] of size n x n, 
 * where mat[i][j] == 1 means person i knows person j, 
 * and mat[i][j] == 0 means person i does not know person j, 
 * find the celebrity person where,

A celebrity is defined as someone who:

    Is known by everyone else
    Does not know anyone (except themselves)

Return the index of the celebrity if one exists, otherwise return -1.

Note: It is guaranteed that mat[i][i] == 1 for all i

Examples:  

    Input: mat[][] = [
    [1, 1, 0], 
    [0, 1, 0], 
    [0, 1, 1]
    ]
    Output: 1
    Explanation: 0th and 2nd person both know 1. Therefore, 1 is the celebrity.

    Input: mat[][] = 
    [[1, 1], 
    [1, 1]]
    Output: -1
    Explanation: The two people at the party both know each other. None of them is a celebrity.

    Input: mat[][] = [[1]]
    Output: 0
*/

class CelebrityProblem {
    // if A knows B, A cannot be the celebrity, else B cannot be the celebrity
    twoPointers(matrix: number[][]): number {
        // valid matrix check
        if (matrix.length === 0) return -1;

        let res = -1;
        let l = 0;
        let r = matrix.length - 1;
        
        // narrow down to 1 person
        while (l < r) {
            // l knows r -> l cannot be a celeb
            if (matrix[l][r] === 1) {
                l++;
            } else {
                // l doesnt know r -> r cannot be a celeb
                r--;
            }
        }

        res = l;

        // check the last person
        for (let i = 0; i < matrix.length; i++) {
            // if res knows someone OR someone does not know res
            if ((matrix[res][i] === 1 && i !== res) || matrix[i][res] === 0) {
                return -1;
            }
        }

        return res
    }
}

{
    const s = new CelebrityProblem();
    console.log(
        s.twoPointers([
            [1, 1, 0, 0], 
            [0, 1, 0, 0], 
            [0, 1, 1, 0],
            [0, 1, 0 ,1]
        ])
    );  // 1
    console.log(
        s.twoPointers([
            [1, 1, 0], 
            [0, 1, 0], 
            [0, 1, 1]
        ])
    );  // 1
    console.log(
        s.twoPointers([
            [1, 1], 
            [1, 1]
        ])
    );  // -1
    console.log(s.twoPointers([[1]]));  // 0
}