//Given an array ([1,2,3,4,5,6,7]), Write a program to take a number from the user and check whether it exists in this array or not.

const input = require("readline-sync")
let a = [];

let arrayInput = input.questionInt("Enter the array element: ");
let array = arrayInput.split(" ").map(Number);

let number = input.questionInt("Enter the number to check if it exists in the array: ");

let exists = false;
for (let i = 0; i < array.length; i++) 
{
    if (array[i] === number)
    {
        exists = true;
        break;
    }
}

if (exists)
{
    console.log("Yes");
} else 
{
    console.log("No");
}