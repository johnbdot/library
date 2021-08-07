// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function () {
//     return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
//   };
// }

// const theHobbit = new Book(
//   "The Hobbit",
//   "J.R.R. Tolkien",
//   "295 pages",
//   "not read yet"
// );

// function PrintStuff(myDocuments) {
//   this.documents = myDocuments;
// }

// PrintStuff.prototype.print = function () {
//   console.log(this.documents);
// };

// const newObj = new PrintStuff("I am a new Object and I can print.");

// newObj.print();

// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit.jumps);
// delete rabbit.jumps;
// console.log(rabbit.jumps);
// delete rabbit.jumps;
// console.log(rabbit.jumps);

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// const { performance } = require("perf_hooks");
// const t0 = performance.now();
// console.log(pockets.glasses);
// const t1 = performance.now();
// console.log(`Call to .glasses took ${t1 - t0} milliseconds.`);

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple
