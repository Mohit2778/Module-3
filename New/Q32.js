// Write a program to check if a number is a special type of number called a 'prime number'. A prime number is a number that is only divisible by 1 and itself, and it doesn't have any other factors. 

const input = require('readline-sync')

let number = input.questionInt("enter the number: ")
let n = number;
let i = 2;
let s = 0;
while (n > i)
{
    if (n % i != 0)
    {
        i++;
    }
    else
    {
        s++;
        i++;
    }
}
if (s != 0)
{
    console.log("It is not a Prime Number");
}
else{
    console.log("It is a Prime Number");
} if (s < 0) {
    console.log("invalid")
}