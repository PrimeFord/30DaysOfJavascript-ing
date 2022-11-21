//1.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//2.First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const word = text.split(".");
console.log(word);
let newWord = word.join("");
words1 = newWord.split(",");
let newWord2 = words1.join("");
words1 = newWord2.split(" ");
console.log(words1);
console.log(words1.length);

//3.In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//i.add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
console.log(shoppingCart);

//ii.add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);

//iii.remove 'Honey' if you are allergic to honey
shoppingCart.splice(4, 1);
console.log(shoppingCart);

//iv.modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

//6.Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
