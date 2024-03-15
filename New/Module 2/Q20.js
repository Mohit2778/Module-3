// Write a program to take an unsorted array of size N that contains only non-negative integers, and find a contiguous subarray that adds to a given number S. In case of multiple subarrays, return the subarray which comes first on moving from left to right. Let us say the array is 3, 6, 7, 5, 10. And the value of S = 12. The output should be: 7, 5

const input = require("readline-sync")
let n = input.questionInt("Enter the value of n: ");
let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = input.questionInt("Enter the number of b: ");
}
let s = input.questionInt("Enter the value of s: ");
for (let i = 0; i < n; i++) {
    let j = i + 1;
    if(arr[i]+arr[j] == s)
    {
        console.log(arr[i].arr[j]);
    }
}