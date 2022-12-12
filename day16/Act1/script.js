//1. Change skills array to JSON using JSON.stringify()
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let skill = JSON.stringify(skills, undefined, 4);
console.log(skill);

//2. Stringify the age variable
let age = 250;
let ages = JSON.stringify(age);
console.log(ages);

//3. Stringify the isMarried variable
let isMarried = true;
let isMarriedd = JSON.stringify(isMarried);
console.log(isMarriedd);

//4. Stringify the student object
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

let stuents = JSON.stringify(student);
console.log(stuents);
