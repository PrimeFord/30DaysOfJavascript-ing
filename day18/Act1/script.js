//1.Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = "https://restcountries.com/v2/all";
// const fetch = require("fetch");
// import fetch from "fetch";
fetch(countriesAPI)
  .then((response) => response.JSON)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//OR

const fetchData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
fetchData();
