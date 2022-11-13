document.getElementById("order").addEventListener("click", placeOrder);
var foodItems = document.getElementById("foodItems");
foodImg = {
  Sandwich: "./images/sandwich.jfif",
  SpringRoll: "./images/springroll.jfif",
  FrenchFries: "./images/frenchfries.jfif",

  ChickenBucket: "./images/chickenbucket.jfif",
};
var cnt = 0;
function placeOrder() {
  cnt += 1;
  var order = document.getElementById("food").value;
  var p = new Promise(function (res, rej) {
    var delay = Math.random() * 1000 * 2;

    setTimeout(function () {
      res("Food Cooked");
    }, delay);
  });

  p.then(function () {
    var mydiv = document.createElement("div");
    var image = document.createElement("img");
    var name = document.createElement("p");
    var orderno = document.createElement("p");
    image.src = foodImg[order];
    orderno.style.background = "green";
    orderno.style.color = "white";
    name.innerText = order;
    orderno.innerText = "Order ID : " + cnt;
    mydiv.append(image, name, orderno);
    foodItems.append(mydiv);
    console.log(order);
  });
}
