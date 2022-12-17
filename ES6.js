if (true) {
  let x = 10;
  console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined

if (true) {
  var y = 10;
  console.log(y); // 10
}
console.log(y); // 10

console.log(z); // undefined
var z = 10;

console.log(w); // ReferenceError: w is not defined
let w = 10;

// Konstante
const PI = 3.14;

// Variable
let name = "John";

// Template Strings

const user = "John";
const age = 30;

const msg = `Hi, my name is ${user} and I am ${age} years old.`;

// For-of Schleife
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const number of numbers) {
  console.log(number);
}

// Funktionen
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function greet(name = "stranger") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, stranger!
greet("John"); // Hello, John!

// Arrow-Funktionen
const func = (param1, param2) => {
  return param1 + param2;
};

const add = (a, b) => a + b;

// Rest operator
const sum = (a, b, ...numbers) => {
  let result = a + b;
  for (const number of numbers) {
    result += number;
  }
  return result;
};

console.log(sum(1, 2, 3, 4, 5)); // 15

// Spread operator
const fruits = ["apple", "banana", "orange"];
const vegetables = ["broccoli", "spinach", "cauliflower"];

const fandv = [...fruits, ...vegetables];

console.log(fandv); // ['apple', 'banana', 'orange', 'broccoli', 'spinach', 'cauliflower']

// Objektdestrukturierung
const person = {
  firstName: "Alice",
  lastName: "Smith",
};
const { firstName, lastName } = person;
console.log(firstName); // Alice

// Array-Destrukturierung
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Set
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(3);
console.log(set.size); // 3

// Map
const map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map.get("name")); // John

// Asynchrone Funktionen mit async/await
function getData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
}
getData();
