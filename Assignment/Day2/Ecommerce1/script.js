document.querySelector("form").addEventListener("submit", addItem);
var productsArr = JSON.parse(localStorage.getItem("Products")) || [];

function CreateItem(name, category, image, price, gender, sold) {
  this.name = name;
  this.category = category;
  this.image = image;
  this.price = price;
  this.gender = gender;
  this.sold = sold;
}

function addItem() {
  event.preventDefault();
  // alert("details submitted");
  var name = document.getElementById("name").value;
  var category = document.getElementById("category").value;
  var image = document.getElementById("image").value;
  var price = document.getElementById("price").value;
  var gender = document.getElementById("gender").value;
  var sold = document.getElementById("sold").value;
  var item = new CreateItem(name, category, image, price, gender, sold);
  productsArr.push(item);
  localStorage.setItem("Products", JSON.stringify(productsArr));
}
