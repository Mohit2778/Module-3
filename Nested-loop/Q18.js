const input = require("readline-sync")
let N = input.questionInt("Enter the value of N: ");
let a = [N];

for (let i = 0; i < N; i++) {
    a[i] = input.questionInt("Enter element: ");
}
let p = input.questionInt("Enter the index of the element to delete: ");
{
    for (let i = p; i<=N - 2; i++) {
        a[i] = a[i + 1];
    }
    for (let i = 0; i < N - 1; i++) {
        console.log(a[i]);
    }
}