const prompt= require("prompt-sync") ({signt: true});
const age = prompt("please insert your age:");
if (age > 18){
    console.log("you are welcome to lakers")
}else{console.log('go home')}


const height = prompt("insert your height");
if (height < 6){
    console.log ("welcome to next phase")
}