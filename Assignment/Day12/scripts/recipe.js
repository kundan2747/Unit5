import { navbar } from "./index.js";
document.getElementById("navbar").innerHTML = navbar();

function getData() {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      var element = result.meals[0];
      var container = document.getElementById("container");
      container.innerHTML = "";
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
getData();
