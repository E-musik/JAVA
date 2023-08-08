const prompt= require("prompt-sync") ({signt: true});

let x1, x2;

let a = prompt("enter the value of a: ");
let b = prompt("enter the value of b: ");
let c = prompt("enter the value of c: ");

let sub = b * b - 4 * a * c;

if (sub > 0) {
    x1 = (-b + Math.sqrt(sub)) / (2 * a);
    x2 = (-b - Math.sqrt(sub)) / (2 * a);

    console.log(`The roots of quadratic equation are ${x1} and ${x2}`);
}

else if (sub == 0) {
    x11 = x2 = -b / (2 * a);

    console.log(`The roots of quadratic equation are ${x1} and ${x2}`);
}

else {
    let root1 = (-b / (2 * a)).toFixed(2);
    let root2 = (Math.sqrt(-sub) / (2 * a)).toFixed(2);

    console.log(`The roots are + ${root2} and ${root1}`);
}
