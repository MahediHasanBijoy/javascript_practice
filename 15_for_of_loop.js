// The For Of Loop

// The JavaScript for of statement loops through the values of an iterable object.

// Looping over an Array 🎈🎈
const cars = ['BMW', 'Volvo', 'Audi'];

let text = "";
// here x is value of array
for(let x of cars){
    text += x;
}

console.log(text);



// Looping over a String🎁🎁
let language = "JavaScript";

let line = "";

for(let x of language){
    line += x;
}

console.log(line);