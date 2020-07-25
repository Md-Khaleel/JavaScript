// // Iterator example
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function() {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true };
//     }
//   };
// }

// // Create and array of names
// const namesArray = ["Jack", "Jill", "John"];
// const names = nameIterator(namesArray);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// Generator Example use * to tell JS that it is a generator
// function* sayNames() {
//   yield "jack";
//   yield "jill";
//   yield "john";
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next());

// Id Creator
// function* createIds() {
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }

// const gen = createIds();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

/***
 *
 *
 * Symbols
 */
// Symbol is a primitive type that is useful because of its uniqueness. There cannot be any two symbols that are the same Symbol('123') === Symbol('123) false

// // Create a Symbol
// const sym1 = Symbol();
// const sym2 = Symbol("sym2");
// console.log(typeof sym2);

// Unique object keys
// const KEY1 = Symbol();
// const KEY2 = Symbol("sym2");
// const myObj = {};

// myObj[KEY1] = "Prop1"; // Using bracket notation the KEY1 is the symbol
// myObj[KEY2] = "Prop2";
// myObj.key3 = "prop3"; // Using dot notation the key is a property on the obj
// myObj.key4 = "prop4";

// // Symbols are not enumerable in for...in
// for (let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`); // ONLY key 3 and 4 are shown becuase symbole are enumerable in for...in
// }

// // Symbols are ignored by JSON.stringify
// console.log(JSON.stringify({ key: "prop" })); //will parse as JSON
// console.log(JSON.stringify({ [Symbol("sym1")]: "prop" })); // blank object

/***
 *
 * DESTRUCTURING
 */
// let a, b;
// [a, b] = [100, 200];

// // console.log(a, b);
// // Rest Pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];

// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(rest);

// const people = ["John", "Beth", "Mike"];
// const [person1, person2, person3] = people;

// Parse array returned from a function
// function getPeople() {
//   return ["John", "Beth", "Mike"];
// }

// let person1,
//   person2,
//   person3 = getPeople();
// console.log(person1, person2, person3);

// Object Destructuring

// const person = {
//   name: "John Doe",
//   age: 32,
//   city: "Miami",
//   gender: "Male",
//   sayHello: function() {
//     console.log("Hello");
//   }
// };

// // Old ES5
// // const name = person.name,
// //       age = person.age,
// //       city = person.city;

// // New ES6 Destructuring
// const { name, age, city, sayHello } = person;
// console.log(name, age, city);
// sayHello();

/****
 *
 *
 * ES6
 * MAPS
 *
 *
 */
// MAPS = key-value pairs - can use any type as a key or a value

const map1 = new Map();

// Set Keys
const key1 = "some string",
  key2 = {},
  key3 = function() {};

// Set map values by key
map1.set(key1, "Value of key1");
map1.set(key2, "Value of key2");
map1.set(key3, "Value of key3");

// console.log(map1.get(key1));
// console.log(map1.get(key2));

// Count Values
// console.log(map1.size);

// Iterating MAPS

// Loop using for...of to get keys and values
// for (let [key, value] of map1) {
//   // console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for (let key of map1.keys()) {
//   console.log(key);
// }

// Iterate values only
// for (let value of map1.values()) {
//   console.log(value);
// }

// map1.forEach(function(value, key) {
//   console.log(`${key} = ${value}`);
// });

// CONVERT TO ARRAYS

// Create an array of the key value pairs
// const keyValArray = Array.from(map1);
// console.log(keyValArray);

// // Create an array of the values
// const valArray = Array.from(map1.values());
// console.log(valArray);

// // Create and array of the keys
// const keyArray = Array.from(map1.keys());
// console.log(keyArray);
/***
 *
 * SETS
 *
 *
 */

// Sets- Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add("A string");
set1.add({ name: "John" });
set1.add(true);

// console.log(set1);

// const set2 = new Set([1, true, "string"]);
// console.log(set2);

// // Get count
// console.log(set1.size);

// // Check for values
// console.log(set1.has(100));

// // Delete from a set
// set1.delete(100);

// console.log(set1);

// ITERATING THROUGH SETS

// // For...of
// for (let item of set1) {
//   console.log(item);
// }

// ForEach loop
// set1.forEach(value => {
//   console.log(value);
// });

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
