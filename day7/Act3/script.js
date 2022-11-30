//1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
l = parseInt(prompt("Enter number of characters"));
// n = parseInt(prompt("Enter number of IDs"));
const userIdGenerator = () => {
  //   let ids = "";
  //   for (let j = 0; j < n; j++) {
  let id = "";
  for (let i = 0; i < l; i++) {
    const character =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321";
    const rand = Math.floor(Math.random() * character.length);
    id += character[rand];
  }
};
// };
userIdGenerator();

//2.Write a function name rgbColorGenerator and it generates rgb colors.


//3.Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
const arrayOfHexaColors = () => {
  let hex = "#";
  hexArray = [];
  for (let i = 0; i < 6; i++) {
    const character = "abcdef0987654321";
    const rand = Math.floor(Math.random() * character.length);
    hex += character.charAt(rand);
  }
  hexArray.push(hex);
  console.log(hexArray);
};
arrayOfHexaColors();

//4.Write a function arrayOfRgbColors which return any number of RGB colors in an array.
rgbArray = [];
const arrayOfRgbColors = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};
rgbArray.push(arrayOfRgbColors());
console.log(rgbArray);

//5.Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

//6.Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

//7.Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(a, b) {
  genArray = [];
  if (a === "hexa") {
    for (let i = 0; i < b; i++) {
      let hex = "#";
      for (let i = 0; i < 6; i++) {
        const character = "abcdef0987654321";
        const rand = Math.floor(Math.random() * character.length);
        hex += character.charAt(rand);
      }
      genArray.push(hex);
    }
    console.log(genArray);
  } else {
    for (let i = 0; i < b; i++) {
      const rgbnum = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`;
      genArray.push(rgbnum);
    }
    console.log(genArray);
  }
}

//8.Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
newer = [];
function shuffleArray(arr) {
  arr.sort();
  newer.push(arr);
  console.log(newer);
}
shuffleArray(["Finland", "Sweden", "Norway", "Denmark", "Iceland"]);
//OR
function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    shuf = Math.floor(Math.random() * arr.length);
    newer.push(arr[shuf]);
  }
  console.log(newer);
}
shuffleArray(["Finland", "Sweden", "Norway", "Denmark", "Iceland"]);
arr.shuffle;

//9.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(x) {
  if (x === 0 || x === 1) console.log(1);
  for (let i = x - 1; i >= 1; i--) {
    x *= i;
  }
  console.log(x);
}
factorial(5);

//10.Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value) {
  if (value === undefined || values === null || values === " ") {
    console.log(true);
  } else {
    console.log(false);
  }
}
isEmpty();

//11.Call your function sum, it takes any number of arguments and it returns the sum.
function sum() {
  sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
sum(1, 2, 3, 4);

//12.Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
  if (typeOf(arr[i]) === number) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += i;
    }
    console.log(sum);
  } else {
    console.log("the array is not a number");
  }
}

//13.Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

//14.Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

//15.Write a function called isPrime, which checks if a number is prime number.
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n == 2) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
isPrime(19);

//16.Write a functions which checks if all items are unique in the array.

//17.Write a function which checks if all the items of the array are the same data type.

//18.JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variable) {
  if (variable === $ || variable === _) {
    console.log(`Valid variable`);
  } else {
    console.log(`Invalid Variable`);
  }
}
isValidVariable(_);

//19.Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

//20.Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
const reverseCountries = (arr) => {
  const rarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rarr.push(arr[i]);
  }
  console.log(rarr);
};

reverseCountries(["Finland", "Sweden", "Norway", "Denmark", "Iceland"]);
