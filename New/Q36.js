//Write a program to reverse the array and print the reversed array.

const input = require('readline-sync')
let n =input.questionInt("enter the length of array: ");
let arr = [];

for(let i = 0; i < n; i++);
{
    arr[i]= input.questionInt("enter the element number: ")
}
for(let i = n-1; i >= 0; i--)
{
    console.log((arr[i]));
}