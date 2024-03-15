//Write a program  to input electricity unit charges and calculate the total electricity bill according to the given condition:
//For the first 50 units Rs. 0.50/unit
//For the next 100 units Rs. 0.75/unit
//For the next 100 units Rs. 1.20/unit
//For units above 250 Rs. 1.50/unit
//An additional surcharge of 20% is added to the bill

const input = require("readline-sync")
let n = input.questionInt("Enter the value of n: ");
if (n <= 50) {
    b = 0.50 * n;
    sc = 0.20 * b;
    tb = b + sc;
    console.log(tb);
} else if (n <= 150) {
    b = (0.75 * n) + (100 - n) * 0.50;
    sc = 0.20 * b;
    tb = b + sc;
    console.log(tb); 
} else if (n <= 250) {
    b = (n * 1.20) + (100 - n) * 0.75 + (200 - n) * 0.50;
    sc = 0.20 * b;
    tb = b + sc;
    console.log(tb);
} else if (n > 250) {
    b = (n * 1.50) + (250 - n) * 1.20 + (350 - n) * 0.75 + (450 - n) * 0.50;
    sc = 0.20 * b;
    tb = b + sc;
    console.log(tb);
}