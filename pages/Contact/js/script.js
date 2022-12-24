const burger = document.querySelector(".header_burger");
const menu = document.querySelector(".menu");
const body = document.querySelector(".body");

burger.onclick = function() {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	body.classList.toggle("lock");
}

//const SendForm = document.getElementById('Sen');
const SendForm = document.querySelector('.submitbtn');

SendForm.onclick = function(){

	var fail = validateForm();

	if(fail != "" ) {
		document.getElementById('error').innerHTML = fail;
		alert( fail);
		return; 
	} else {
		alert( "Зачакайте ваші дані обробляються");
		var name = $('input.nameF').val();
		var e_mail = $('input.e_mailf').val();
		var message1 = $('input.message1F').val();
		var message2 = $('input.message2F').val();

		$.ajax({
			method: "POST",
			url: "send.php",
			data: { name: name, e_mail: e_mail, message1: message1, message2: message2 }
		})
		.done(function( msg ) {
			alert( "Ваш лист надіслано1");
			document.getElementById('footer-form').style.display = 'none';
			document.getElementById('send_succes').style.display = 'block';
		});

	}

 }

function validateForm() {
	alert("123456");

	//var name = form.name.value;
	//var e_mail = form.e_mail.value;
	var name = $('input.nameF').val();
	var e_mail = $('input.e_mailf').val();

	if(name.length == 0 ||e_mail.length == 0 ) {
		return "Заповніть поля e-mail та ім'я "; 
	}else if( name.length <=1 || name.length > 30 ) {
		return "Введіть коректне ім'я";
	}else if( e_mail.length<6) {
		return "Введіть коректний e-mail";
	}

	return "";
}

const FormOK = document.getElementById("new");
FormOK.onclick = function() {
//function returnForm() {
	document.getElementById('send_succes').style.display = 'none';
	document.getElementById('footer-form').style.display = 'block';
	document.getElementById('footer-form').reset();
}

const swiper = new Swiper('.swiper2', {

	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

  });

  const swiper1 = new Swiper('.swiper1', {

	direction: 'vertical',

	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

  });

  	const SendForm2 = document.querySelector('.submitbtnNum');

	SendForm2.onclick = function(){
		alert( "Зачакайте ваші дані обробляються");

		var name = $('input.nameF1').val();
		var number = $('input.number').val();
		var message1 = $('input.message1F1').val();

		$.ajax({
			method: "POST",
			url: "sendNum.php",
			data: { name: name, number: number, message1: message1 }
		})
		.done(function( msg ) {
			alert( "Ваш лист надіслано \nМи обов'язково вам зателефонуємо");
		});

	}

		

	

