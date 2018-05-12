var color1 = document.getElementById("color1");
var color2 = document.querySelector("#color2");
var h3 = document.querySelector("h3");

function setBackground(){
	document.body.style.background="linear-gradient(to right," + color1.value + "," + color2.value + ")";
	h3.innerHTML=document.body.style.background;
}

color1.addEventListener("input", setBackground, false);
color2.addEventListener("input", setBackground, false);

