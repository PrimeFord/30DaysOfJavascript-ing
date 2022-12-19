//1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const para = document.querySelector("p");
console.log(para);

//2. Get each of the the paragraph using document.querySelector('#id') and by their id
const paraone = document.querySelector("#one");
console.log(paraone);
const paratwo = document.querySelector("#two");
console.log(paratwo);
const parathree = document.querySelector("#three");
console.log(parathree);
const parafour = document.querySelector("#four");
console.log(parafour);

//3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const pall = document.querySelectorAll("p");
console.log(pall);

//4. Loop through the nodeList and get the text content of each paragraph
for (let i = 0; i <= pall.length; i++) {
  pall[i];
}

//5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
pall[3].textContent = "Fourth Paragraph";

//6. Set id and class attribute for all the paragraphs using different attribute setting methods
pall[0].className = "paraclass1";
pall[0].setAttribute("id", "first");

pall[1].setAttribute("class", "paraclass2");
pall[1].id = "second";

pall[2].className = "paraclass3";
pall[2].id = "third";

pall[3].setAttribute("class", "paraclass4");
pall[3].setAttribute("id", "fourth");
