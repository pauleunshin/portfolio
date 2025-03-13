const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

/* Logo Image Changer */
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logo.png") {
    myImage.setAttribute("src", "images/logo.jpg");
  } else {
    myImage.setAttribute("src", "images/logo.png");
  }
});


/* Change user button */
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/* Greeting User */
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }