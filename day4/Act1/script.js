//1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = parseInt(prompt("Enter your Age", "Age"));
if (age > 18) {
  console.log("You are old Enough to drive");
} else {
  console.log(`You are left with ${18 - age} to drive`);
}

//2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 25;
let yourAge = parseInt(prompt("Enter your Age", "Age"));
if (myAge > yourAge) {
  console.log(`i am ${myAge - yourAge} years older than you`);
} else {
  console.log(`You are ${yourAge - myAge} years older than me`);
}

//3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//i. using if else
let a = 3;
let b = 2;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
//ii. ternary operator.
a > b ? console.log("a is greater than b") : console.log("a is less than b");

//4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = parseInt(prompt("Enter number", "number"));
let cond = number % 2;
switch (true) {
  case cond == 0:
    console.log(`${number} is an even number`);
    break;
  case cond == 1:
    console.log(`${number} ia an odd number`);
    break;
  default:
    console.log(`The value entered was not a number`);
}
