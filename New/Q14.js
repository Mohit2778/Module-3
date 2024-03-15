//Write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.

const input = require("readline-sync")
let a = input.questionInt("Enter the value of a: ");

if (a % 2 == 0) {
    console.log(a);
} else {
    console.log(a*2);
}
