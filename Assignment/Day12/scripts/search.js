import { navbar } from "./index.js";

document.getElementById("navbar").innerHTML = navbar();
// console.log("search.js")
document.getElementById("receipe").oninput = debounce;

var id;
function debounce() {
  if (id) clearInterval(id);
  id = setTimeout(getData, 1000);
}

function getData() {
  var receipe = document.getElementById("receipe").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${receipe}`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      var arr = result.meals;
      var container = document.getElementById("container");
      container.innerHTML = "";

      if (!arr) container.innerHTML = "<h1>NO RECEIPE FOUND!</h1>";
      else {
        arr.forEach((element) => {
          let div = document.createElement("div");
          let image = document.createElement("img");
          let title = document.createElement("h4");
          let desc = document.createElement("p");
          image.src = element.strMealThumb;
          title.innerText = element.strMeal;
          desc.innerText = element.strMeal + " , " + element.strArea;
          div.append(image, title, desc);
          container.append(div);
        });
      }
    });
}
