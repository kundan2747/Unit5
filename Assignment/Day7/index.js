document.getElementById("search").addEventListener("click", fetcData);

function fetcData() {
  var city = document.getElementById("city").value;

  var res = fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=eef812bad6c430c4a8454611ef6cee98&units=metric"
  );
  res
    .then(function (resdata) {
      return resdata.json();
    })
    .then(function (weatherData) {
      displayData(weatherData);
      console.log(weatherData);
    });
}
// "https://api.openweathermap.org/data/2.5/weather?q=ranchi&appid=eef812bad6c430c4a8454611ef6cee98"
function displayData(weatherData) {
  var datadiv = document.getElementById("data");
  var date = document.createElement("h4");
  var place = document.createElement("h1");
  var image = document.createElement("img");
  var temp = document.createElement("h1");
  var feelslike = document.createElement("h4");
  image.src =
    "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";

  date.innerText = new Date();
  place.innerText = weatherData.name;
  temp.innerText = weatherData.main.temp;
  feelslike.innerText = weatherData.main.feels_like;
  datadiv.append(date, place, image, temp, feelslike);
}
