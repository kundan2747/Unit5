userArr = JSON.parse(localStorage.getItem("users")) || [];

document.querySelector("form").addEventListener("submit", loginUser);

function loginUser() {
  var email1 = document.getElementById("email").value;
  var pass1 = document.getElementById("password").value;
  event.preventDefault();
  var flag = true;
  for (var i = 0; i < userArr.length; i++) {
    if (userArr[i].email == email1) {
      flag = false;
      if (userArr[i].password == pass1) {
        alert("login Successful");
        window.location.href = "./index.html";
      } else {
        alert("invalid credentials");
      }
    }
  }
  if (flag) alert("invalid credentials");
}
