"use strict";
// Factorial //
/* n! */
function factorial(n) {
    let r = 1;
    for (let i = 2; i <= n; i++) {
        r *= i;
    }
    console.log(r);
}
factorial(5); // 120 
// Calcualtion not dependent on input size - O(1)
// loop - O(n)
// nested loop - O(n^2)
// input size reduced by half - O(logn)
/* ***************************************************  Big-O = O(n)  ********************************************************** */ 
