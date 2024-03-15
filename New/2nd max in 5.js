const input = require("readline-sync")

let a = input.questionInt("Enter the value of a: ");
let b = input.questionInt("Enter the value of b: ");
let c = input.questionInt("Enter the value of c: ");
let d = input.questionInt("Enter the value of d: ");
let e = input.questionInt("Enter the value of e: ");

if (a > b) {
    max = a;
    min = b;
} else {
    max = b;
    min = a;
}
if (c > d) {
    max1 = c;
    min1 = d;
} else {
    max1 = d;
    min1 = c;
}
if (max > max1) {
    max2 = max;
    min2 = max1;
} else {
    max2 = max1;
    min2 = max;
}
if (max2 > c) {
    max3 = max2;
    min3 = c;
} else {
    max3 = c;
    min3 = max2;
}
if (min > min1) {
    max4 = min;
    min4 = min1;
} else {
    max4 = min1;
    min4 = min;
}
if (min2 > min3) {
    max5 = min2;
    min5 = min3;
} else {
    max5 = min3;
    min5 = min2;
}
if (max4 > max5) {
    console.log("Second Max: ",max4);
} else {
    console.log("Second Max: ",max5);
}