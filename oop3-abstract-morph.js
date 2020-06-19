/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
  //your code here...
  constructor(name, hunger) {
    this.name = name;
    this.hunger = hunger;
    if (this.constructor == Creature) {
      throw new Error(
        "Unable to instantiate the constructor. These methods are NOT allowed to be invoked from the Abstract class."
      );
    }
  }

  move() {
    throw new Error(
      "Unable to instantiate move method from the Abstract class."
    );
  }

  act() {
    throw new Error(
      "Unable to instantiate act method from the Abstract class."
    );
  }
}

class Human extends Creature {
  //your code here...
  constructor(name, hunger, direction, action, duration) {
    super(name, hunger);
    this.direction = direction;
    this.action = action;
    this.duration = duration;
    console.log(this);
  }

  move() {
    console.log(
      `${this.name} ${this.action[0]} towards the ${this.direction} for ${this.duration[0]} minutes.`
    );
  }

  act() {
    console.log(
      `Then ${this.name} ${this.action[1]} for ${this.duration[1]} minutes.`
    );
  }

  eat() {
    if (this.hunger) {
      console.log(`Hunger pangs convinced ${this.name} to ${this.action[2]}.`);
    } else {
      console.log(`It is time for ${this.name} to ${this.action[3]}.`);
    }
  }
}

const bob = new Human(
  "Bob",
  true,
  "west",
  ["walked", "sat down", "eat lunch", "take a nap"],
  [5, 2]
);
bob.move();
bob.act();
bob.eat();

class Fish extends Creature {
  constructor(name, hunger, direction, action, duration) {
    super(name, hunger);
    this.direction = direction;
    this.action = action;
    this.duration = duration;
    console.log(this);
  }

  move() {
    console.log(
      `A ${this.name} will ${this.action[0]} ${this.direction} to ${this.action[1]}.`
    );
  }

  act() {
    console.log(
      `Most ${this.name} ${this.action[2]} after they ${this.action[1]}.`
    );
  }

  eat() {
    if (this.hunger) {
      console.log(
        `Typically, ${this.name} ${this.action[3]} ${this.duration[1]} a day.`
      );
    } else {
      console.log(
        `They only ${this.action[1]} ${this.duration[0]} in their lifetime.`
      );
    }
  }
}

const salmon = new Fish(
  "salmon",
  true,
  "upstream",
  ["swim", "spawn", "die", "eat"],
  ["once", "twice"]
);
salmon.move();
salmon.act();
salmon.eat();

class Bird extends Creature {
  constructor(name, hunger, direction, action, duration) {
    super(name, hunger);
    this.direction = direction;
    this.action = action;
    this.duration = duration;
    console.log(this);
  }

  move() {
    console.log(
      `A ${this.name} will ${this.action[0]} ${this.direction} to ${this.action[1]} for the ${this.duration[0]}.`
    );
  }

  act() {
    console.log(
      `These creatures ${this.action[2]} together when they ${this.action[1]}.`
    );
  }

  eat() {
    if (this.hunger) {
      console.log(`It's ${this.duration[1]} to ${this.action[3]}.`);
    } else {
      console.log(`Must be ${this.duration[1]} to ${this.action[0]}.`);
    }
  }
}

const duck = new Bird(
  "duck",
  false,
  "south",
  ["fly", "migrate", "flock", "eat"],
  ["winter", "time"]
);
duck.move();
duck.act();
duck.eat();

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
  name;

  eat() {
    console.log(this.name + " is eating");
  }

  sleep = () => {
    console.log(this.name + " is sleeping");
  };

  code = function () {
    console.log(this.name + " is coding");
  };

  repeat = function () {
    console.log(this.name + " is repeating the above steps, yet another time");
  };

  explain() {
    //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
    console.log(
      "this explain method should contain explain what you had to do to get the correct functions to work, and the reasoning behind what you did."
    );
  }
}

class Teacher extends Person {
  //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat() {
    console.log(this.name + " loves to teach before eating");
  }

  sleep() {
    console.log(this.name + " sleeps after preparing the lesson plan");
  }

  code = () => {
    console.log(this.name + " codes first, then teaches it the next day.");
  };

  repeat() {
    console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
  }
}

class Student extends Person {
  //set up your methods in this student class, so all of these methods will override the methods from the super class.
  //eat method should print out - <stduent name> studies, then eats
  //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep
  //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
  //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.
}

const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();

//
