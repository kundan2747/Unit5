let element = JSON.parse(localStorage.getItem("edit")) || "";
if (element) displayData(element);

function displayData(element) {
  document.getElementById("author").value = element.author;
  document.getElementById("title").value = element.title;
  document.getElementById("body").value = element.body;
  document.getElementById("tags").value = element.tags;
}

document.getElementById("edit").addEventListener("click", putData);

function putData() {
  raw = {
    id: element.id,
    author: document.getElementById("author").value,
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
    tags: document.getElementById("tags").value,
  };
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: JSON.stringify(raw),
    redirect: "follow",
  };

  fetch(`http://localhost:3000/blogs/${element.id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      window.location.href = "./index.html";
    })
    .catch((error) => console.log("error", error));
}
