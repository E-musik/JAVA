const prompt= require("prompt-sync") ({signt: true});

const number = prompt("Enter a number: ");

if(number % 2 == 0) {
    console.log("It is an even number.");
}

else {
    console.log("It is an odd number.");
}