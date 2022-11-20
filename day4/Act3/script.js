//1.Write a program which tells the number of days in a month.
let month = prompt("Enter a month", "Month");
let mon = month.toLowerCase();
switch (mon) {
  case "january":
    console.log("January has 31 days.");
    break;
  case "febuary":
    console.log("Febuary has 28 days.");
    break;
  case "march":
    console.log("March has 31 days.");
    break;
  case "april":
    console.log("April has 30 days.");
    break;
  case "may":
    console.log("May has 31 days.");
    break;
  case "june":
    console.log("June has 30 days.");
    break;
  case "july":
    console.log("July has 31 days.");
    break;
  case "august":
    console.log("August has 31 days.");
    break;
  case "september":
    console.log("September has 30 days.");
    break;
  case "october":
    console.log("October has 31 days.");
    break;
  case "november":
    console.log("November has 30 days.");
    break;
  case "december":
    console.log("December has 31 days.");
    break;
  default:
    console.log("the value entered is not a month");
}

//2.Write a program which tells the number of days in a month, now consider leap year.
let leapMonth = prompt("Enter a month from Leap year", "Month");
let leapMon = month.toLowerCase();
switch (leapMon) {
  case "january":
    console.log("January has 31 days.");
    break;
  case "febuary":
    console.log("Febuary has 29 days.");
    break;
  case "march":
    console.log("March has 31 days.");
    break;
  case "april":
    console.log("April has 30 days.");
    break;
  case "may":
    console.log("May has 31 days.");
    break;
  case "june":
    console.log("June has 30 days.");
    break;
  case "july":
    console.log("July has 31 days.");
    break;
  case "august":
    console.log("August has 31 days.");
    break;
  case "september":
    console.log("September has 30 days.");
    break;
  case "october":
    console.log("October has 31 days.");
    break;
  case "november":
    console.log("November has 30 days.");
    break;
  case "december":
    console.log("December has 31 days.");
    break;
  default:
    console.log("the value entered is not a month");
}
