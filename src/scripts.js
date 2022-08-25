// switches between menu to hamburger menu on mobile

const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
} 

hamburgerButton.addEventListener('click', toggleButton);