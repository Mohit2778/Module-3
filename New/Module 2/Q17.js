// Write a program, take two sorted arrays of size m and n from the user as input and return the median of the two sorted arrays.

const input = require('readline-sync');
let n=input.questionInt("enter the number: ")
let m=input.questionInt("enter the number: ")
let d=m+n
let arr1 =[]
let arr2 = []

const mergedArray = [];
let i = 0, j = 0;

while (i < n  ) 
{
    let s=input.questionInt("enter the number: ")
    arr1.push(s)
    i++
}
console.log("this is first array",arr1);
while (j < m) 
{
    let p=input.questionInt("enter the number: ")
    arr2.push(p);
    j++;
}
console.log("this is second array",arr1);
let c=0
while (c<d) 
{
    mergedArray.push(0);
    c++
}

let y=0
while (y<n) {
    mergedArray[y]=arr1[y]
    y++
}
let x=0
while (y<d) {
    mergedArray[y]=arr2[x]
    y++
    x++
}
for(let a=0;a<d;a++){
    for (let b = a+1; b< d; b++) {
        if (mergedArray[a]>mergedArray[b]) {
            [mergedArray[a],mergedArray[b]]=[mergedArray[b],mergedArray[a]]
        }  
          
    }
}
console.log("this is marge and sorted array",mergedArray);