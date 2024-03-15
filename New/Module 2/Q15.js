//Write a program to take a sorted array from the user as input and find a number using Binary Search the array.

const input = require("readline-sync");
let n = input.questionInt("Enter the size of array: ");
let target = input.questionInt("Enter the number to search for: ");
let arr = [];

for (let i = 0; i < n; i++) {
    let num = input.questionInt(`Enter number ${i + 1}: `);
    arr.push(num);
}

let low = 0;
let high = n - 1;
let found = false;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        console.log(`The number ${target} is found at index ${mid}.`);
        found = true;
        break;
    } else if (arr[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

if (!found) {
    console.log(`The number ${target} is not found in the array.`);
}
