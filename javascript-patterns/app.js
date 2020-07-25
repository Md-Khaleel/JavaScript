// Basic Structure of Module Pattern

// (function() {
//   // Declare private variables and functions

//   return {
//     // Declare public variables and functions
//   }
// }())

// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//   let text = "Hello World";

//   const changeText = function() {
//     const element = document.querySelector("h1"); // These properties and functions are private
//     element.textContent = text;
//   };

//   return {
//     callChangeText: function() {
//       changeText(); // Whatever is in the return is public
//       console.log(text);
//     }
//   };
// })();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN
//
// const ItemCtrl = (function() {
//   let data = [];
//   function add(item) {
//     data.push(item);
//     console.log("Item added....");
//   }

//   function get(id) {
//     return data.find(item => {
//       return item.id === id;
//     });
//   }

//   return { // Returning object literal that reveals methods that are inside of the module.
//     add: add, // Without this the function would be private
//     get: get  // and would not be available outside of the module
//   };
// })();

// ItemCtrl.add({ id: 1, name: "John" });
// ItemCtrl.add({ id: 2, name: "Mark" });
// console.log(ItemCtrl.get(2));

/***
 *
 * SINGLETON PATTERN
 */
// Used to instantiate objects, but can only return one instance of an object.
