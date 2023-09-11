const nav = document.querySelector('nav')

window.addEventListener('resize', () => {
	if (window.innerWidth <= 385) {
		nav.classList.remove('container')
	} else {
		nav.classList.add('container')
	}
})
