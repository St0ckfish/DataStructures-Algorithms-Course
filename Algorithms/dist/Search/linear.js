"use strict";
// LinearSearch //
/* Get the index of the X */
const LinearSearch = (x) => {
    let res = 0;
    let A = [-5, 2, 10, 4, 6];
    for (let i = 0; i < A.length; i++) {
        if (A[i] == x) {
            res = i;
            return res;
        }
        else
            res = -1;
    }
    return res;
};
console.log(LinearSearch(10)); //2
console.log(LinearSearch(6)); //4
console.log(LinearSearch(20)); //-1
// Calcualtion not dependent on input size - O(1)
// loop - O(n)
// nested loop - O(n^2)
// input size reduced by half - O(logn)
/* ***************************************************  Big-O = O(n)  ********************************************************** */ 
