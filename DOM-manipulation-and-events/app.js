/***
 * DOCUMENT OBJECT MODEL
 */

// let val;

// // Accessing different parts of the document
// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// // Selecting within the document without selectors
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute("src");

// let scripts = document.scripts;
// let scriptsArray = Array.from(scripts);

// scriptsArray.forEach(function(script) {
//   console.log(script.getAttribute("src"));
// });

// console.log(val);

/***
 * DOM selectors for single elements
 */
// Document.getElementById

// console.log(document.getElementById("task-title"));

// // Get things from the element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// const taskTitle = document.getElementById("task-title");

// // Change Styling
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";

// // Change content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My Tasks";
// taskTitle.innerHTML = "<span style='color: red;'>Task List</span>";

// document.querySelector

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5"));

// document.querySelector("li").style.color = "red";
// document.querySelector(" ul li").style.color = "blue";

// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(3)").style.color = "yellow";
// document.querySelector("li:nth-child(4)").textContent = "Hello World";
// document.querySelector("li:nth-child(odd)").style.background = "#ccc";

/***
 * DOM selectors for multiple elements
 *
 */
// document.getElementsByClassName
// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "Hello";

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");

// console.log(listItems);

// // document.getElementByTagName
// let lis = document.getElementsByTagName("li");
// console.log(lis);

// lis = Array.from(lis);
// lis.reverse();

// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index}: Reversed list with JS`;
// });

// console.log(lis);

// querySelectorAll  //returns a nodelist

// let items = document.querySelectorAll("ul.collection li.collection-item");

// items.forEach((item, index) => {
//   item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll("li:nth-child(odd)");
// const liEven = document.querySelectorAll("li:nth-child(even)");

// liOdd.forEach(li => {
//   li.style.background = "#ccc";
// });

// liEven.forEach(li => {
//   li.style.background = "#ff0000";
// });

// for (i = 0; i < liEven.length; i++) {
//   liEven[i].style.color = "white";
// }

// for (i = 0; i < liOdd.length; i++) {
//   liOdd[i].style.color = "dodgerblue";
// }

// console.log(items);

/***
 * TRAVERSING THE DOM
 */

// let val;

// const list = document.querySelector("ul.collection");
// const listItem = document.querySelector("li.collection-item:first-child");

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

// Nodetype
// 1- Element
// 2- Attribute (deprecated)
// 3- Text node
// 8- Comment
// 9- Document itself
//10- Doctype

// Get children element nodes
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = "hello";

// // Children of children
// list.children[3].children[0].id = "test-link";
// val = list.children[3].children;

// // first Child
// val = list.firstChild; // Can return a text node rather than an element
// val = list.firstElementChild; // will return an HTML element rather than a node

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child Element
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;

// // Get next sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
// console.log(val);

/***
 * Creating Elements
 */

// Create Element
// const li = document.createElement("li");

// // add class
// li.className = "collection-item";

// // add id
// li.id = "new-item";

// // add attribute
// li.setAttribute("title", "New Item");

// // create text node and append
// li.appendChild(document.createTextNode("Hello I am a text node"));

// // Create new link element
// const link = document.createElement("a");

// // Add classes to link element
// link.className = ".delete-item secondary-content";
// console.log(link);
// // Add icon HTML
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// // Append li a child to ul

// document.querySelector("ul.collection").appendChild(li);

// console.log(li);

/***
 * REMOVING AND REPLACING ELEMENTS
 */

// Replacing Elements

// Create Element
// const newHeading = document.createElement("h2");
// // add id
// newHeading.id = "task-title";
// // new text node
// newHeading.appendChild(document.createTextNode("Task List"));

// // Get the old heading
// const oldHeading = document.getElementById("task-title");
// // Parent
// const cardAction = document.querySelector(".card-action");

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // // Remove Element
// const lis = document.querySelectorAll("li");
// const list = document.querySelector("ul");

// // Remove list item
// lis[0].remove();

// // remove by child
// list.removeChild(lis[3]);

// // CLASSES AND ATTRIBUTES
// const firstLi = document.querySelector("li:first-child");
// const link = firstLi.children[0];
// // console.log(firstLi);

// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add("test");
// link.classList.remove("test");
// val = link;

// // attributes
// val = link.getAttribute("href");
// val = link.setAttribute("href", "http://google.com");
// val = link.hasAttribute("href");
// link.setAttribute("title", "google");
// link.removeAttribute("title");
// val = link;
// console.log(val);

