// Converting Arrays to Strings
const fruits = ["Banana", "Orange", "Apple", "Mango"];

const fruits_name = fruits.toString(fruits);
console.log(fruits_name);

// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:
let fruits_join = fruits.join("-");
console.log(fruits_join);



/* Array push and pop  💥💥*/

// The pop() method removes the last element from an array:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.pop();
console.log(fruits2);

// The push() method adds a new element to an array (at the end):
fruits2.push("Dates");
console.log(fruits2);


/* Array shift and unshift 🧨🧨 */

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
fruits2.shift();
console.log(fruits2);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits2.unshift("Watermelon");
console.log(fruits2);


/* Array length 🎈🎈*/
console.log(fruits2.length);



/* Merging (Concatenating) Arrays ⚽⚽*/
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);


/* Splicing and Slicing Arrays ✨✨*/

// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

const fruits3 = ['mango', 'banana', 'apple', 'orange'];
fruits3.splice(2,0,"Lemon", "kiwi");
console.log(fruits3);

const fruits4 = ['mango', 'banana', 'apple', 'orange'];
fruits4.splice(1,2,"peach");
console.log(fruits4);

/* Using splice() to Remove Elements 🎄🎄*/
const colors = ['red', 'blue', 'green', 'yellow'];
colors.splice(2,1);
console.log(colors);



/* JavaScript Array slice() 🎄🎄*/
// The slice() method slices out a piece of an array into a new array.
const pets = ['dog', 'cat', 'horse', 'cow'];
const pets_part = pets.slice(1);
const pets_part2 = pets.slice(1,2);
console.log(pets_part);
console.log(pets);
console.log(pets_part2);


