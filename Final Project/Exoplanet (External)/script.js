// // Navigation bar transition when scrolling

const navbar = document.querySelector("#header");
const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    navbar.classList.add("header--dark");
    scrollUp.classList.add("show");
    scrollUp.classList.remove("hide");
  } else {
    navbar.classList.remove("header--dark");
    scrollUp.classList.add("hide");
    scrollUp.classList.remove("show");
  }
});

// Show and Hide Quiz
var quizContainer = document.getElementById("quiz-container");
var exitBtn = document.getElementById("exit-btn");
var startQuiz = document.getElementById("start-quiz");
var header = document.getElementById("header");
var scrollUp = document.getElementById("scroll-up");
var planetInfo = document.getElementsByClassName("planet-info");
var wasp = document.getElementById("wasp");
var proxima = document.getElementById("proxima");
var gliese = document.getElementById("gliese");
var trappist = document.getElementById("trappist");
var burgerMenu = document.getElementById("burger-menu");
var navBar = document.getElementById("nav__bar");

function showNavBar() {
  exitBtn.classList.add("show");
  exitBtn.classList.remove("hide");

  navBar.classList.add("show-nav__bar");

  burgerMenu.classList.add("hide");
}

function showQuiz() {
  quizContainer.classList.add("show");
  quizContainer.classList.remove("hide");

  header.classList.add("hide");
  header.classList.remove("show");

  scrollUp.classList.add("hide");
  scrollUp.classList.remove("show");

  exitBtn.classList.add("show");
  exitBtn.classList.remove("hide");
}

function showWasp() {
  header.classList.add("hide");
  header.classList.remove("show");

  exitBtn.classList.add("show");
  exitBtn.classList.remove("hide");

  scrollUp.classList.add("hide");
  scrollUp.classList.remove("show");

  wasp.classList.add("show");
  wasp.classList.remove("hide");
}

function showProxima() {
  header.classList.add("hide");
  header.classList.remove("show");

  exitBtn.classList.add("show");
  exitBtn.classList.remove("hide");

  scrollUp.classList.add("hide");
  scrollUp.classList.remove("show");

  proxima.classList.add("show");
  proxima.classList.remove("hide");
}

function showGliese() {
  header.classList.add("hide");
  header.classList.remove("show");

  exitBtn.classList.add("show");
  exitBtn.classList.remove("hide");

  scrollUp.classList.add("hide");
  scrollUp.classList.remove("show");

  gliese.classList.add("show");
  gliese.classList.remove("hide");
}

function showTrasppist() {
  header.classList.add("hide");
  header.classList.remove("show");

  exitBtn.classList.add("show");
  exitBtn.classList.remove("hide");

  scrollUp.classList.add("hide");
  scrollUp.classList.remove("show");

  trappist.classList.add("show");
  trappist.classList.remove("hide");
}

function hide() {
  exitBtn.classList.add("hide");
  exitBtn.classList.remove("show");

  header.classList.add("show");
  header.classList.remove("hide");

  scrollUp.classList.add("show");
  scrollUp.classList.remove("hide");

  wasp.classList.add("hide");
  wasp.classList.remove("show");

  proxima.classList.add("hide");
  proxima.classList.remove("show");

  gliese.classList.add("hide");
  gliese.classList.remove("show");

  trappist.classList.add("hide");
  trappist.classList.remove("show");

  burgerMenu.classList.remove("hide");

  navBar.classList.remove("show-nav__bar");
}
