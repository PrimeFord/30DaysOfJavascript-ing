const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges in",
  challengeTitle: "Asabeneh Yetayeh",
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
      "📖 MSc. Computer Science Ongoing",
      "👨🏾‍🎓 BSc. Information and Communication Eng.",
      "👩🏾‍🎓 MSc. Food Technology",
      "👨🏾‍🎓 BSc.Food Technology",
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
      "✅ Web Development",
      "✅ Data Analysis",
      "✅ Data Visualization",
      "✅ Programming",
      "✅ Databases",
      "✅ Developing API",
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
bodyEl.style.overflowX = "hidden";

const divEl = document.createElement("div");
divEl.style.width = "60%";
divEl.style.margin = "auto";
bodyEl.appendChild(divEl);

const h1El = document.createElement("h1");
h1El.textContent = asabenehChallenges2020.description + " ";

spanEl = document.createElement("span");
spanEl.textContent = "2020";
spanEl.style.fontSize = "4rem";
h1El.appendChild(spanEl);

h1El.style.textAlign = "center";
h1El.style.fontSize = "2rem";
h1El.style.margin = "auto";
h1El.style.margin = "auto";
h1El.style.fontWeight = "600";
divEl.appendChild(h1El);

h2El = document.createElement("h2");
h2El.textContent = asabenehChallenges2020.challengeSubtitle;
h2El.style.textAlign = "center";
h2El.style.fontSize = "1.3rem";
h2El.style.margin = "0 auto 1rem";
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

for (let i = 0; i <= 7; i++) {
  const liEl = document.createElement("li");
  liEl.textContent = "";
  uEl.appendChild(liEl);
}
uEl.style.listStyleType = "none";
uEl.style.listStylePosition = "outside";
divEl.appendChild(uEl);

const list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
  list[i].style.background = "#eb695b";
  // list[i].style.listStyle = "none";
  list[i].style.width = "100%";
  list[i].style.marginBottom = "0.2rem";
  list[i].style.padding = "0.3rem 1.5rem";
  list[i].style.fontSize = "0.8rem";
  list[i].style.display = "flex";
  // list[i].style.position = "relative";
  //   list[i].style.justifyContent = "space-between";
  list[i].style.alignItems = "center";
  list[0].style.background = "#5bb67a";
  list[1].style.background = "#f7dc5c";
}

//for list 1
const one1 = document.createElement("p");
one1.textContent = asabenehChallenges2020.challenges[0].name;
one1.style.width = "18rem";
one1.style.textDecoration = "underline";
one1.style.color = "purple";
list[0].appendChild(one1);
//for summary nd details
const one2 = document.createElement("details");
const od = document.createElement("summary");
od.textContent = asabenehChallenges2020.challenges[0].topics[0];
one2.appendChild(od);
const op1 = document.createElement("p");
op1.textContent = asabenehChallenges2020.challenges[0].topics[0];
one2.appendChild(op1);
const op2 = document.createElement("p");
op2.textContent = asabenehChallenges2020.challenges[0].topics[1];
one2.appendChild(op2);
const op3 = document.createElement("p");
op3.textContent = asabenehChallenges2020.challenges[0].topics[2];
one2.appendChild(op3);
const op4 = document.createElement("p");
op4.textContent = asabenehChallenges2020.challenges[0].topics[3];
one2.appendChild(op4);
const op5 = document.createElement("p");
op5.textContent = asabenehChallenges2020.challenges[0].topics[4];
one2.appendChild(op5);
const op6 = document.createElement("p");
op6.textContent = asabenehChallenges2020.challenges[0].topics[5];
one2.appendChild(op6);
const op7 = document.createElement("p");
op7.textContent = asabenehChallenges2020.challenges[0].topics[6];
one2.appendChild(op7);
one2.style.flexGrow = "1";
list[0].appendChild(one2);
//for status
const one3 = document.createElement("p");
one3.textContent = asabenehChallenges2020.challenges[0].status;
list[0].appendChild(one3);

