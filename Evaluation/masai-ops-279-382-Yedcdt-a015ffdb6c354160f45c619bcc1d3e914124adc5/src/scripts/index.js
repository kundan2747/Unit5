var curr = JSON.parse(localStorage.getItem("amount"));

if (curr) {
  curr = parseInt(curr);
  console.log(curr, typeof curr);
} else {
  curr = 0;
}
console.log(curr);
document.getElementById("wallet").innerText = curr;

document
  .getElementById("add_to_wallet")
  .addEventListener("click", updateWallet);

function updateWallet() {
  console.log("in");
  var x = document.getElementById("amount").value;
  console.log(x, typeof x);
  console.log(parseInt(x));
  var finalamt = parseInt(x) + curr;

  console.log(finalamt, typeof finalamt);

  localStorage.setItem("amount", JSON.stringify(finalamt));

  document.getElementById("wallet").innerText = JSON.parse(
    localStorage.getItem("amount")
  );

  document.getElementById("amount").value = "";
}
