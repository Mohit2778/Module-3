//Write a program to take two integers M, and N and print the sum of numbers in the range M to N.

const input = require("readline-sync")
let m = input.questionInt("Enter the value of m: ");
let n = input.questionInt("Enter the value of n: ");
let sum = 0
for (i = m; i <= n; i++){
    sum = sum + i;
}
console.log(sum)