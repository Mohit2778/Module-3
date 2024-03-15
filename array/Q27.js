const input = require("readline-sync");

let a1 = input.question("Enter sorted array 1: ").split(" ").map(Number);
let a2 = input.question("Enter sorted array 2: ").split(" ").map(Number);

let union = [];
let intersection = [];
let i = 0, j = 0;


while (i < a1.length && j < a2.length) 

{
    if (a1[i] < a2[j]) 
    {
        union.push(a1[i]);

        i++;

    } else if (a1[i] > a2[j]) 
    {
        union.push(a2[j]);

        j++;

    } else 
    {
        union.push(a1[i]);

        i++;

        j++;
    }
}


while (i < a1.length) 
{
    union.push(a1[i]);

    i++;
}


while (j < a2.length) 
{
    union.push(a2[j]);

    j++;
}

i = 0, j = 0; 


while (i < a1.length && j < a2.length) 
{
    if (a1[i] < a2[j]) 
    {
        i++;

    } else if (a1[i] > a2[j]) 
    {
        j++;

    } else 
    {
        intersection.push(a1[i]);

        i++;

        j++;

    }
}

console.log("Union:", union.join(" "));
console.log("Intersection:", intersection);
