//Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).

const input = require("readline-sync")
let a = input.questionInt("Enter the value of a: ");
let b = input.questionInt("Enter the value of b: ");
let c = input.questionInt("Enter the value of c: ");
let d = input.questionInt("Enter the value of d: ");

if (a>b && a>c && a>d) {
    console.log(a);
} else if (b>a && b>c && b>d) {
    console.log(b);
} else if (c>a && c>b && c>d) {
    console.log(c);
} else {
    console.log(d);
}