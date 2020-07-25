/*
 *
 **
 ***
 ****
 *****
 */

// console.log('hello world!')
// console.log(123)
// console.log(true)
// var greeting = 'hello'
// console.log(greeting)
// console.log([1,2,3,4])
// console.log({a:1, b:2})
// console.table({a:1, b:2})
// console.error('This is an error')
// console.clear()
// console.warn('this is a warning')
// // Will run a timer on how long it takes to execute the functions
// console.time('hello')
// console.log('hello world!')
// console.log('hello world!')
// console.log('hello world!')
// console.log('hello world!')
// console.log('hello world!')
// console.log('hello world!')

// console.timeEnd('hello')

//Declaring variables

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init car
// var greeting;
// console.log(greeting)
// greeting = 'Hello'
// console.log(greeting)

// // Letters numbers _ $
// Numbers cannot be the first symbol
// starting with an _ is for private variables, usually in frameworks
// $ is used in jquery and string literals

// // multi word vars
// var firstName = 'John' // camelCase
// var first_name = 'James' // Underscore
// var FirstName = 'Jack' // PascalCase

// // Let
// // Let can be reassigned and is able to be initalized without a value
// let name; // Intialized with no value
//  name = 'John Doe'
// console.log(name)
// name = 'Steve Smith'
// console.log(name)

// Const
// is immutable, meaning that its value cannot be changed
// Numbers can be added to an array, but it cannot be changed into a new array
// const cannot be initalized without a value either
// const name = 'john'
// console.log(name)

// const numbers = [1,2,3,4,5]

// numbers.push(6)

// console.log(numbers)

// /********************************
//  * Data Types in JavaScript
//  */

//  // Primitive types

//  // String
//  const name = 'John Doe';
//  console.log(typeof name);
// // number
// const age = 45;
// console.log(typeof age);
// // Boolean
// const hasKids = true;
// console.log(typeof hasKids);
// // Null
// const car = null;
// console.log(typeof car);
// // Undefined
// let test;
// console.log(typeof test)
// // Symbol
// const sym = Symbol()
// console.log(sym)

// // Reference types

// // Array
// const hobbies = ['movies', 'music'];
// console.log(hobbies);
// // Object literals
// const address = {
//   city: 'Boston',
//   state: 'ma'
// }
// console.log(address);
// console.log(typeof address);

// const today = new Date();

// console.log(today)
// console.log(typeof today)

/******
 * Type conversion
 */

// let val;

// // number to string
// //  val = String(5);
// //  val = String(4+4)

// // Boolean to a string
// val = String(true);

// // Date to a string
// val = String(new Date());
// // Array to string
// val = String([1, 2, 3, 4]);

// // toString

// val = (5).toString();
// val = true.toString();

// // String to number
// val = Number("5");

// // Boolean to number
// val = Number(true);
// val = Number(false);
// val = Number(null);
// // Will return NaN
// val = Number("hello");
// val = Number([1, 2, 3]);

// // parse int will convert a string to a number
// // parse float will convert a string into a number with decimals
// val = parseInt("100");
// val = parseFloat("100.30");

// // output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed);

// type coercion

// In this example JavaScript changes the 6 into a string and concatenates the two arrays together
// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;
// console.log(sum);
// console.log(typeof sum);

/**
 * Numbers and the Math Object
 */

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple Math with Numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 - num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI; //pie
// val = Math.E; // Eulers number
// val = Math.round(2.8);
// val = Math.ceil(2.2); //rounds up
// val = Math.floor(2.8); //round down
// val = Math.sqrt(64); // Square root
// val = Math.abs(-3); // Absolute number
// val = Math.pow(8, 2); // 8 to the power of two
// val = Math.min(2, 3, 4, 1, 55, 6, 3, -2); // Min will return the smallest number
// val = Math.max(2, 3, 4, 1, 55, 6, 3, -2); // Max will return the largest number
// val = Math.random(); // Will return a random decimal
// val = Math.floor(Math.random() * 20 + 1); // Will return a number between 1-100

// console.log(val);

/***
 *
 * String methods and concatenation
 *
 *
 *
 */

// const firstName = "William";
// const lastName = "Johnson";
// const age = 34;
// const str = "Hello there my name is brad";
// const tags = "web design, web development, front end";

// let val;

// val = firstName + " " + lastName;

// // Append
// val = "Brad ";
// val += "Traversy";
// val = "Hello, my name is " + firstName + " and I am " + age;

// // Escaping
// val = "That's awesome, I can't wait";

// // Length
// val = firstName.length;

