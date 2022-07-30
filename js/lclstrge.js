
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var username = document.getElementById("username");
var email = document.getElementById("email");
var birthday = document.getElementById("birthday");
var password1 = document.getElementById("pswrd1");
var password2 = document.getElementById("pswrd2");
var button = document.getElementById("btn");

button.addEventListener("click" , function() {
  localStorage.fname = fname.value;
  localStorage.lname = lname.value;
  localStorage.username = username.value;
  localStorage.email = email.value;
  localStorage.birthday = birthday.value;
  localStorage.password1 = password1.value;
  localStorage.password2 = password2.value;
  fname.value="";
  lname.value="";
  username.value="";
  email.value="";
  birthday.value="";
  password1.value="";
  password2.value="";
});
