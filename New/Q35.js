// Write a program to create an array of natural numbers till 20 and print it.

const input = require("readline-sync")
let n = input.questionInt("enter the number:");
let arr = [];
for (let i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element: `);
    arr[i] = a;
}
console.log(arr);