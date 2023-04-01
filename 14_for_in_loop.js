// The JavaScript for in statement loops through the properties of an Object: ⛳⛳

// for(key in object){
//     // code black to be executed
// }

const person = {fname:"John", lname:"Doe", age:25};
let txt = "";

for(let x in person){
    txt += person[x];
}

console.log(txt);



// For In Over Arrays 👓👓

// The JavaScript for in statement can also loop over the properties of an Array:

/* 
    for(variable in array){
        code
    }
*/

const numbers = [2,4,3,9,8,5];

let sum = 0;

// here x is the index keys of array
for(let x in numbers){
    sum += numbers[x];
}

console.log(sum);
