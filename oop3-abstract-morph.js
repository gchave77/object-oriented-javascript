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
