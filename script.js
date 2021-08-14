let myLibrary;

const DEFAULT = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: "295",
    status: "Read",
  },
];
const tBody = document.querySelector("tbody");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const status = document.querySelector("#status");
const addBook = document.querySelector("#addBook");

// Check localStorage on page load
retrieveStorage();
if (localStorage.getItem("myLibrary")) {
  addBookToTable();
} else {
  myLibrary = DEFAULT;
  addBookToTable();
}

// Book object constructor
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Add book
addBook.addEventListener("click", (e) => {
  const book = new Book(title.value, author.value, pages.value, status.value);
  e.preventDefault();
  if (!title.value || !author.value || !pages.value) {
    alert("Please fill out all fields.");
    return;
  }
  myLibrary.push(book);
  // Clear fields
  title.value = "";
  author.value = "";
  pages.value = "";
  storeStorage();
  addBookToTable();
});

// Delete book
tBody.addEventListener("click", (e) => {
  const currentTarget = e.target;
  const dataDelete = currentTarget.dataset.delete;
  const tableRow = currentTarget.parentElement.parentElement;

  if (dataDelete === "delete") {
    myLibrary.splice(
      myLibrary.findIndex((book) => book.title === currentTarget.dataset.title),
      1
    );
    tableRow.remove();
    storeStorage();
  }
});

// Change book status
tBody.addEventListener("click", (e) => {
  const currentTarget = e.target;
  const currentIndex = myLibrary.findIndex(
    (book) => book.title === currentTarget.dataset.title
  );
  const currentObjectStatus = myLibrary[currentIndex].status;
  const statusFont = `<i class="fas fa-exchange-alt"></i>`;

  if (currentObjectStatus === "Reading") {
    myLibrary[currentIndex].status = "Not Read";
    currentTarget.innerHTML = `Not Read ${statusFont}`;
  } else if (currentObjectStatus === "Not Read") {
    myLibrary[currentIndex].status = "Read";
    currentTarget.innerHTML = `Read ${statusFont}`;
  } else if (currentObjectStatus === "Read") {
    myLibrary[currentIndex].status = "Reading";
    currentTarget.innerHTML = `Reading ${statusFont}`;
  }
  storeStorage();
});

// Update table after adding book to myLibrary array
function addBookToTable() {
  tBody.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookRow = `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td class="changeStatus" data-title="${book.title}" data-status="status">${book.status} <i class="fas fa-exchange-alt"></i></td>
      <td>
        <button class="btn btn-danger btn-sm" data-title="${book.title}" data-delete="delete">Delete</button>
      </td>
    </tr>
    `;
    tBody.insertAdjacentHTML("afterbegin", bookRow);
  });
}

// Web Storage API
function storeStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function retrieveStorage() {
  myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
}
