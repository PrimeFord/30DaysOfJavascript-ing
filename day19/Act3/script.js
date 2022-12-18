//1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = () => {
  let firstName = "Prime";
  let lastName = "Senpai";
  let incomes = [
    99990000, 3234233, 344554, 88766857, 9878798797, 46564, 5467543564,
  ];
  let expenses = [1100, 32435, 525, 564, 54786, 234];
  totalIncomes = () => {
    let sum = 0;
    for (let i = 0; i < this.incomes.length; i++) {
      sum += this.incomes[i];
    }
    return sum;
  };
  totalExpenses = () => {
    let sum = 0;
    for (let i = 0; i < this.expenses.length; i++) {
      sum += this.expenses[i];
    }
    return sum;
  };
  accountInfo = () => {
    return `${this.firstName} ${this.lastName} incomes are ${
      this.incomes
    }, expenses ${
      this.expenses
    }. he has a total income of ${this.totalIncomes()} and total expenses of ${this.totalExpenses()} which leaves him with an Account balance of ${this.accountBalance()}`;
  };
  addIncome = (x) => {
    this.incomes.push(x);
    return this.incomes;
  };
  addExpenses = (y) => {
    this.expenses.push(y);
    return this.expenses;
  };
  accountBalance = () => {
    ac = this.totalIncomes() - this.totalExpenses();
    return ac;
  };
  return {
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    incomes: `${incomes}`,
    expenses: `${expenses}`,
    totalIncomes: totalIncomes(),
    totalExpenses: totalExpenses(),
    accountInfo: accountInfo(),
    addIncome: addIncome(),
    addExpenses: addExpenses(),
    accountBalance: accountBalance(),
  };
};
const personalAccount = personAccount();
console.log(personalAccount.firstName());
console.log(personalAccount.lastName());
console.log(personalAccount.incomes());
console.log(personalAccount.expenses());
console.log(personalAccount.totalIncomes());
console.log(personalAccount.totalExpenses());
console.log(personalAccount.accountInfo());
console.log(personalAccount.addIncome(1000000));
console.log(personalAccount.addExpenses(1000));
console.log(personalAccount.accountBalance());
