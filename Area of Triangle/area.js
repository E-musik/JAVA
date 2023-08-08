const prompt= require("prompt-sync") ({signt: true});

function area(b, h){
    return (b * h)/2;   
}

let number1 = parseFloat (prompt("Enter the value of b: "));
let number2 = parseFloat (prompt("Enter the value of h: "));

let result = area(number1, number2);

console.log("the area of a trianagle is" + result);