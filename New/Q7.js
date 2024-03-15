//Write a program to take a positive number from the user and then display the last digit of that number.

const input = require("readline-sync")
let a = input.questionInt("Enter the value of a: ");

m = a % 10;

console.log(m);