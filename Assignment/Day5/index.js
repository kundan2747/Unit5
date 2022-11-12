document.getElementById("date").innerText = new Date();
var statushead = document.getElementById("statusHead");


statushead.innerText = "Pending";
document.getElementById("status").style.background = "orange";
document.getElementById("fail").style.display = "none";

var flag = false;
var p = new Promise(function (reslove, reject) {
  setTimeout(function () {
    if (flag) reslove("Transaction Succesful");
    else reject("Transaction Failed");
  }, 2000);
});

p.then(function (res) {
  statushead.innerText = res;
  document.getElementById("status").style.background = "green";
  document.getElementById("fail").style.display = "none";
}).catch(function (res) {
  statushead.innerText = res;
  document.getElementById("status").style.background = "red";
  document.getElementById("fail").style.display = "block";
});