//for list 2
const two1 = document.createElement("p");
two1.textContent = asabenehChallenges2020.challenges[1].name;
two1.style.width = "18rem";
two1.style.textDecoration = "underline";
two1.style.color = "purple";
list[1].appendChild(two1);
//for summary nd details
const two2 = document.createElement("details");
const od1 = document.createElement("summary");
od1.textContent = asabenehChallenges2020.challenges[1].topics[0];
two2.appendChild(od1);

const op10 = document.createElement("p");
op10.textContent = asabenehChallenges2020.challenges[1].topics[0];
two2.appendChild(op10);
const op20 = document.createElement("p");
op20.textContent = asabenehChallenges2020.challenges[1].topics[1];
two2.appendChild(op20);
const op30 = document.createElement("p");
op30.textContent = asabenehChallenges2020.challenges[1].topics[2];
two2.appendChild(op30);
const op40 = document.createElement("p");
op40.textContent = asabenehChallenges2020.challenges[1].topics[3];
two2.appendChild(op40);
const op50 = document.createElement("p");
op50.textContent = asabenehChallenges2020.challenges[1].topics[4];
two2.appendChild(op50);
const op60 = document.createElement("p");
op60.textContent = asabenehChallenges2020.challenges[1].topics[5];
two2.appendChild(op60);
const op70 = document.createElement("p");
op70.textContent = asabenehChallenges2020.challenges[1].topics[6];
two2.appendChild(op70);
two2.style.flexGrow = "1";
list[1].appendChild(two2);
//for status
const two3 = document.createElement("p");
two3.textContent = asabenehChallenges2020.challenges[1].status;
list[1].appendChild(two3);

//for list 3
const thr1 = document.createElement("p");
thr1.textContent = asabenehChallenges2020.challenges[2].name;
thr1.style.width = "18rem";
list[2].appendChild(thr1);
//for summary nd details
const thr2 = document.createElement("details");
const od3 = document.createElement("summary");
od3.textContent = asabenehChallenges2020.challenges[2].topics[0];
thr2.appendChild(od3);

const op11 = document.createElement("p");
op11.textContent = asabenehChallenges2020.challenges[2].topics[0];
thr2.appendChild(op11);
const op21 = document.createElement("p");
op21.textContent = asabenehChallenges2020.challenges[2].topics[1];
thr2.appendChild(op21);
const op31 = document.createElement("p");
op31.textContent = asabenehChallenges2020.challenges[2].topics[2];
thr2.appendChild(op31);
const op41 = document.createElement("p");
op41.textContent = asabenehChallenges2020.challenges[2].topics[3];
thr2.appendChild(op41);
const op51 = document.createElement("p");
op51.textContent = asabenehChallenges2020.challenges[2].topics[4];
thr2.appendChild(op51);
const op61 = document.createElement("p");
op61.textContent = asabenehChallenges2020.challenges[2].topics[5];
thr2.appendChild(op61);
const op71 = document.createElement("p");
op71.textContent = asabenehChallenges2020.challenges[2].topics[6];
thr2.appendChild(op71);
thr2.style.flexGrow = "1";
list[2].appendChild(thr2);
//for status
const thr3 = document.createElement("p");
thr3.textContent = asabenehChallenges2020.challenges[2].status;
list[2].appendChild(thr3);

//for list 4
const for1 = document.createElement("p");
for1.textContent = asabenehChallenges2020.challenges[3].name;
for1.style.width = "18rem";
list[3].appendChild(for1);
//for summary nd details
const for2 = document.createElement("details");
const od4 = document.createElement("summary");
od4.textContent = asabenehChallenges2020.challenges[3].topics[0];
thr2.appendChild(od4);

