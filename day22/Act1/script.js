//1. Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.

const bodyEl = document.querySelector("body");
bodyEl.style.width = "100vw";
bodyEl.style.fontFamily = "Segoe UI";
bodyEl.style.cursor = "pointer";
bodyEl.style.overflow = "hidden";

const divEl = document.createElement("div");
bodyEl.appendChild(divEl);

const h1El = document.createElement("h1");
h1El.textContent = "Number Generator";
h1El.style.margin = "auto";
h1El.style.width = "max-content";
h1El.style.fontWeight = "600";
bodyEl.appendChild(h1El);

const h2El = document.createElement("h2");
h2El.textContent = "30DaysOfJavaScript:DOM Day 2";
h2El.style.margin = "auto";
h2El.style.width = "max-content";
h2El.style.fontWeight = "400";
h2El.style.textDecoration = "underline";
h2El.style.fontSize = "1.3rem";
bodyEl.appendChild(h2El);

const h3El = document.createElement("h3");
h3El.textContent = "Author:Asabeneh Yetayeh";
h3El.style.margin = "auto";
h3El.style.width = "max-content";
h3El.style.fontWeight = "400";
h3El.style.textDecoration = "underline";
h3El.style.fontSize = "1rem";
bodyEl.appendChild(h3El);

for (let i = 1; i < 101; i++) {
  const pEl = document.createElement("p");
  pEl.textContent(`${i}`);
  divEl.appendChild(pEl);
}
//i. Even numbers background is green
//ii. Odd numbers background is yellow
//iii. Prime numbers background is red
