// /*
// 1. Create the following classes:
//     - Book class. It should have an author and publisher property.
//     - Author class. It should have a name and books property.
//     - Publisher class.  It should have an authors and books property.
//     - Review class.  It should have a rating and user property.
//     -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves.

//your code here...
class Book {
  #author;
  #publisher;
  constructor(author, publisher) {
    this.#author = author;
    this.#publisher = publisher;
  }

  set author(value) {
    this.#author = value;
    console.log(this.#author + " - Author");
  }

  set publisher(value) {
    this.#publisher = value;
    console.log(this.#publisher + " Publishing");
  }
}

class Author {
  #name;
  #books;
  constructor(name, books) {
    this.#name = name;
    this.#books = books;
  }

  set name(value) {
    this.#name = value;
    console.log(this.#name + " - Author");
  }

  set books(value) {
    this.#books.push(value);
    console.log(this.#name + " has written " + this.#books);
  }
}

class Publisher {
  #authors;
  #books;
  constructor(authors, books) {
    this.#authors = authors;
    this.#books = books;
  }

  set authors(value) {
    this.#authors = value;
    console.log(this.#authors + " did not write " + this.#books);
  }

  set books(value) {
    this.#books = value;
    console.log(this.#books + " was written by " + this.#authors);
  }
}

class Review {
  #rating;
  #user;
  constructor(rating, user) {
    this.#rating = rating;
    this.#user = user;
  }

  set rating(value) {
    this.#rating = value;
    console.log(this.#rating + " is the lowest rating.");
  }

  set user(value) {
    this.#user = value;
    console.log(this.#user + " is a tough reviewer.");
  }
}

const pinnochio = new Book("Mr. White", "Rand");
console.log(pinnochio);
pinnochio.author = "Mr. Red";
pinnochio.publisher = "Dallas";

const mobyDick = new Book("Mr. Grey", "Ocean");
console.log(mobyDick);
mobyDick.author = "Mr. Pink";
mobyDick.publisher = "Whale";

const stephenKing = new Author("Stephen King", ["Cujo", "Pet Cemetery"]);
console.log(stephenKing);
stephenKing.name = "Stephanie Queen";
stephenKing.books = "The Shining";

const publisher = new Publisher("Pete Rose", "Mr. Hits");
console.log(publisher);
publisher.authors = "Sammy Sosa";
publisher.books = "Mr. Steriods";

const review = new Review(5, "Roger Ebert");
console.log(review);
review.rating = 1;
review.user = "Gene Siskel";

//
// 2. Create the following classes:
//     - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
//     - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
//     - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
//     - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.

//     - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.
//your code here...
class Umbrella {
  constructor(orgName) {
    this.orgName = orgName;
  }
}

class Company extends Umbrella {
  constructor(orgName, coName, empCount) {
    super(orgName);
    this.coName = coName;
    this.empCount = empCount;
    console.log(
      this.coName +
        " is a subsidiary of " +
        this.orgName +
        " with approximately " +
        this.empCount +
        " employees."
    );
  }
}

class Site extends Company {
  constructor(coName, location) {
    super(coName);
    this.location = location;
    console.log(this.coName + " is located at " + this.location);
  }
}

class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    console.log(this);
  }
}

company1 = new Company("Allegis Group", "TEK Systems", 12300);
console.log(company1.coName);
company2 = new Company("Goldman Sachs", "Citibank", 32100);
company3 = new Company("Ford Motor Co.", "Firestone", 12800);

dallas = new Site("gabe", "Dallas");

emp01 = new Employee("Sally Ford", "CEO", 220000);
emp02 = new Employee("Tom Thumb", "manager", 90000);
emp03 = new Employee("Loki Jones", "secretary", 85000);
emp04 = new Employee(["Tony Stark", "Hugh Smith"], "engineer", [
  125000,
  137000,
]);
emp05 = new Employee("Mason Young", "CFO", 190500);
emp06 = new Employee("Don Hurly", "janitor", 67000);
emp07 = new Employee("Helen Kay", "marketer", 98000);
emp08 = new Employee("Sam Hardy", "HR", 115000);
emp09 = new Employee("Harold Kal", "lawyer", 167000);

// Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee
//
// Bonus Exercise:

// 3. Building on Exercise 1, Do the following :
// - Create a Bookstore class.  It should contain a collection of various Book Instances.
// - Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
// - Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.

// Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
// */

//     //your code here...
