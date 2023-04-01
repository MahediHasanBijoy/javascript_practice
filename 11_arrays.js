// Arrays are Objects

// Arrays are a special type of objects.

// Arrays use numbers to access its "elements". In this example, person[0] returns John:

const person = ["John", "Doe", 46];
console.log(person[0]);

// Objects use names to access its "members". In this example, person.firstName returns John:

const person2 = {firstName:"John", lastName:"Doe", age:46};
console.log(person2.firstName);


// The length property of an array returns the length of an array (the number of array elements).
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);



// Associative Arrays
// Many programming languages support arrays with named indexes.

// Arrays with named indexes are called associative arrays (or hashes).

// JavaScript does not support arrays with named indexes.

// In JavaScript, arrays always use numbered indexes.  