// powerOfTwo //
/* if n = 2^m */
/* JavaScript Bitwise Operations  */

function powerOfTwo (n:any){
    if(n<1)return false;
    return (n&(n-1))===0;
}

console.log(powerOfTwo(1024)); // true

// Calcualtion not dependent on input size - O(1)
// loop - O(n)
// nested loop - O(n^2)
// input size reduced by half - O(logn)

/* ***************************************************  Big-O = O(1)  ********************************************************** */