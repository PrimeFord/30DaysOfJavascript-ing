//1. Declare an empty array;
const array = [];
console.log(array);

//2. Declare an array with more than 5 number of elements
let arr = [1, 3, 4, 5, 6];

//3.Find the length of your array
console.log(arr.length);

//4.Get the first item, the middle item and the last item of the array
firstItem = arr[0];
console.log(firstItem);
middleItem = arr[2];
console.log(middleItem);
lastItem = arr[4];
console.log(lastItem);

//5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["febuary", 3, "lemon", 4, 5];
console.log(mixedDataTypes.length);

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//7.Print the array using console.log()
console.log(itCompanies);

//8.Print the number of companies in the array
console.log(itCompanies.length);

//9.Print the first company, middle and last company
firstCompany = itCompanies[0];
console.log(firstCompany);
middleCompany = itCompanies[3];
console.log(middleCompany);
lastCompany = itCompanies[6];
console.log(lastCompany);

//10.Print out each company
firstCompany = itCompanies[0];
console.log(firstCompany);
secondCompany = itCompanies[1];
console.log(secondCompany);
thirdCompany = itCompanies[2];
console.log(thirdCompany);
fourthCompany = itCompanies[3];
console.log(fourthCompany);
fifthCompany = itCompanies[4];
console.log(fifthCompany);
sixthCompany = itCompanies[5];
console.log(sixthCompany);
seventhCompany = itCompanies[6];
console.log(seventhCompany);

//11.Change each company name to uppercase one by one and print them out
firstCompany = itCompanies[0].toUpperCase();
console.log(firstCompany);
secondCompany = itCompanies[1].toUpperCase();
console.log(secondCompany);
thirdCompany = itCompanies[2].toUpperCase();
console.log(thirdCompany);
fourthCompany = itCompanies[3].toUpperCase();
console.log(fourthCompany);
fifthCompany = itCompanies[4].toUpperCase();
console.log(fifthCompany);
sixthCompany = itCompanies[5].toUpperCase();
console.log(sixthCompany);
seventhCompany = itCompanies[6].toUpperCase();
console.log(seventhCompany);

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(" ")} are big IT companies.`);

//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = prompt(
  "Enter Company with only the first letter in capital letter",
  "company name"
);
if (itCompanies.includes(company)) {
  console.log(company);
} else {
  console.log("Company not found");
}

//14.Filter out companies which have more than one 'o' without the filter method
newCompanies = itCompanies.splice(3, 4);
console.log(newCompanies);

//15.Sort the array using sort() method
newCompanies.sort();
console.log(newCompanies);

//16.Reverse the array using reverse() method
newCompanies.reverse();
console.log(newCompanies);

//.17 Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 4));

//18.Slice out the last 3 companies from the array
const itCompanies1 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies1.slice(4));

//19.Slice out the middle IT company or companies from the array
console.log(itCompanies1.slice(3, 4));

//20.Remove the first IT company from the array
console.log(itCompanies1.splice(0, 1));

//21.Remove the middle IT company or companies from the array
const itCompanies2 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies2.splice(3, 1));

//22.Remove the last IT company from the array
const itCompanies3 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies3.splice(6));

//23.Remove all IT companies
const itCompanies4 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies4.splice());