const op12 = document.createElement("p");
op12.textContent = asabenehChallenges2020.challenges[3].topics[0];
for2.appendChild(op12);
const op22 = document.createElement("p");
op22.textContent = asabenehChallenges2020.challenges[3].topics[1];
for2.appendChild(op22);
const op32 = document.createElement("p");
op32.textContent = asabenehChallenges2020.challenges[3].topics[2];
for2.appendChild(op32);
const op42 = document.createElement("p");
op42.textContent = asabenehChallenges2020.challenges[3].topics[3];
for2.appendChild(op42);
const op52 = document.createElement("p");
op52.textContent = asabenehChallenges2020.challenges[3].topics[4];
for2.appendChild(op52);
const op62 = document.createElement("p");
op62.textContent = asabenehChallenges2020.challenges[3].topics[5];
for2.appendChild(op62);
const op72 = document.createElement("p");
op72.textContent = asabenehChallenges2020.challenges[3].topics[6];
for2.appendChild(op72);
for2.style.flexGrow = "1";
list[3].appendChild(for2);
//for status
const for3 = document.createElement("p");
for3.textContent = asabenehChallenges2020.challenges[3].status;
list[3].appendChild(for3);

//for list 5
const fiv1 = document.createElement("p");
fiv1.textContent = asabenehChallenges2020.challenges[4].name;
fiv1.style.width = "18rem";
list[4].appendChild(fiv1);
//for summary nd details
const fiv2 = document.createElement("details");
const od5 = document.createElement("summary");
od5.textContent = asabenehChallenges2020.challenges[4].topics[0];
fiv2.appendChild(od5);

const op13 = document.createElement("p");
op13.textContent = asabenehChallenges2020.challenges[4].topics[0];
fiv2.appendChild(op13);
const op23 = document.createElement("p");
op23.textContent = asabenehChallenges2020.challenges[4].topics[1];
fiv2.appendChild(op23);
const op33 = document.createElement("p");
op33.textContent = asabenehChallenges2020.challenges[4].topics[2];
fiv2.appendChild(op33);
const op43 = document.createElement("p");
op43.textContent = asabenehChallenges2020.challenges[4].topics[3];
fiv2.appendChild(op43);
const op53 = document.createElement("p");
op53.textContent = asabenehChallenges2020.challenges[4].topics[4];
fiv2.appendChild(op53);
const op63 = document.createElement("p");
op63.textContent = asabenehChallenges2020.challenges[4].topics[5];
fiv2.appendChild(op63);
const op73 = document.createElement("p");
op73.textContent = asabenehChallenges2020.challenges[4].topics[6];
fiv2.appendChild(op73);
fiv2.style.flexGrow = "1";
list[4].appendChild(fiv2);
//for status
const fiv3 = document.createElement("p");
fiv3.textContent = asabenehChallenges2020.challenges[3].status;
list[4].appendChild(fiv3);

//for list 6
const six1 = document.createElement("p");
six1.textContent = asabenehChallenges2020.challenges[5].name;
six1.style.width = "18rem";
list[5].appendChild(six1);
//for summary nd details
const six2 = document.createElement("details");
const od6 = document.createElement("summary");
od6.textContent = asabenehChallenges2020.challenges[5].topics[0];
six2.appendChild(od6);

const op14 = document.createElement("p");
op14.textContent = asabenehChallenges2020.challenges[5].topics[0];
six2.appendChild(op14);
const op24 = document.createElement("p");
op24.textContent = asabenehChallenges2020.challenges[5].topics[1];
six2.appendChild(op24);
const op34 = document.createElement("p");
op34.textContent = asabenehChallenges2020.challenges[5].topics[2];
six2.appendChild(op34);
const op44 = document.createElement("p");
op44.textContent = asabenehChallenges2020.challenges[5].topics[3];
six2.appendChild(op44);
const op54 = document.createElement("p");
op54.textContent = asabenehChallenges2020.challenges[5].topics[4];
six2.appendChild(op54);
const op64 = document.createElement("p");
op64.textContent = asabenehChallenges2020.challenges[5].topics[5];
six2.appendChild(op64);
const op74 = document.createElement("p");
op74.textContent = asabenehChallenges2020.challenges[5].topics[6];
six2.appendChild(op74);
six2.style.flexGrow = "1";
list[5].appendChild(six2);
//for status
const six3 = document.createElement("p");
six3.textContent = asabenehChallenges2020.challenges[5].status;
list[5].appendChild(six3);

