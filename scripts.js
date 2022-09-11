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
    header.style.backgroundColor = "rgba(31,31,31,0.5)";
   } else {
    header.style.backgroundColor = "transparent";
   }
}

document.addEventListener('scroll', menuBackground);

// templates my-header - creating a custom element

/* class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="header">
        <div class="header container">
            <div class="nav-bar">
                <div class="brand">
                    <a href="#hero"><img class="logo" src="./src/images/helen-evenchen-logo-white.png"></a>
                </div>
                <div class="nav-list">
                    <div class="hamburger"><div class="bar"></div></div>
                    <ul>
                        <li><a href="#hero" data-after="Home">Home</a></li>
                        <li><a href="#projects" data-after="Projects">Projects</a></li>
                        <li><a href="#about" data-after="About">About</a></li>
                        <li><a href="#footer" data-after="Contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
       </section> }
      
        `
        
    }
} */

customElements.define('my-header', MyHeader)

