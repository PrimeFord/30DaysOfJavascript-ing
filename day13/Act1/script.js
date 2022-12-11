//1.Display the countries array as a table
const countriesArray = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countriesArray);

//2.Display the countries object as a table
const countriesObject = [
  { Finland: "Helsinki" },
  { Sweden: "Stockholm" },
  { Norway: "Oslo" },
];
console.table(countriesObject);

//3.Use console.group() to group logs
console.group("Group");
console.table(countriesArray);
console.table(countriesObject);
console.groupEnd();
