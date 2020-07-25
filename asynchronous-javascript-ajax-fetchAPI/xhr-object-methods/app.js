document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create xhr object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open("GET", "data.txt", true);

  // console.log("READYSTATE", xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    console.log("READYSTATE", xhr.readyState);
  };

  xhr.onload = function() {
    // console.log("READYSTATE", xhr.readyState);

    // Check for 200 status
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  xhr.onerror = function() {
    console.log("REQUEST ERROR");
  };
  xhr.send();

  // readyState values
  // 0: request not intialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP STATUSES
  // 200: 'OK'
  // 403: 'FORBIDDEN'
  // 404: 'NOT FOUND'
}
