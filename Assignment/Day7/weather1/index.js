document.getElementById("search").addEventListener("click", fetcData);

function fetcData() {
  var city = document.getElementById("city").value;

  document
    .getElementById("gmap_canvas")
    .setAttribute(
      "src",
      `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    );

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
  datadiv.innerHTML = "";
  var date = document.createElement("h4");
  var place = document.createElement("h1");
  var image = document.createElement("img");
  var temp = document.createElement("h1");

  var wspeed = document.createElement("p");
  var humidity = document.createElement("p");
  var pressure = document.createElement("p");
  var vis = document.createElement("p");
  var grid = document.createElement("div");
  grid.setAttribute("id", "grid");

  var feelslike = document.createElement("h4");
  image.src =
    "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";

  date.innerText = new Date();
  date.style.color = "red";
  place.innerText = weatherData.name + " ," + weatherData.sys.country;
  temp.innerText = weatherData.main.temp + " *C";
  feelslike.innerText = "Feels like " + weatherData.main.feels_like + " *C";

  wspeed.innerText = "Wind speed: " + weatherData.wind.speed + " m/s";
  humidity.innerText = "Humidity: " + weatherData.main.humidity + " %";
  pressure.innerText = "Pressure: " + weatherData.main.pressure + " Pa";
  vis.innerText = "Visibility: " + weatherData.visibility + " m";

  grid.append(wspeed, humidity, pressure, vis);

  datadiv.append(date, place, image, temp, feelslike, grid);
}

function success(pos) {
  const crd = pos.coords;
  console.log(crd);
  console.log(pos);
  var lat = crd.latitude;
  var lon = crd.longitude;
  console.log(lat, lon);
  document
    .getElementById("gmap_canvas")
    .setAttribute(
      "src",
      `https://maps.google.com/maps?q="Ranchi"&center=${lat},${lon}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    );

  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eef812bad6c430c4a8454611ef6cee98&units=metric`;
  var res = fetch(url);
  res
    .then(function (resdata) {
      return resdata.json();
    })
    .then(function (weatherData) {
      displayData(weatherData);
    })
    .catch(() => {
      console.log("error");
    });
}

navigator.geolocation.getCurrentPosition(success);
