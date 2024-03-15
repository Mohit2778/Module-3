const input = require('readline-sync')

let number =input.questionInt("enter the number: ")
let n = number;
let i = 2;
let s = 0;
while (n>i)
{
    if (n%i!=0)
    {
        i++;
    }
    else
    {
        s++;
        i++;
    }
}
if (s!=0)
{
    console.log("It is not a Prime Number");
}
else{
    console.log("It is a Prime Number");
}
