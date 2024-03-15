const input = require ('readline-sync')
let N = input.questionInt("Enter the value of N: ")
sum = 0;
for (i = 1; i <= N; i++) {
  sum = sum + 1/i;
}



  console.log(sum);