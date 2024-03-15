//Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)

const input = require("readline-sync");
let a = input.questionInt("Enter the value of a: ");
let b = input.questionInt("Enter the value of b: ");
let c = input.questionInt("Enter the value of c: ");

if (a > b && a >c) {
    console.log(a);
} else if (b > c && b > a) {
    console.log(b);
} else {
    console.log(c);
}