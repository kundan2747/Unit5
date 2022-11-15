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
      displayData(forecastData.daily);
      // console.log(forecastData.daily)
    });
}
function displayData(weatherData) {
  var container = document.getElementById("container");
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
