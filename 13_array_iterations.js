// JavaScript Array forEach() ⚽⚽
// The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunc);

// index and array parameter are optional
function myFunc(value, index, array){
    txt += value + "\n";
}

console.log(txt);


// JavaScript Array map() ⚽⚽ 

// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

const numbers1 = [45, 4, 8, 15, 39];
const numbers2 = numbers1.map(myFunction);

// index and array parameters are optional
function myFunction(value, index, array){
    return value* 2;
}

console.log(numbers2);



// JavaScript Array filter()  ⚽⚽ 

// The filter() method creates a new array with array elements that pass a test.

const ages = [30, 23, 10, 16, 8];
const over18 = ages.filter(ageFilter);

// index and array parameters are optional
function ageFilter(value, index, array){
    return value > 18;
}

console.log(over18);


// JavaScript Array reduce() ⚽⚽ 

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// Sum of all numbers in an array

const nums = [2,3,4,1,9];
let sum = nums.reduce(sumFunction);

function sumFunction(total, value){
    return total + value;
}

console.log(sum);


// JavaScript Array indexOf() 🏀🏀

// The indexOf() method searches an array for an element value and returns its position.

const fruits = ['apple', 'orange', 'apple', 'mango'];
let position = fruits.indexOf("apple",1);

console.log(position);




// JavaScript Array Spread (...) >🎨🎨
// The ... operator expands an iterable (like an array) into more elements:

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ['Apr', 'May', 'Jun'];
const q3 = ['Jul', 'Aug', 'Sep'];
const q4 = ['Oct', 'Nov', 'Dec'];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);


