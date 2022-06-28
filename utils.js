const userLogIn = prompt("Ciao! Inserisci il tuo nome utente");
const textNav = document.getElementById("textNav")
textNav.innerText = userLogIn;
try {
  if (textNav.innerText == "") throw new Error("Input username vuoto");
  if (!localStorage.getItem("username")) {
    localStorage.setItem("username", userLogIn);
  }
} catch (error) {
  alert("Non hai inserito il nome utente");
  throw new Error("Input username vuoto");
}

let count1 = document.getElementById("textCount");
let count2 = document.getElementById("textCount2");



const newEl = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const createCard = (parent, imgLink, title, price) => {
  const wrapperEl = newEl("div");
  const titleEl = newEl("h3");
  const priceEl = newEl("p");
  const imgEl = newEl("img");

  wrapperEl.className = "wrapper";
  titleEl.className = "title";
  priceEl.className = "price";
  imgEl.className = "img";

  imgEl.setAttribute("alt", title);
  imgEl.setAttribute("src", imgLink);

  titleEl.textContent = title;
  priceEl.textContent = price;

  wrapperEl.append(imgEl, titleEl, priceEl);
  parent.appendChild(wrapperEl);
};

export { createCard, q , count1, count2};
