let books = [];

let title = document.getElementById("title");
let author = document.getElementById("author");
let category = document.getElementById("category");
let booksDiv = document.getElementById("books");
let filter = document.getElementById("filter");
let sortBtn = document.getElementById("sortBtn");

document.getElementById("addBtn").onclick = function () {
  const book = {
    title: title.value,
    author: author.value,
    category: category.value,
    imageUrl: "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
  };

  books.push(book);
  render();
  title.value = "";
  author.value = "";
};

filter.onchange = function () {
  render();
};

let asc = true;
sortBtn.onclick = function () {
  asc = !asc;
  sortBtn.innerText = asc ? "Sort A → Z" : "Sort Z → A";
  render();
};

function render() {
  booksDiv.innerHTML = "";

  let filtered = books.filter(b => {
    return filter.value === "All" || b.category === filter.value;
  });

  filtered.sort((a, b) => {
    return asc
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  filtered.forEach((b, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${b.imageUrl}">
      <h4>${b.title}</h4>
      <p>Author: ${b.author}</p>
      <p>Category: ${b.category}</p>
      <button onclick="deleteBook(${index})">Delete</button>
    `;

    booksDiv.appendChild(card);
  });
}

function deleteBook(i) {
  books.splice(i, 1);
  render();
}
