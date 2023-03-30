// 'var' is the oldest way of declaring variables in JavaScript. It has a function scope, which means that variables declared with var are accessible within the function where they are declared, as well as any nested functions.

// 'let' and 'const' were introduced in ES6 (ECMAScript 2015) and are block-scoped, which means they are only accessible within the block they are declared in, including any nested blocks.

// block scoped example
// if(true){
//     var varVariable = "this is var";
// }

// console.log(varVariable);

// if(true){

//     let letVariables = "this is let";
// }

// console.log(letVariables);


// When adding a number and a string, JavaScript will treat the number as a string.
// JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let y = "5" + 5 + 6;
let x = 5 + 5 + '6';
let z = 5 + 5 + 6;

console.log(y);     // 556
console.log(x);     // 106
console.log(z);     // 16


// Always declare a variable with const when you know that the value should not be changed.

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp

const car = ['Audi', 'BMW', 'Ford'];
car[0] = 'Toyoota';

car.push("Ferrari");

console.log(car);

car.forEach(currentItem => {
    console.log(currentItem);
});

