const input = require("readline-sync");
let N = input.questionInt("Enter the value of N: ");

for (let i = 1; i <= N; i++) {
    let row = '';
for (let j = 1; j <= i*2 - 1; j++) {
    row += '*';
}
    console.log(row);
}