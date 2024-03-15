const input = require('readline-sync')

let number =input.questionInt("enter the number: ")

let s=number

let i=0

let sum=0

while (0<number) {
    p= number%10
    sum=(sum*10)+ p
    number=Math.floor(number/10)
}
if(s == sum){
    console.log("palindrome");
}
else{
    console.log("not");
}