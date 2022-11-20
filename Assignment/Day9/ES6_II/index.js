window.onload = showtrending();
function showtrending() {
  let api_key = "AIzaSyDZyQ0J8M-j1bey_ZgEXVJ6rTTezNDRN0g";
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&regionCode=IN&key=${api_key}&maxResults=20&type=video`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      display(result.items);
      console.log(result);
    });
}

let getData = () => {
  let query = document.getElementById("query").value;
  let api_key = "AIzaSyDZyQ0J8M-j1bey_ZgEXVJ6rTTezNDRN0g";
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${api_key}&maxResults=20&type=video`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      display(result.items);
      console.log(result);
    });
};

let display = (resultArr) => {
  console.log(resultArr);

  var movies = document.getElementById("movies");
  movies.innerHTML = "";
  resultArr.forEach((ele) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = ele.snippet.thumbnails.medium.url;
    var title = document.createElement("h5");
    title.innerText = ele.snippet.title;
    div.append(image, title);
    movies.append(div);
    div.addEventListener("click", () => {
      saveToVideo(ele);
    });
  });
};

function saveToVideo(ele) {
  var vid = ele.id.videoId;
  localStorage.setItem("videoId", JSON.stringify(vid));
  window.location.href = "video.html";
}
