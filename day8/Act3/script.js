//1.Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

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

//2.**** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

//Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(id, username, email, password, createdAt, isLoggedIn) {
  let newArr = Object.values(users);
  for (const c of newArr) {
    if (c._id.includes(id) == true) {
      return "You aready have an account";
    }
  }
  users.push({
    _id: `${id}`,
    username: `${username}`,
    email: `${email}`,
    password: `${password}`,
    createdAt: `${createdAt}`,
    isLoggedIn: `${isLoggedIn}`,
  });
  console.log(users);
}
signUp("ab12ex", "tv", "tv", "tv", "tv", true);

//b. Create a function called signIn which allows user to sign in to the application
function signIn(username, password) {
  let newArr = Object.values(users);
  for (const c of newArr) {
    if (c.username == username && c.password == password) {
      return "You are logged in";
    }
  }
  return "Incorrect Username or Password";
}
console.log(signIn("tv", "tv"));

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

//3.The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product
ratingX = [];
function ratings() {
  let product = Object.values(products);
  for (const c of product) {
    let b = c.ratings;
    for (const r of b) {
      rate = Object.values(r);
      ratingX.push(rate[1]);
    }
  }
  console.log(ratingX);
}

ratings();

//b. Create a function called averageRating which calculate the average rating of a product
sumRating = ratingX.reduce((acc, cur) => acc + cur, 0);
averageRating = sumRating / ratingX.length;
console.log(averageRating);

//4.Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function ratings(x) {
  let product = Object.values(products);
  for (let c = 0; c <= product.length; c++) {
    let like = product[c];
    let likeA = Object.values(like);
    if (likeA[5] == []) {
      like.push(x);
    }
    like.pop();
  }
  return like;
}
console.log(ratings("fg12cy"));
