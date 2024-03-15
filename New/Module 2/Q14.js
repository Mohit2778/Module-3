//Write a program that rotates the elements of a list so that the elements at the first index move to the second elements at the second index move to the third and so on. The last element moves at the first index. (Take array and no_of_rotations from the user)

const input = require("readline-sync")
let n = input.questionInt("Enter the value of n: ");
let r = input.questionInt("Enter the value of r: ");
let a = [];

for (let i = 0; i < n; i++) {
    a[i] = input.questionInt('Enter number ${i + 1): ');
}

for (let i = 0; i < r; i++) {
    let l = a[n - 1];
    for (let j = n - 1; j > 0; j--) {
        a[j] = a[j - 1];
    }
    a[0] = l;
}
console.log(a.join(' '));