const input = require("readline-sync");
const n = input.questionInt("Enter the value of n: ");

let mat = [];
for (let i = 0; i < n; i++) 
{
    let row = [];
    for (let j = 0; j < n; j++) 
    {
        row.push(0);
    }
    mat.push(row);
}

let num = 1;
let top = 0;
let bottom = n - 1;
let left = 0;
let right = n - 1;

while (num <= n * n) 
{

    for (let i = left; i <= right; i++)
    {
        mat[top][i] = num++;
    }
     top++;


    for (let i = top; i <= bottom; i++) 
    {
        mat[i][right] = num++;
    }
    right--;

    for (let i = right; i >= left; i--) 
    {
        mat[bottom][i] = num++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) 
    {
        mat[i][left] = num++;
    }
    left++;
}

for (let i = 0; i < n; i++) 
{
    console.log(mat[i].join(' '));
}