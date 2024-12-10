### TypeScript Big O Notation Cheat Sheet
When analyzing algorithms in TypeScript, the principles of Big O remain the same, but the implementation is written using TypeScript syntax. Here's how you can understand and calculate Big O for various cases using TypeScript:

### Common Big O Complexities with TypeScript Examples
___________________________________________________

#### **Constant Time** O(1)

-   **Description**: Execution time remains constant regardless of input size.
-   **Example**: Accessing a specific index or performing a direct operation.
-   **Code**:

    ~~~
    const getFirstElement = (arr: number[]): number | undefined => {
        return arr[0]; // O(1)
    };
    ~~~
___________________________________________________

#### **Logarithmic Time** O(log⁡n)

-   **Description**: Input size is halved in each iteration.
-   **Example**: Binary search.
-   **Code**:

    ~~~
    const binarySearch = (arr: number[], target: number): number | null => {
    let start = 0, end = arr.length - 1;
    while (start <= end) { // O(log n)
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return null;
    };    
    ~~~
___________________________________________________

#### **Linear Time** O(n)

-   **Description**: Execution time grows linearly with input size.
-   **Example**: Iterating through an array.
-   **Code**:

    ~~~
    const sumArray = (arr: number[]): number => {
    return arr.reduce((sum, num) => sum + num, 0); // O(n)
	};
    ~~~
___________________________________________________

#### **Linearithmic Time** O(nlog⁡n)

-   **Description**: Combination of O(n)O(n)O(n) and O(log⁡n)O(\log n)O(logn). Common in sorting algorithms.
-   **Example**: Merge sort, quicksort.
-   **Code**:

    ~~~
    const mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // O(log n)
    const right = mergeSort(arr.slice(mid));   // O(log n)
    return merge(left, right); // O(n)
	};

	const merge = (left: number[], right: number[]): number[] => {
	    let result: number[] = [], i = 0, j = 0;
	    while (i < left.length && j < right.length) {
	        if (left[i] < right[j]) result.push(left[i++]);
	        else result.push(right[j++]);
	    }
	    return [...result, ...left.slice(i), ...right.slice(j)];
	};
    ~~~
___________________________________________________

#### **Quadratic Time** O(n^2)

-   **Description**: Execution time grows quadratically with input size.
-   **Example**: Nested loops for comparing every pair.
-   **Code**:

    ~~~
    const printPairs = (arr: number[]): void => {
    for (let i = 0; i < arr.length; i++) {        // O(n)
        for (let j = 0; j < arr.length; j++) {    // O(n)
            console.log(`${arr[i]} - ${arr[j]}`); // Total: O(n^2)
        }
    }
	};
    ~~~

___________________________________________________

#### **Exponential Time** O(2^n)

-   **Description**: Grows exponentially; doubles with each additional input.
-   **Example**: Recursive subset generation.
-   **Code**:

    ~~~
    const generateSubsets = (arr: number[]): number[][] => {
    if (arr.length === 0) return [[]];
    const last = arr[arr.length - 1];
    const subsets = generateSubsets(arr.slice(0, -1)); // O(2^n)
    return [...subsets, ...subsets.map(set => [...set, last])];
	};
    ~~~

___________________________________________________

#### **Factorial Time** O(n!)

-   **Description**: Evaluates all permutations or combinations.
-   **Example**: Permutation generation.
-   **Code**:

    ~~~
    const permute = (arr: number[]): number[][] => {
    if (arr.length === 0) return [[]];
    let result: number[][] = [];
    for (let i = 0; i < arr.length; i++) { // O(n!)
        const rest = arr.slice(0, i).concat(arr.slice(i + 1));
        const perms = permute(rest);
        for (const perm of perms) {
            result.push([arr[i], ...perm]);
        }
    }
    return result;
	};
    ~~~
___________________________________________________

### Tips for Analyzing TypeScript Functions

1.  **Loops**:
    -   Single loop → O(n)
    -   Nested loops → Multiply complexities O(n^2), O(n^3),…
2.  **Recursive Functions**:
    -   Identify the base case and recursive call pattern.
    -   Calculate the recursion tree's depth and total operations.
3.  **Sorting Algorithms**:
    -   Common sorting algorithms are O(nlog⁡n).
4.  **Ignore Constants**:
    -   Simplify O(2n+3) → O(n).


**Quick Reference Table**
| Complexity     |Name                           |Example Algorithms           |
|----------------|-------------------------------|-----------------------------|
|O(1)            |Constant Time                  |Array lookup                 |
|O(logn)         |Logarithmic Time               |Binary search                |
|O(n)            |Linear Time                    |Iterating over an array      |
|O(nlogn)        |Linearithmic Time              |Merge sort, quicksort        |
|O(n^2)          |Quadratic Time                 |Nested loops, bubble sort    |
|O(2^n)          |Exponential Time               |Recursive subsets            |
|O(n!)           |Factorial Time                 |Permutations

___________________________________________________

![image](https://github.com/user-attachments/assets/936a3291-b8c7-450d-b1e6-720928c50bc7)


# DSA Course
-  This repo contains of the time complexity for all algorithms 
```tsc -w``` to make the changes auto change in js files
-  open your TERMINAL on dist folder and write ```node <fileName>.js``` to see output
-  Egn/Mostapha Taha ```Stockfish```
-  
    <a href="https://leetcode.com/M0staphaTaha/">My account on leetcode</a>
