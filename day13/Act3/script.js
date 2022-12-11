//1. Check the speed difference among the following loops: while, for, for of, forEach
//while
console.time("while loop");
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
console.timeEnd("while loop");

//for
console.time("for loop");
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
console.timeEnd("for loop");

//for of
console.time("for of loop");
const numbers = [0, 1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}
console.timeEnd("for of loop");

//forEach
console.time("forEach loop");
const number = [0, 1, 2, 3, 4, 5];
number.forEach((num) => {
  console.log(num);
});
console.timeEnd("forEach loop");
