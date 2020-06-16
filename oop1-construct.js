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

/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
 */

class Shape {
  //your code here...
  constructor(
    name,
    sides,
    base,
    height,
    width,
    length,
    radius,
    calcArea,
    calcPerimeter,
    calcCircumference
  ) {
    this.name = name;
    this.sides = sides;
    this.base = base;
    this.height = height;
    this.width = width;
    this.length = length;
    this.radius = radius;
    this.calcArea = calcArea;
    this.calcPerimeter = calcPerimeter;
    this.calcCircumference = calcCircumference;
  }
}

const triangle = new Shape(
  "triangle",
  [4, 7, 7],
  4,
  // a2 + b2 = c2
  Math.sqrt(7 * 7 - 4 * 4).toFixed(2),
  null,
  null,
  null,
  function () {
    console.log(
      `${this.name}'s area is calculated to be : ${
        0.5 * this.base * this.height
      }`
    );
  },
  function () {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        this.base + (this.sides[1] + this.sides[2])
      }`
    );
  },
  null
);
console.log(triangle.height);

// triangle.base = triangle.sides[0]; //base is the 1st side in the triangle.sides array.
// triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

const rectangle = new Shape(
  "rectangle",
  4,
  null,
  null,
  5,
  2,
  null,
  function () {
    console.log(
      `${this.name}'s area is calculated to be : ${this.length * this.width}`
    );
  },
  function () {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        2 * this.length + 2 * this.width
      }`
    );
  },
  null
);

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

const circle = new Shape(
  "circle",
  1,
  null,
  null,
  null,
  null,
  5,
  function () {
    console.log(
      `${this.name}'s area is calculated to be : ${(
        Math.PI *
        this.radius ** 2
      ).toFixed(2)}`
    );
  },
  null,
  function () {
    console.log(
      `${this.name}'s circumference is calculated to be : ${(
        2 *
        Math.PI *
        this.radius
      ).toFixed(2)}`
    );
  }
);

console.log(circle);
circle.calcCircumference();
circle.calcArea();

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

class Earth {
  name;
  planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

  constructor(name, num) {
    this.name = name;
    this.planetNum = num;
  }
}

const earth = new Earth("earth", 3);
console.log(earth);
