//1.Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let txt1 =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let patt1 = /\d{1,5}/g;
const match1 = txt1.match(patt1);
console.log(match1);
const incomes = match1.map((income) => parseInt(income));
const totalAnnualIncome = incomes.reduce((acc, cur) => acc + cur, 0);
console.log(totalAnnualIncome);
//if you wanna use normal loop
//annualIncomes = [];
// for (let i = 0; i < match1.length; i++) {
//   annualIncomes.push(parseInt(match1[i]));
// }
// const totalAnnualIncome = annualIncomes.reduce((acc, cur) => acc + cur, 0);

//2.The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

let txt2 =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
let patt2 = /-?\d+/g;
const match2 = txt2.match(patt2);
console.log(match2);
const points = match2.map((point) => parseInt(point));
const distance = points[points.length - 1] - points[0];
console.log(distance);
//reason why it iwe use "-" is because the distance means the total points apart
//0-(-12) is 12 points apart and 0-8 is 8 points apart so well add 8 and 12 but because of the negative before 12 we'll use negative so we can have 8 -- 12 which is 8 + 12 and it is equal to 20

//3.Write a pattern which identify if a string is a valid JavaScript variable
is_valid_variable = (txt3) => {
  // let patt3 = /^[a-zA-Z][_$]/g;
  if (txt3.match(/^[0-9A-Z]/) || txt3.match(/[-!'%$@&*#+?=.,~]/g)) {
    return false;
  }
  return true;
  // const match3 = txt3.match(patt3);
  // console.log(match3);
};
console.log(is_valid_variable("first_name"));
console.log(is_valid_variable("first-name"));
console.log(is_valid_variable("1first_name"));
console.log(is_valid_variable("firstname"));
// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True
