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
n = parseInt(prompt("Enter number of IDs"));
const userIdGenerator = () => {
  ids = "";
  for (let j = 0; j < n; j++) {
    let id = "";
    for (let i = 0; i < l; i++) {
      const character =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321";
      const rand = Math.floor(Math.random() * character.length);
      id += character[rand];
    }
    ids += ` ${id}`;
  }
  console.log(ids);
};
userIdGenerator();

//2.Write a function name rgbColorGenerator and it generates rgb colors.
const rgbColorGenerator = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};
rgbColorGenerator();

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
function getHex(n) {
  let hex = n.toString(16);
  hex = hex.length == 1 ? "0" + hex : hex;
  return hex;
}
function convertRgbToHexa(r, g, b) {
  return `#` + getHex(r) + getHex(g) + getHex(b);
}
convertRgbToHexa(255, 255, 255);

//7.Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(a, b) {
  const genArray = [];
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
console.loggenerateColors(hexa, 3);

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
  for (const a of arr) {
    if (typeof a !== "number") {
      console.log("the array is not a number");
    } else {
      sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      console.log(sum);
    }
  }
}

//13.Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "This array type is not a number";
    }
    sum += arr[i];
    mean = sum / arr.length;
  }
  return mean;
}
console.log(average([1, 2, 3, 4, 5]));

//14.Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(arr) {
  if (arr.length < 5) {
    return "item not found";
  }
  arr[4] = arr[4].toUpperCase();
  return arr;
}
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

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

//16.Write a functions which checks if all items are unique in the array.#
newA = [];
function chekz(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (newA.includes(arr[i]) == true) {
      return "Not a unique array";
    }
    newA.push(arr[i]);
  }
  return "it is a unique array";
}

//17.Write a function which checks if all the items of the array are the same data type.
function checks(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (`${typeof arr[0]}` !== `${typeof arr[i]}`) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(checks([1, 2, 3, 4, 5]));
//OR
function chi(arr) {
  for (const a of arr) {
    let data = typeof a;
    for (let i = 1; i < arr.length; i++) {
      if (data !== typeof arr[i]) {
        return false;
      }
      return true;
    }
  }
}
console.log(chi([1, 2, 3, 4, 5]));

//18.JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variable) {
  if (variable === "$" || variable === "_") {
    console.log(`Valid variable`);
  } else {
    console.log(`Invalid Variable`);
  }
}
isValidVariable("_");

//19.Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
const seven = [];
const sevenRandom = () => {
  for (let i = 0; i < 7; i++) {
    let b = Math.floor(Math.random() * 10);
    if (seven.includes(b) !== true) {
      seven.push(b);
    }
  }
  return seven;
};
console.log(sevenRandom());
//20.Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
const reverseCountries = (arr) => {
  const rarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rarr.push(arr[i]);
  }
  console.log(rarr);
};

reverseCountries(["Finland", "Sweden", "Norway", "Denmark", "Iceland"]);
