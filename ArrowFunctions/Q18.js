// a) Scoping: let vs var
if (true) {
  let x = 10;   // block-scoped
  var y = 20;   // function/global scoped
}

console.log(y); // 20 (var escapes the block)
try {
  console.log(x); // Error: x is not defined
} catch (err) {
  console.log("x is not accessible outside the block");
}
// b) Optional chaining to safely access nested properties
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);  // test@mail.com
console.log(profile?.user?.details?.phone);  // undefined (no error)


// c) Example where optional chaining prevents runtime error

const customer = {
  name: "John",
  // address does NOT exist
};
console.log(customer.address?.city);  // undefined (safe, no crash)
console.log("Program continues running...");
