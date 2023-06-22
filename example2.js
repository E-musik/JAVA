const prompt= require("prompt-sync") ({signt: true});
const a = prompt ("enter a number" );
if (a > 0){
    console.log("positive number")
}else if (a==0){
    console.log("number is Zero")
}else{console.log("negative number")}