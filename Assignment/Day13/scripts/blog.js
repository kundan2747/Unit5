let ele = JSON.parse(localStorage.getItem("curr"));
if (ele) {
  displayData(ele);
}

function displayData(element) {
  let blog = document.getElementById("blog");
  let div = document.createElement("div");
  let title = document.createElement("h1");
  let desc = document.createElement("p");
  let author = document.createElement("p");
  let tags = document.createElement("p");
  title.innerText = element.title;
  desc.innerText = element.body;
  author.innerText = "Author : " + element.author;
  tags.innerText = "Tags : " + element.tags;
  div.append(title, author, desc, tags);
  blog.append(div);
}
