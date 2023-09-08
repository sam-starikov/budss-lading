const nav = document.querySelector('nav')

if (nav.clientWidth <= 425) {
	nav.classList.toggle('container')
}

console.log(document.body.clientWidth, window.innerWidth, window.pageXOffset)
