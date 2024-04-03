// RecursiveFactorial //
/* n! */

const RecursiveFactorial: (x:any) => any = (x) => {

    if(x === 0 ) return 1
    return x* RecursiveFactorial(x-1);
    
}
    
    console.log(RecursiveFactorial(5)); //120
    console.log(RecursiveFactorial(9)); //362880
    console.log(RecursiveFactorial(6)); //720
    
    // Calcualtion not dependent on input size - O(1)
    // loop - O(n)
    // nested loop - O(n^2)
    // input size reduced by half - O(logn)
    
    /* ***************************************************  Big-O = O(1)  ********************************************************** */