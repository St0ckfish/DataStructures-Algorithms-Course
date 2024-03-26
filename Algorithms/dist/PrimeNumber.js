"use strict";
// primeNumber //
/* the primeNumber must be divided on 1 and himself */
function primeNumber(n) {
    let r = true;
    if (n == 1 || n == 2 || n == 3)
        r = true;
    else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                r = false;
            }
        }
    }
    console.log(r);
}
primeNumber(5); // true
// Calcualtion not dependent on input size - O(1)
// loop - O(n)
// nested loop - O(n^2)
// input size reduced by half - O(logn)
/* ***************************************************  Big-O = O(sqrt(n))  ********************************************************** */ 
