let getData = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      displayData(result);
    });
};

getData("http://localhost:3000/blogs");
let displayData = (arr) => {
  var blogs = document.getElementById("blogs");
  blogs.innerHTML = "";
  arr.forEach((element) => {
    let div = document.createElement("div");
    let divTop = document.createElement("div");
    let divCen = document.createElement("div");
    let divBot = document.createElement("div");
    let title = document.createElement("h1");
    let desc = document.createElement("p");
    let author = document.createElement("p");
    let tags = document.createElement("p");
    let delbtn = document.createElement("button");
    let editbtn = document.createElement("button");
    let viewbtn = document.createElement("button");

    viewbtn.innerText = "VIEW";
    delbtn.innerText = "DELETE";
    editbtn.innerText = "EDIT";
    title.innerText = element.title;
    desc.innerText = element.body;
    author.innerText = "Author : " + element.author;
    tags.innerText = "Tags : " + element.tags;
    divTop.append(title);
    divCen.append(desc, author, tags);
    divBot.append(editbtn, delbtn, viewbtn);
    div.append(divTop, divCen, divBot);
    blogs.append(div);
    viewbtn.addEventListener("click", () => {
      goToBlog(element);
    });

    delbtn.addEventListener("click", () => {
      delData(element.id);
    });
    editbtn.addEventListener("click", () => {
      editData(element);
      localStorage.setItem("edit", JSON.stringify(element));
      window.location.href = "./edit.html";
    });
  });
};

function goToBlog(ele) {
  localStorage.setItem("curr", JSON.stringify(ele));
  window.location.href = "./blog.html";
}

function delData(i) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:3000/blogs/${i}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

var id;
function debounce() {
  if (id) clearTimeout(id);
  setTimeout(() => {
    getData(
      `http://localhost:3000/blogs?q=${document.getElementById("query").value}`
    );
  }, 2000);
}
