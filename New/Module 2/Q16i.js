//Learn these sorting algorithms and apply them to an unsorted array: Insertion sort
const input = require("readline-sync")
let n = input.questionInt("Eneter the value of n: ");
let arr = [];
for (let i = 0; i < n; i++) 
{
    arr.push(input.questionInt(`Enter element ${i + 1}: `));
}


    for (let i = 1; i < n; i++) {
        let k = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > k) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = k;
    }


console.log("Sorted Array:", arr);