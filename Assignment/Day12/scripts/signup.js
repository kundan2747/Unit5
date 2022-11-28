var userArr = JSON.parse(localStorage.getItem("users")) || [];

function CreateUser(email, password) {
  this.email = email;
  this.password = password;
}

document.querySelector("form").addEventListener("submit", addUser);
function addUser() {
  event.preventDefault();
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  var user = new CreateUser(email, password);
  userArr.push(user);
  localStorage.setItem("users", JSON.stringify(userArr));
  window.location.href = "./login.html";
}
