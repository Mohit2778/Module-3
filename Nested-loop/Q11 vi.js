// This is the 10(4)question
const input = require("readline-sync");
let N = input.questionInt("Enter the value of N: ");

for (let i = 1; i <= N; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
    row += j + ' ';
    }

    for (let j = i-1; j > 0; j--) {
    row += j + ' ';
    }
console.log(row);
}