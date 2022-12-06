const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
//1.Find a union b
let u = [...a, ...b];
let U = new Set(u);
console.log(U);

//2.Find a intersection b
let A = new Set(a);
let B = new Set(b);
let c = a.filter((num) => B.has(num));
console.log(new Set(c));

//3.Find a with b
let d = a.filter((num) => !B.has(num));
console.log(new Set(d));
