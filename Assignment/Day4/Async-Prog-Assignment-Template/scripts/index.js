var moviesArr = JSON.parse(localStorage.getItem("movies")) || [];
var movies = document.getElementById("movies");

display(moviesArr);

function display(moviesArr) {
  movies.innerHTML = "";
  moviesArr.map(function (ele) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var name = document.createElement("h2");
    var date = document.createElement("h5");
    var rating = document.createElement("h5");
    img.setAttribute("src", ele.image);
    name.innerText = ele.name;
    date.innerText = "Release year : " + ele.date;
    rating.innerText = "IMDB Rating : " + ele.rating;
    div.append(img, name, date, rating);
    movies.append(div);
  });
}
var slideImg = document.getElementById("slideImg");
setInterval(slideshow, 5000);
var i = 0;
var n = moviesArr.length;
slideImg.src = moviesArr[0].image;
function slideshow() {
  slideImg.src = moviesArr[i % n].image;
  i = i + 1;
}
document.getElementById("sort-lh").addEventListener("click", sortlh);
document.getElementById("sort-hl").addEventListener("click", sorthl);

function sortlh() {
  moviesArr.sort((a, b) => a.rating - b.rating);
  display(moviesArr);
}
function sorthl() {
  moviesArr.sort((a, b) => b.rating - a.rating);
  display(moviesArr);
}
