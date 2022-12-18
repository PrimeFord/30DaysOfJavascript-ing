//1. Create a closure which has one inner function
const sum = () => {
  let sum = 0;
  const add = () => {
    sum += 2;
    return sum;
  };
  return add;
};
const total = sum();
console.log(total());
console.log(total());
console.log(total());
console.log(total());
console.log(total());
