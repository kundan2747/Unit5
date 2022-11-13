document.getElementById("search").addEventListener("click", searchMovie);
function searchMovie() {
  var title = document.getElementById("title").value;
  var mdata = fetch("http://www.omdbapi.com/?apikey=5252a49c&t=" + title);
  mdata
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      if (res.Error) {
        displayError();
        console.log("No movies found");
      } else {
        displayMovie(res);
        console.log(res);
      }
    })
    .catch(function (e) {
      console.log(e);
    });
}
function displayMovie(resData) {
  document.querySelector("#movies").innerHTML = "";
  document.querySelector("#result").style.display = "block";
  var div = document.createElement("div");
  var image = document.createElement("img");
  var title = document.createElement("h3");
  var rating = document.createElement("p");
  rating.innerText = "IMDB Rating : " + resData.imdbRating;
  title.innerText = resData.Title;
  image.src = resData.Poster;
  image.src = resData.Poster;
  document.getElementById("actors").innerText = "Actors : " + resData.Actors;
  document.getElementById("runtime").innerText = "Runtime : " + resData.Runtime;
  document.getElementById("plot").innerText = "Movie Plot :" + resData.Plot;

  if (resData.imdbRating > 8.5) {
    var reccom = document.createElement("p");
    reccom.innerText = "Reccommended";
    reccom.style.background = "green";
    reccom.style.color = "white";
    div.append(image, title, rating, reccom);
  } else {
    div.append(image, title, rating);
  }

  document.querySelector("#movies").append(div);
}

function displayError() {
  document.querySelector("#movies").innerHTML = "";

  var div = document.createElement("div");
  var image = document.createElement("img");
  image.src = "error.png";
  var msg = document.createElement("p");
  msg.innerText = "Movie Not Found!";
  div.append(image, msg);
  document.querySelector("#movies").append(div);
}
document.getElementById("movies").addEventListener("click", function () {
  document.getElementById("desc").style.display = "block";
});
