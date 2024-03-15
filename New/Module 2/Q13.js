//Write a program to convert a given Roman numeral into its decimal equivalent. The following table gives the Roman numerals and their decimal equivalents: 
//Roman Decimal
//M          1000
//D           500
//C           100
//L            50
//X            10
//V            5
//I              1

const input = require("readline-sync");

const romanNumbers = {
     I: 1,
     V: 5, 
     X: 10,
     L: 50,
     C: 100,
     D: 500,
     M: 1000 
};

let n = input.questionInt("Enter the size of array: ");
let i = 0;
let a = [];

while (i < n) {
    let b = input.question("Enter the Roman number: ");
    a.push(b);
    let decimal = 0;

    for (let j = 0; j < b.length; j++) 
    {
        if (romanNumbers[b[j]] < romanNumbers[b[j + 1]]) 
        {
            decimal -= romanNumbers[b[j]];

        } else 
        {
            decimal += romanNumbers[b[j]];
        }
    }
    console.log("Roman Decimal:", decimal);
    i++;
}