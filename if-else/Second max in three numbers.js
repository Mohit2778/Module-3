const input = require("readline-sync")
let a = input.questionInt("Enter a number:")
let b = input.questionInt("Enter a number:")
let c = input.questionInt("Enter a number:")

if (a>b) {
    max = a;
    min = b;
}
else {
    max = b;
    min = a;
}
if (max>c) {
    max1 = max;
    min1 = c;
}
else {
    max1 = c;
    min1 = max;
}
if (min1>min) {
    console.log("min1 is second max:",min1);
}
else {
    console.log("min is second max:",min);
}
