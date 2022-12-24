const burger = document.querySelector(".header_burger");
const menu = document.querySelector(".menu");
const body = document.querySelector(".body");

burger.onclick = function() {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	body.classList.toggle("lock");
}

/////////////////////////////////////////////////////////

const tab1 = document.querySelector(".cube1");
const tab2 = document.querySelector(".cube2");
const tab3 = document.querySelector(".cube3");

const tab_cont1 = document.querySelector(".tabs_container_1");
const tab_cont2 = document.querySelector(".tabs_container_2");
const tab_cont3 = document.querySelector(".tabs_container_3");

tab1.addEventListener('click', function () {
  
  if (!tab1.classList.contains("active_cube")) {
  	tab1.classList.add("active_cube");
	tab2.classList.remove("active_cube");
	tab3.classList.remove("active_cube");

	tab_cont2.classList.add('visuallyhidden');
	tab_cont2.classList.add('hidden');
	tab_cont3.classList.add('visuallyhidden');
	tab_cont3.classList.add('hidden');

    tab_cont1.classList.remove('hidden');
    setTimeout(function () {
      tab_cont1.classList.remove('visuallyhidden');
    }, 20);
  } 
}, false);

tab2.addEventListener('click', function () {
  
  if (!tab2.classList.contains("active_cube")) {
  	tab2.classList.add("active_cube");
	tab1.classList.remove("active_cube");
	tab3.classList.remove("active_cube");

	tab_cont1.classList.add('visuallyhidden');
	tab_cont1.classList.add('hidden');
	tab_cont3.classList.add('visuallyhidden');
	tab_cont3.classList.add('hidden');

    tab_cont2.classList.remove('hidden');
    setTimeout(function () {
      tab_cont2.classList.remove('visuallyhidden');
    }, 20);
  }  
}, false);

tab3.addEventListener('click', function () {
  
  if (!tab3.classList.contains("active_cube")) {
  	tab3.classList.add("active_cube");
	tab1.classList.remove("active_cube");
	tab2.classList.remove("active_cube");

	tab_cont1.classList.add('visuallyhidden');
	tab_cont1.classList.add('hidden');
	tab_cont2.classList.add('visuallyhidden');
	tab_cont2.classList.add('hidden');

    tab_cont3.classList.remove('hidden');
    setTimeout(function () {
      tab_cont3.classList.remove('visuallyhidden');
    }, 20);
  }  
}, false);

////////////////////////////////////////////////////////

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("stylish_slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}