// // concat
// val = firstName.concat(" ", lastName); // .concat will concatenate the space and then the last name

// // template literal
// val = `${firstName} ${lastName}`;

// // ChangeCase
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// // index and indexOf()
// val = firstName[2];

// val = firstName.indexOf("l");
// val = firstName.lastIndexOf("l");

// // charAt()
// val = firstName.charAt("1");
// // Get last character
// val = firstName.charAt(firstName.length - 1);

// // substring
// val = firstName.substring(0, 4);

// // slice
// val = firstName.slice(-3); // Will start at the end and take the last 3

// // Split
// val = str.split(" ");
// val = tags.split(",");

// // Replace()
// val = str.replace("brad", "Jack");

// // includes()
// val = str.includes("Hello");

// console.log(val);

/***
 * Template Literals / Template Strings
 */

// const name = "John";
// const age = 29;
// const job = "Web Developer";
// const city = "Miami";

// // Without Template literals (es5)

// html =
//   "<ul> <li>Name: " +
//   name +
//   "</li><li>Age: " +
//   age +
//   "</li><li>Job: " +
//   job +
//   "</li> <li>City: " +
//   city +
//   "</li> </ul>";

// function hello() {
//   return "Hello";
// }
// // Template literals (es6)
// html = `
//   <ul>
//   <li>Name: ${name}</li>
//   <li>Age: ${age}</li>
//   <li>Job: ${job}</li>
//   <li>City: ${city}</li>
//   <li> ${2 + 2}</li>
//   <li> ${hello()}</li>
//   <li> ${age > 30 ? "over 30" : "Under 30"}</li>
//   </ul>
//   `;

// document.body.innerHTML = html;

/***
 * Arrays and array methods
 */

// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ["Apple", "Banana", "Orange", "Pear"];
// const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

// let val;

// // Get array length
// // val = numbers.length;
// // // Check if is array
// // val = Array.isArray(numbers);
// // // get a single value
// // val = numbers[3];
// // val = numbers[0];

// // // Insert into array
// // numbers[2] = 100;
// // // Find index of value
// // val = numbers.indexOf(36);

// //Mutating arrays
// // Add on to end
// // numbers.push(250);
// // // Add on to front
// // numbers.unshift(120);
// // // take of from end
// // numbers.pop();
// // // take off from front
// // numbers.shift();
// // // Splice values
// // numbers.splice(1, 3);
// // // Reverse array
// // numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);

// // // Sorting array
// // val = fruit.sort();
// // val = numbers.sort();

// // // Use the 'compare' function
// // val = numbers.sort(function(x, y) {
// //   return x - y;
// // });

// // // Reverse sort
// // val = numbers.sort(function(x, y) {
// //   return y - x;
// // });

// // Find
// function under50(num) {
//   return num < 50;
// }

// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);

/******
 *
 * Object Literals
 */

// const person = {
//   firstName: "Steve",
//   lastName: "Smith",
//   age: 30,
//   email: "steve@aol.com",
//   hobbies: ["music", "sports"],
//   address: {
//     city: "Miami",
//     state: "FL"
//   },
//   getBirthYear: function() {
//     return 2017 - this.age;
//   }
// };

// let val;

// val = person;
// // Get specific value
// val = person.firstName;
// val = person["lastName"];
// val = person.age;
// val = person.hobbies;
// val = person.address.state;
// val = person.address["city"];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//   { name: "John", age: 30 },
//   { name: "Mike", age: 23 }
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].age);
// }

// console.log(people.map(person => person.age));

/***
 * DAte and Time
 */

// let val;

// const today = new Date();
// let birthday = new Date("9-10-1981 11:25:00");
// birthday = new Date("septmber 10 1981 11:25:00");

// // Query Dates
// val = today.getMonth();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getHours();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// // Manipulate Dates
// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);
// console.log(birthday);

/***
 * if else statements
 */

//  if(somethings) {
//    do something
//  } else {
//    do something else
//  }

// === checks to make sure the value and the type are the same   == only checks the value and ignores the type
// const id = 99;
// // Equal to
// if (id === 100) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// // Not equal to
// // a double equal will check the value and type is not equal
// if (id != 101) {
//   console.log("correct");
// } else {
//   console.log("incorrect");
// }

// // Test if undefined
// if (typeof id !== undefined) {
//   console.log(`The id is ${id}`);
// } else {
//   console.log("No ID");
// }

// Greater or less than

// if (id >= 100) {
//   console.log("correct");
// } else {
//   console.log("incorrect");
// }

// If else

// const color = "yellow";

