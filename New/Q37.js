//Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.

const input = require("readline-sync");

let n = input.questionInt("Enter the size of the array: ");

let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(input.questionInt(`Enter element ${i+1}: `));
}

let k = input.questionInt("Enter the target number: ");

let flag = "no";

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
        flag = "yes";
        break;
    }
}

console.log(flag);



