"use strict";
// Fibonacci Sequence //
/* the curr number = the two past numbers */
function fibonacciSequence(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
}
fibonacciSequence(5); // [0,1,1,2,3]
// Calcualtion not dependent on input size - O(1)
// loop - O(n)
// nested loop - O(n^2)
// input size reduced by half - O(logn)
/*****************************************************  Big-O = O(n)  ********************************************************** */ 
