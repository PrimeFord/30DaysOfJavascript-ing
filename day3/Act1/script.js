//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Prime";
let lastName = "Senpai";
let country = "Wakanda";
let city = "Prime City";
let age = "25";
let isMarried = false;
const present = new Date();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof present);

//2.Check if type of '10' is equal to 10
let num1 = "10";
console.log(num1 == 10);

//3.Check if parseInt('9.8') is equal to 10
let parseInt = "9.8";
let num2 = Number(parseInt);
console.log(num2 == 10);

//4.Boolean value is either true or false.
// i. Write three JavaScript statement which provide truthy value.
console.log(3 > 2);
console.log(3 < 4);
console.log("3" == 3);

// ii. Write three JavaScript statement which provide falsy value.
console.log(3 < 2);
console.log(3 > 4);
console.log(3 === "3");

//5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//i. 4 > 3
//ii. 4 >= 3
//iii. 4 < 3
//iv. 4 <= 3
//v. 4 == 4
//vi. 4 === 4
//vii. 4 != 4
//viii. 4 !== 4
//ix. 4 != '4'
//x. 4 == '4'
//xi. 4 === '4'
//xii. Find the length of python and jargon and make a falsy comparison statement.

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 === "4");
console.log("python".length != "jargon".length);

//6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//i. 4 > 3 && 10 < 12
//ii. 4 > 3 && 10 > 12
//iii. 4 > 3 || 10 < 12
//iv. 4 > 3 || 10 > 12
//v. !(4 > 3)
//vi. !(4 < 3)
//vii. !(false)
//viii. !(4 > 3 && 10 < 12)
//ix. !(4 > 3 && 10 > 12)
//x. !(4 === '4')
//xi. There is no 'on' in both dragon and python

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
console.log(!"python".includes("on"));

//7.Use the Date object to do the following activities
//i. What is the year today?
//ii. What is the month today as a number?
//iii. What is the date today?
//iv. What is the day today as a number?
//v. What is the hours now?
//vi. What is the minutes now?
//vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.

const today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getTime());
