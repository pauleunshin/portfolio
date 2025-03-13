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

/* Button */
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/* User Name Change */
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

  myButton.addEventListener("click", () => {
    setUserName();
  });

  