function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}

function getUserInput(callback) {
  setTimeout(() => {
    const username = "Alice";
    callback(username);
  }, 1000);
}

// Call the function to demonstrate the callback
getUserInput(displayMessage);

// Expected output in the console after 1 second:
// Hello, Alice!