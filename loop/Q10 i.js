const input = require('readline-sync')

let x=input.questionInt("enter the value of x: ")
let n=input.questionInt("enter the value of n: ")
 let sum=0;
 for (let i = 1; i <=n; i++) {
    var sol=(x**i)/i
     sum = sum+ sol;
}console.log(sum);