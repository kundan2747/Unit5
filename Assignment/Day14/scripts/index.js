import { navbar } from "./utils.js";

document.getElementById("navbar").innerHTML = navbar;

function fetchdata() {
  let user = document.getElementById("user").value;
  let url = `https://api.github.com/users/${user}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      displayData(result);
    });
}

document.getElementById("search").addEventListener("click", fetchdata);
function displayData(res) {
  var userDiv = document.getElementById("user-details");
  userDiv.innerHTML = "";
  if (res.message) userDiv.innerText = "NO USER FOUND";
  else {
    var div = document.createElement("div");
    var heading = document.createElement("h3");

    var image = document.createElement("img");
    var name = document.createElement("h3");
    var bio = document.createElement("p");
    var location = document.createElement("p");
    var public_repos = document.createElement("p");
    heading.innerText = "User Details";

    name.innerText = res.name;
    image.src = res.avatar_url;
    bio.innerText = res.bio;
    location.innerText = res.location;
    public_repos.innerText = "Repos : " + res.public_repos;
    div.append(heading, image, name, bio, location, public_repos);
    userDiv.append(div);
  }
}
