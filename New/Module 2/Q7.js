//Write a program to take 5 names from the user and print them.

const input = require("readline-sync")
let names = [];
for (let i = 0; i < 5; i++) {
    let name = input.question("Enter name $(i+1): ");
    name.push(names);
}

console.log("names:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}