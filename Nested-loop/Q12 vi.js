const input = require("readline-sync")
let N = input.questionInt("Enter the value of N: ");

for (let i = 0; i < N; i++)
{
     let str = '';

     for (let j = N - i; j <= N; j++)
     {
        str += j + ' ';
     }
     for (let k = N - 1; k > i; k--)
     {
        str += k + ' ';
     }
     console.log(str);
}