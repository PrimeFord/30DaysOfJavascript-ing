//1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const half = 0.5;
let b = prompt("Enter base", "Enter base");
let h = prompt("Enter height", "Enter height");
let area = half * b * h;
console.log(area);

//2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a1 = parseInt(prompt("Enter a", "a"));
let b1 = parseInt(prompt("Enter b", "b"));
let c1 = parseInt(prompt("Enter c", "c"));
let perimeter = a1 + b1 + c1;
console.log(perimeter);

//3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = parseInt(prompt("Enter length", "length"));
let width = parseInt(prompt("Enter width", "width"));
let area2 = length * width;
let perimeter2 = 2 * (length + width);
console.log(area2);
console.log(perimeter2);

//4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14;
let r = parseInt(prompt("Enter radius", "radius"));
let area3 = PI * r ** 2;
let perimeter3 = 2 * PI * r;

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = parseInt(prompt("value of x", "x"));
let y = 2 * x - 2;

let m1 = (y - 0) / (x - 0);
console.log(m1);

//6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let x2 = 6;
let y1 = 2 * x1 - 2;
let y2 = 2 * x2 - 2;
let m = (y2 - y1) / (x2 - x1);
console.log(m);

//7.Compare the slope of above two questions.
console.log(m1 == m);

//8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x3 = parseInt(prompt("value of x = -3", "x"));
let y3 = x3 ** 2 + 6 * x3 + 9;
console.log(y3);

//9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = parseInt(prompt("Enter Hours", "hours"));
let rate = parseInt(prompt("Enter Rate per Hour", "rate per hour"));
let pay = hours * rate;
console.log(pay);

//10.If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = "prime";
name.length > 7
  ? console.log(`${name} your name is long`)
  : console.log(`${name} your name is short`);

//11.Compare your first name length and your family name length and you should get this output.
let firstName = "Primesage";
let lastName = "Senpai";
firstName.length > lastName.length
  ? console.log(
      `your firstname ${firstName}, is longer than your familyname, ${lastName}`
    )
  : console.log(
      `your firstname ${firstName}, is shorter than your familyname, ${lastName}`
    );

//12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;
console.log(`i am ${myAge - yourAge} older than you`);

//13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let userAge = parseInt(prompt("Enter User Date of birth", "Date of birth"));
let adult = 2022 - userAge;
adult > 18
  ? console.log(`you are ${adult}. You are old enough to drive`)
  : console.log(
      `you are ${adult}. You will be allowed to drive after ${18 - adult}`
    );

//14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let lived = parseInt(
  prompt("Enter the number of year(s) lived", "Year(s) lived")
);
let secondsLived = lived * 365 * 24 * 60 * 60;
console.log(secondsLived);

//15.Create a human readable time format using the Date time object
//i. YYYY-MM-DD HH:mm
//ii. DD-MM-YYYY HH:mm
//iii. DD/MM/YYYY HH:mm

const present = new Date();
const year = present.getFullYear();
const month = present.getMonth() + 1;
const date = present.getDate();
const hour = present.getHours();
const minute = present.getMinutes();

console.log(`${year}-${month}-${date} ${hour}:${minute}`);
console.log(`${date}-${month}-${year} ${hour}:${minute}`);
console.log(`${date}/${month}/${year} ${hour}:${minute}`);
