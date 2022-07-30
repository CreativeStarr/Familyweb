
var password = "";
var response1;
var response2;
var entryCount = 0;
var entryLimit = 3;
var error = false;
var result = false;


var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var username = document.getElementById("username");
var password1 = document.getElementById("pswrd1");
var password2 = document.getElementById("pswrd2");
var butn1 = document.getElementById("btn1");




butn1.addEventListener("click", function(){

	response1 = password1.value;
	response2 = password2.value;
	if(response1 == response2){
		pasinf.innerHTML ="Correct Password"
		pasinf.style.color = "gold";
		lnk.innerHTML = "Home Page"
		lnk.href = "start.html";

	} else {
		pasinf.innerHTML ="Wrong Password"
		pasinf.style.color = "red";
		lnk.innerHTML = "Enter Here"
		lnk.href = "WrongPass.html";
	}
	textbox.value ="";


});

password1.value="";
password2.value="";


/*
var webAcnt = {
  name: "",
  UserName: "",
  Password: "",
  email: ""

};
*/
