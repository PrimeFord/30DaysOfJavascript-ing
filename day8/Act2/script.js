const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//1.Find the person who has many skills in the users object.
let newSkills = Object.entries(users);
for (let i = 0; i <= newSkills.length; i++) {
  if (newSkills[i][1].skills.length > 3) {
    console.log(newSkills[i][0]);
  }
}

//2.Count logged in users, count users having greater than equal to 50 points from the following object.
let newArray = Object.entries(users);
for (let i = 0; i <= newArray.length; i++) {
  if (newArray[i][1].isLoggedIn == true) {
    console.log(newArray[i][0]);
  }
}

//3.Find people who are MERN stack developer from the users object
let newSkill = Object.entries(users);
for (let i = 0; i <= newSkill.length; i++) {
  if (
    newSkill[i][1].skills.includes("MongoDB", "Express", "React", "Node") ==
    true
  ) {
    console.log(newSkill[i][0]);
  }
}

//4.Set your name in the users object without modifying the original users object
const userme = Object.assign({}, users);
userme.Prime = {
  email: "bashfordbash.com",
  skills: ["HTML", "CSS", "JavaScript"],
  age: 25,
  isLoggedIn: true,
  points: 70,
};
console.log(userme);

//5.Get all keys or properties of users object
const usersKey = Object.keys(users);
console.log(usersKey);

//6.Get all the values of users object
const usersValue = Object.values(users);
console.log(usersValue);

//7.Use the countries object to print a country name, capital, populations and languages.
