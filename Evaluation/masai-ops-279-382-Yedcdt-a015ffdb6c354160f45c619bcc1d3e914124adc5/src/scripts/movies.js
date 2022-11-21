var curr = localStorage.getItem("amount");

if (curr) {
  curr = parseInt(curr);
  console.log(curr, typeof curr);
} else {
  curr = 0;
}
console.log(curr);
document.getElementById("wallet").innerText = curr;
// document.getElementById("search").addEventListener("oninput", searchMovie);

function searchMovie() {
  var query = document.getElementById("search").value;
  var mdata = fetch("http://www.omdbapi.com/?apikey=5252a49c&s=" + query);
  mdata
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      if (res.Error) {
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

function displayMovie(res) {
  console.log(res.Search);
  var resArr = res.Search;
  var movies = document.getElementById("movies");
  movies.innerHTML = "";
  resArr.forEach((resData) => {
    var div = document.createElement("div");
    var image = document.createElement("img");
    var title = document.createElement("h3");
    var book = document.createElement("button");
    book.setAttribute("class", "book_now");
    div.setAttribute("class", "movie_tab");

    book.addEventListener("click", () => {
      bookNow(resData);
    });

    title.innerText = resData.Title;
    image.src = resData.Poster;
    book.innerText = "Book Now";
    div.append(image, title, book);
    movies.append(div);
  });
}

function bookNow(ele) {
  localStorage.setItem("booking", JSON.stringify(ele));
  window.location.href = "checkout.html";
}
