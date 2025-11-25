function processProducts(products) {
  // Step 1: Use map() to extract product names
  const productNames = products.map(product => product.name);

  // Step 2: Use forEach() to log price comparison messages
  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });

  return productNames; // returning the names if needed
}

// Example usage:
const input = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(input);
