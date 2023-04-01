// string length
const text = "hello world";
let length = text.length;

console.log(length);

// Extracting String Parts
// there are 3 methods for extracting a part of a string
// . slice(start, end)
// . substring(start, end)
// . substr(start, length)

// slice() extracts a part of a string and returns the extracted part in a new string.

let fruits = "Apple, Banana, Kiwi";
let part = fruits.slice(7, 13);
let part2 = fruits.slice(15);

// If a parameter is negative, the position is counted from the end of the string:
let part3 = fruits.slice(-12);

// This example slices out a portion of a string from position -12 to position -6:
let part4 = fruits.slice(-12, -6);

console.log(part4);



//substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().

let str = "Mango, Orange, Pineapple";
let sub = str.substring(-3);
console.log(sub);



// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

let name = "Mahedi Hasan Bijoy";
let fname = name.substr(0, 6);
let lname = name.substr(-5);
console.log("fname = "+fname);
console.log("lname = "+ lname);



// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

let line = "Please visit Google";
let newLine = line.replace("Google","Meta");
console.log(newLine);


// In 2021, JavaScript introduced the string method replaceAll():
let pets = "Dog, Cat, Cow, Goat, Cat";
let mypets = pets.replaceAll("Cat", "Tiger");
console.log(mypets);



// Converting to Upper and Lower Case
let str1 = "Hello World";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());


// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:

let sentence = "    Hello World    ";
let trim_sentence = sentence.trim();
console.log(trim_sentence);

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
let start_trim = sentence.trimStart();
console.log(start_trim);

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let end_trim = sentence.trimEnd();
console.log(end_trim);



// Converting a String to an Array
// A string can be converted to an array with the split() method:
let colors = "red, green, blue, yellow";
let color_array = colors.split(", ");   
console.log(color_array);



// String search
// String Search Methods:
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

// The indexOf() method returns the index (position) the first occurrence of a string in a string:

let string1 = "Please locate where 'locate' occurs!";
let index = string1.indexOf('locate');
console.log(index);

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let lastIndex = string1.lastIndexOf("locate");
console.log(lastIndex);

// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let searchIndex = string1.search("locate");
console.log(searchIndex);
// search with regular expression
let searchWithRegex = string1.search(/locate/);
console.log(searchWithRegex);



// JavaScript String match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).

let string2 = "The rain in SPAIN stays mainly in the plain";
let matchedStrings = string2.match("ain");
console.log(matchedStrings);
// Perform a global search for "ain":
let globalMatched = string2.match(/ain/g);
console.log(globalMatched);



// The includes() method returns true if a string contains a specified value.
let string3 = "Hello world, welcome to the universe";
console.log(string3.includes("world"));