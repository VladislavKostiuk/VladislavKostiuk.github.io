const burger = document.querySelector(".header_burger");
const menu = document.querySelector(".menu");
const body = document.querySelector(".body");

burger.onclick = function() {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	body.classList.toggle("lock");
}

