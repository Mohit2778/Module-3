//Write a program to take a year from the user and output whether a given year is a leap year or not.

const input = require("readline-sync")
let a = input.questionInt("Enter the value of a: ");

if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}