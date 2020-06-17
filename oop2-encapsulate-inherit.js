// /*
// 1. Create the following classes:
//     - Book class. It should have an author and publisher property.
//     - Author class. It should have a name and books property.
//     - Publisher class.  It should have an authors and books property.
//     - Review class.  It should have a rating and user property.
//     -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves.

//     //your code here...
class Book {
  constructor(author, publisher) {
    this.author = author;
    this.publisher = publisher;
  }
}

class Author {
  constructor(name, books) {
    this.name = name;
    this.books = books;
  }
}

class Publisher {
  constructor(authors, books) {
    this.authors = authors;
    this.books = books;
  }
}

class Review {
  constructor(rating, user) {
    this.rating = rating;
    this.user = user;
  }
}
