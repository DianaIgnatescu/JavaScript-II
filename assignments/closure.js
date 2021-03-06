// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let value = 8
function divideFunction(x) {
  let result = x / value;
  return result;
}
let dividedValue = divideFunction(24);

console.log(dividedValue);


//version 2

let zodiacSign = 'Leo' 

function getZodiacSign () {
  console.log( `I'm a ${zodiacSign} !`);
}

getZodiacSign();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    return ++count; 
  }
};
const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
//   // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
let counter = 0;

  return {
    increment: function() {
      return ++counter;
    },
    decrement: function() {
      return --counter;
    },
    value: function() {
      return counter;
    }
  }
};

const newCounterFactory = counterFactory();
console.log(newCounterFactory.value());

newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
console.log(newCounterFactory.value());
newCounterFactory.decrement();
newCounterFactory.decrement();
newCounterFactory.decrement();
newCounterFactory.decrement();
newCounterFactory.decrement();
newCounterFactory.decrement();

console.log(newCounterFactory.value());


