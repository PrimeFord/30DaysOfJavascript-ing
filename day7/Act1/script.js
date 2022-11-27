//1.Declare a function fullName and it print out your full name.
function fullName() {
  let firstName = "Prime";
  let lastName = "Senpai";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}
fullName();

//2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fulName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fulName("Prime", "Senpai"));

//3.Declare a function addNumbers and it takes two two parameters and it returns sum.
function sum(a, b) {
  let sum = a + b;
  return sum;
}
console.log(sum(2, 3));

//4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(l, w) {
  let areaOfRectangle = l * w;
  return areaOfRectangle;
}
console.log(areaOfRectangle(2, 3));

//5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(l, w) {
  let perimeter = 2 * (l + w);
  return perimeter;
}
console.log(perimeterOfRectangle(2, 3));

//6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(l, w, h) {
  let volume = l * w * h;
  return volume;
}
console.log(volumeOfRectPrism(2, 3, 4));

//7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(Math.round(areaOfCircle(2)));

//8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
  let circumference = 2 * Math.PI * r;
  return circumference;
}
console.log(Math.round(circumOfCircle(2)));

//9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(m, v) {
  let density = m / v;
  console.log(density);
}
density(4, 2);

//10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(d, t) {
  let speed = d / t;
  console.log(speed);
}
speed(6, 2);

//11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(m) {
  const gravity = 9.8;
  let weight = m * gravity;
  console.log(weight);
}
weight(10);

//12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function CelsiusToFahrenheit(oC) {
  let oF = oC * (9 / 5) + 32;
  console.log(oF);
}
CelsiusToFahrenheit(10);

//13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//The same groups apply to both men and women.
//Underweight: BMI is less than 18.5
//Normal weight: BMI is 18.5 to 24.9
//Overweight: BMI is 25 to 29.9
//Obese: BMI is 30 or more
function BMI(W, h) {
  let BMI = W / (h * h);
  console.log(BMI);
  switch (true) {
    case BMI < 18.5:
      console.log("Underweight");
      break;
    case BMI < 25:
      console.log("Normal Weight");
      break;
    case BMI < 30:
      console.log("Over weight");
      break;
    case BMI >= 30:
      console.log("Obese");
      break;
    default:
      console.log(`Invalid`);
  }
}
BMI(78, 1.8);

//14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  let mon = month.toLowerCase();
  console.log(mon);
  switch (mon) {
    case "september":
      console.log("the season is Autumn");
      break;
    case "october":
      console.log("the season is Autumn");
      break;
    case "november":
      console.log("the season is Autumn");
      break;
    case "december":
      console.log("the season is Winter");
      break;
    case "january":
      console.log("the season is Winter");
      break;
    case "febuary":
      console.log("the season is Winter");
      break;
    case "march":
      console.log("the season is Spring");
      break;
    case "april":
      console.log("the season is Spring");
      break;
    case "may":
      console.log("the season is Spring");
      break;
    case "june":
      console.log("the season is Summer");
      break;
    case "july":
      console.log("the season is Summer");
      break;
    case "august":
      console.log("the season is Summer");
      break;
    default:
      console.log("the value entered is not a month");
  }
}
checkSeason("January");
checkSeason("FEBUARY");

//15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(x, y, z) {
  if (x > y && x > z) {
    console.log(x);
  } else if (y > x && y > z) {
    console.log(y);
  } else {
    console.log(z);
  }
}
findMax(2, 3, 4);
