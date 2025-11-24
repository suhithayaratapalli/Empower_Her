// a) Spread operator to merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const merged = [...arr1, ...arr2];
console.log(merged);  // [1, 2, 3, 4, 5]


// b) Rest operator: sum of all numbers
const sum = (...nums) => nums.reduce((total, n) => total + n, 0);

console.log(sum(1, 2, 3, 4));  // 10
console.log(sum(10, 20));      // 30


// c) Destructuring (multi-level)
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const { name, address: { city, pin } } = user;

console.log(name);  // Alice
console.log(city);  // Bangalore
console.log(pin);   // 560001
