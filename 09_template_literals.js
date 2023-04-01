// With template literals, you can use both single and double quotes inside a string:
let text = `He's often called "Johny"`;
console.log(text);


// Template literals allows multiline strings:
let text2 = `
The quick
brown fox
jumps over
the lazy dog`;
console.log(text2);


// Template literals allow variables in strings:
let firstName = "John";
let lastName = "Doe";

let greeting = `Welcome ${firstName}, ${lastName}`;
console.log(greeting);


// Template literals allow expressions in strings:
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);


// HTML Templates
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for(const x of tags){
    html += `<li>${x}</li>`;
}

html += `</ul>`;

console.log(html);