//Learn these sorting algorithms and apply them to an unsorted array: bubble sort
const input = require("readline-sync")

let a = input.questionInt("Enter the size of the array: ");
let arr = [];

for (let i = 0; i < a; i++) 
{
    arr.push(input.questionInt('Enter element ${i + 1}: '));
}

for (let i = 0; i < a; i++)
{
    for (let j = 0; j < (a - i - 1); j++) 
    {
        if (arr[j] > arr[j + 1])
        {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log("array:", arr);