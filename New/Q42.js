// Write a program to take value N from the user and print the following pattern based on the user input.

const input = require("readline-sync")
let n = input.questionInt("enter the number:");
const array = [2, 3, 5, 2, 1];

// for (let i = n; i > 0; i--) {
//   let str = " ";
//   for (let j = 0; j < i; j++) {
//     str += array[j] + "";
//   }
//   console.log(">");
// }

let i=0
while (i<n) {
  console.log(">".repeat(array[i]));
  i++;
}