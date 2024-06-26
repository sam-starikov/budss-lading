window.addEventListener('resize', function removeContainer() {
    if (window.scrollX + window.innerWidth <= 385) {
        document.querySelector('nav').classList.remove('container')
    } else {
        document.querySelector('nav').classList.add('container')
    }
})

/* switcher header links */
const links = document.querySelectorAll('.header__nav-link')

for (const link of links) {
    link.addEventListener('click', function () {
        for (const link of links) {
            link.classList.remove('header__nav-link--active')
        }
        this.classList.add('header__nav-link--active')
    })
}
/* end */

/* open/close mobile menu */
const burgerBtn = document.querySelector('.header__burger')
const mobileMenu = document.querySelector('.header__menu')
const closeMobileMenuBtn = document.querySelector('.header__close-menu-btn')

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('header__menu--open')
})
closeMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('header__menu--open')
})
/* end */
