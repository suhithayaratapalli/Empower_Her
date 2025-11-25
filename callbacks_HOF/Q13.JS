function countCategories(categories) {
  // Step 1: Use reduce() to build the count object
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return counts;
}

// Extra Challenge
function countAndSortCategories(categories) {
  // First get the counts using the same reduce logic
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Convert to entries and sort by count descending
  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])  // sort by count
    .map(entry => entry[0]);      // extract only the category names

  return sorted;
}

// Example input
const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(input)); 
// { electronics: 2, clothing: 2, toys: 3 }

console.log(countAndSortCategories(input));
// ["toys", "electronics", "clothing"]
