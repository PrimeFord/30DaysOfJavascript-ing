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
  function reverseArray(arr)