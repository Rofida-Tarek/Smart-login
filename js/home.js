document.getElementById("text").innerHTML = `Welcome ${localStorage.getItem(
  "s"
)}`;
document.getElementById("logout").addEventListener("click", function () {
  location.href = "../index.html";
});
