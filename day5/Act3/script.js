//1.The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//i.Sort the array and find the min and max age
ages.sort();

//ii.Find the median age(one middle item or two middle items divided by two)
medi = ages[4] + ages[5];
median = medi / 2;

//iii.Find the average age(all items divided by number of items)
sum =
  ages[0] +
  ages[1] +
  ages[2] +
  ages[3] +
  ages[4] +
  ages[5] +
  ages[6] +
  ages[7] +
  ages[8] +
  ages[9];
average = sum / ages.length;

//iv.Find the range of the ages(max minus min)
range = ages[9] - ages[0];

//v.Compare the value of (min - average) and (max - average), use abs() method
a = Math.abs(ages[0] - average);
b = Math.abs(ages[9] - average);
console.log(a == b);
