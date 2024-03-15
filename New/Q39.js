const input = require("readline-sync");
let n = input.questionInt("Enter the length of array: ");
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(input.questionInt(`Enter element number ${i + 1}: `));
}


for (let i = 0; i < n; i++) {
    let count = 0; 
    for (let j = i + 1; j < n; j++) {
        if (arr[i] === arr[j]) {
            count++;
            
            for (let k = j; k < n - 1; k++) {
                arr[k] = arr[k + 1];
            }
            n--; 
            j--; 
        }
    }
    if (count > 0) {
        console.log(`${arr[i]} is duplicate.`);
    }
}
