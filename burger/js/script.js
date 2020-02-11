var btn = document.getElementById("btn");
var menuItem = document.getElementById("menuItem");
var cls = document.getElementById("close");
btn.addEventListener("click", toggleMenu);
function toggleMenu(){
	menuItem.classList.toggle("show");
}
cls.addEventListener("click", toggleMenu);