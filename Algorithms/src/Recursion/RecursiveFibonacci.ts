// Recursive Fibonacci //
/* the curr number = the two past numbers */

const RecursiveFibonacci: (x:any) => any = (x) => {
if(x<2){
    return x;
}
    return RecursiveFibonacci(x-1)+ RecursiveFibonacci(x-2)

}

console.log(RecursiveFibonacci(1)); //1
console.log(RecursiveFibonacci(9)); //34
console.log(RecursiveFibonacci(6)); //8

// Calcualtion not dependent on input size - O(1)
// loop - O(n)
// nested loop - O(n^2)
// input size reduced by half - O(logn)

/* ***************************************************  Big-O = O(1)  ********************************************************** */