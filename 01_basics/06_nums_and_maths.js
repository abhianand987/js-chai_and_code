//Numbers
const score = 400
console.log(score);
const balance = new Number(100)

console.log(balance);
console.log(balance.toFixed(2)); // gives precision values used in e-com website
console.log(balance.toString().length);

const otherNumber = 187.6567

console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));



//Maths

console.log(Math.abs(-9988));
console.log(Math.round(5.87));
console.log(Math.ceil(5.87));
console.log(Math.floor(5.87));
console.log(Math.sqrt(5.87));

console.log(Math.pow(5,3));
console.log(5**3);

//Math.random() --> Most used in applications and gives a random number between 0 & 1.

console.log(Math.floor((Math.random() * 10) + 1));

const min = 199
const max = 499

console.log(Math.floor(Math.random() * (max - min + 1) + min))
// It gives a value in the range both inclusive