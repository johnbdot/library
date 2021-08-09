let myLibrary = [];
const tBody = document.querySelector("tbody");
const title = document.querySelector("#title");
const author = document.querySelector("author");
const pages = document.querySelector("#pages");
const status = document.querySelector("#status");
const addBook = document.querySelector("#addbook");
const deleteBook = document.querySelector("#deletebook");

addBook.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const book = new Book("The Hobbit", "J.R.R Tolkien", "295", "Not read");
  myLibrary.push(book);
}

myLibrary.forEach((book) => console.log(book));

function update() {}
