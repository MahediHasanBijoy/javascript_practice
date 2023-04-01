// NaN - Not a Number
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let x = 100/ "apple";
// console.log(x);

// You can use the global JavaScript function isNaN() to find out if a value is a not a number:
console.log(isNaN(x));

// However, if the string is numeric, the result will be a number:

let y = 100 / "10";
console.log(y);


