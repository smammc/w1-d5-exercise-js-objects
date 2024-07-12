# w1-d5-exercise-js-objects

We have received a request from the Public Library to send them an example of what would be a good way to organize their user registry:

1. They want to track user’s information (user id and full name), and which books each user has.
2. For each book, they want to have some information about the book: title, author, category and ISBN.

### Instructions

1. First of all, let’s create a user object with fullName and userId
2. Create also some book objects. Let’s create two different books (your favorite books) with the following data: Title, Author, ISBN and Category. If you want to figure out the ISBN of your favorite books, visit the [ISBN search page](https://isbnsearch.org/).
3. The next step is to relate the books with the user.
   1. As we can deduce, a user can have several books at the same time. Which data type do we know that allows us to specify several data in the same field?Exactly, an array! Let’s add an array inside the user that represents the books. The array must contain the books that we’ve created.
   2. Use dot notation to add the new key in the user object.
4. Now, we have to create a library object and add the only user that we have right now. Again, we will have several users in the Library, so we could use an array to store all of them. So, we have to do two different things here:
   1. Create the library array.
   2. Add the user object into the library array.
5. Let’s pick up a new book from the library. That means we will have to add a new book inside the user.books array. But now, the user is inside the library object. So you have to access the library, then the user and, finally, the books array to add the new book.
6. Let’s iterate! To finish this exercise, let’s iterate over the users and the books. We have to get a list of the users and the books that have each user. For example, Ironhack books are the following:
   - JavaScript - The Good Parts, Douglas Crockford
   - JavaScript - The Definitive Guide, David Flanagan
   - High Performance JavaScript, Nicholas C. Zakas\
     **BONUS: In this case we just have one user. Try to add another user with books, and list the books of both users.**
