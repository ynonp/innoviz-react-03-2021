class Person {
  constructor() {
    this.age = 10;
  }

  hi() {
    console.log(`Hello World! I am ${this.age} years old`);
  }

  growUp() {
    this.age += 1;
  }
}

const p = new Person();
const q = new Person();
p.hi();
p.growUp();

q.hi();
p.hi();




