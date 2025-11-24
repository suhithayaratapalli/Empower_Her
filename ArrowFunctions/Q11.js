const multiply = (a = 1, b = 1) => {
    return a * b;
};
console.log(multiply(3, 4)); // 12
console.log(multiply());     // 1
console.log(multiply(5));    // 5 (because b defaults to 1)
