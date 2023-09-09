const nav = document.querySelector('nav')

window.addEventListener('resize', () => {
	if (window.innerWidth <= 376) {
		nav.classList.remove('container')
	} else {
		nav.classList.add('container')
	}
})

console.log()
