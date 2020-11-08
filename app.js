const btnMenu = document.querySelector('.header__burger')
const nav = document.querySelector('.nav__header')
const dropDown = document.querySelector('.dropdown')
const dropContent = document.querySelector('.dropdown-content')
const mobDropDown = document.querySelector('.mobileDropdown')



dropDown.addEventListener('click', function () {
    dropContent.classList.toggle('active'),
        mobDropDown.classList.toggle('active')
})
btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('active'),
        nav.classList.toggle('active')
})