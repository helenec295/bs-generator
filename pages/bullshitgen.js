// click to see bullshit

let subject = ["campaigns", "brands", "consumers", "customers", "experiences", "audiences", "economies"]

let object = ["beautiful", "effective", "amazing", "sherable", "engaged", "viral", "sticky", ]

let verb = ["create",
  "enhance",
  "experience", "grow", "imagine"]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  const randomVerb = Math.floor(Math.random() * verb.length);
  const randomObject = Math.floor(Math.random() * object.length);
  const randomSubject = Math.floor(Math.random() * subject.length);
  let randomBulshit = `${verb[randomVerb]} ${object[randomObject]} ${subject[randomSubject]}`;
  return randomBulshit;
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Make more bullshit";
  button.style.cursor = "default";

  }

button.addEventListener('click', showFortune);

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

