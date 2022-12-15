const catsAPI = "https://api.thecatapi.com/v1/breeds";

//1.Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = "https://restcountries.com/v2/all";
fetch(countriesAPI)
  .then((response) => response.JSON)
  .then((data) => {
    console.log(data);
  });
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
fetchData();
