//Write a program to take two numbers from the user and determine the greater of those two given numbers.

const input = require("readline-sync")
let a = input.questionInt("Enter the value of a: ");
let b = input.questionInt("Enter the value of b: ");

if (a>b){
    console.log(a);
} else {
    console.log(b);
}