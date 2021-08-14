let myLibrary;

const DEFAULT = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 295,
    status: "Read",
  },
];
const tBody = document.querySelector("tbody");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const status = document.querySelector("#status");
const addBook = document.querySelector("#addBook");

// Check localStorage
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
  storeStorage();
  addBookToTable();
  clearFields();
});

// Delete book
const deleteButton = document.querySelectorAll("#deleteButton");
deleteButton.forEach((e) => {
  e.addEventListener("click", (e) => {
    const currentTarget = e.target;
    const tableRow = currentTarget.parentElement.parentElement;

    myLibrary.splice(
      myLibrary.findIndex((book) => book.title === currentTarget.dataset.title),
      1
    );
    tableRow.remove();

    storeStorage();
  });
});

// Change book status
const statusButton = document.querySelectorAll(".changeStatus");
statusButton.forEach((e) => {
  e.addEventListener("click", (e) => {
    const currentTarget = e.target;
    const dataset = currentTarget.dataset;
    const currentStatusHTML = currentTarget.innerHTML;
    const currentIndex = myLibrary.findIndex(
      (book) => book.title === dataset.title
    );
    const currentObjectStatus = myLibrary[currentIndex].status;

    if (currentStatusHTML === "Reading") {
      myLibrary[currentIndex].status = "Not Read";
    } else if (currentStatusHTML === "Not Read") {
      myLibrary[currentIndex].status = "Read";
    } else if (currentStatusHTML === "Read") {
      myLibrary[currentIndex].status = "Reading";
    }
    currentTarget.innerHTML = currentObjectStatus;
    console.log(myLibrary);

    storeStorage();
  });
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
      <td class="changeStatus" data-status="status" data-title="${book.title}">${book.status}</td>
      <td>
        <button type="button" class="btn btn-danger btn-sm" data-title="${book.title}" id="deleteButton">
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

// Web Storage API
function storeStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function retrieveStorage() {
  myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
}
