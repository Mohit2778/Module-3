// Write a program to take N numbers from the user and print the frequency of every number.

const input = require("readline-sync")

let n = input.questionInt("enter the number of n:"),i = 0,count = 1, arr = [];

while(i<n){
    let a = input.questionInt("enter the ${i+1} element : ");
    arr[i]=a
    i++
}
console.log(arr);
i = 0;
while(i<n){


   j=i+1;

   while(j<n){
 
    if(arr[i]==arr[j]){
        count = count+1

        k=j

        while(k <n-1){

            arr[k] = arr[k+1];
            k++
        }

        n--

    }


    j++
   }


   console.log(arr[i]+"="+count);

   count = 1;
   i++

}
