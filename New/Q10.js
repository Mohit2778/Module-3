//Write a program to take two numbers, A and B from the user. Your task is to find the largest number that is less than A and can be divided evenly by B. Can you figure out that number?

const input = require("readline-sync")
let a = input.questionInt("Enter the value of a: ");
let b = input.questionInt("Enter the value of b: ");

c = Math.floor(a/b);
d = c * b;

console.log(d);
