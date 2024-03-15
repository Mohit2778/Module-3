//Write a program to print the sum of all the numbers in the given array.

const input = require("readline-sync")
let n = input.questionInt("Enter the value of n: ");
let sum = 0;
let a = [];

for (let i = 0; i < n; i++) {
    let num = input.question("Enter number $(i+1): ");
    a.push(num);
    sum += num;
}
console.log(sum);