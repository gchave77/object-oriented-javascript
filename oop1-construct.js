//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

class WhyClass {
  constructor(purpose) {
    this.purpose = purpose;
  }
  explain() {
    return this.purpose;
  }
  pieces() {
    this.parts =
      "Parts that are essential to building a class are the constructor as well as the attributes and methods created by the class and passed to the instances.";
    return this.parts;
  }
}
const reason = new WhyClass(
  "In OOP, classes are used to provide a blueprint for objects.  They pass their attributes and methods to the objects created from the class."
);
console.log(reason.explain());
console.log(reason.pieces());

//your code here...

/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

class Wildlife {
  constructor(name, mammal, color, actions) {
    this.name = name;
    this.mammal = mammal;
    this.color = color;
    this.actions = actions;
  }
}
const sloth = new Wildlife("sloth", true, "brown", [
  "climb and hang from trees",
  "move extremely slow",
]);
console.log(sloth);

const boaConstrictor = new Wildlife("boa constrictor", false, "grey", [
  "slither and crawl",
  "squeeze its prey",
]);
console.log(boaConstrictor);

const capybara = new Wildlife("capybara", true, "ash brown", [
  "eat grass",
  "float in water",
]);
console.log(capybara);

const jaguar = new Wildlife("jaguar", true, "spotted golden", [
  "sprint up to 35 mph",
  "hunt its prey",
]);
console.log(jaguar);

const hyacinthMacaw = new Wildlife("hyacinth macaw", false, "black", [
  "fly",
  "break coconuts with its beak",
]);
console.log(hyacinthMacaw);

const poisonDartFrog = new Wildlife("poison dart frog", false, "orange", [
  "hop and croak",
  "poison its attackers",
]);
console.log(poisonDartFrog);

//your code here...
