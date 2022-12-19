//1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const pall = document.querySelectorAll("p");
console.log(pall);

for (let i = 0; i < pall.length; i++) {
  pall[i].style.color = "pink";
  pall[i].style.background = "purple";
  pall[i].style.border = "2px solid aqua";
  pall[i].style.fontSize = "1.5rem";
  pall[i].style.fontFamily = "monospace";
}

//2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
for (let i = 0; i < pall.length; i++) {
  if (i % 2 === 0) {
    pall[i].style.color = "green";
  } else {
    pall[i].style.color = "red";
  }
}

//3. Set text content, id and class to each paragraph
pall[0].textContent = "First Paragraph";
pall[1].textContent = "Second Paragraph";
pall[2].textContent = "Third Paragraph";
pall[3].textContent = "Fourth Paragraph";

pall[0].className = "paraclass1";
pall[0].setAttribute("id", "first");

pall[1].setAttribute("class", "paraclass2");
pall[1].id = "second";

pall[2].className = "paraclass3";
pall[2].id = "third";

pall[3].setAttribute("class", "paraclass4");
pall[3].setAttribute("id", "fourth");
