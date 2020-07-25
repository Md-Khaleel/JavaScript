const http = new EasyHTTP();

// Get Users
// const users = http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Create Data User Data

const data = {
  name: "John Doe",
  userName: "johndoe",
  email: "johndoe@gmail.com"
};

// Create User
http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Update User (PUT)
http
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete User
http
  .delete("https://jsonplaceholder.typicode.com/users/2", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
