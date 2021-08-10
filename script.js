let myLibrary = [];

const tBody = document.querySelector("tbody");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const status = document.querySelector("#status");
const addBook = document.querySelector("#addbook");
const deleteBook = document.querySelector("#deletebook");

addBook.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  update();
  console.log(myLibrary);
});

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const book = new Book(title.value, author.value, pages.value, status.value);
  myLibrary.push(book);
}

function update() {
  tBody.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookRow = `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.status}</td>
      <td>
        <button type="button" class="btn btn-danger btn-sm">
          Delete
        </button>
      </td>
    </tr>
    `;
    tBody.insertAdjacentHTML("afterbegin", bookRow);
  });
}
