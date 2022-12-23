//1. Generating the keyboard code code using even listener. The image below.

const bodyEl = document.querySelector("body");
bodyEl.style.width = "100vw";
bodyEl.style.height = "100vh";
bodyEl.style.fontFamily = "Segoe UI";
bodyEl.style.cursor = "pointer";
bodyEl.style.overflowX = "hidden";
bodyEl.style.display = "flex";
bodyEl.style.flexDirection = "column";
bodyEl.style.justifyContent = "center";
bodyEl.style.alignItems = "center";

const h1El = document.createElement("h1");
h1El.textContent = "Press any Keyboard Key";

h1El.style.textAlign = "center";
h1El.style.fontSize = "2.5rem";
h1El.style.margin = "0 auto";
h1El.style.padding = ".5rem 2rem";
h1El.style.fontWeight = "600";
h1El.style.textShadow = "0.1rem 0.1rem 0.2rem #727272";
h1El.style.boxShadow = "0 0 0.5rem 0 gray";
h1El.style.fontWeight = "600";
h1El.style.width = "max-content";

const h1E = document.createElement("h1");
bodyEl.addEventListener("keydown", (e) => {
  //   h1El.textContent = "";
  h1El.innerHTML = `You Pressed `;
  spanEl = document.createElement("span");
  spanEl.textContent = e.key;
  spanEl.style.fontSize = "2.5rem";
  spanEl.style.textShadow = "0.1rem 0.1rem 0.2rem #727272";
  spanEl.style.color = "#5bbc7a";
  h1El.appendChild(spanEl);

  h1E.textContent = e.keyCode;
  h1E.style.width = "max-content";
  h1E.style.textAlign = "center";
  h1E.style.fontSize = "5rem";
  h1E.style.margin = "1rem auto";
  h1E.style.padding = ".5rem 2rem";
  h1E.style.boxShadow = "0 0 0.5rem 0 gray";
  h1E.style.textShadow = "0.1rem 0.1rem 0.2rem #727272";
  h1E.style.fontWeight = "600";
  h1E.style.color = "#5bbc7a";
});

bodyEl.appendChild(h1El);
bodyEl.appendChild(h1E);
