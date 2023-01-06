//constants
const planets =
  "MOON,MERCURY,VENUS,EARTH,MARS,JUPITER,SATURN,URANUS,NEPTUNE,PLUTO".split(
    ","
  );
let activePlanet = "EARTH";
const gravityArray = [1.6, 3.7, 8.87, 9.8, 3.7, 24.5, 10.44, 8.87, 11.15, 0.58];
// const gravityArray = [
//   { name: "moon", g: 1.6 },
//   { name: "mecury", g: 3.7 },
//   { name: "venus", g: 8.87 },
//   { name: "earth", g: 9.8 },
//   { name: "mars", g: 3.7 },
//   { name: "jupiter", g: 24.5 },
//   { name: "saturn", g: 10.44 },
//   { name: "uranus", g: 8.87 },
//   { name: "neptune", g: 11.15 },
//   { name: "pluto", g: 0.58 },
// ];

// selectors
const selectEl = document.querySelector("select");
const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("form>input");
const imageWrapperEl = document.getElementById("img-wrapper");
const weightWrapperEl = document.getElementById("weight-wrapper");
const requiredEl = document.getElementsByClassName("required-container")[0];
const weight = document.querySelector(".weight");
const planetNameEl = document.getElementsByClassName("planet-name")[0];

imageWrapperEl.innerHTML = `<img src="./media/${activePlanet.toLowerCase()}.png" alt="planet-img" />`;
imageWrapperEl.classList.add("show");

for (let planet of planets) {
  selectEl.innerHTML += `<option value="${planet}">${planet}</option>`;
}

//event triggers and  listeners

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputEl.value === "") {
    imageWrapperEl.classList.remove("show");
    weightWrapperEl.classList.remove("show");
    requiredEl.textContent = "Mass is Required";
    requiredEl.classList.add("show");
  } else if (selectEl.value === "null") {
    imageWrapperEl.classList.remove("show");
    weightWrapperEl.classList.remove("show");
    requiredEl.textContent = "Planet is Required";
    requiredEl.classList.add("show");
  } else {
    activePlanet = selectEl.value;
    planetNameEl.textContent = activePlanet;
    imageWrapperEl.innerHTML = `<img src="./media/${activePlanet.toLowerCase()}.png" alt="planet-img" />`;
    imageWrapperEl.classList.add("show");
    weightWrapperEl.classList.add("show");
    requiredEl.classList.remove("show");
    let i = planets.indexOf(selectEl.value);
    let force = inputEl.value * gravityArray[i];
    weight.textContent = `${force.toFixed(2)}N`;
  }
});
