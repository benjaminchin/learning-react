let a = "1";
let b = "2";

console.log(a + b); // binary, string concatenation
console.log(+a + +b); // unary, converts to numbers and adds

let x = 100 / b; // 50
let y = 100 / "string"; // NaN

console.log(x);
console.log(y);

console.log(isNaN(y));

let i = Infinity; // can also be -Infinity
let j = 2 / 0; // is Infinity

console.log(i);
console.log(j);
console.log(typeof(i));

//== vs ===
console.log(2 == "2"); // true, converts types
console.log(2 === "2"); // false, does not convert types, more specific type of equality.

let name = 'Ben';
const greeting = `Hello, ${name}`;
console.log(greeting);