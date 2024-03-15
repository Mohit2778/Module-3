//Write a program to take a number from the user and output whether that number is negative, positive or zero.

const input = require("readline-sync")
let a = input.questionInt("Enter the value of a: ");

if (a == 0) {
    console.log("Zero");
}else if (a > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}