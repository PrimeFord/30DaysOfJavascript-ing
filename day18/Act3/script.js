const catsAPI = "https://api.thecatapi.com/v1/breeds";
//1. Read the cats api and find the average weight of cat in metric unit.
const fetchData = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    // console.log(cats);
    let cat = JSON.parse(cats);
    for (const c of cat) {
      let catName = c.name;
      console.log(catName);
    }
  } catch (err) {
    console.error(err);
  }
};
fetchData();

const countriesAPI = "https://restcountries.com/v2/all";

//2. Read the countries api and find out the 10 largest countries

const fetchCountryData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
fetchCountryData();

//3. Read the countries api and count total number of languages in the world used as officials.

const fetchCountryData2 = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
fetchCountryData2();
