function displayWallet() {
  var curr = localStorage.getItem("amount");

  if (curr) {
    curr = parseInt(curr);
    console.log(curr, typeof curr);
  } else {
    curr = 0;
  }
  console.log(curr);
  document.getElementById("wallet").innerText = curr;
}
displayWallet();

var ele = JSON.parse(localStorage.getItem("booking"));
console.log(ele);
var movie = document.getElementById("movie");
var div = document.createElement("div");
var image = document.createElement("img");
var title = document.createElement("h3");

title.innerText = ele.Title;
image.src = ele.Poster;
div.append(image, title);
movie.append(div);

document.getElementById("confirm").addEventListener("click", bookStatus);

function bookStatus() {
  var seats = parseInt(document.getElementById("number_of_seats").value);
  var price = seats * 100;
  var curr = parseInt(JSON.parse(localStorage.getItem("amount")));
  if (price <= curr) {
    var p = curr - price;
    localStorage.setItem("amount", JSON.stringify(p));
    displayWallet();
    document.getElementById("booking_status").innerText = "Booking Successful!";
  } else {
    document.getElementById("booking_status").innerText =
      "Insufficient Balance!";
  }
}
