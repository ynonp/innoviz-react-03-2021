import './index.css';

console.log('Bye bye world');

/*
 * const + let
 */

// const x = 10;

const array = [10, 20, 30];
for (const y of array) {
}


function foo() {
  for (let i=0; i < 10; i++) {
    console.log(i);
  }
}

/**
 * Arrow Functions
 * 1. Lambda functions
 * 2. Automatic bind
 */

// 1. () => expression:
const f = (x) => (
  x * 2
);
// f(2) === 4


const g = (x) => {
  let sum = 0;
  for (let i=0; i < x; i++) {
    sum += i;    
  }
  return sum;
};

// Destructuring
const data = { 
  name: 'ynon',
  counter: 10, 
  stuff: [10, 20, 30],
};


function printName({ name, counter }) {
  for (let i=0; i < counter; i++) {
    console.log(name);
  }
}

printName(data);



const { name, counter, stuff: [x, y, z] } = data;

console.log(x);
console.log(name);

const myStuff = {
  foo: 10,
  name,
  counter,
  twice(x) { return x * 2 },
  ["AHH".toLowerCase()]: 'wow',
};

console.log(myStuff);





























