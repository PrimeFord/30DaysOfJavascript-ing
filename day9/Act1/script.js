const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//1.Explain the difference between forEach, map, filter, and reduce.
//forEach :: it iterates an array of elements, it takes a callback funtions with elements, array or index parameter and it only works for an array.

//map:: it also iterates an array of elements, it takes a callback funtions with elements, array or index parameter but it modifies a parameter so we return it in a new array

//filter:: it filter items that satisfies a filtering condition and returns a new array

//reduce:: it takes a callback function that has both accumulators and current and optional initial value as a parameter and return a single value

//2.Define a callback function before you use it in forEach, map, filter or reduce.

//callback Function:: it is a funtion that can be used as a parameter for another function that is function of function.

//3.Use forEach to console.log each country in the countries array.
countries.forEach((country) => console.log(country));

//4.Use forEach to console.log each name in the names array.
names.forEach((name) => console.log(name));

//5.Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => console.log(number));

//6.Use map to create a new array by changing each country to uppercase in the countries array.
const countriesCap = countries.map((countryy) => countryy.toUpperCase());
console.log(countriesCap);

//7.Use map to create an array of countries length from countries array.
const countrie = countries.map((countryy) => countryy.length);
console.log(countrie);

//8.Use map to create a new array by changing each number to square in the numbers array
const numbersSq = numbers.map((num) => num * num);
console.log(numbersSq);

//9.Use map to change to each name to uppercase in the names array
const nameCap = names.map((name) => name.toUpperCase());
console.log(nameCap);

//10.Use map to map the products array to its corresponding prices.
const prod = products.map((product) => {
  console.log(product);
});

//11.Use filter to filter out countries containing land.
const countryLand = countries.filter((country) => country.includes("land"));
console.log(countryLand);

//12.Use filter to filter out countries having six character.
const countrySix = countries.filter((country) => country.length === 6);
console.log(countrySix);

//13.Use filter to filter out countries containing six letters and more in the country array.
const countryMore = countries.filter((country) => country.length >= 6);
console.log(countryMore);

//14.Use filter to filter out country start with 'E';
const countryE = countries.filter((country) => country.charAt(0) === "E");
console.log(countryE);

//15.Use filter to filter out only prices with values.
const Pricess = products.filter((price) => price.price > 0);
console.log(Pricess);

//16.Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
  const strings = arr.filter((string) => typeof string === "string");
  return strings;
}
console.log(getStringLists([1, 2, 3, 4]));
console.log(getStringLists(["1", "2", "3", "4"]));
console.log(getStringLists([1, "2", "3", 4]));

//17.Use reduce to sum all the numbers in the numbers array.
const numberSum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(numberSum);

//18.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const countryy = countries.reduce((acc, cur) => acc + cur + ",", "");
console.log(countryy);

//19.Explain the difference between some and every
//some :: it checks if some of the items or element are similar in a way and it returns a boolean option
//every :: it checks if all of the items or element are similar and it also returns a boolean option

//20.Use some to check if some names' length greater than seven in names array
const nameLeng = names.some((name) => name.length >= 7);
console.log(nameLeng);

//21.Use every to check if all the countries contain the word land
const countriesLand = countries.every((country) => country.includes("land"));
console.log(countriesLand);

//22.Explain the difference between find and findIndex.
//find :: it returns the first element that satisfy a particular condition
//findIndex :: it returns the position of the first element to satisfty a condition

//23.Use find to find the first country containing only six letters in the countries array
const firstSixCountry = countries.find((country) => country.length === 6);
console.log(firstSixCountry);

//24.Use findIndex to find the position of the first country containing only six letters in the countries array
const positionSixCountry = countries.findIndex(
  (country) => country.length === 6
);
console.log(positionSixCountry);

//25.Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayPosition = countries.findIndex((country) => country === "Norway");
console.log(norwayPosition);

//26.Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaPosition = countries.findIndex((country) => country === "Russia");
console.log(russiaPosition);
