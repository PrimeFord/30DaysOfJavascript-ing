//DOM: Mini project 1
//1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
bodyEl = document.querySelector("body");
bodyEl.style.width = "100vw";
bodyEl.style.fontFamily = "Segoe UI";
bodyEl.style.cursor = "pointer";
bodyEl.style.overflow = "hidden";

wrpEl = document.querySelector(".wrapper");
wrpEl.style.width = "50%";
wrpEl.style.margin = "auto";

h1El = document.querySelector("h1");
h1El.style.textAlign = "center";
h1El.style.fontSize = "1.5rem";
h2El = document.querySelector("h2");
h2El.style.textAlign = "center";
h2El.style.fontSize = "1.2rem";
h2El.style.textDecoration = "underline";
h2El.style.fontWeight = "100";

//i.The year color is changing every 1 second
const spanEl = document.querySelector("span");
spanEl.style.fontSize = "3rem";

//ii.The date and time background color is changing every on seconds
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let hr = hour < 10 ? `0${hour}` : hour;
let mi = min < 10 ? `0${min}` : min;
let se = sec < 10 ? `0${sec}` : sec;
let date = `${monthNames[month]} ${day}, ${year} ${hr}:${mi}:${se}`;
console.log(date);

const pEl = document.querySelector("p");
pEl.innerHTML = date;
pEl.style.fontSize = "0.8rem";
pEl.style.textAlign = "center";
pEl.style.margin = "auto";
pEl.style.padding = "0.3rem 1rem";
pEl.style.width = "max-content";
pEl.style.background = "pink";

const randBg = () => {
  spanEl.style.color = "#" + Math.random().toString(16).substr(2, 6);
  pEl.style.background = "#" + Math.random().toString(16).substr(2, 6);
};
setInterval(randBg, 1000);

//iii.Completed challenge has background green
//iv.Ongoing challenge has background yellow
//v.Coming challenges have background red
const liEl = document.querySelectorAll("li");
for (let i = 0; i < liEl.length; i++) {
  liEl[i].style.background = "#eb695b";
  liEl[i].style.listStyle = "none";
  liEl[i].style.marginBottom = "0.2rem";
  liEl[i].style.padding = "0.8rem";
  liEl[i].style.fontSize = "0.8rem";
  liEl[0].style.background = "#5bb67a";
  liEl[1].style.background = "#f7dc5c";
}
