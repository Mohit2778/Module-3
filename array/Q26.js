const input = require("readline-sync");

let n = input.questionInt("Enter the number of elements for the first array (n): ");
let m = input.questionInt("Enter the number of elements for the second array (m): ");

let a = [];
let b = [];

//Input elements for array a
for (let i = 0; i < n; i++) {
    let c = input.questionInt("Enter element " + (i + 1) + " of array a: ");
    a.push(c);
}

// Input elements for array b
for (let j = 0; j < m; j++) {
    let d = input.questionInt("Enter element " + (j + 1) + " of array b: ");
    b.push(d);
}

let mergedArray = [];

let i = 0, j = 0;

// Merge arrays a and b into mergedArray
while (i < n && j < m) {
    if (a[i] < b[j]) {
        mergedArray.push(a[i]);
        i++;
    } else {
        mergedArray.push(b[j]);
        j++;
    }
}

// Add remaining elements of array a, if any
while (i < n) {
    mergedArray.push(a[i]);
    i++;
}

// Add remaining elements of array b, if any
while (j < m) {
    mergedArray.push(b[j]);
    j++;
}

console.log("Merged and sorted array:", mergedArray);