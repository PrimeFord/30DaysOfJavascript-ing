const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges",
  challengeTitle: "Asabeneh Yetayeh challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
      "MSc. Computer Science Ongoing",
      "BSc. Information and Communication Eng.",
      "MSc. Food Technology",
      "BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};

//1. Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.

bodyEl = document.querySelector("body");
bodyEl.style.width = "100vw";
bodyEl.style.fontFamily = "Segoe UI";
bodyEl.style.cursor = "pointer";
// bodyEl.style.overflow = "hidden";

const divEl = document.createElement("div");
divEl.style.width = "50%";
divEl.style.margin = "auto";
bodyEl.appendChild(divEl);

const h1El = document.createElement("h1");
h1El.textContent = "Asabeneh Yetayeh challenges in ";

spanEl = document.createElement("span");
spanEl.textContent = "2020";
spanEl.style.fontSize = "3rem";
h1El.appendChild(spanEl);

h1El.style.textAlign = "center";
h1El.style.fontSize = "1.5rem";
divEl.appendChild(h1El);

h2El = document.createElement("h2");
h2El.textContent = "30DaysOfJavaScript:DOM Day 2";
h2El.style.textAlign = "center";
h2El.style.fontSize = "2rem";
h2El.style.textDecoration = "underline";
h2El.style.fontWeight = "100";
divEl.appendChild(h2El);

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let hr = hour < 10 ? `0${hour}` : hour;
let mi = min < 10 ? `0${min}` : min;
let se = sec < 10 ? `0${sec}` : sec;
let date = `${monthNames[month]} ${day}, ${year} ${hr}:${mi}:${se}`;
console.log(date);

pEl = document.createElement("p");
pEl.innerHTML = date;
pEl.style.fontSize = "0.8rem";
pEl.style.textAlign = "center";
pEl.style.margin = "auto";
pEl.style.padding = "0.3rem 1rem";
pEl.style.width = "max-content";
pEl.style.background = "pink";

const randBg = () => {
  spanEl.style.color = "#" + Math.random().toString(16).substr(2, 6);
  pEl.style.background = "#" + Math.random().toString(16).substr(2, 6);
};
setInterval(randBg, 1000);
divEl.appendChild(pEl);

const uEl = document.createElement("ul");

const liEl1 = document.createElement("li");
liEl1.textContent = "30DaysOfPython Challenge Done";
uEl.appendChild(liEl1);

const liEl = document.createElement("li");
liEl.textContent = "30DaysOfJavaScript Challenge Ongoing";
uEl.appendChild(liEl);

liEl.textContent = "30DaysOfReact Challenge Coming";
liEl.textContent = "30DaysOfFullStack Challenge Coming";
liEl.textContent = "30DaysOfDataAnalysis Challenge Coming";
liEl.textContent = "30DaysOfReactNative Challenge Coming";
liEl.textContent = "30DaysOfMachineLearning Challenge Coming";

for (let i = 0; i < liEl.length; i++) {
  liEl[i].style.background = "#eb695b";
  liEl[i].style.listStyle = "none";
  liEl[i].style.marginBottom = "0.2rem";
  liEl[i].style.padding = "0.8rem";
  liEl[i].style.fontSize = "0.8rem";
  liEl[0].style.background = "#5bb67a";
  liEl[1].style.background = "#f7dc5c";
}

divEl.appendChild(uEl);