// if (color === "red") {
//   console.log("Color is red.");
// } else if (color === "blue") {
//   console.log("Color is blue");
// } else {
//   console.log("Color is not red or blue");
// }

// Logical operators

// const name = "Steve";
// const age = 20;
// // and &&
// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// // or ||
// if (age < 16 || age > 65) {
//   console.log(`${name} can not run in the race.`);
// } else {
//   console.log(`${name} is registered for the race.`);
// }

// // ternary operator
// console.log(id === 100 ? "Correct" : "incorrect");

// // without braces
// if (id === 100) console.log("correct");
// else console.log("incorrect");

/***
 * Switch statements
 * Use switch statements if there are a lot of cases rather than if else
 */

// const color = "yellow";

// switch (color) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "blue":
//     console.log("Color is blue");
//     break;
//   default:
//     console.log(" Color is not red or blue");
// }

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }

// console.log(`Today is ${day}`);

/***
 * Function Declarations and Expressions and IIFE's
 *
 */

// FUNCTION DECLARATIONS

// function greet(firstName = "John", lastName = "Doe") {
// if (typeof firstName === "undefined") {
//   firstName = "John";
// }
// if (typeof lastName === "undefined") {
//   lastName = "Doe";
// }
// console.log("Hello");
//   return `Hello ${firstName} ${lastName}`;
// }

// // FUNCTION EXPRESSIONS

// const square = function(x = 3) {
//   return x * x;
// };

//
//  IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS iife-S

// (function() {
//   console.log("IIFE ran..");
// })();

// (function(name) {
//   console.log(`Hello ${name}`);
// })("Brad");

// PROPERTY METHODS

// const todo = {
//   add: function() {
//     console.log("Add todo..");
//   },
//   edit: function(id) {
//     console.log(`Edit todo ${id}`);
//   }
// };

// todo.delete = function() {
//   console.log("Delete todo");
// };

// todo.add();
// todo.edit(22);
// todo.delete();

/***
 * General Loops
 * THREE MOST POPULAR
 * FOR LOOPS    // Use when you know how many times it will run
 * WHILE LOOPS // Use when it is unclear how many times it will run
 * DO WHILE LOOPS
 */

// FOR LOOP

// for (let i = 0; i <= 10; i++) {
//   console.log(`Number : ${i}`);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log(`2 is my favorite number`);
//     continue;
//   }
//   if (i === 5) {
//     console.log(`Stop the loop`);
//     break;
//   }
//   console.log(`Number : ${i}`);
// }

// WHILE LOOP

// let i = 0;

// while (i < 10) {
//   console.log(`Number : ${i}`);
//   i++;
// }

// DO WHILE LOOP
// The DO WHILE LOOP will always run once
// let i = 0;
// do {
//   console.log(`Number: ${i}`);
//   i++;
// } while (i < 10);

// LOOP THROUGH ARRAYS

// const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// fOREACH
// cars.forEach(car => console.log(car));
// cars.forEach(function(car, index) {
//   console.log(`${index} : ${car}`);
// });
// MAP

// let americanCars = cars.map(car => {
//   if (car === "Ford" || car === "Chevy") {
//     console.log(car);
//   }
// });

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Sara" },
//   { id: 3, name: "Karen" }
// ];

// const names = users.map(function(user) {
//   return user.name;
// });
// console.log(names );
// const ids = users.map(user => {
//   return user.id;
// });

// console.log(ids);

// FOR IN LOOP
// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 40
// };

// for (let x in user) {
//   console.log(`${x} : ${user[x]}`);
// }

/***
 *
 * WINDOW OBJECT
 * Methods
 * Properties
 */

// alert("Window.alert is the same as alert becuase we are at the global level.");

// Prompt
// Will receive an input which can be saved to a variable or used elsewhere
// const input = prompt();
// alert(input);

// Confirm
// Used often when you are deleting something
// if (confirm("Are you sure?")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// PROPERTIES

// let val;
// // Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// // Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// // Scroll points
// // Scroll points will give the position of the scroll bar on the x and y axis
// val = window.scrollY;
// val = window.scrollX;

// // Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// // redirect
// // window.location.href = "http://google.com";

// // Reload
// // window.location.reload() // will reload the page

// // History Object
// // window.history.go(-1) //the number will take you back a certain amount to previous webpages

// val = window.history.length;

// // Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);

/***
 * Block scope with let and const
 */

var a = 1;
let b = 2;
const c = 3;
let d = 99;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Function Scope: ", a, b, c, d);
// }
// test();
if (true) {
  // Block Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Block Scope: ", a, b, c);
}
console.log("Global Scope: ", a, b, c);

// The global var is changed by the block scope var
