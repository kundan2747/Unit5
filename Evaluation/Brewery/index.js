var response = fetch("https://api.openbrewerydb.org/breweries");
response
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    var brewArr = data;
    // for(var i=0;i<data.length;i++){
    //   if(filterdata()) brewArr.push()
    // }
    display(brewArr);
  });
function display(brewArr) {
  document.querySelector("tbody").innerHTML = "";
  brewArr.map(function (ele) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    td1.innerText = ele.name;
    td2.innerText = ele.brewery_type;
    td3.innerText = ele.city;
    td4.innerText = ele.state;
    td5.innerText = "More Details";
    td5.style.background = "green";
    td5.style.color = "white";
    td5.style.cursor = "pointer";
    td5.addEventListener("click", function () {
      gotoDetails(ele);
    });
    tr.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(tr);
  });
}
function gotoDetails(ele) {
  localStorage.setItem("brewery", ele.id);
  console.log(ele.id);
  window.location.href = "details.html";
}
// document.getElementById("type").addEventListener("onchange", filterdata);
// function filterdata() {
//   if (this.value == "") return true;
//   return this.value == ele.brewery_type;
// }
