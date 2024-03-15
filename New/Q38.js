// Write a program to print the sum of all the odd numbers and even numbers in the given array.

const input = require("readline-sync")
// odd even sum 
let n = input.questionInt("enter the number:");
let arr = [];
let i = 0
os = 0
es = 0
while(i<n){
    let a = input.questionInt("enter the ${i+1} element : ");
    arr[i]=a
    i++
}
console.log(arr);
let j=0
while(j<n){
    if(arr[j]%2==0){
        es = es+arr[j]
    }else{
        os =os+arr[j];
    }
    j++
}
console.log(es); 
console.log(os);