//signup
var userName = document.getElementById("name");
var userMail = document.getElementById("mail");
var userPass = document.getElementById("pass");
var usersContainer = [];
function addUser() {
  var users = {
    username: userName.value,
    useremail: userMail.value,
    userpass: userPass.value,
  };
  usersContainer.push(users);
  localStorage.setItem("users", JSON.stringify(usersContainer));
  signup();
}
function signup() {
  if (userName.value != "" && userMail.value != "" && userPass.value != "") {
    document.getElementById("incorect").innerHTML = "success";
    document.getElementById("incorect").classList.add("text-info");
    document.getElementById("x").style.display = "none";
    location.href = "../index.html";
  } else {
    document.getElementById("x").innerHTML = "All inputs is required";
    document.getElementById("x").classList.add("text-danger");
    document.getElementById("incorect").style.display = "none";
  }
}
