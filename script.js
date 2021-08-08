let myLibrary = [];

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

addBookToLibrary();

myLibrary.forEach((book) => console.log(book));
