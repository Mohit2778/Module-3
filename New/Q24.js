// Take a number N from the user as input, and print even numbers up to N.

const input = require('readline-sync')
let N = input.questionInt("Enter the number N: ");

for (let i = 2; i <= N; i += 2) {
    console.log(i);
}