var searchId = localStorage.getItem("brewery");
var response = fetch("https://api.openbrewerydb.org/breweries/" + searchId);
response
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    display(data);
    console.log(data);
  });
function display(data) {
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var p = document.createElement("p");
      p.innerText = key + " : " + data[key];
      document.getElementById("details").append(p);
    }
  }
}
