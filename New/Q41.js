// Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)

const input = require("readline-sync");



let b1 = input.question("Enter sorted array 1 : ").split(" ").map(Number);
let b2 = input.question("Enter sorted array 2 : ").split(" ").map(Number);

let a = [];
let i = 0, j = 0;

while (i < b1.length && j < b2.length) {
    if (b1[i] < b2[j]) {
        a.push(b1[i]);
        i++;
    } else {
        a.push(b2[j]);
        j++;
    }
}

while (i < b1.length) {
    a.push(b1[i]);
    i++;
}

while (j < b2.length) {
    a.push(b2[j]);
    j++;
}

console.log("Merged sorted array:", a.join(" "));
