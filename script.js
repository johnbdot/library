let myLibrary = [];

const tBody = document.querySelector("tbody");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const status = document.querySelector("#status");
const addBook = document.querySelector("#addBook");

// Book object constructor
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Add book
addBook.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  addBookToTable();
});

// Delete book
tBody.addEventListener("click", (e) => {
  const currentTarget = e.target;
  const tableRow = currentTarget.parentElement.parentElement;
  const dataTitle = currentTarget.dataset.title;

  if (currentTarget.classList[3] === "delete") {
    myLibrary.splice(
      myLibrary.findIndex((book) => book.title === dataTitle),
      1
    );
    tableRow.remove();
  }
});

// Create Book object and add to myLibrary array
function addBookToLibrary() {
  const book = new Book(title.value, author.value, pages.value, status.value);
  if (!title.value || !author.value || !pages.value) {
    alert("Please fill out all fields.");
    return;
  }
  myLibrary.push(book);
  clearFields();
}

// Update table after adding book to myLibrary array
function addBookToTable() {
  tBody.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookRow = `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.status}</td>
      <td>
        <button type="button" class="btn btn-danger btn-sm delete" data-title="${book.title}">
          Delete
        </button>
      </td>
    </tr>
    `;
    tBody.insertAdjacentHTML("afterbegin", bookRow);
  });
}

// Clear fields after adding book
function clearFields() {
  title.value = "";
  author.value = "";
  pages.value = "";
}
