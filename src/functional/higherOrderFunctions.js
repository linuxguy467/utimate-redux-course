export function sayHello() {
  return function () {
    return 'Hello World!';
  };
}

let fn = sayHello();
let message = fn();

//let fn = sayHello;
// fn()
// sayHello()

export function greet(fnMessage) {
  console.log(fnMessage());
}

// greet(() => "Hello World!")
greet(sayHello);

const numbers = [1, 2, 3];
numbers.map((number) => number * 2);

setTimeout(() => console.log('Hello World'), 1000);

function greet1(fn) {
  console.log(fn());
}
