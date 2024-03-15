//Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.

const input = require("readline-sync")
let n = input.questionInt("enter the number:");

let sum = 0;
while(n!=0){
    let m = n % 10;
    n=Math.floor(n/10);
    sum = (sum * 10) + m;

}
console.log(sum);