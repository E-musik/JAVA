const prompt= require("prompt-sync") ({signt: true});

function miles(kilometer) {
    return (1.60934 * kilometer);
  }
  
  let kilometer = parseInt (prompt('enter kilometer value: '));

  let result =  (1.60934 * kilometer);
  console.log("Value is: " + result + " Miles" );