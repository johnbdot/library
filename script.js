let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = "Not Read";
  console.log(
    `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read?: ${this.read}`
  );
}

function addBookToLibrary() {
  //
}
