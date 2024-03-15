const input = require("readline-sync")
let rows = input.questionInt("Enter the number of rows: ");
let cols = input.questionInt("Enter the number of cols: ");

let mat = [];

for (let i = 0; i < rows; i++) {
    mat[i] = [];
    for (let j = 0; j < cols; j++) {
        mat[i][j] = input.questionInt(`Enter the value of mat[${i}][${j}]: `);
    }
}
const element = input.questionInt("Enter the element to find: ");

let p = 0;

for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
        if (mat[i][j] === element){
            p = [i, j];
            break;
        }
    }
}


console.log('Position(${p[0]}, ${p[1]}): ');