let menu = document.querySelector('.menu')
let burger = document.querySelector('.header__burger')
let headerTabs = document.querySelectorAll('.header-tabs__item')
const headerScroll = document.querySelector('.header__body')

/* HEADER_SCROLL */

window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		headerScroll.style.cssText =
			'transition: transform 0.2s; transform: translateY(-55%)'
	} else {
		headerScroll.style.cssText = 'transition:  transform 0.5s;'
	}
})

/* BURGER */

burger.addEventListener('click', function clickOnBurger() {
	menu.classList.toggle('active')
	burger.classList.toggle('active')
	document.body.classList.toggle('lock')
})

/* SELECT_CLIENT_TAB */

headerTabs.forEach(headerTabsItems => {
	headerTabsItems.addEventListener('click', function clickOnTab() {
		headerTabs.forEach(headerTabsElem =>
			headerTabsElem.classList.remove('active')
		)
		headerTabsItems.classList.add('active')
	})
})
