class Mammel {
  constructor(name) {
    this.name = name;
    this.type = "Warm-blooded";
  }

  eat() {
    console.log("I am eating");
  }
}

class Dog extends Mammel {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log("Woof...");
  }

  //lets overide eat function
  eat() {
    console.log(`${this.name} was eating`);
  }
}

let dog = new Dog("Moti");
console.log(dog);
console.log(dog.eat());

class Cat extends Mammel {
  constructor(name) {
    super(name);
  }

  meow() {
    console.log("meow...");
  }
}

let cat = new Cat("switty");
console.log(cat);
console.log(cat.eat());
