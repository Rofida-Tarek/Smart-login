var usersContainer = [];
usersContainer = JSON.parse(localStorage.getItem("users"));
var signinEmail = document.getElementById("email");
var signinPass = document.getElementById("password");
document.getElementById("test").addEventListener("click", function () {
  if (signinEmail.value == "" || signinPass.value == "") {
    document.getElementById("z").innerHTML = "All inputs is required";
    document.getElementById("z").style.color = "red";
  } else {
    check();
  }
});
function check() {
  for (var i = 0; i < usersContainer.length; i++) {
    if (
      signinEmail.value == usersContainer[i].useremail &&
      signinPass.value == usersContainer[i].userpass
    ) {
      var y = usersContainer[i].username;
      localStorage.setItem("s", y);
      location.href = "../home.html";
      break;
    }
  }
}
