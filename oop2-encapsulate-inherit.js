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
    this.symbol = null;
  }
  nyse(symbol) {
    this.symbol = symbol;
    console.log(this.orgName + " NYSE symbol is " + this.symbol);
  }
}

class Company extends Umbrella {
  constructor(orgName, coName, empCount, locations) {
    super(orgName);
    this.coName = coName;
    this.empCount = empCount;
    this.locations = locations;
  }

  subsidiary() {
    console.log(this.coName + " is a subsidiary of " + this.orgName);
  }

  count() {
    console.log(
      this.coName + " has approximately " + this.empCount + " employees."
    );
  }

  site(coName, locations) {
    const site1 = new Site(this.coName, this.locations);
    site1.located(this.coName, this.locations);
  }
}

class Site extends Company {
  constructor(coName, locations) {
    super(coName, locations);
  }

  located(coName, locations) {
    console.log(
      coName +
        " has sites at " +
        locations[0] +
        ", " +
        locations[1] +
        ", and " +
        locations[2]
    );
  }
}

class Employee extends Company {
  constructor(name, title, salary, coName) {
    super(coName);
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.coName = coName;
  }

  status() {
    console.log(
      this.name +
        " makes " +
        this.salary +
        " as a " +
        this.coName +
        " " +
        this.title
    );
  }
}

const company1 = new Company("Allegis Group", "TEK Systems", 12300, [
  "Dallas",
  "New York",
  "Los Angeles",
]);
company1.subsidiary();
company1.count();
company1.nyse("AGP");
company1.site(this.coName, this.locations);
const emp01 = new Employee("Sally Ford", "CEO", 220000, company1.coName);
emp01.status();
const emp02 = new Employee("Tom Thumb", "manager", 90000, company1.coName);
emp02.status();
const emp03 = new Employee("Loki Jones", "secretary", 85000, company1.coName);
emp03.status();
console.log(" ");

const company2 = new Company("Goldman Sachs", "Citibank", 32100, [
  "Paris",
  "London",
  "New York",
]);
company2.subsidiary();
company2.count();
company2.nyse("GMS");
company2.site(this.coName, this.locations);
const emp04 = new Employee("Tony Stark", "engineer", 125000, company2.coName);
emp04.status();
const emp10 = new Employee("Hugh Smith", "engineer", 137000, company2.coName);
emp10.status();
const emp05 = new Employee("Mason Young", "CFO", 190500, company2.coName);
emp05.status();
const emp06 = new Employee("Don Hurly", "janitor", 67000, company2.coName);
emp06.status();
console.log(" ");

const company3 = new Company("Ford Motor Co.", "Firestone", 12800, [
  "Detroit",
  "Las Vegas",
  "Houston",
]);
company3.subsidiary();
company3.count();
company3.nyse("FMC");
company3.site(this.coName, this.locations);
const emp07 = new Employee("Helen Kay", "marketer", 98000, company3.coName);
emp07.status();
const emp08 = new Employee("Sam Hardy", "HR Manager", 115000, company3.coName);
emp08.status();
const emp09 = new Employee("Harold Kal", "lawyer", 167000, company3.coName);
emp09.status();

//
// Bonus Exercise:

// 3. Building on Exercise 1, Do the following :
// - Create a Bookstore class.  It should contain a collection of various Book Instances.
// - Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
// - Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.

// Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
// */

//     //your code here...
