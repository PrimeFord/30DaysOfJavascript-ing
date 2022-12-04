const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

//1.create an empty set
const aset = new Set(a);
aset.clear();
console.log(aset);

const bset = new Set(b);
bset.clear();
console.log(bset);

const countriesSet = new Set(countries);
countriesSet.clear();
console.log(countriesSet);

//2.Create a set containing 0 to 10 using loop
num = [];
for (i = 0; i < 10; i++) {
  num.push(i);
}
const numSet = new Set(num);
console.log(numSet);

//3.Remove an element from a set
console.log(numSet.delete(2));
numSet;

//4.Clear a set
numSet.clear();
console.log(numSet);

//5.Create a set of 5 string elements from array
const countrie = ["Finland", "Sweden", "Norway", "Iceland", "Oslo"];
const countrieSet = new Set(countrie);
console.log(countrieSet);

//6.Create a map of countries and number of characters of a country
countriesM = [
  ["Finland", 7],
  ["Helsinki", 8],
  ["Sweden", 6],
  ["Stockholm", 9],
  ["Norway", 6],
  ["Oslo", 4],
];

mapCountries = new Map(countriesM);
console.log(mapCountries);
