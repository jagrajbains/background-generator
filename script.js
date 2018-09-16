var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
window.onload = setGradient;
var colorRandom1 = "";
var colorRandom2 = "";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  colorRandom1 = '#';
  colorRandom2 = '#';
  for (var i = 0; i < 6; i++) {
    colorRandom1 += letters[Math.floor(Math.random() * 16)];
    colorRandom2 += letters[Math.floor(Math.random() * 16)];
  }
}

function setRandomGradient() {
	console.log("button pressed");
	getRandomColor();

	body.style.background = 
	"linear-gradient(to right, " 
	+ colorRandom1.value 
	+ ", " 
	+ colorRandom2.value 
	+ ")";

	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);