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

/* cookie, появление и закрытие*/
const cookie = document.querySelector('.cookie')
const cookieBtns = document.querySelectorAll('.cookie__btn, .cookie__close-btn')

setTimeout(() => {
    cookie.classList.add('cookie--active')
}, 2000)

for (const btn of cookieBtns) {
    btn.addEventListener('click', () => {
        cookie.classList.remove('cookie--active')
    })
}
/* end */

/* form */
const form = document.querySelector('.form')
const closeFormBtn = document.querySelector('.form__close-btn')
const openFormBtn = document.querySelectorAll(
    '.header__btn, .hero__btn, .header__menu-btn, .feedback__btn, .footer__button'
)
const successItem = document.querySelector('.form-success')
const successBtn = document.querySelector('.form-success__btn')

form.addEventListener('submit', e => {
    e.preventDefault()
    form.classList.remove('form--open')
    successItem.classList.add('form-success--active')
})

openFormBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        form.classList.add('form--open')
    })
})

closeFormBtn.addEventListener('click', () => {
    form.classList.remove('form--open')
})

successBtn.addEventListener('click', () => {
    successItem.classList.remove('form-success--active')
})
/* end */
