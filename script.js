console.log("Ready to go! 🚀");

// ------------------
// Iteration 1
// ------------------
// track user’s information (user id and full name)
const user = {
  userId: 1,
  fullName: "John Doe",
};

// ------------------
// Iteration 2
// ------------------
// create some book objects. Let’s create two different books (your favorite books) with the following data: Title, Author, ISBN and Category
const book1 = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  isbn: "9780062315007",
  category: "Adventure",
};

const book2 = {
  title: "The Little Prince",
  author: "Antoine de Saint-Exupéry",
  isbn: "9780156012195",
  category: "Fable",
};

// ------------------
// Iteration 3
// ------------------
// add an array inside the user that represents the books. The array must contain the books that we’ve created
user.books = [book1, book2];

// ------------------
// Iteration 4
// ------------------
// create a library array.
const library = [];
library.push(user);

// ------------------
// Iteration 5
// ------------------
// Let’s pick up a new book from the library.
const book3 = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  isbn: "9781408855652",
  category: "Fantasy",
};
library[0].books.push(book3);

// ------------------
// Iteration 6
// ------------------
// Iterate over the users and the books. We have to get a list of the users and the books that have each user.

library.push(user);

// library.forEach((user) => {
//   console.log(`User: ${user.fullName}`);
//   user.books.forEach((book) => {
//     console.log(`- ${book.title}`);
//   });
// });

// console.log(user);
// console.log(library);
