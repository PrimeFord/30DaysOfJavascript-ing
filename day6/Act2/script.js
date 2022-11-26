//1.Develop a small script which generate any number of characters random id:
console.log("Hello");
const n = Math.floor(Math.random() * 15);
let id = "";
for (let i = 0; i < n; i++) {
  const character = "abcdefghijklmnopqrstuvwxyz0987654321";

  const rand = Math.floor(Math.random() * character.length);
  id += character[rand];
  // id += character.charAt(rand);
}
console.log(id);
//2.Write a script which generates a random hexadecimal number.
let hex = "#";
for (let i = 0; i < 6; i++) {
  const character = "abcdef0987654321";
  const rand = Math.floor(Math.random() * character.length);
  hex += character.charAt(rand);
}
console.log(hex);
//3.Write a script which generates a random rgb color number.
console.log(
  `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`
);
//4.Using the below countries array, create the following new array. ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];
let newCountries = [];
for (let i = 0; i < countries.length; i++) {
  newCountries.push(countries[i].toUpperCase());
}
console.log(newCountries);

//5.Using the above countries array, create an array for countries length'.
let countriesLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);

//6.Use the countries array to create the following array of arrays:
// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

let nameCountries = [];
for (let i = 0; i < countries.length; i++) {
  nameCountries.push(
    `${countries[i]}, ${countries[i].slice(0, 3).toUpperCase()}, ${
      countries.length
    }]`
  );
}
console.log(nameCountries);

//7.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let countriesLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    countriesLand.push(`${countries[i]}`);
    console.log(countriesLand);
  } else {
    console.log(`All these countries are without land`);
  }
}
//OR
let countries1Land = [];
for (const c of countries) {
  if (c.includes("land")) {
    countries1Land.push(c);
  }
}
console.log(countries1Land);

//8.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let countriess = [];
for (const c of countries) {
  if (c.includes("ia")) {
    countriess.push(c);
  }
}
console.log(countriess);

//9.Using the above countries array, find the country containing the biggest number of characters.
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == 8) {
    console.log(countries[i]);
  }
}

//10.Using the above countries array, find the country containing only 5 characters.
let countriesss2 = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    countriesss2.push(countries[i]);
  }
}
console.log(countriesss2);

//11.Find the longest word in the webTechs array

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length == 10) {
    console.log(webTechs[i]);
  }
}

//12.Use the webTechs array to create the following array of arrays:

let newWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
  newWebTechs.push([webTechs[i], webTechs.length]);
}
console.log(newWebTechs);

//13.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];
for (const mern of mernStack) {
  console.log(mern[0].toUpperCase());
}

//14.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
newWeb = [];
for (let i = 0; i < webTechs.length; i++) {
  newWeb.push(webTechs[i]);
}
console.log(newWeb);

//OR
newTech = [];
for (const tech of webTechs) {
  newTech.push(tech);
}
console.log(newTech);

//15.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruit = ["banana", "orange", "mango", "lemon"];
for (let i = fruit.length; i >= 0; i--) {
  console.log(fruit[i]);
}

//16.Print all the elements of array as shown below.

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
fullone = fullStack[0].concat(fullStack[1]);
for (const full of fullone) {
  console.log(full.toUpperCase());
}
