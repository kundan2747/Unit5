fetch("http://localhost:3000/todo")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    displayTodo(result);
  })
  .catch((error) => console.log("error", error));

function displayTodo(result) {
  document.querySelector("tbody").innerHTML = "";
  result.forEach((element) => {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td3.innerText = "Delete Task";
    td3.addEventListener("click", () => {
      deleteTodo(element);
    });
    td2.addEventListener("click", () => {
      toggle(element);
    });
    if (element.status) {
      td2.innerText = "Complete";
      td2.style.backgroundColor = "green";
    } else {
      td2.innerText = "Pending";
      td2.style.backgroundColor = "yellow";
    }

    td1.innerText = element.todo;
    tr.append(td1, td2, td3);
    document.querySelector("tbody").append(tr);
  });
}

function toggle(element) {
  var sta;
  if (element.status) sta = false;
  else sta = true;
  var raw = JSON.stringify({
    "status": !element.status,
  });
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  var id = element.id;

  fetch(`http://localhost:3000/todo/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(element))
    .catch((error) => console.log("error", error));
}

function deleteTodo(element) {
  var raw = "";

  var requestOptions = {
    method: "DELETE",
    body: raw,
    redirect: "follow",
  };
  var id = element.id;
  fetch(`http://localhost:3000/todo/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
document.getElementById("add").addEventListener("click", addTodo);
function addTodo() {
  var task = document.getElementById("todo").value;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "todo": task,
    "status": false,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/todo", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