/***
 *
 * Event listeners and the Event Object
 */

// document.querySelector(".clear-tasks").addEventListener("click", function(e) {
//   console.log("clicked");
//   e.preventDefault();
// });

// document.querySelector(".clear-tasks").addEventListener("click", onClick);

// function onClick(e) {
//   // console.log("clicked");
//   e.preventDefault();

//   let val;
//   val = e;

//   // Event target Element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   // e.target.innerText = "Hello";

//   // Event type
//   val = e.type;

//   // Timestamp
//   val = e.timeStamp;

//   // Coordinates
//   val = e.clientY;
//   val = e.clientX;

//   // Coordinates event relative to the element
//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);
// }

/***
 *
 * Mouse Events
 */

// const clearBtn = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const heading = document.querySelector("h5");

// // Click
// // clearBtn.addEventListener("click", runEvent);
// // DBL Click
// // clearBtn.addEventListener("dblclick", runEvent);
// // Mouse Down
// // clearBtn.addEventListener("mousedown", runEvent);
// // Mouse up
// // clearBtn.addEventListener("mouseup", runEvent);
// // Mouseenter
// // clearBtn.addEventListener("mouseenter", runEvent);
// // Mouseleave
// // clearBtn.addEventListener("mouseleave", runEvent);

// // mouseover
// // card.addEventListener("mouseover", runEvent);
// // mouseout
// // card.addEventListener("mouseout", runEvent);
// // mousemove
// card.addEventListener("mousemove", runEvent);
// //

// // Event Handler
// function runEvent(e) {
//   console.log(`Event type: ${e.type}`);
//   e.preventDefault();

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`;
// }

/***
 *
 * Keyboard and input events
 */

// const form = document.querySelector("form");
// const taskInput = document.getElementById("task");
// const heading = document.querySelector("h5");

// // Clear input
// taskInput.value = "";

// // form.addEventListener("submit", runEvent);
// // Keydown
// // taskInput.addEventListener("keydown", runEvent);
// // Keyup
// // taskInput.addEventListener("keyup", runEvent);
// // keypress
// // taskInput.addEventListener("keypress", runEvent);
// // Focus
// // taskInput.addEventListener("focus", runEvent);
// // Blur
// // taskInput.addEventListener("blur", runEvent);
// // Cut
// // taskInput.addEventListener("cut", runEvent);
// // Paste
// // taskInput.addEventListener("paste", runEvent);
// // Input
// taskInput.addEventListener("input", runEvent);
// function runEvent(e) {
//   console.log(`Event type : ${e.type}`);

//   // console.log(e.target.va lue);

//   heading.innerText = e.target.value;
//   // Get input value
// console.log(taskInput.value);
// e.preventDefault();
//}

/***
 * Event bubbling and delegation
 */

// Event bubbling
// When a single element is clicked all of the parent elements are clicked as well

// document.querySelector(".card-title").addEventListener("click", function() {
//   console.log("card-title");
// });

// document.querySelector(".card-content").addEventListener("click", function() {
//   console.log("card-content");
// });

// document.querySelector(".card").addEventListener("click", function() {
//   console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function() {
//   console.log("col");
// });

// Event delegation

// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

// document.body.addEventListener("click", deleteItem);

// function deleteItem(e) {
//   // if (e.target.parentElement.className === "delete-item secondary-content") {
//   //   console.log("delete item");
//   // }

//   if (event.target.parentElement.classList.contains("delete-item")) {
//     console.log("delete-item");
//     e.target.parentElement.parentElement.remove();
//   }
// }

/***
 *
 * Local and session storage
 * To store in local storage it must be a string. To save an array use JSON.stringify()
 * To take back out and use it use the method JSON.parse()
 */

// local storage will stay until it is removed
// session storage will stay until the browser is closed

// set local storage item
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");
// // set session storage item
// // sessionStorage.setItem("name", "Beth");

// // remove from storage
// // localStorage.removeItem("name");

// // Get value from storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// // clear local storage
// localStorage.clear();
// console.log(name, age);

// document.querySelector("form").addEventListener("submit", function(e) {
//   const task = document.getElementById("task").value;

//   let tasks;
//   if (localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }

//   tasks.push(task);

//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   console.log(task);
//   alert("Task Saved");

//   e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem("tasks"));

// tasks.forEach(function(task) {
//   console.log(task);
// });
