// Write a program to take two inputs from the user and swap them without using a temporary or third variable.

const input = require("readline-sync")
let a = input.questionInt("Enter the value of a: ");
let b = input.questionInt("Enter the value of b: ");

c = a ;
a = b ;
b = c ;

console.log(a,b);