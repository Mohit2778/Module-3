const readline = require("readline-sync");

const size = readline.questionInt("Enter the size of the square matrix: ");
let snakePattern = [];

for (let i = 0; i < size; i++) {
    snakePattern[i] = [];
    for (let j = 0; j < size; j++) {
        if (i % 2 === 0) {
            snakePattern[i][j] = i * size + j + 1;
        } else {
            snakePattern[i][size - j - 1] = i * size + j + 1;
        }
    }
}


for (let i = 0; i < size; i++) {
    console.log(snakePattern[i].join('\t'));
}