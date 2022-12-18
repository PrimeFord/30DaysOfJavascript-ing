//1. Create a closure which has three inner functions
function total() {
  let num = 0;
  function first() {
    p = num + 5;
    return p;
  }
  function second() {
    s = p - 2;
    return s;
  }
  function product() {
    j = s * s;
    return j;
  }
  return [first(), second(), product()];
  return { first: first(), second: second(), product: product() };
}
const math = total();
console.log(math);
