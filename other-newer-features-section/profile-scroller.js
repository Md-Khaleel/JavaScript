const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "male",
    lookingfor: "female",
    location: "Lynn Ma",
    image: "https://randomuser.me/api/portraits/men/83.jpg"
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "Female",
    lookingfor: "male",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  }
];
console.log(data[2].image);
const profiles = profileIterator(data);

// call first profile
nextProfile();

// Next Event
document.getElementById("next").addEventListener("click", nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  console.log(currentProfile.image);
  if (currentProfile !== undefined) {
    document.getElementById("profile-display").innerHTML = `
<ul class='list-group'>
<li class='list-group-item'>Name: ${currentProfile.name}</li>
<li class='list-group-item'>Age: ${currentProfile.age}</li>
<li class='list-group-item'>Location: ${currentProfile.location}</li>
<li class='list-group-item'>Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
</ul>
`;
    document.getElementById("image-display").innerHTML = `
  <img src='${currentProfile.image}'
  `;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
