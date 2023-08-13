import "./scss/main.scss";
import Typed from "typed.js";
import hero from "./assets/hero.png";
import arrow from "./assets/icon-arrow.svg";
import error from "./assets/icon-error.png";
import logo from "./assets/logo.png";

document.querySelector("#app").innerHTML = `
  <div class="background-img" style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.12)),
    url(${hero}) no-repeat center; background-size: cover;">
    </div>
    
    <header class="mobile-header">
      <img class="logo" src="${logo}" alt="logo">
    </header>
    
    <main>
      <div class="hero-desktop" style="background: url(${hero}) no-repeat center; background-size: cover;">
      </div>
    
      <div class="main-container">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
    
        <div class="rectangle"></div>
        <div class="rectangle2"></div>
    
        <header class="desktop-header">
          <img class="logo" src="${logo}" alt="logo">
        </header>
    
        <div class="main__content">
    
          <h1 class="wave-text"><span class="were">WE'RE</span> <br> <span class="typed-text"></h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date
            width annoucements and our launch deals.
          </p>
    
          <div class="form-container">
            <form method="post">
    
              <input type="email" placeholder="Email Address">
    
              <div>
                <img class="error__img" src="${error}" alt="error">
    
                <button type="submit" class="submit">
                  <img src="${arrow}" alt="arrow">
                </button>
              </div>
    
            </form>
    
            <p class="post-success">
              Thank you for subscribing!
            </p>
            <p class="error__text">
              Please provide a valid email</p>
          </div>
        </div>
      </div>
    </main>
`;

const typed = new Typed(".typed-text", {
  strings: ["Coming Soon"],
  typeSpeed: 250,
  showCursor: false,
});

const errorText = document.querySelector(".error__text");
const errorImg = document.querySelector(".error__img");
const form = document.querySelector("form");
const input = document.querySelector("input");
const successPost = document.querySelector(".post-success");

form.addEventListener("submit", validate);

form.addEventListener("input", () => {
  errorImg.style.display = "none";
  errorText.style.display = "none";
  form.style.border = "0.1px solid #e7d4a3";
});

function validate(e) {
  e.preventDefault();
  const inputValue = input.value;

  if (inputValue === "") {
    errorImg.style.display = "block";
    errorText.style.display = "block";
    form.style.border = "2px solid #dc0038";
  } else if (!isEmail(inputValue)) {
    errorImg.style.display = "block";
    errorText.style.display = "block";
  } else {
    errorImg.style.display = "none";
    errorText.style.display = "none";
    form.style.border = "0.1px solid #e7d4a3";
    form.style.display = "none";
    successPost.style.display = "block";
  }
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
