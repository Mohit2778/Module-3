// Write a program to take two numbers from the user and perform Six basic operations (addition, subtraction, multiplication, division, integer division and modulus) on those two numbers.

const input = require("readline-sync")
let a = input.questionInt("Enter the value of a: ");
let b = input.questionInt("Enter the value of b: ");

a = a + b;
s = a - b;
m = a * b;
d = a / b;
i = Math.floor(a / b);
mod = a % b;

console.log(a,s,m,d,i,mod);