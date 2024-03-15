const input=require('readline-sync')
let n=input.questionInt("enter  the number: ")
let e=n
let a=String(n).length
let sum1=0

while (n>0) {
    d=n%10
    sum1+=d**a
    n=Math.floor(n/10)
}
console.log(sum1);
console.log(e);
if(e==sum1){
    console.log("Yes");
}
else{
    console.log("No");
}