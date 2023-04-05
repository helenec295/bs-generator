// click to see bullshit

let subject = ["campaigns", "brands", "consumers", "customers", "experiences", "audiences", "economies", "products", "services", "solutions", "innovations", "ideas", "opportunities", "systems", "programs", "approaches", "technologies", "concepts", "methods", "platforms", "tools", "strategies", "formulas", "designs"]

let object = ["beautiful", "effective", "amazing", "sherable", "engaged", "viral", "sticky", "new", "improved", "best", "innovative", "reliable", "affordable", "high-quality", "powerful", "comfortable"," stylish", "convenient", "healthy", "delicious", "luxurious", "unique", "sustainable", "exclusive", "easy-to-use", "proven"]

let verb = ["create", "enhance", "experience", "grow", "imagine", "buy", "try", "discover", "improve", "boost", "transform", "achieve", "maximize", "win", "join", "upgrade", "get", "learn", "enjoy", "start", "find"]

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


