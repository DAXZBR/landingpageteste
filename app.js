function imgSlider(seila) {
	document.querySelector('.starbucks').src = seila;
}

function changeBackColor(color) {
	const circle = document.querySelector('.circle');
	circle.style.background = color;
}

function toggleMenu() {
	var menuToggle = document.querySelector('.toggle');
	var navigation = document.querySelector('.navigation');
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
}