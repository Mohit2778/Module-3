const input = require('readline-sync')
let rows = input.questionInt("Enter the number of rows: ");
let cols = input.questionInt("Enter the number of cols: ");

let mat = [];

for (let i = 0; i < rows; i++) {
    mat[i] = [];
    for (let j = 0; j < cols; j++) {
        mat [i][j] = input.questionInt(`Enter the value of mat[${i}][${j}]: `);
    }
}

let min = mat[0][0];
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
        if (mat[i][j] < min) {
            min = mat[i][j];
        }
    }
}
console.log("Minimum Element in the Matrix:",min);