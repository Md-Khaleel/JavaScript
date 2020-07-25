// Object literal
// const brad = {
//   name: "Brad",
//   age: 30
// };
// console.log(brad.age);

// CONSTRUCTOR
// Person Constructor
// function Person(name, dob) {
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

// // const brad = new Person("Brad", 30);
// // const john = new Person("John", 36);

// // console.log(john);

// const brad = new Person("Brad", "9-10-1981");
// // console.log(brad.calculateAge());

// // Using a constructor to Create a string, number, boolean will create an object and when using
// // the === it will return false if looking for a string, boolean etc because the typeOf is object and not a string, boolean etc
// // new String
// const name1 = "Jeff";
// const name2 = new String("Jeff");

// if (name2 === "Jeff") {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// ProtoTypes Explained

// Object.prototype
// Person.prototype

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function() {
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // };
// }

// // Calculate age
// Person.prototype.calculateAge = function() {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// // Get full name
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// // Gets Married
// Person.prototype.getsMarried = function(newLastName) {
//   this.lastName = newLastName;
// };

// const john = new Person("John", "Doe", "8-12-90");
// const mary = new Person("Mary", "Johnson", "March 20 1978");

// console.log(mary);

// console.log(john.calculateAge());

// console.log(mary.getFullName());

// mary.getsMarried("Smith");
// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty("firstName"));
/***
 * Prototypical inheritance
 *
 */

// // Person constructor
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// };

// const person1 = new Person("John", "Doe");

// console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Create customer
// const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");
// console.log(customer1);

// // change Customer greeting to overwrite the normal greeting
// Customer.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}. Welcome to our company.`;
// };

// console.log(customer1.greeting());

/***
 *
 * Using Object.create
 */
// const personPrototypes = {
//   greeting: function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   }
// };

// const mary = Object.create(personPrototypes);
// mary.firstName = "Mary";
// mary.lastName = "Williams";
// mary.age = 30;

// mary.getsMarried("Thompson");

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//   firstName: { value: "brad" },
//   lastName: { value: "Traversy" },
//   age: { value: 36 }
// });

// console.log(brad);
// console.log(brad.greeting());

/***
 * ES6 Classes
 * Class
 * Constructor
 * Methods
 */

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }

//   static addNumbers(x, y) {
//     return x + y;
//   }
// }
// // Instantiate an object
// const mary = new Person("Mary", "Williams", "11-13-1980");

// mary.getsMarried("Thompson");
// // console.log(mary);
// // console.log(mary.greeting());
// // console.log(mary.calculateAge());

// // Static method
// console.log(Person.addNumbers(1, 2));

/***
 *
 * Sub classes
 * Extend classes
 */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// Customer is a sub class of Person.
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "555-555-5555", "Standard");

// There is access to the methods on the parent class because the sub class extends the parent class That is why the greeting still works
console.log(john.greeting());

// use static method
console.log(Customer.getMembershipCost());
