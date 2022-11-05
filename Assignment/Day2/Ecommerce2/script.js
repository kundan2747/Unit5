var productsArr = JSON.parse(localStorage.getItem("Products")) || [];
var wrapper = document.querySelector(".wrapper");

display(productsArr);

function display(productsArr) {
  wrapper.innerHTML = "";
  var counter = document.getElementById("counter");
  counter.innerText = "Products Count : " + productsArr.length;
  productsArr.map(function (ele, i) {
    var div = document.createElement("div");
    div.setAttribute("class", "product");
    var img = document.createElement("img");
    var name = document.createElement("h3");
    var Price = document.createElement("h3");
    var soldbtn = document.createElement("button");
    soldbtn.setAttribute("id", "sold");
    var delbtn = document.createElement("button");
    delbtn.setAttribute("id", "remove");

    delbtn.innerHTML = "Delete";
    soldbtn.innerText = "Sold";
    soldbtn.setAttribute("value", "false");

    name.innerText = ele.name;
    Price.innerText = ele.price;
    img.setAttribute("src", ele.image);
    div.append(img, name, Price, soldbtn, delbtn);
    wrapper.append(div);

    delbtn.addEventListener("click", function () {
      delRow(i);
    });
    soldbtn.addEventListener("click", function () {
      sold();
    });
  });
}
function delRow(indx) {
  productsArr.splice(indx, 1);
  localStorage.setItem("Products", JSON.stringify(productsArr));
  display(productsArr);
}

function sold() {
  if (event.target.value == "false") {
    event.target.value = "true";
    event.target.style.backgroundColor = "red";
  } else {
    event.target.value = "false";
    event.target.style.backgroundColor = "green";
  }
}
