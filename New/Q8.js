// Write a program to convert a temperature from Celsius to Fahrenheit using the formula  C/5 = (F-32)/9

const input = require("readline-sync")
let a = input.questionInt("Enter the value of a: ");

f = ((9*a) + 160) / 5;

console.log(f);