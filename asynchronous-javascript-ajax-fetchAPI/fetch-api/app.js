document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

// Get local txt file data
function getText() {
  fetch("test.txt")
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      // console.log(data);
    });
}

// get local json data
function getJson() {
  fetch("test.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let output = "";
      data.forEach(user => {
        console.log(user);
        output += `
        <ul>
        <li>Name: ${user.name}</li>
        <li>Age: ${user.age}</li>
        <li>Job: ${user.job}</li>
        </ul>
        `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get from external API
function getExternal() {
  fetch("https://api.github.com/users")
    .then(res => {
      return res.json();
    })
    .then(function(data) {
      let output = "";
      data.forEach(user => {
        console.log(user);
        output += `
      <ul>
      <li>Name: ${user.login}</li>
      
      </ul>
      `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}
