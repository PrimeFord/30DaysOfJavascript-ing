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
    for (let i = 0; i < incomes.length; i++) {
      sum += incomes[i];
    }
    return sum;
  };
  totalExpenses = () => {
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
      sum += expenses[i];
    }
    return sum;
  };
  accountInfo = () => {
    return `${firstName} ${lastName} incomes are ${incomes}, expenses ${expenses}. he has a total income of ${totalIncomes()} and total expenses of ${totalExpenses()} which leaves him with an Account balance of ${accountBalance()}`;
  };
  addIncome = (x) => {
    incomes.push(x);
    return incomes;
  };
  addExpenses = (y) => {
    expenses.push(y);
    return expenses;
  };
  accountBalance = () => {
    ac = totalIncomes() - totalExpenses();
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
    addIncome: addIncome(1000000),
    addExpenses: addExpenses(1000),
    accountBalance: accountBalance(),
  };
};
const personalAccount = personAccount();
console.log(personalAccount.firstName);
console.log(personalAccount.lastName);
console.log(personalAccount.incomes);
console.log(personalAccount.expenses);
console.log(personalAccount.totalIncomes);
console.log(personalAccount.totalExpenses);
console.log(personalAccount.accountInfo);
console.log(personalAccount.addIncome);
console.log(personalAccount.addExpenses);
console.log(personalAccount.accountBalance);
