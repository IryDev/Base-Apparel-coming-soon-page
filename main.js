import "./scss/main.scss";
import Typed from "typed.js";
import hero from "./assets/hero1.avif";
import hero2 from "./assets/hero2.avif";
import arrow from "./assets/icon-arrow.svg";
import logo from "./assets/logo.webp";

document.querySelector("#app").innerHTML = `
    <header class="mobile-header">
      <img class="logo" src="${logo}" alt="logo" width=158px height=33px>
    </header>
    
    <main>
    
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
    
          <h1><span class="were">WE'RE</span> <br> <span class="typed-text"></h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date
            width announcements and our launch deals.
          </p>
    
          <div class="form-container">
            <form method="post" novalidate>
    
              <input type="email" placeholder="Email Address" aria-label="Email Address" required>

                <button type="submit" class="submit" aria-label="Subscribe">
                  <img src="${arrow}" alt="arrow">
                </button>
            </form>
    
            <p class="post-success" aria-live="polite" aria-describedby="success-description">
              Thank you for subscribing!
            </p>

            <p class="error__text" aria-live="assertive" aria-describedby="error-description">
              Please provide a valid email
            </p>
          </div>
        </div>
      </div>

      <div class="hero-desktop" style="background-image: url(${hero})">
      </div>


      <div class="overlay-mobile">
      </div>
      <div class="hero-mobile" style="background-image:url(${hero})">
      </div>
    </main>
`;

const typed = new Typed(".typed-text", {
  strings: ["Coming Soon"],
  typeSpeed: 250,
  showCursor: false,
});

const errorText = document.querySelector(".error__text");
const form = document.querySelector("form");
const input = document.querySelector("input");
const successPost = document.querySelector(".post-success");

form.addEventListener("submit", validate);

form.addEventListener("input", () => {
  errorText.style.display = "none";
});

function validate(e) {
  e.preventDefault();
  const inputValue = input.value;

  if (inputValue === "") {
    errorText.style.display = "block";
  } else if (!isEmail(inputValue)) {
    errorText.style.display = "block";
  } else {
    errorText.style.display = "none";
    form.style.display = "none";
    successPost.style.display = "block";
  }
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

const heroImage = document.querySelector(".hero-desktop");
const heroMobile = document.querySelector(".hero-mobile");
const images = [hero, hero2];
let currentImageIndex = 0;

function toggleImagesWithOpacityAnimation() {
  heroImage.style.opacity = 0;
  heroMobile.style.opacity = 0;
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroImage.style.backgroundImage = `url(${images[currentImageIndex]})`;
    heroMobile.style.backgroundImage = `url(${images[currentImageIndex]})`;
    heroMobile.style.opacity = 1;
    heroImage.style.opacity = 1;
  }, 500);
}

setInterval(toggleImagesWithOpacityAnimation, 5000);
