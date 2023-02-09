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
      getlatlon();
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
  place.innerText = weatherData.name + "," + weatherData.sys.country;
  temp.innerText = weatherData.main.temp + " *C";
  feelslike.innerText = "Feels like " + weatherData.main.feels_like + " *C";

  wspeed.innerText = "Wind speed: " + weatherData.wind.speed + " m/s";
  humidity.innerText = "Humidity: " + weatherData.main.humidity + " %";
  pressure.innerText = "Pressure: " + weatherData.main.pressure + " Pa";
  vis.innerText = "Visibility: " + weatherData.visibility + " m";

  grid.append(wspeed, humidity, pressure, vis);

  datadiv.append(date, place, image, temp, feelslike, grid);
}

navigator.geolocation.getCurrentPosition(success);
function success(pos) {
  const crd = pos.coords;
  console.log(crd);
  console.log(pos);
  var lat = crd.latitude;
  var lon = crd.longitude;
  console.log(lat, lon);
  getData(lat, lon);

  document
    .getElementById("gmap_canvas")
    .setAttribute(
      "src",
      `https://maps.google.com/maps?q=${lat},${lon}&t=&z=13&ie=UTF8&iwloc=&output=embed`
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

function getlatlon() {
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
      //   displayData(weatherData);
      console.log(weatherData);
      var lat = weatherData.coord.lat;
      var lon = weatherData.coord.lon;
      console.log(lat, lon);
      getData(lat, lon);
    });
}

function getData(lat, lon) {
  const API_key = "eef812bad6c430c4a8454611ef6cee98";

  var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${API_key}`;
  // var forecastEl = document.getElementsByClassName("forecast");
  var container = document.getElementById("container");
  var res = fetch(url);
  res
    .then((data) => {
      return data.json();
    })
    .then((forecastData) => {
      displayWeekData(forecastData.daily);
      // console.log(forecastData.daily)
    });
}
function displayWeekData(weatherData) {
  var container = document.getElementById("sevendaysForecast");
  container.innerHTML = "";
  weatherData.map((ele, indx) => {
    var div = document.createElement("div");
    var day = document.createElement("h4");
    var img = document.createElement("img");
    var min = document.createElement("h4");
    var max = document.createElement("h4");
    if (indx == 0) {
      day.innerText = "Today";
    } else {
      var d = new Date(ele.dt * 1000).toLocaleString("default", {
        weekday: "long",
      });
      day.innerText = d;
    }
    img.src = "http://openweathermap.org/img/w/" + ele.weather[0].icon + ".png";
    min.innerHTML = `${ele.temp.min} <sup>0</sup>C`;
    max.innerHTML = `${ele.temp.max} <sup>0</sup>C`;
    // max.innerText = ele.temp.max
    div.append(day, img, min, max);
    container.append(div);
  });
}
