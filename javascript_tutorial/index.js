let name = 'Ben';
console.log(name);

let firstName; // by default, undefined
firstName = undefined; // can also set as undefined, rarely used
let lastName = 'Chin';
// Variables can technically be declared on the same line

const interestRate = 0.3;
// interestRate = 1; <-- doesn't work, TypeError because const
console.log(interestRate);

// Primitive Types
let love = 'Mae'; // String literal
let age = 18; // Number literal, no ints/floats, both are number.
let isCute = true; // Boolean literal
let selectedColor = null;
// Javascript is a dynamically typed language, like python. Variables can change type after declaration.

// Objects
let person = {
    name: 'Mae',
    age: 18
};

console.log(person);

// Dot Notation
person.name = 'Ben';
console.log(person.name);

// Bracket Notation
let selection = 'age';
person[selection] = 19;
console.log(person.age);

// Arrays
let selectedColors = ['red', 'blue']; // Arrays are objects
selectedColors[2] = 1; // Length is dynamic, types are also dynamic.
console.log(selectedColors.length);
console.log(selectedColors[0]);

// Functions
function greet(name, lastName) {
    console.log('Hello, ' + name + ' ' + lastName); // + used to concatenate
}

greet('Mae');
greet('Ben', lastName);

function square(number) {
    return number * number;
}

console.log(square(2));
