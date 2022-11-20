//1.Write a code which can give grades to students according to theirs scores:
//i. 80-100, A
//ii. 70-89, B
//iii. 60-69, C
//iv. 50-59, D
//v. 0-49, F
let grade = parseInt(prompt("Enter Score", "Score"));
switch (true) {
  case grade >= 80:
    console.log("A");
    break;
  case grade >= 70:
    console.log("B");
    break;
  case grade >= 60:
    console.log("C");
    break;
  case grade >= 50:
    console.log("D");
    break;
  case grade < 50:
    console.log("F");
    break;
  default:
    console.log(`The score entered is not a number`);
}

//2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//i. September, October or November, the season is Autumn.
//ii. December, January or February, the season is Winter.
//iii. March, April or May, the season is Spring
//iv. June, July or August, the season is Summer
let month = prompt("Enter month", "month");
let mon = month.toLowerCase();
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

//3.Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("What is the day Today?", "Enter Day");
let dy = day.toLowerCase();
switch (dy) {
  case "monday":
    console.log("Monday is a working day.");
    break;
  case "tuesday":
    console.log("Tuesday is a working day.");
    break;
  case "wednesday":
    console.log("Wednesday is a working day.");
    break;
  case "thursday":
    console.log("Thursday is a working day.");
    break;
  case "friday":
    console.log("Friday is a working day.");
    break;
  case "saturday":
    console.log("Saturday is a weekend.");
    break;
  case "sunday":
    console.log("Sunday is a weekend.");
    break;
  default:
    console.log("the value entered is not a day");
}
