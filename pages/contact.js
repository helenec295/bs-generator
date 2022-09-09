// switches between menu to hamburger menu on mobile

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

function toggleButton() {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleButton);

function menuBackground() {
   var scroll_position = window.scrollY;
   if (scroll_position > 250) {
    header.style.backgroundColor = "#1f1f1f";
   } else {
    header.style.backgroundColor = "transparent";
   }
}

document.addEventListener('scroll', menuBackground);

customElements.define('my-header', MyHeader)

