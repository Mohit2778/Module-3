const input = require("readline-sync")
let rows = input.questionInt("Enter the number of rows : ");
let cols = input.questionInt("Enter the number of columns: ");

let mat1 = [];
let mat2 = [];

for (let i = 0; i < rows; i++) {
    mat1[i] = [];
    for (let j = 0; j < cols; j++) {
        mat1[i][j] = input.questionInt(`Enter the value for mat1[${i}][${j}]: `);
    }
}

for (let i = 0; i < rows; i++) {
    mat2[i] = [];
    for (let j = 0; j < cols; j++) {
        mat2[i][j] = input.questionInt(`Enter the value for mat2[${i}][${j}]: `);
    }
}


let mat3 = [];
for (let i = 0; i < rows; i++) {
    mat3[i] = [];
}
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        mat3[i][j] = mat1[i][j] * mat2[i][j];
    }
}

console.log("multiplication:");
for (let i = 0; i < rows; i++) {
    console.log(mat3[i].join(" "));
}