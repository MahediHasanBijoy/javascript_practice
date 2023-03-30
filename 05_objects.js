// Objects are variables too. But objects can contain many values.
const car = {type:"Fiat", model:"500", color:"white"};

// It is a common practice to declare objects with the const keyword.

// The name:values pairs in JavaScript objects are called properties:

// You can access object properties in two ways:
// objectName.propertyName
// or,
// objectName["propertyName"]

console.log(car.type);
console.log(car["type"]);


/* 
Object Methods
Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.

A method is a function stored as a property.
*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 8,
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}

console.log(person.fullName());