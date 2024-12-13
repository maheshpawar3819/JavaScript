let head = document.getElementById("heading");
head.style.color = "red";

let headContent = document.getElementById("head");
headContent.innerHTML = "Hello";

let button = document.getElementById("btn");

function addHeading() {
  let newHeading = document.createElement("h1");
  newHeading.innerText = "Hello World!!";
  document.body.appendChild(newHeading);
}

button.addEventListener("click", addHeading);
