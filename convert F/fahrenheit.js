const prompt= require("prompt-sync") ({signt: true});

function Celsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let number = parseInt (prompt('enter fahrenheit value: '));

  let result = (5/9) * (number-32);
  console.log("celsius value is: " + result + " degree centigrate" );