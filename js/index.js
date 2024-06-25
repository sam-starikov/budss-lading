window.addEventListener('resize', function removeContainer() {
	if (window.scrollX + window.innerWidth <= 385) {
		document.querySelector('nav').classList.remove('container')
	} else {
		document.querySelector('nav').classList.add('container')
	}
})
