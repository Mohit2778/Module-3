// Factors Question

const input = require("readline-sync")
let n = input.question("Enter the value of n: ");
for (let i = 0; i <= n; i++) {
    if (n%i === 0) {
        console.log(i);
    }
}
