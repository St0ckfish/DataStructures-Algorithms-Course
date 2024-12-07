// RecursiveBinarySearch //
/* Get the index of the X */

const RecursiveBinarySearch: (x:number, arr:number[]) => number = (x, arr) => {
    return search(arr, x, 0, arr.length - 1);
}

function search(arr:number[], x:number, leftIndex:number, rightIndex:number){
    if(leftIndex > rightIndex) return -1;

    let middleIndex = Math.floor((leftIndex + rightIndex) /2);

    if(x === arr[middleIndex]) return middleIndex;

    if(x < arr[middleIndex]) return search(arr, x, leftIndex, middleIndex-1)
    else return search(arr, x, middleIndex+1, rightIndex)
}
    
    console.log(RecursiveBinarySearch(10, [ -5, 2, 4, 6, 10 ])); //4
    console.log(RecursiveBinarySearch(6, [ -5, 2, 4, 6, 10 ])); //3
    console.log(RecursiveBinarySearch(20, [ -5, 2, 4, 6, 10 ])); //-1
    
    // Calculation not dependent on input size - O(1)
    // loop - O(n)
    // nested loop - O(n^2)
    // input size reduced by half - O(logn)
    
    /* ***************************************************  Big-O = O(logn)  ********************************************************** */