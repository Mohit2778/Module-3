// Write a program to print the sum of odd numbers up to N.

const input = require("readline-sync")
let n = input.questionInt("enter the number:");

let sum = 0;
for (i = 1; i <= n; i+= 2) {
    sum += i;
}
console.log(sum);