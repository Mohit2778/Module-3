//Write a program to take 5 numbers from the user and print the frequency of every number.

const input = require("readline-sync");

let num1 = input.questionInt("Enter number 1: ");
let num2 = input.questionInt("Enter number 2: ");
let num3 = input.questionInt("Enter number 3: ");
let num4 = input.questionInt("Enter number 4: ");
let num5 = input.questionInt("Enter number 5: ");

let f1 = 1;
let f2 = 1;
let f3 = 1;
let f4 = 1;
let f5 = 1;

if (num1 === num2) {
    f1++;
}
if (num1 === num3) {
    f1++;
}
if (num1 === num4) {
    f1++;
}
if (num1 === num5) {
    f1++;
}
if (num2 === num3) {
    f2++;
}
if (num2 === num4) {
    f2++;
}
if (num2 === num5) {
    f2++;
}
if (num3 === num4) {
    f3++;
}
if (num3 === num5) {
    f3++;
}
if (num4 === num5) {
    f4++;
}

console.log(num1 + " = " + f1);
if (num2 !== num1) {
    console.log(num2 + " = " + f2);
}
if (num3 !== num1 && num3 !== num2) {
    console.log(num3 + " = " + f3);
}
if (num4 !== num1 && num4 !== num2 && num4 !== num3) {
    console.log(num4 + " = " + f4);
}
if (num5 !== num1 && num5 !== num2 && num5 !== num3 && num5 !== num4) {
    console.log(num5 + " = " + f5);
}