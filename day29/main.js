//infos

const words = "30 DAYS OF JAVASCRIPT CHALLENGE 2020 ASABENEH YETAYEH";
const word = words.split(" ");
console.log(word);

const fontArr = [
  "Segoe UI",
  "Tahoma",
  "Geneva",
  "Verdana",
  "sans-serif",
  "Times New Roman",
  "Times",
  "serif",
  "cursive",
  "monospace",
  "Helvetica",
];

//selector
const body = document.querySelector("body");
const divEL = document.querySelector(".div");

const one = document.querySelector(".one");
const o1 = document.querySelector(".o1");
const o2 = document.querySelector(".o2");
const o3 = document.querySelector(".o3");
const o4 = document.querySelector(".o4");

const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const r1 = document.querySelector(".r1");
const r2 = document.querySelector(".r2");
//

const bgcolor = () => {
  let rand = "#" + Math.random().toString(16).substr(2, 6);
  divEL.style.background = rand;
  //   divEL.style.transition = "all 1s ease-out";
  //   divEL.style.fontFamily = fontArr[color];
};
setInterval(bgcolor, 2000);

const font = () => {
  let rand = Math.floor(Math.random() * fontArr.length);
  words.style.fontFamily = fontArr[rand];
  //   divEL.style.transition = "all 1s ease-out";
};
setInterval(font, 1000);

//for o1
for (const w of word[0]) {
  const p = document.createElement("p");
  p.textContent = w;
  o1.appendChild(p);
  const color = () => {
    let rand = "#" + Math.random().toString(16).substr(2, 6);
    p.style.color = rand;
    p.style.transition = "all 1s ease-in-out";
  };
  setInterval(color, 1000);
}

//for o2
for (const w of word[1]) {
  const p = document.createElement("p");
  p.textContent = w;
  o2.appendChild(p);
  const color = () => {
    let rand = "#" + Math.random().toString(16).substr(2, 6);
    p.style.color = rand;
    p.style.transition = "all 1s ease-in-out";
  };
  setInterval(color, 1000);
}

//for o3
for (const w of word[2]) {
  const p = document.createElement("p");
  p.textContent = w;
  o3.appendChild(p);
  const color = () => {
    let rand = "#" + Math.random().toString(16).substr(2, 6);
    p.style.color = rand;
    p.style.transition = "all 1s ease-in-out";
  };
  setInterval(color, 1000);
}

//for o4
for (const w of word[3]) {
  const p = document.createElement("p");
  p.textContent = w;
  o4.appendChild(p);
  const color = () => {
    let rand = "#" + Math.random().toString(16).substr(2, 6);
    p.style.color = rand;
    p.style.transition = "all 1s ease-in-out";
  };
  setInterval(color, 1000);
}

//for t1
for (const w of word[4]) {
  const p = document.createElement("p");
  p.textContent = w;
  t1.appendChild(p);
  const color = () => {
    let rand = "#" + Math.random().toString(16).substr(2, 6);
    p.style.color = rand;
    p.style.transition = "all 1s ease-in-out";
  };
  setInterval(color, 1000);
}

//for t2
for (const w of word[5]) {
  const p = document.createElement("p");
  p.textContent = w;
  t2.appendChild(p);
  const color = () => {
    let rand = "#" + Math.random().toString(16).substr(2, 6);
    p.style.color = rand;
    p.style.transition = "all 1s ease-in-out";
  };
  setInterval(color, 1000);
}

//for r1
for (const w of word[6]) {
  const p = document.createElement("p");
  p.textContent = w;
  r1.appendChild(p);
  const color = () => {
    let rand = "#" + Math.random().toString(16).substr(2, 6);
    p.style.color = rand;
    p.style.transition = "all 1s ease-in-out";
  };
  setInterval(color, 1000);
}

//for r2
for (const w of word[7]) {
  const p = document.createElement("p");
  p.textContent = w;
  r2.appendChild(p);
  const color = () => {
    let rand = "#" + Math.random().toString(16).substr(2, 6);
    p.style.color = rand;
    p.style.transition = "all 1s ease-in-out";
  };
  setInterval(color, 1000);
}
