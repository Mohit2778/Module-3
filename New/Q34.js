// Write a program to print all the numbers from the given array using a loop. 
// L = {23, 45, 32, 25, 46,33, 71, 90}

const input = require("readline-sync")
let n = input.questionInt("enter the number:");
let arr = [];
for (let i = 0; i < n; i++){
    let num = input.questionInt("enter the ${i+1} element:");
    arr.push(num);
}
console.log("Num entered: ");
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}
