const http = new EasyHTTP();

// Get users
//
// User Data
const data = {
  name: "John Doe",
  userName: "johndoe",
  email: "jdoe@gmail.com"
};

// Update post
// http
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data))
  .catch(err => console.log(err));
