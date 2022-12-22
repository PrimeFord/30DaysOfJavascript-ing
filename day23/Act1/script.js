//1.Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.

const bodyEl = document.querySelector("body");
bodyEl.style.width = "100vw";
bodyEl.style.fontFamily = "Segoe UI";
bodyEl.style.cursor = "pointer";
bodyEl.style.overflowX = "hidden";

const h1El = document.createElement("h1");
h1El.textContent = "Number Generator";
h1El.style.margin = "auto";
h1El.style.width = "max-content";
h1El.style.fontWeight = "600";
h1El.style.fontSize = "1.8rem";
h1El.style.color = "#5bbc7a";
bodyEl.appendChild(h1El);

const h2El = document.createElement("h2");
h2El.textContent = "30DaysOfJavaScript:DOM Day 3";
h2El.style.margin = "auto";
h2El.style.width = "max-content";
h2El.style.fontWeight = "400";
h2El.style.fontSize = "1.2rem";
bodyEl.appendChild(h2El);

const h3El = document.createElement("h3");
h3El.textContent = "Author:Asabeneh Yetayeh";
h3El.style.margin = "auto";
h3El.style.width = "max-content";
h3El.style.fontWeight = "400";
h3El.style.fontSize = "1rem";
bodyEl.appendChild(h3El);

const pReq = document.createElement("p");

const divGen = document.createElement("div");
//for input
const inputEl = document.createElement("input");
inputEl.style.width = "66%";
inputEl.placeholder = "Generate more numbers...";
inputEl.style.height = "2rem";
inputEl.style.padding = "0.15rem 0.5rem";
inputEl.style.height = "1.6rem";
inputEl.style.outline = "none";
inputEl.style.border = "1px solid #5bbc7a";
divGen.appendChild(inputEl);

//for button
const buttonEl = document.createElement("button");
buttonEl.textContent = "Generate Number";
// buttonEl.type = "Genetrate Number";
buttonEl.style.width = "30%";
buttonEl.style.background = "#5bbc7a";
buttonEl.style.fontSize = "1rem";
buttonEl.style.border = "none";
buttonEl.style.color = "white";
divGen.appendChild(buttonEl);

divGen.style.width = "45%";
divGen.style.height = "2rem";
divGen.style.display = "flex";
divGen.style.justifyContent = "space-between";
// divGen.style.background = "green";
divGen.style.margin = "2rem auto .5rem";
bodyEl.appendChild(divGen);

//for numbers
const divEl = document.createElement("div");
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n == 2) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
for (let i = 0; i <= 101; i++) {
  const pEl = document.createElement("p");
  pEl.textContent = i;
  pEl.style.width = "100%";
  pEl.style.color = "white";
  pEl.style.height = "50%";
  pEl.style.display = "flex";
  pEl.style.fontSize = "1.2rem";
  pEl.style.justifyContent = "center";
  pEl.style.alignItems = "center";
  if (i % 2 === 0) {
    pEl.style.background = "green";
  } else if (isPrime(i)) {
    pEl.style.background = "red";
  } else {
    pEl.style.background = "yellow";
  }
  divEl.appendChild(pEl);
}
divEl.style.margin = "auto";
divEl.style.width = "50%";
// divEl.style.height = "100%";
divEl.style.display = "grid";
divEl.style.gridTemplateColumns = "repeat(9, 1fr)";
// divEl.style.gridTemplateRows = "repeat(17, 1fr)";

divEl.style.gridGap = "0rem 0.2rem";
bodyEl.appendChild(divEl);
