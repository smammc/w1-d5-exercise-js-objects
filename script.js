console.log("Ready to go! 🚀");

// ------------------
// Iteration 1
// ------------------
// track user’s information (userId and fullName)

const user = {
  userId: 1,
  fullName: "Sebastião Maia Cerqueira",
};

// ------------------
// Iteration 2
// ------------------
// create some book objects. Let’s create two different books (your favorite books) with the following data: Title, Author, ISBN and Category
const book1 = {
  title: "Crime and punishment",
  author: "Fyodor Dostoevsky",
  ISBN: 9780679734505,
  category: "suspense",
};

const book2 = {
  title: "1984",
  author: "George Orwell",
  ISBN: 9781328869333,
  category: "fiction",
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
// console.log(library);

// ------------------
// Iteration 5
// ------------------
// Let’s pick up a new book from the library.
const book3 = {
  title: "Freakonomics",
  author: "Steven Levitt",
  ISBN: 9780063032378,
  category: "information",
};

console.log(library[0].books);

library[0].books.push(book3);
console.log(library[0].books);

// ------------------
// Iteration 6
// ------------------
// Iterate over the users and the books. We have to get a list of the users and the books that have each user.

const newUser = {
  userId: 2,
  fullName: "John Doe",
};

newUser.books = [book1, book3];

library.push(newUser);

library.forEach((user) => {
  console.log(`user: ${user.fullName}`);
  user.books.forEach((book) => {
    console.log(`- ${book.title}`);
  });
});
