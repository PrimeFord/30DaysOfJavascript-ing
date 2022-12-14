//1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

class statistic {
  constructor(ages) {
    this.ages = ages;
  }
  count() {
    return this.ages.length;
  }
  sum() {
    return this.ages.reduce((acc, cur) => acc + cur, 0);
  }
  min() {
    return Math.min(...this.ages);
  }
  max() {
    return Math.max(...this.ages);
  }
  range() {
    return Math.max(...this.ages) - Math.min(...this.ages);
  }
  mean() {
    return Math.round(this.sum() / this.count());
  }
  median() {
    let medi = this.ages.sort((a, b) => a - b);
    // console.log(medi);
    for (let i = 0; i <= medi.length; i++) {
      if (medi.length % 2 == 1) {
        return medi[Math.floor(medi.length / 2)];
      }
      let m = medi.length / 2;
      return (medi[m - 1] + medi[m]) / 2;
    }
  }
  mode() {}
  var() {
    let medi = this.ages.sort((a, b) => a - b);
    // console.log(medi);
    let xbarr = [];
    for (let i = 0; i < medi.length; i++) {
      let xb = medi[i] - this.mean();
      // console.log(xb);
      xbarr.push(xb);
    }
    // console.log(xbarr);
    const xsq = xbarr.map((n) => n ** 2);
    const xsum = xsq.reduce((a, c) => a + c, 0);
    let ans = xsum / this.count();
    return ans;
  }
  std() {
    return Math.sqrt(this.var());
  }
}
// age.setAge()=23

const statistics = new statistic([
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
]);
console.log(statistics);
console.log(statistics.count());
console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.var()); // 17.5
console.log("Standard Deviation: ", statistics.std()); // 4.2
console.log("Variance: ", statistics.var()); // 17.5
// console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// you output should look like this
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

//2.Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  totalIncomes() {
    let sum = 0;
    for (let i = 0; i < this.incomes.length; i++) {
      sum += this.incomes[i];
    }
    return sum;
  }
  totalExpenses() {
    let sum = 0;
    for (let i = 0; i < this.expenses.length; i++) {
      sum += this.expenses[i];
    }
    return sum;
  }
  accountInfo() {
    return `${this.firstName} ${this.lastName} incomes are ${
      this.incomes
    }, expenses ${
      this.expenses
    }. he has a total income of ${this.totalIncomes()} and total expenses of ${this.totalExpenses()} which leaves him with an Account balance of ${this.accountBalance()}`;
  }
  addIncome(x) {
    this.incomes.push(x);
    return this.incomes;
  }
  addExpenses(y) {
    this.expenses.push(y);
    return this.expenses;
  }
  accountBalance() {
    let ac = this.totalIncomes() - this.totalExpenses();
    return ac;
  }
}
const personAccount = new PersonAccount(
  "Prime",
  "Senpai",
  [99990000, 3234233, 344554, 88766857, 9878798797, 46564, 5467543564],
  [1100, 32435, 525, 564, 54786, 234]
);
console.log(personAccount);
console.log(personAccount.totalIncomes());
console.log(personAccount.totalExpenses());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome(1000000));
console.log(personAccount.addExpenses(1000));
console.log(personAccount.accountBalance());
