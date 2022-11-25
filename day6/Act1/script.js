//1.Iterate 0 to 10 using for loop, do the same using while and do while loop
//i. for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//ii. while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//iii. do while loop
let j = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

//2.Iterate 10 to 0 using for loop, do the same using while and do while loop

//i. for loop
for (i = 10; i >= 0; i--) {
  console.log(i);
}

//ii. while loop
let k = 10;
while (k >= 0) {
  console.log(k);
  k--;
}

//iii. do while loop
let l = 10;
do {
  console.log(l);
  l--;
} while (l >= 0);

//3.Iterate 0 to n using for loop
for (let i = 0; i >= n; i++) {
  console(i);
}

//4.Write a loop that makes the following pattern using console.log():

// for (let i = 1; i <= 6; i++) {
//   ashArray = Array(i).fill("#");
//   console.log(ashArray);
// }
for (let i = 1; i <= 6; i++) {
  console.log("#".repeat(i));
}

//5.Use loop to print the following pattern:

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

//6.Using loop print the following pattern
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}

//7.Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
//OR
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

//8.Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}
//OR
for (leti = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

//9.Use for loop to iterate from 0 to 100 and print only prime numbers
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
console.log(isPrime(5));

// for (let n = 2; n <= 100; n++) {
//   //n are the numbers btw 2 to 100
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       break;
//     }
//   }
//   if (n == i) {
//     console.log(n);
//   }
// }

//10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//EVEN NUMBERS
let evenSum = 0;
for (let i = 0; i <= 100; i += 2) {
  evenSum += i;
}
console.log(evenSum);
//ODD NUMBER
let oddSum = 0;
for (let i = 1; i <= 100; i += 2) {
  oddSum += i;
}
console.log(oddSum);
console.log(
  `The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`
);

//12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
numberSum = [evenSum, oddSum];

//13.Develop a small script which generate array of 5 random numbers
randomArray = [];
for (let i = 0; i < 5; i++) {
  randomArray.push(Math.floor(Math.random() * 10)) * i;
}
console.log(randomArray);

//OR
randomArray = [];
for (let i = 0; i < 5; i++) {
  randomArray.push(Math.floor(Math.random() * i));
}
console.log(randomArray);

//14.Develop a small script which generate array of 5 random numbers and the numbers must be unique
randomArray = [];
for (let i = 0; i < 5; i++) {
  randomArray.push(Math.floor(Math.random() * 10)) * i;
  if (randomArray == i) {
  }
}
console.log(randomArray);

//15.Develop a small script which generate a six characters random id:

let characters = "abcdefghijklmnopqrstuvwxyz1234567890";
for (let i = 0; i < 6; i++) {
  randNo = Math.floor(Math.random() * characters.length);
  b = characters.charAt(randNo);
}
console.log(b);
