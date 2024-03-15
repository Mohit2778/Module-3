//Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)
//Basic Salary <= 10000 : HRA = 20%, DA = 80%
//Basic Salary <= 20000 : HRA = 25%, DA = 90%
//Basic Salary > 20000 : HRA = 30%, DA = 95%

const input = require("readline-sync")
let n = input.questionInt("Enter the value of GS: ");

if (n<= 10000) {
    hra = (0.2*n)
    dra = (0.8*n)
    GS = (hra+dra+n)
    console.log(GS);
} else if (n <= 20000) {
    hra = (0.25*n)
    dra = (0.9*n)
    GS = (hra+dra+n)
    console.log(GS);
} else if (n >20000 ){
    hra = (0.3*n)
    dra = (0.95*n)
    GS = (hra+dra+n)
    console.log(GS);
}