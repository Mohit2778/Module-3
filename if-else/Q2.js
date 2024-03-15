const input = require("readline-sync")
let a = parseFloat(input.question("Enter a number:"))
let b = parseFloat(input.question("Enter b number:"))
let c = parseFloat(input.question("Enter c number:"))
let d = parseFloat(input.question("Enter d number:"))
if(a>b && a>c && a>d){
    console.log("a is greater",a);
}
    else if(b>a && b>c && b>d) {
    console.log("b is greater",b);
}
    else if (c>a && c>b && c>d) {
    console.log("c is greater",c);
}
    else {
    console.log("d is greater",d);
}