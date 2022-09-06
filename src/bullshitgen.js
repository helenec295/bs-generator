// click to see your fortune

let subject = ["campaigns",
  "brands",
  "consumers"]

let object = ["beautiful",
  "effective",
  "amazing"]

let verb = ["create",
  "enhance",
  "experience"]

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