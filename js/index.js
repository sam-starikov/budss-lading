let menu = document.querySelector('.menu')
let burger = document.querySelector('.header__burger')

/* burger.onclick = () => {
	menu.classList.toggle('active')
	burger.classList.toggle('active')
	document.body.classList.toggle('lock')
}
 */
burger.addEventListener('click', function clickOnBurger() {
	menu.classList.toggle('active')
	burger.classList.toggle('active')
	document.body.classList.toggle('lock')
})
