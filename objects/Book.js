const bookTitle = "Alice's Adventures in Wonderland";
const bookAuthor = "Lewis Carroll";
const bookPubYear = 1865;
const bookISBN = 9798369203415;

// Your code goes here
class Book {
  constructor(bookTitle, bookAuthor, bookPubYear, bookISBN) {
    this.title = bookTitle;
    (this.author = bookAuthor),
      (this.ISBN = bookPubYear),
      (this.publicationYear = bookISBN);
  }
}

const result = new Book(bookTitle, bookAuthor, bookISBN, bookPubYear);
