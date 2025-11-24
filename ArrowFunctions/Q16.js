// a) Arrow function: isEven
const isEven = n => n % 2 === 0;

console.log(isEven(10)); // true
console.log(isEven(7));  // false


// b) Ternary operator version
let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);


// c) Arrow function using ternary (default: Guest)
const greet = name => console.log(`Hello, ${name ? name : "Guest"}`);

greet("Suhitha");  // Hello, Suhitha
greet();           // Hello, Guest
