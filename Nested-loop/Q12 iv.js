const input = require("readline-sync");
let n = input.questionInt("Enter the value of N: ");
let p = "";

for (let i=1; i<=n; i++) {
    let b=n;
    for (let j=1; j<=i; j++)
    {
        p += b + " ";
        b--;
        c=b;
    }
    for (let c=b+2; c<=n; c++)
    {
        p += c + " ";
    }
p += "\n";
}
for (let i=n-1; i>=1; i--) {
    let b=n;
    for (let j=1; j<=i; j++) {
    p += b + " ";
    b--;
    c=b;
    }
    for (let c=b+2; c<=n; c++) {
        p += c + " ";
    }
    p += "\n";
}
console.log(p);