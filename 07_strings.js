// A JavaScript string is zero or more characters written inside quotes.


let text = "Hello World";
console.log(text);

let car1 = "Volvo"; // Double qoutes
let car2 = 'Audi';  // Single qoutes
console.log(car1);
console.log(car2);


// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

let ans1 = "It's alright";
let ans2 = "He is called 'Johny'";
let ans3 = 'He is called "Johny"';
console.log(ans1);
console.log(ans2);
console.log(ans3);

// String length
let length = ans1.length;
console.log("length = "+length);


// You can also break up a code line within a text string with a single backslash:
let longText = "Hello there,\
 my name is mahedi hasan bijoy";

console.log(longText);