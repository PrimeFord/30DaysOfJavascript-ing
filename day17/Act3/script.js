//1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = {
  firstName: "Prime",
  lastName: "Senpai",
  incomes: [99990000, 3234233, 344554, 88766857, 9878798797, 46564, 5467543564],
  expenses: [1100, 32435, 525, 564, 54786, 234],
  totalIncomes: function () {
    let sum = 0;
    for (let i = 0; i < this.incomes.length; i++) {
      sum += this.incomes[i];
    }
    return sum;
  },
  totalExpenses: function () {
    let sum = 0;
    for (let i = 0; i < this.expenses.length; i++) {
      sum += this.expenses[i];
    }
    return sum;
  },
  accountInfo: function () {
    return `${this.firstName} ${this.lastName} incomes are ${
      this.incomes
    }, expenses ${
      this.expenses
    }. he has a total income of ${this.totalIncomes()} and total expenses of ${this.totalExpenses()} which leaves him with an Account balance of ${this.accountBalance()}`;
  },
  addIncome: function (x) {
    this.incomes.push(x);
    return this.incomes;
  },
  addExpenses: function (y) {
    this.expenses.push(y);
    return this.expenses;
  },
  accountBalance: function () {
    ac = this.totalIncomes() - this.totalExpenses();
    return ac;
  },
};
console.log(personAccount.totalIncomes());
console.log(personAccount.totalExpenses());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome(1000000));
console.log(personAccount.addExpenses(1000));
console.log(personAccount.accountBalance());
personAccountJSON = JSON.stringify(personAccount);
console.log(personAccountJSON);
localStorage.setItem("personAccount", personAccountJSON);
console.log(localStorage);
