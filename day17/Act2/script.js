//1.Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
  firstName: "Prime",
  lastName: "Senpai",
  age: 25,
  skills: [Html, Css, Javascript, react],
  country: "Primeria",
};

studentJSON = JSON.stringify(student);
console.log(studentJSON);
localStorage.setItem("student", studentJSON);
console.log(localStorage);
localStorage.key(localStorage);
