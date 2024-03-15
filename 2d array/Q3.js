const input = require("readline-sync");


let rows = input.questionInt("Enter the number of rows: ");
let cols = input.questionInt("Enter the number of columns: ");


let mat = [];


for (let i = 0; i < rows; i++) 
{
    mat[i] = [];
    for (let j = 0; j < cols; j++) 
    {
        mat[i][j] = input.questionInt(`Enter the value for mat[${i}][${j}]: `);
    }
}


let tm = [];

for (let i = 0; i < cols; i++) 
{
    tm[i] = [];
    for (let j = 0; j < rows; j++) 
    {
        tm[i][j] = mat[j][i];
    }
}
console.log("Transpose matrix :");
for (let i = 0; i < cols; i++) {
    console.log(tm[i].join(" "));
}