//for list 7
const sev1 = document.createElement("p");
sev1.textContent = asabenehChallenges2020.challenges[6].name;
sev1.style.width = "18rem";
list[6].appendChild(sev1);
//for summary nd details
const sev2 = document.createElement("details");
const od7 = document.createElement("summary");
od7.textContent = asabenehChallenges2020.challenges[6].topics[0];
sev2.appendChild(od7);

const op15 = document.createElement("p");
op15.textContent = asabenehChallenges2020.challenges[6].topics[0];
sev2.appendChild(op15);
const op25 = document.createElement("p");
op25.textContent = asabenehChallenges2020.challenges[6].topics[1];
sev2.appendChild(op25);
const op35 = document.createElement("p");
op35.textContent = asabenehChallenges2020.challenges[6].topics[2];
sev2.appendChild(op35);
const op45 = document.createElement("p");
op45.textContent = asabenehChallenges2020.challenges[6].topics[3];
sev2.appendChild(op45);
const op55 = document.createElement("p");
op55.textContent = asabenehChallenges2020.challenges[6].topics[4];
sev2.appendChild(op55);
const op65 = document.createElement("p");
op65.textContent = asabenehChallenges2020.challenges[6].topics[5];
sev2.appendChild(op65);
const op75 = document.createElement("p");
op75.textContent = asabenehChallenges2020.challenges[6].topics[6];
sev2.appendChild(op75);
sev2.style.flexGrow = "1";
list[6].appendChild(sev2);
//for status
const sev3 = document.createElement("p");
sev3.textContent = asabenehChallenges2020.challenges[6].status;
list[6].appendChild(sev3);

//for list 8
const eig1 = document.createElement("p");
eig1.textContent = asabenehChallenges2020.challenges[7].name;
eig1.style.width = "18rem";
list[7].appendChild(eig1);
//for summary nd details
const eig2 = document.createElement("details");
const od8 = document.createElement("summary");
od8.textContent = asabenehChallenges2020.challenges[7].topics[0];
eig2.appendChild(od8);

const op16 = document.createElement("p");
op16.textContent = asabenehChallenges2020.challenges[7].topics[0];
eig2.appendChild(op16);
const op26 = document.createElement("p");
op26.textContent = asabenehChallenges2020.challenges[7].topics[1];
eig2.appendChild(op26);
const op36 = document.createElement("p");
op36.textContent = asabenehChallenges2020.challenges[7].topics[2];
eig2.appendChild(op36);
const op46 = document.createElement("p");
op46.textContent = asabenehChallenges2020.challenges[7].topics[3];
eig2.appendChild(op46);
const op56 = document.createElement("p");
op56.textContent = asabenehChallenges2020.challenges[7].topics[4];
eig2.appendChild(op56);
const op66 = document.createElement("p");
op66.textContent = asabenehChallenges2020.challenges[7].topics[5];
eig2.appendChild(op66);
const op76 = document.createElement("p");
op76.textContent = asabenehChallenges2020.challenges[7].topics[6];
eig2.appendChild(op76);
eig2.style.flexGrow = "1";
list[7].appendChild(eig2);
//for status
const eig3 = document.createElement("p");
eig3.textContent = asabenehChallenges2020.challenges[7].status;
list[7].appendChild(eig3);

//after the table
const h1El2 = document.createElement("h1");
h1El2.textContent = asabenehChallenges2020.challengeTitle;
h1El2.style.margin = "auto";
h1El2.style.textAlign = "center";
h1El2.style.fontSize = "1.8rem";
h1El2.style.fontWeight = "600";
divEl.appendChild(h1El2);

const picon = document.createElement("p");

