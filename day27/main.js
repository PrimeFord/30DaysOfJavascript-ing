const about = [
  { icon: "📖", para: "Instructor" },
  { icon: "🔥", para: "Motivator" },
  { icon: "🔥", para: "Motivational Speaker" },
  { icon: "📔", para: "Content Creator" },
  { icon: "🌱", para: "Educator" },
  { icon: "💻", para: "Programmer" },
];

// const about = [
//     { icon: "📖", para: "Instructor" },
//     { icon: "🔥", para: "Motivator" },
//     { icon: "🔥", para: "Motivational Speaker" },
//     { icon: "📔", para: "Content Creator" },
//     { icon: "🌱", para: "Educator" },
//     { icon: "💻", para: "Programmer" },
//   ];
const teach = [
  { name: "HTML", color: "brown" },
  { name: "JAVASCRIPT", color: "yellow" },
  { name: "REACT", color: "red" },
  { name: "REDUX", color: "purple" },
  { name: "NODE", color: "blue" },
  { name: "PYTHON", color: "gray" },
  { name: "MONGODB", color: "green" },
  { name: "PANDAS", color: "violet" },
  { name: "NUMPY", color: "cyan" },
];

//QuerySelector

const word = document.querySelector(".word");

const aboutEL = document.querySelector(".about");

const spanEL = document.querySelector(".tch");

//Color Add

//to print them randomly in the array
// const randAbt = () => {
//   rand = Math.floor(Math.random() * teach.length);
//   word.textContent = about[rand].icon;
//   aboutEL.textContent = about[rand].para;
//   spanEL.style.transition = "all 1s ease-in-out";
// };

// setInterval(randAbt, 2000);

//for it to print them accordingly as in the array

let a = 0;
let b = 0;
setInterval(function () {
  word.textContent = about[a++ % about.length].icon;
  aboutEL.textContent = about[b++ % about.length].para;
  spanEL.style.transition = "all 1s ease-in-out";
}, 2000);

// teach
//to print them randomly in the array

// const randTch = () => {
//   rand = Math.floor(Math.random() * teach.length);
//   spanEL.textContent = teach[rand].name;
//   spanEL.style.color = teach[rand].color;
//   spanEL.style.transition = "all 1s ease-in-out";
// };
// setInterval(randTch, 2000);

//for it to print them accordingly as in the array

let i = 0;
let j = 0;
setInterval(function () {
  spanEL.textContent = teach[i++ % teach.length].name;
  spanEL.style.transition = "all 1s ease-in-out";
  spanEL.style.color = teach[j++ % teach.length].color;
}, 2000);
