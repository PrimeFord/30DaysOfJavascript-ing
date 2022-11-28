//1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
  let solve = console.log(`${a}x +${b}y = -${c}`);
}
solveLinEquation(2, 3, 4);

//2.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
  let common = Math.sqrt(b ** 2 - 4 * a * c) / (2 * a);
  let root1 = -(b / (2 * a)) + common;
  let root2 = -(b / (2 * a)) - common;
  console.log(`{${root1}, ${root2}}`);
}

//3.Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    print = arr[i];
    console.log(print);
  }
}
printArray([2, 4, 5, 6]);

//4.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const hour = date.getHours();
  const min = date.getMinutes();
  console.log(`${day}/${month}/${year} ${hour}:${min}`);
}
showDateTime();

//5.Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  console.log(`x=${y}, y=${x}`);
}
swapValues(3, 4);

//6.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const reverseArray = (arr) => {
  const rarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rarr.push(arr[i]);
  }
  console.log(rarr);
};
reverseArray(countries);

//7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const countrie = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const capitalizeArray = (arr) => {
  const caparr = [];
  for (const cap of arr) {
    caparr.push(cap.toUpperCase());
  }
  console.log(caparr);
};
capitalizeArray(countrie);

//8.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = (n) => {
  const numb1 = [];
  numb1.push(n);
  console.log(numb1);
};
addItem(3);

//9.Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const numb = [1, 2, 3, 4, 5];
const removeItem = (arr) => {
  for (let i = 0; i < numb.length; i++) {
    b = Math.floor(Math.random() * i);
  }
  console.log(arr.slice(b));
};
removeItem(numb);

//10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const num = [1, 2, 3, 4, 5];
const sumOfNumbers = (arr) => {
  const add = [];
  let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     add.push((sum += arr[i]));
  //   }
  for (const numbers of arr) {
    sum += numbers;
  }
  add.push(sum);
  console.log(add);
};
addItem(num);

//11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (n) => {
  sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  console.log(sum);
};
sumOfOdds(10);
//12.Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (n) => {
  sum = 0;
  for (let i = 0; i <= n; i += 2) {
    sum += i;
  }
  console.log(sum);
};
sumOfEven(10);
//13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

//14.Write a function which takes any number of arguments and return the sum of the arguments
const sumnum = (...args) => {
  let sum = 0;
  for (const summ of args) {
    sum += summ;
  }
  console.log(sum);
};
sumnum(1, 2, 3, 4, 5);
//15.Writ a function which generates a randomUserIp.

//16.Write a function which generates a randomMacAddress
const randomMacAddress = () => {};

//17.Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const randomHexaNumberGenerator = () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const character = "abcdef0987654321";
    const rand = Math.floor(Math.random() * character.length);
    hex += character.charAt(rand);
  }
  console.log(hex);
};
randomHexaNumberGenerator();
//18.Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
