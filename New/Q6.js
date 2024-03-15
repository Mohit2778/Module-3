// Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.

const input = require("readline-sync")
let a = input.questionInt("Enter the value of a: ");
let b = input.questionInt("Enter the value of b: ");

q = a % b;
r = Math.floor(a/b);

console.log(q,r);