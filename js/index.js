let menu = document.querySelector('.menu')
let burger = document.querySelector('.header__burger')
let selectClient = document.querySelectorAll('.select-client__item')

/* BURGER */

burger.addEventListener('click', function clickOnBurger() {
	menu.classList.toggle('active')
	burger.classList.toggle('active')
	document.body.classList.toggle('lock')
})

/* SELECT_CLIENT */

selectClient.forEach(item => {
	item.addEventListener('click', () => {
		selectClient.forEach(elem => elem.classList.remove('active'))
		item.classList.add('active')
	})
	// setInterval(() => item.classList.toggle('active'), 2000)
})
