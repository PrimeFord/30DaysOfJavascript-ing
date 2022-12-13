// import localStorage from "localStorage";
// const localStorage = require("localStorage");
//1. Store you first name, last name, age, country, city in your browser localStorage.

const me = {
  firstName: "Prime",
  lastName: "Senpai",
  age: 25,
  country: "Primearia",
  city: "Prime City",
};

meJSON = JSON.stringify(me);
console.log(meJSON);
localStorage.setItem("me", meJSON);
console.log(localStorage);
