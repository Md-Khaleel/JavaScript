// // Putting async in front of the function makes it return a promise
// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });

//   error = false;

//   if (!error) {
//     const res = await promise; // Waits until the promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  // await the response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // Only proceed once its resolved
  const data = await response.json();
  // only proceed once the second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));