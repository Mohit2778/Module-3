//Write a program to take a number from the user and print that number as Odd or Even.

const input = require("readline-sync")
let a = input.questionInt("Enter the value of a: ");

if (a%2 == 0){
    console.log("Even");
} else {
    console.log("Odd");
}