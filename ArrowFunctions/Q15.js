// a) Template Literals
const username = "Suhitha";
const course = "JavaScript";

console.log(`Hello ${username}, welcome to the ${course} course!`);


// b) Object Shorthand + Method Shorthand
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

student.greet();


// c) Arrow Function Shorthand (implicit return)
const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("Alice", "Johnson"));