for (let i = 0; i < 3; i++) {
  const spanicon = document.createElement("span");
  spanicon.innerHTML = asabenehChallenges2020.author.socialLinks[i].social;
  spanicon.style.margin = "0 0.5rem";
  picon.appendChild(spanicon);
  picon.style.textAlign = "center";
  picon.style.margin = "auto";
  // picon.style.width = "100%";
  // picon.style.background = "red";
}
divEl.appendChild(picon);

const para = document.createElement("p");
para.textContent = asabenehChallenges2020.author.bio;
para.style.textAlign = "center";
para.style.margin = "auto";
para.style.marginTop = "2rem";
para.style.fontSize = "0.9rem";
picon.style.width = "100%";
divEl.appendChild(para);

//for title
const divtab = document.createElement("div");
const p1 = document.createElement("p");
const h3t = document.createElement("h3");
const h4t = Object.keys(asabenehChallenges2020.author);
h3t.textContent = h4t[2].charAt(0).toLocaleUpperCase() + h4t[2].slice(1);
p1.appendChild(h3t);
for (let i = 0; i < asabenehChallenges2020.author.titles.length; i++) {
  const pt = document.createElement("p");
  pt.textContent =
    asabenehChallenges2020.author.titles[i][0] +
    " " +
    asabenehChallenges2020.author.titles[i][1];
  pt.style.fontSize = "0.9rem";
  p1.appendChild(pt);
}
divtab.appendChild(p1);
//for skills
const p2 = document.createElement("p");
const h3t2 = document.createElement("h3");
const h4t2 = Object.keys(asabenehChallenges2020.author);
h3t2.textContent = h4t2[5].charAt(0).toLocaleUpperCase() + h4t2[5].slice(1);
p2.appendChild(h3t2);
for (let i = 0; i < asabenehChallenges2020.author.titles.length; i++) {
  const pt = document.createElement("p");
  pt.textContent = asabenehChallenges2020.author.skills[i];
  p2.appendChild(pt);
}
divtab.appendChild(p2);
//for qualifications
const p3 = document.createElement("p");
const h3t3 = document.createElement("h3");
const h4t3 = Object.keys(asabenehChallenges2020.author);
h3t3.textContent = h4t3[3].charAt(0).toLocaleUpperCase() + h4t3[3].slice(1);
p3.appendChild(h3t3);
for (let i = 0; i < asabenehChallenges2020.author.titles.length; i++) {
  const pt = document.createElement("p");
  pt.textContent = asabenehChallenges2020.author.qualifications[i];
  p3.appendChild(pt);
}
divtab.appendChild(p3);

divtab.style.display = "flex";
divtab.style.justifyContent = "space-between";
divEl.appendChild(divtab);

//for Keywords
const divk = document.createElement("div");
// const p3 = document.createElement("p");
const h3tk = document.createElement("h3");
const h4tk = Object.keys(asabenehChallenges2020);
h3tk.textContent = h4tk[4].charAt(0).toLocaleUpperCase() + h4tk[4].slice(1);
divk.appendChild(h3tk);
const pk = document.createElement("p");
for (let i = 0; i < asabenehChallenges2020.keywords.length; i++) {
  const pt = document.createElement("p");
  pt.textContent = `# ${asabenehChallenges2020.keywords[i]}`;
  pt.style.width = "max-content";
  pt.style.margin = "0.2rem .6rem";
  pt.style.padding = ".3rem .7rem .3rem .5rem";
  pt.style.borderRadius = "1rem";
  pt.style.fontWeight = "500";
  pt.style.fontStyle = "italic";
  pt.style.background = "#" + Math.random().toString(16).substr(2, 6);
  pk.style.width = "100%";
  pk.style.display = "flex";
  pk.style.flexWrap = "wrap";
  pk.style.justifyItems = "justify";
  pk.style.textAlign = "center";
  pk.style.margin = "auto";

  pk.appendChild(pt);
}

divk.style.margin = "auto";

divk.appendChild(pk);
divEl.appendChild(divk);
