hamburgerBtn = document.querySelector('.hamburger')
navList = document.querySelector('.nav-list')

function toggleMenu() {
    navList.classList.toggle('show')
}

hamburgerBtn.addEventListener('click', toggleMenu)