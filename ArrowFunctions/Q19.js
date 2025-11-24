// 1. Template Literals
// a)
console.log(`5 + 7 = ${5 + 7}`);

// b)
const multiLine = `
Line 1
Line 2
Line 3
`;
console.log(multiLine);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);
//2 a)
const square = n => n * n;
console.log(square(6)); // 36
// b) Explanation
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); // undefined
// c) Fix using normal function
const objFixed = {
  value: 50,
  test: function () {
    console.log(this.value);
  }
};
objFixed.test(); // 50
// 3 a) Shallow copy
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);
// b)
const a = { x: 1 };
const b = { y: 2 };
const mergedObj = { ...a, ...b };
console.log(mergedObj);
// c)
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(1, 7, 3, 20)); // 20
// 4 a)
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);
// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);
// c)
const info = {};
console.log(info?.details?.email); // undefined
// 5 a) var → leaks outside block
for (var i = 0; i < 3; i++) {}
console.log(i); // 3
// b) let → block-scoped
try {
  for (let j = 0; j < 3; j++) {}
  console.log(j); // Error
} catch {
  console.log("j is not defined outside the loop");
}

//6 a)
let speed;
let kmph = 70;
speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

// b)
let age = 17;
console.log(age >= 18 ? "Adult" : "Minor");

// c)
let number = -5;
console.log(
  number > 0
    ? "Positive"
    : number === 0
    ? "Zero"
    : "Negative"
);
// 7 a)
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

// b)
const arrA = ["x", "y"];
const arrB = ["z"];
const combined = [...arrA, ...arrB];
console.log(combined);

// c)
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));
// 8 a)
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);
// b)
const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);
// c)
const name = "Suhitha";
const score = 95;
const student = {
  name,
  score,
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
student.greet();
// 9 a)
console.log(`Today's date is: ${new Date().toDateString()}`);
// b)
console.log(`Hello ${name}, your score is ${score}/100`);
// 10 a)
const add = (a, b) => a + b;
console.log(add(5, 10));
// b)
const isAdult = age => age >= 18;
console.log(isAdult(20));
// c)
const double = n => n * 2;
console.log(double(7));
// 11 a)
const arrClone = [...nums];
console.log(arrClone);
// b)
const arrWith100 = [100, ...nums];
console.log(arrWith100);
// c)
const obj1 = { name: "A", age: 20 };
const obj2 = { age: 30, city: "Chennai" };
const finalObj = { ...obj1, ...obj2 };
console.log(finalObj);
// 12 a)
const userX = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(userX?.address?.city);
// b)
console.log(userX?.job?.title); // undefined
// c)
const customer = {};
console.log(customer?.payment?.card?.number); // safe
console.log("Program continues...");
