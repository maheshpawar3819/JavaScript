//Inheridance : Inheridance is the mechanism that allow you tu create new classes on basis of already existing classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hii i am ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}

let st1 = new Student("Mahesh", 24, 60);
console.log(st1);
console.log(st1.talk());

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

let t1 = new Teacher("Anjali", 30, "Math");
console.log(t1);
console.log(t1.talk());
