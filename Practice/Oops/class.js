//Class : Class is the template for creating object
//Constructor : The constructor method is the special method of a class creating and initializing an object instance of the class

class Students {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  talk() {
    console.log(`name of the studen ${this.name}`);
    console.log(`marks that student have gain ${this.marks}`);
  }
}

let p1 = new Students("Mahesh", 22, 70);
let p2 = new Students("Suraj", 26, 88);
let p3 = new Students("Sanket", 28, 90);
let p4 = new Students("Sneha", 25, 95);
// console.log(p1,p2,p3,p4);

let arrayofstd = [p1, p2, p3, p4];

console.log(arrayofstd);

result = arrayofstd.map((ele) => {
  return ele.talk();
});

console.log(result);
