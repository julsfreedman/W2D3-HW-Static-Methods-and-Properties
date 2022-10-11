//W2D3 HW: Static Methods and Properties
//Practice What You Learned
// Static Methods and Properties
// class Governor {

// }
// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)

class Governor {
  static isAlive = true;
  static state = "Ohio";

  static governing() {
    console.log(`Is governing ${this.state}`);
  }
  static proposing() {
    console.log("Is responsible for proposing the state budget");
  }
}
console.log(Governor.isAlive);
console.log(Governor.state);

Governor.governing();
Governor.proposing();

//Inheritance
// Your base class
// Person{
//     constructor(){}
//     }
// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

class Person {
  constructor(eyeColor, personality, diet) {
    this.eyeColor = eyeColor;
    this.personality = personality;
    this.diet = diet;
  }
  sleeping() {
    console.log("I am sleeping");
  }
  eating() {
    console.log("I am eating");
  }
  showering() {
    console.log("I am showering");
  }
}

class PostalWorker extends Person {
  delivers() {
    console.log("I deliver the mail");
  }
  drive() {
    console.log("I drive a truck");
  }
}

class Chef extends Person {
  cook() {
    console.log("I cook");
  }
  bake() {
    console.log("I bake");
  }
}

const bob = new PostalWorker("green", "friendly", "vegan");
const wilma = new PostalWorker("blue", "sarcastic", "carnivore");
const martha = new Chef("brown", "funny", "vegetarian");
const johnny = new Chef("hazel", "shy", "pescatarian");

console.log(bob);
console.log(wilma);
console.log(martha);
console.log(johnny);

bob.sleeping();
bob.eating();
bob.showering();
bob.delivers();
bob.drive();

wilma.sleeping();
wilma.eating();
wilma.showering();
wilma.delivers();
wilma.drive();

martha.sleeping();
martha.eating();
martha.showering();
martha.cook();
martha.bake();

johnny.sleeping();
johnny.eating();
johnny.showering();
johnny.cook();
johnny.bake();
