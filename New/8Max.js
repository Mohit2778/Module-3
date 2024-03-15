const input = require ('readline-sync')
let a = input.questionInt("enter the number: ")
let b = input.questionInt("enter the number: ")
let c = input.questionInt("enter the number: ")
let d = input.questionInt("enter the number: ")
let e = input.questionInt("enter the number: ")
let f = input.questionInt("enter the number: ")
let g = input.questionInt("enter the number: ")
let h = input.questionInt("enter the number: ")

if(a>b){
    max = a
    min = b
}else{
    max = b
    min= a
}if(c>d){
    max1 = c
    min1 = d
}else{
    max1 = d
    min1 = c
}if(e>f){
    max2 = e
    min2 = f
}else{
    max2 = f
    min2 = e
}if(g>h){
    max3 = g
    min3 = h
}else{
    max3 = h
    min3 = g
}if(max>max1){
    max4 = max
    min4 = max1
}else{
    max4 = max1
    min4 = max
}if(max2>max3){
    max5 = max2
    min5 = max3
}else{
    max5 = max3
    min5 = max2
}if(min>min1){
    max6 = min
    min6 = min1
}else{
    max6 = min1
    min6 = min
}if(min2>min3){
    max7 = min2
    min7 = min3
}else{
    max7 = min2
    min7 = min3
}if(max6>max7){
    console.log("max6")
}else{
    console.log("max7")
}