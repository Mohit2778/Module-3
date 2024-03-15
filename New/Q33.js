// Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.

const input = require("readline-sync")
let a = input.question("Enter the number:");
let n = a;
let i = 1;
let sum = 0;

while (n>i) {
    if (n % i == 0) {
        sum += i;
    }
    i++;
}
if (sum == n) {
    console.log("perfect number");
} else {
    console.log("not a perfect number");
}