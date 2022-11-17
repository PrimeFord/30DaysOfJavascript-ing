//1.Using console.log() print out the following statement:
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

//2.Using console.log() print out the following quote by Mother Teresa:
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

//3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = "10";
let numInt = Number(num);
console.log(numInt);

//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num1 = "9.8";
let num1Float = parseFloat(num1);
console.log(Math.round(num1Float));

//5.Check if 'on' is found in both python and jargon
let py = "python";
let ja = "jargon";
console.log(py.includes("on"), ja.includes("on"));

//6.I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = "I hope this course is not full of jargon";
console.log(sentence.includes("jargon"));

//7.Generate a random number between 0 and 100 inclusively.
const num2 = Math.floor(Math.random() * 101);
console.log(num2);

//8.Generate a random number between 50 and 100 inclusively.
const num3 = Math.floor(Math.random() * 51 + 50);
console.log(num3);

//9.Generate a random number between 0 and 255 inclusively.
const num4 = Math.floor(Math.random() * 256);
console.log(num4);

//10.Access the 'JavaScript' string characters using a random number.
const num5 = Math.floor(Math.random() * 10);
console.log(num5);

//11.Use console.log() and escape characters to print the following pattern.
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

//12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase =
  "You cannot end a sentence with because because because is a conjunction";
console.log(phrase.indexOf("because"));
console.log(phrase.substr(31, 23));
