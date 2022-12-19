//DOM: Mini project 1
//1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
bodyEl = document.querySelector("body");
bodyEl.style.width = "100vw";
bodyEl.style.fontFamily = "Segoe UI";

wrpEl = document.querySelector(".wrapper");
wrpEl.style.width = "50%";
wrpEl.style.margin = "auto";

h1El = document.querySelector("h1");
h1El.style.textAlign = "center";
h2El = document.querySelector("h2");
h2El.style.textAlign = "center";
h2El.style.textDecoration = "underline";
h2El.style.fontWeight = "100";

//i.The year color is changing every 1 second
const spanEl = document.querySelector("span");
spanEl.style.fontSize = "4rem";

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

wrpEl.innerHTML = `<p>${date}</p>`;

// let year = now.getFullYear;
//iii.Completed challenge has background green
//iv.Ongoing challenge has background yellow
//v.Coming challenges have background red
