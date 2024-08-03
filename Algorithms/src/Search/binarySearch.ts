// BinarySearch //
/* Get the index of the X */

const BinarySearch: (x:number) => number = (x) => {
    
    let res=0;
    let A=[-5, 2, 10, 4, 6]
    A.sort((a, b) => a - b);
    console.log(A);
    let left=0, right=A.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(A[mid] == x) return mid;
        if(x < A[mid]) right = mid-1;
        else left = mid+1;
    }
    return -1;

}
    
    console.log(BinarySearch(10)); //2
    console.log(BinarySearch(6)); //4
    console.log(BinarySearch(20)); //-1
    
    // Calcualtion not dependent on input size - O(1)
    // loop - O(n)
    // nested loop - O(n^2)
    // input size reduced by half - O(logn)
    
    /* ***************************************************  Big-O = O(logn)  ********************************************************** */