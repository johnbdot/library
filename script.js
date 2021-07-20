let myLibrary = [];

function Book(title, author, pages) {
  this.title = prompt(title);
  this.author = prompt(author);
  this.pages = prompt(pages);
  this.read = false;
  console.log(
    `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`
  );
}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
}
